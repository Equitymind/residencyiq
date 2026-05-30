'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ArrowRight, MapPin, Shield } from '@/components/Icons';
import { useMockProfile } from '@/components/MockProfileProvider';

export default function OnboardingPage() {
  const router = useRouter();
  const { profile, updateResidences } = useMockProfile();
  const [claimedDomicile, setClaimedDomicile] = useState(profile.claimedDomicile);
  const [secondaryState, setSecondaryState] = useState(profile.secondaryState);
  const [primaryResidence, setPrimaryResidence] = useState(profile.primaryResidence);
  const [secondaryResidence, setSecondaryResidence] = useState(profile.secondaryResidence);

  function continueToDashboard() {
    updateResidences({ claimedDomicile, secondaryState, primaryResidence, secondaryResidence });
    router.push('/app/dashboard');
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] px-5 py-6 text-ivory sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_12%,rgba(212,175,55,.18),transparent_28rem),linear-gradient(rgba(212,175,55,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,.045)_1px,transparent_1px)] bg-[size:auto,42px_42px,42px_42px]" />
      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-3rem)] max-w-5xl place-items-center">
        <section className="grid w-full gap-6 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <div>
            <Link href="/" className="mb-10 inline-flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-full border border-gold/40 bg-black font-serif text-3xl font-bold text-gold-light">R</div>
              <span className="text-sm font-bold uppercase tracking-[0.32em]">Residency<span className="text-gold">IQ</span></span>
            </Link>
            <p className="eyebrow mb-5">Phase 1D Onboarding</p>
            <h1 className="font-serif text-5xl leading-[0.95] text-ivory sm:text-6xl">Start your private residency profile.</h1>
            <p className="mt-6 max-w-md text-base leading-7 text-graphite">Set the two-state profile used by the dashboard, checklist, evidence vault, and advisor sharing demo. This is frontend mock state only.</p>
            <div className="mt-8 rounded-lg border border-gold/20 bg-gold/5 p-4">
              <div className="flex items-start gap-3">
                <Shield className="mt-1 text-gold" />
                <p className="text-sm leading-6 text-graphite">No account, storage, email, upload, or third-party connection is created in this phase.</p>
              </div>
            </div>
          </div>

          <div className="glass-panel rounded-lg p-5 shadow-glass sm:p-7">
            <div className="mb-6 flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-lg border border-gold/25 bg-gold/10 text-gold"><MapPin /></div>
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-gold-light">Residency Setup</p>
                <h2 className="font-serif text-3xl text-ivory">Two-state assessment</h2>
              </div>
            </div>
            <div className="grid gap-4">
              <Field label="Claimed domicile state" value={claimedDomicile} onChange={setClaimedDomicile} />
              <Field label="Secondary state" value={secondaryState} onChange={setSecondaryState} />
              <Field label="Primary residence address" value={primaryResidence} onChange={setPrimaryResidence} />
              <Field label="Secondary residence address" value={secondaryResidence} onChange={setSecondaryResidence} />
            </div>
            <button onClick={continueToDashboard} className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-gold-gradient px-5 py-3 text-sm font-bold text-black shadow-gold transition hover:-translate-y-0.5">
              Continue to Dashboard <ArrowRight size={18} />
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}

function Field({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.16em] text-graphite">{label}</span>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 min-h-12 w-full rounded-lg border border-gold/20 bg-black/35 px-4 text-sm text-ivory outline-none transition placeholder:text-graphite focus:border-gold-light/60 focus:ring-2 focus:ring-gold/15"
      />
    </label>
  );
}
