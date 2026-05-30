'use client';

import { AppShell } from '@/components/AppShell';
import { Card } from '@/components/Section';
import { useMockProfile } from '@/components/MockProfileProvider';

export default function SettingsPage() {
  const { profile } = useMockProfile();

  return <AppShell title="Settings">
    <div className="grid gap-5 lg:grid-cols-2">
      <Card>
        <h2 className="font-serif text-3xl text-ivory">Mock Profile</h2>
        <div className="mt-5 grid gap-3">
          <SettingRow label="Claimed domicile" value={profile.claimedDomicile} />
          <SettingRow label="Secondary state" value={profile.secondaryState} />
          <SettingRow label="Primary residence" value={profile.primaryResidence} />
          <SettingRow label="Secondary residence" value={profile.secondaryResidence} />
        </div>
      </Card>
      <Card>
        <h2 className="font-serif text-3xl text-ivory">Phase 1D Boundaries</h2>
        <div className="mt-5 grid gap-3 text-sm text-graphite">
          {['No backend or database', 'No real authentication', 'No Stripe or payments', 'No real file uploads', 'No advisor permissions', 'No email sending'].map((item) => <div key={item} className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3">{item}</div>)}
        </div>
      </Card>
    </div>
  </AppShell>;
}

function SettingRow({ label, value }: { label: string; value: string }) {
  return <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4"><p className="text-xs uppercase tracking-[0.16em] text-graphite">{label}</p><p className="mt-2 text-sm text-ivory">{value}</p></div>;
}
