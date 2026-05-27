import Link from "next/link";
import type { ReactNode } from "react";

type IconName =
  | "pin"
  | "shield"
  | "file"
  | "calendar"
  | "briefcase"
  | "chart"
  | "lock"
  | "bell"
  | "user"
  | "arrow"
  | "mail";

const heroMetrics = [
  ["Nevada Days", "124", "calendar"],
  ["California Days", "81", "pin"],
  ["Evidence Docs", "12", "file"],
  ["Checklist", "7 / 12", "shield"],
] as const;

const activity = [
  ["Nevada driver's license added", "+6", "gold"],
  ["Utility bill uploaded", "+4", "gold"],
  ["California overnight trend", "-3", "red"],
] as const;

const proofItems = [
  ["Entrepreneurs", "briefcase"],
  ["Investors", "chart"],
  ["Executives", "shield"],
  ["Digital Nomads", "pin"],
  ["Advisors", "user"],
] as const;

const operatingPillars = [
  ["Track Your Behavior", "Monitor where time, overnights, and continuity signals accumulate."],
  ["Organize Your Evidence", "Keep domicile documentation and advisor notes in one operational view."],
  ["See Your Defensibility", "Watch corroboration, exposure, and documentation gaps change over time."],
  ["Share With Confidence", "Prepare a focused residency profile for qualified professional review."],
] as const;

const menuItems = ["Dashboard", "Continuity", "Risk", "Evidence", "Advisors", "Settings"];

function Icon({ name, className = "h-5 w-5" }: { name: IconName; className?: string }) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  const paths: Record<IconName, ReactNode> = {
    pin: (
      <>
        <path d="M20 10c0 5.5-8 11-8 11S4 15.5 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    shield: (
      <>
        <path d="M12 3 20 6v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3Z" />
        <path d="m8.5 12 2.2 2.2 4.8-5" />
      </>
    ),
    file: (
      <>
        <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9Z" />
        <path d="M14 3v6h6M8 13h8M8 17h6" />
      </>
    ),
    calendar: (
      <>
        <rect x="4" y="5" width="16" height="15" rx="2" />
        <path d="M8 3v4M16 3v4M4 10h16" />
      </>
    ),
    briefcase: (
      <>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5h8v2M3 12h18" />
      </>
    ),
    chart: (
      <>
        <path d="M4 19V5M4 19h16" />
        <path d="M8 16v-5M12 16V8M16 16v-9" />
      </>
    ),
    lock: (
      <>
        <rect x="4" y="10" width="16" height="10" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      </>
    ),
    bell: (
      <>
        <path d="M18 8a6 6 0 1 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
        <path d="M10 21h4" />
      </>
    ),
    user: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21a8 8 0 0 1 16 0" />
      </>
    ),
    arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
  };

  return <svg {...common}>{paths[name]}</svg>;
}

function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div className="grid h-11 w-11 place-items-center rounded-full border border-[#D4AF37]/55 bg-[radial-gradient(circle_at_30%_18%,rgba(244,210,122,.35),transparent_30%),linear-gradient(135deg,#161006,#030303_60%,#49340d)] font-serif text-[30px] font-bold leading-none text-[#F4D27A] shadow-[0_0_34px_rgba(212,175,55,.2)]">
        R
      </div>
      {!compact && (
        <div className="text-[13px] font-extrabold tracking-[.34em] text-[#F8F5EF] sm:text-[15px]">
          RESIDENCY<span className="tracking-[.08em] text-[#D4AF37]">IQ</span>
        </div>
      )}
    </div>
  );
}

function IntelligenceMap({ className = "" }: { className?: string }) {
  const nodes = [
    [66, 72, 5], [134, 328, 12], [170, 392, 7], [248, 226, 5], [318, 176, 3],
    [396, 332, 6], [488, 276, 5], [548, 92, 9], [606, 360, 4], [690, 220, 8],
    [744, 318, 5], [816, 168, 10], [894, 276, 4], [966, 122, 6], [1036, 386, 7],
    [1104, 226, 5], [1166, 86, 4],
  ] as const;

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <svg className="h-full w-full" viewBox="0 0 1200 720" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fff4b9" stopOpacity=".98" />
            <stop offset="38%" stopColor="#f4d27a" stopOpacity=".45" />
            <stop offset="100%" stopColor="#d4af37" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="routeGold" x1="0" x2="1" y1="0" y2="0">
            <stop stopColor="#d4af37" stopOpacity="0" />
            <stop offset=".52" stopColor="#f4d27a" stopOpacity=".62" />
            <stop offset="1" stopColor="#d4af37" stopOpacity="0" />
          </linearGradient>
          <filter id="softBlur">
            <feGaussianBlur stdDeviation="5" />
          </filter>
          <pattern id="microGrid" width="34" height="34" patternUnits="userSpaceOnUse">
            <path d="M34 0H0v34" fill="none" stroke="#9c7628" strokeOpacity=".12" strokeWidth="1" />
          </pattern>
        </defs>

        <rect width="1200" height="720" fill="#010202" />
        <rect width="1200" height="720" fill="url(#microGrid)" opacity=".65" />

        <path d="M-20 118 C150 52 262 74 410 118 C538 156 616 42 780 76 C912 104 984 184 1240 140 L1240 720 L-20 720Z" fill="#09100f" opacity=".72" />
        <path d="M52 500 C210 398 336 396 504 462 C682 530 804 424 984 474 C1068 498 1128 536 1240 510 L1240 720 L52 720Z" fill="#080b0b" opacity=".94" />
        <path d="M214 140 C366 126 454 154 590 130 C738 104 844 82 1056 98" stroke="#1f2b2b" strokeWidth="64" strokeOpacity=".2" fill="none" />
        <path d="M120 532 C274 438 406 438 578 488 C746 538 844 452 1052 490" stroke="#172222" strokeWidth="82" strokeOpacity=".3" fill="none" />

        {Array.from({ length: 92 }).map((_, index) => {
          const x = (index * 83) % 1180;
          const y = (index * 137) % 680;
          const opacity = 0.18 + ((index * 17) % 35) / 100;
          return <circle key={index} cx={x + 8} cy={y + 18} r={(index % 3) + 0.8} fill={index % 7 === 0 ? "#82c7ff" : "#d4af37"} opacity={opacity} />;
        })}

        <g fill="none" stroke="url(#routeGold)" strokeLinecap="round">
          <path d="M136 332 C286 154 494 104 816 170" strokeWidth="2.5" />
          <path d="M134 328 C352 292 504 350 744 318" strokeWidth="2" />
          <path d="M170 392 C372 228 600 150 1036 386" strokeWidth="1.7" />
          <path d="M548 92 C650 238 722 292 894 276" strokeWidth="1.5" />
          <path d="M690 220 C812 86 928 66 1166 86" strokeWidth="1.5" />
          <path d="M248 226 C382 476 658 540 1036 386" strokeWidth="1.7" />
          <path d="M396 332 C514 174 604 120 816 168" strokeWidth="1.3" />
          <path d="M606 360 C740 238 874 178 1104 226" strokeWidth="1.4" />
        </g>

        {nodes.map(([x, y, r], index) => (
          <g key={`${x}-${y}-${index}`}>
            <circle cx={x} cy={y} r={r * 5.2} fill="url(#nodeGlow)" filter="url(#softBlur)" opacity=".72" />
            <circle cx={x} cy={y} r={r} fill="#f4d27a" opacity=".9" />
            {r > 7 && <circle cx={x} cy={y} r={r * 2.1} fill="none" stroke="#f4d27a" strokeOpacity=".42" />}
          </g>
        ))}
      </svg>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_28%,transparent_0,rgba(0,0,0,.12)_18%,rgba(0,0,0,.68)_68%),linear-gradient(90deg,rgba(0,0,0,.78),rgba(0,0,0,.16)_45%,rgba(0,0,0,.62))]" />
    </div>
  );
}

function MetricTile({ label, value, icon }: { label: string; value: string; icon: IconName }) {
  return (
    <div className="rounded-[10px] border border-white/10 bg-white/[.045] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,.04)]">
      <div className="mb-2 flex items-center gap-2 text-[#D4AF37]">
        <Icon name={icon} className="h-[18px] w-[18px]" />
        <span className="text-[11px] font-medium text-[#B8B8B8]">{label}</span>
      </div>
      <div className="text-2xl font-bold leading-none text-[#F8F5EF]">{value}</div>
    </div>
  );
}

function ScoreRing({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`relative grid shrink-0 place-items-center rounded-full bg-[conic-gradient(#F4D27A_0_72%,rgba(255,255,255,.12)_72%_100%)] ${compact ? "h-28 w-28" : "h-40 w-40 lg:h-[210px] lg:w-[210px]"}`}>
      <div className={`grid place-items-center rounded-full bg-[#050505] shadow-[inset_0_0_30px_rgba(0,0,0,.85)] ${compact ? "h-[86px] w-[86px]" : "h-[120px] w-[120px] lg:h-[158px] lg:w-[158px]"}`}>
        <div className="text-center">
          <div className={`font-serif font-bold text-[#F4D27A] ${compact ? "text-3xl" : "text-5xl lg:text-7xl"}`}>72</div>
          <div className="text-xs font-semibold text-[#D7D0C0]">/100</div>
        </div>
      </div>
    </div>
  );
}

function PrimaryDashboard({ className = "" }: { className?: string }) {
  return (
    <section className={`rounded-[22px] border border-[#D4AF37]/25 bg-[#050606]/88 p-5 shadow-[0_34px_110px_rgba(0,0,0,.72),inset_0_1px_0_rgba(255,255,255,.05)] backdrop-blur-xl ${className}`}>
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <p className="text-[10px] font-extrabold uppercase tracking-[.22em] text-[#D4AF37]">Private Residency Profile</p>
          <h2 className="mt-2 text-[21px] font-semibold tracking-[-.02em] text-[#F8F5EF]">ResidencyIQ Score</h2>
        </div>
        <div className="rounded-full border border-[#66D17A]/25 bg-[#66D17A]/10 px-3 py-1.5 text-[10px] font-bold text-[#66D17A]">Live Mock</div>
      </div>

      <div className="flex items-center justify-between gap-5">
        <div>
          <div className="font-serif text-[72px] font-bold leading-none text-[#F4D27A] lg:text-[92px]">72</div>
          <p className="-mt-1 text-sm font-medium text-[#D8D4CA]">Nevada continuity strengthening</p>
        </div>
        <ScoreRing compact />
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3">
        {heroMetrics.map(([label, value, icon]) => (
          <MetricTile key={label} label={label} value={value} icon={icon} />
        ))}
      </div>

      <div className="mt-4 space-y-3 rounded-[14px] border border-white/10 bg-white/[.035] p-4">
        <Progress label="Nevada Corroboration" value="68%" width="68%" />
        <Progress label="California Exposure" value="Moderate" width="47%" amber />
        <div className="flex items-center justify-between border-t border-white/10 pt-3 text-sm">
          <span className="text-[#B8B8B8]">Advisor Sharing</span>
          <strong className="text-[#66D17A]">CPA limited</strong>
        </div>
      </div>

      <ActivityFeed compact />
    </section>
  );
}

function Progress({ label, value, width, amber = false }: { label: string; value: string; width: string; amber?: boolean }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-4 text-sm">
        <span className="text-[#D9D5CA]">{label}</span>
        <strong className={amber ? "text-[#E6B94D]" : "text-[#F4D27A]"}>{value}</strong>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/10">
        <div className="h-full rounded-full bg-[linear-gradient(90deg,#D4AF37,#F4D27A)]" style={{ width }} />
      </div>
    </div>
  );
}

function ActivityFeed({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`mt-4 rounded-[14px] border border-white/10 bg-[#0A0B0B]/80 p-4 ${compact ? "" : "h-full"}`}>
      <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[.2em] text-[#D4AF37]">Recent Activity</p>
      <div className="space-y-1">
        {activity.map(([label, delta, tone]) => (
          <div key={label} className="flex items-center justify-between gap-4 border-t border-white/[.07] py-2 text-sm">
            <span className="text-[#D8D4CA]">{label}</span>
            <strong className={tone === "red" ? "text-[#D96B6B]" : "text-[#F4D27A]"}>{delta}</strong>
          </div>
        ))}
      </div>
      <button className="mt-4 flex min-h-11 w-full items-center justify-center gap-2 rounded-[10px] border border-[#D4AF37]/25 bg-black/20 text-sm font-bold text-[#F4D27A]">
        View all activity <Icon name="arrow" className="h-4 w-4" />
      </button>
    </div>
  );
}

function PreviewDashboard() {
  const months = ["Dec", "Jan", "Feb", "Mar", "Apr", "May"];
  const points = "8,88 54,66 105,64 158,50 210,38 262,48 314,46 366,34 418,20";

  return (
    <div className="rounded-[18px] border border-[#D4AF37]/22 bg-[#050606]/90 p-4 shadow-[0_28px_80px_rgba(0,0,0,.58)]">
      <p className="mb-4 text-[11px] font-extrabold uppercase tracking-[.22em] text-[#D4AF37]">Live Dashboard Preview</p>
      <div className="rounded-[16px] border border-[#D4AF37]/22 bg-black/35 p-4">
        <div className="mb-4 flex items-start justify-between">
          <div>
            <p className="text-sm font-semibold text-[#D8D4CA]">ResidencyIQ Score</p>
            <div className="mt-2 flex items-end gap-2">
              <span className="font-serif text-6xl font-bold leading-none text-[#F4D27A]">72</span>
              <span className="pb-2 text-lg font-semibold text-[#D8D4CA]">/100</span>
            </div>
            <p className="mt-1 text-sm font-bold text-[#66D17A]">↑ Strengthening</p>
          </div>
          <div className="rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 p-2 text-[#D4AF37]">
            <Icon name="shield" className="h-4 w-4" />
          </div>
        </div>
        <div className="rounded-[12px] border border-white/10 bg-white/[.035] p-3">
          <svg viewBox="0 0 430 126" className="h-36 w-full overflow-visible">
            <defs>
              <linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1">
                <stop stopColor="#D4AF37" stopOpacity=".34" />
                <stop offset="1" stopColor="#D4AF37" stopOpacity="0" />
              </linearGradient>
            </defs>
            {[28, 56, 84, 112].map((y) => (
              <line key={y} x1="0" x2="430" y1={y} y2={y} stroke="rgba(255,255,255,.08)" />
            ))}
            <path d={`M${points} L418,118 L8,118 Z`} fill="url(#chartFill)" />
            <polyline points={points} fill="none" stroke="#F4D27A" strokeWidth="3" />
            {points.split(" ").map((pair) => {
              const [x, y] = pair.split(",");
              return <circle key={pair} cx={x} cy={y} r="4" fill="#F4D27A" />;
            })}
            {months.map((month, index) => (
              <text key={month} x={index * 78 + 4} y="124" fill="#B8B8B8" fontSize="12">{month}</text>
            ))}
          </svg>
        </div>
        <div className="mt-4 rounded-[12px] border border-white/10 bg-white/[.035] p-4">
          <Progress label="Nevada Corroboration" value="68%" width="68%" />
          <div className="mt-4" />
          <Progress label="California Exposure" value="Moderate" width="56%" amber />
        </div>
      </div>
      <ActivityFeed />
    </div>
  );
}

function OperationalSystem() {
  return (
    <section className="border-y border-[#D4AF37]/12 bg-[#030404] px-5 py-16 sm:px-8 lg:px-16">
      <div className="mx-auto grid max-w-[1240px] gap-8 lg:grid-cols-[.72fr_1.28fr] lg:items-center">
        <div>
          <p className="text-[11px] font-extrabold uppercase tracking-[.22em] text-[#D4AF37]">Your private command center</p>
          <h2 className="mt-4 max-w-sm font-serif text-4xl font-bold leading-[.94] text-[#F8F5EF] sm:text-5xl">
            Real-Time Intelligence. Actionable Insights.
          </h2>
          <div className="mt-8 w-full max-w-[230px] rounded-[14px] border border-[#D4AF37]/18 bg-white/[.035] p-2">
            {menuItems.map((item, index) => (
              <div key={item} className={`flex items-center gap-3 rounded-[10px] px-3 py-3 text-sm ${index === 1 ? "bg-[#D4AF37]/22 text-[#F4D27A]" : "text-[#B8B8B8]"}`}>
                <Icon name={index === 0 ? "shield" : index === 1 ? "pin" : index === 2 ? "chart" : index === 3 ? "file" : index === 4 ? "user" : "lock"} className="h-4 w-4" />
                {item}
              </div>
            ))}
          </div>
          <Link href="/app/dashboard" className="mt-8 inline-flex min-h-12 items-center justify-center rounded-[10px] bg-[linear-gradient(135deg,#F4D27A,#D4AF37,#9C7628)] px-7 text-sm font-extrabold text-black shadow-[0_18px_54px_rgba(212,175,55,.18)]">
            See Your Score
          </Link>
        </div>

        <div className="relative">
          <div className="absolute -left-10 top-24 hidden w-[330px] rounded-[12px] border border-[#D4AF37]/16 bg-[#070808]/95 p-4 shadow-[0_28px_90px_rgba(0,0,0,.72)] lg:block">
            <div className="relative h-44 overflow-hidden rounded-[10px]">
              <IntelligenceMap />
              <div className="relative z-10 p-5">
                <h3 className="font-serif text-3xl font-bold leading-none text-[#F8F5EF]">
                  Know Where<br /><span className="text-[#D4AF37]">Your Life</span><br />Is Centered
                </h3>
                <div className="mt-5 flex gap-2">
                  <span className="rounded-md bg-[#D4AF37] px-3 py-2 text-[10px] font-bold text-black">Start Trial</span>
                  <span className="rounded-md border border-white/15 px-3 py-2 text-[10px] font-bold text-white">Score</span>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-[18px] border border-[#D4AF37]/20 bg-[#080909]/90 p-4 shadow-[0_28px_100px_rgba(0,0,0,.58)] lg:p-5">
            <div className="flex min-h-[520px] rounded-[14px] border border-white/10 bg-[#050606]">
              <aside className="hidden w-[170px] border-r border-white/10 p-4 md:block">
                <BrandMark compact />
                <div className="mt-8 space-y-2">
                  {menuItems.slice(0, 5).map((item, index) => (
                    <div key={item} className={`rounded-lg px-3 py-3 text-xs ${index === 0 ? "bg-white/[.06] text-[#F4D27A]" : "text-[#888]"}`}>{item}</div>
                  ))}
                </div>
              </aside>
              <div className="flex-1 p-4">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-[#F8F5EF]">Overview</h3>
                  <span className="rounded-md border border-white/10 px-3 py-1 text-xs text-[#B8B8B8]">Filters</span>
                </div>
                <div className="grid gap-4 lg:grid-cols-[.82fr_1.18fr]">
                  <div className="rounded-[12px] border border-white/10 bg-white/[.035] p-4">
                    <p className="text-xs text-[#B8B8B8]">Residency data score</p>
                    <div className="mt-5 flex items-center justify-between">
                      <div>
                        <span className="font-serif text-6xl font-bold text-[#F4D27A]">72</span>
                        <span className="text-[#D8D4CA]"> /100</span>
                      </div>
                      <ScoreRing compact />
                    </div>
                  </div>
                  <PreviewChart />
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
                  {heroMetrics.map(([label, value, icon]) => <MetricTile key={label} label={label} value={value} icon={icon} />)}
                </div>
                <div className="mt-4 grid gap-4 lg:grid-cols-2">
                  <ActivityFeed compact />
                  <div className="rounded-[14px] border border-white/10 bg-white/[.035] p-4">
                    <p className="mb-4 text-[11px] font-extrabold uppercase tracking-[.2em] text-[#D4AF37]">Evidence Strength</p>
                    <Progress label="Documents complete" value="90%" width="90%" />
                    <div className="mt-4" />
                    <Progress label="Manual review status" value="60%" width="60%" amber />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PreviewChart() {
  return (
    <div className="rounded-[12px] border border-white/10 bg-white/[.035] p-4">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-xs text-[#B8B8B8]">Continuity trend</p>
        <span className="text-[10px] text-[#777]">6 months</span>
      </div>
      <svg viewBox="0 0 360 160" className="h-[150px] w-full">
        {[32, 64, 96, 128].map((y) => <line key={y} x1="0" x2="360" y1={y} y2={y} stroke="rgba(255,255,255,.07)" />)}
        <path d="M0 118 C52 102 72 84 122 92 C170 101 188 70 230 72 C280 76 288 36 360 42" fill="none" stroke="#F4D27A" strokeWidth="3" />
        <path d="M0 132 C80 80 142 110 214 84 C272 64 308 44 360 52" fill="none" stroke="#9C7628" strokeWidth="1.5" opacity=".7" />
      </svg>
    </div>
  );
}

function TestimonialSection() {
  const cards = [
    ["The dashboard made the weak spots obvious before my advisor review.", "Founder relocating to Nevada"],
    ["It changed the conversation from memory to organized evidence.", "Private investor"],
    ["ResidencyIQ gave our team a cleaner way to prepare the facts.", "Executive household"],
  ];

  return (
    <section className="relative overflow-hidden bg-[#040505] px-5 py-16 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-[1120px]">
        <p className="text-center text-[11px] font-extrabold uppercase tracking-[.22em] text-[#D4AF37]">Built for families with motion</p>
        <h2 className="mt-3 text-center font-serif text-4xl font-bold leading-none text-[#F8F5EF] sm:text-5xl">Real People. Real Results.</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {cards.map(([quote, person]) => (
            <article key={person} className="rounded-[12px] border border-white/10 bg-white/[.035] p-6 shadow-[0_20px_80px_rgba(0,0,0,.35)]">
              <div className="mb-5 text-[#D4AF37]">★★★★★</div>
              <p className="text-sm leading-7 text-[#D8D4CA]">“{quote}”</p>
              <p className="mt-5 text-xs font-semibold text-[#B8B8B8]">— {person}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FooterCta() {
  return (
    <section className="relative overflow-hidden border-y border-[#D4AF37]/12 bg-[#030303] px-5 py-16 sm:px-8 lg:px-16">
      <div className="absolute inset-0 opacity-75">
        <IntelligenceMap />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(0deg,#020202,transparent)]" />
      <div className="relative z-10 mx-auto max-w-[980px] text-center">
        <p className="text-[11px] font-extrabold uppercase tracking-[.22em] text-[#D4AF37]">Start at the source</p>
        <h2 className="mt-4 font-serif text-4xl font-bold leading-none text-[#F8F5EF] sm:text-5xl">Start Strengthening Your Residency Today.</h2>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/app/dashboard" className="inline-flex min-h-12 items-center justify-center rounded-[10px] bg-[linear-gradient(135deg,#F4D27A,#D4AF37,#9C7628)] px-8 text-sm font-extrabold text-black shadow-[0_18px_54px_rgba(212,175,55,.22)]">Start 14-Day Trial</Link>
          <Link href="/app/dashboard" className="inline-flex min-h-12 items-center justify-center rounded-[10px] border border-[#D4AF37]/28 bg-black/45 px-8 text-sm font-extrabold text-[#F8F5EF]">See Your Score</Link>
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  const cols = [
    ["Product", "Score", "Evidence", "Continuity", "Privacy"],
    ["Company", "About", "Advisors", "Resources", "Blog"],
    ["Residency", "California", "Nevada", "Texas", "Florida"],
  ];

  return (
    <footer className="bg-[#030303] px-5 py-12 sm:px-8 lg:px-16">
      <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[1.2fr_2fr_1.1fr]">
        <div>
          <BrandMark />
          <p className="mt-5 max-w-xs text-sm leading-6 text-[#8E8E8E]">Private residency intelligence for evidence organization, continuity tracking, and advisor-ready review.</p>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {cols.map(([title, ...items]) => (
            <div key={title}>
              <h3 className="mb-4 text-[11px] font-extrabold uppercase tracking-[.22em] text-[#D4AF37]">{title}</h3>
              <div className="space-y-3 text-sm text-[#A7A7A7]">
                {items.map((item) => <div key={item}>{item}</div>)}
              </div>
            </div>
          ))}
        </div>
        <div>
          <h3 className="mb-4 text-[11px] font-extrabold uppercase tracking-[.22em] text-[#D4AF37]">Newsletter</h3>
          <p className="mb-4 text-sm leading-6 text-[#A7A7A7]">Residency insights delivered to your inbox.</p>
          <div className="flex overflow-hidden rounded-[10px] border border-[#D4AF37]/18 bg-white/[.035]">
            <input className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-[#F8F5EF] outline-none placeholder:text-[#777]" placeholder="Enter your email" aria-label="Email address" />
            <button className="grid w-14 place-items-center bg-[#D4AF37] text-black" aria-label="Submit newsletter">
              <Icon name="arrow" className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-[1180px] border-t border-white/10 pt-6 text-center text-xs text-[#777]">© 2026 ResidencyIQ. All rights reserved.</p>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#020202] text-[#F8F5EF]">
      <header className="absolute left-0 right-0 top-0 z-30 flex h-[76px] items-center justify-between px-6 sm:px-8 lg:h-[82px] lg:px-12">
        <BrandMark />
        <nav className="hidden items-center gap-9 text-sm font-medium text-[#C7C2B7] lg:flex">
          <Link href="#how">How It Works</Link>
          <Link href="#pricing">Pricing</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/app/dashboard">Sign In</Link>
          <Link href="/app/dashboard" className="rounded-[9px] bg-[linear-gradient(135deg,#F4D27A,#D4AF37,#9C7628)] px-5 py-3 font-extrabold text-black shadow-[0_12px_40px_rgba(212,175,55,.2)]">Start 14-Day Trial</Link>
        </nav>
        <button className="grid h-11 w-11 place-items-center text-[#D8D4CA] lg:hidden" aria-label="Open navigation">
          <span className="grid gap-1.5">
            <i className="block h-0.5 w-7 bg-current" />
            <i className="block h-0.5 w-7 bg-current" />
            <i className="block h-0.5 w-7 bg-current" />
          </span>
        </button>
      </header>

      <section className="relative min-h-[980px] overflow-hidden border-b border-[#D4AF37]/12 px-6 pb-10 pt-[120px] sm:px-8 md:min-h-[1040px] lg:min-h-[760px] lg:px-16 lg:pb-16 lg:pt-[132px]">
        <IntelligenceMap className="opacity-95" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.18),rgba(0,0,0,.42)_62%,#020202_100%)]" />

        <div className="relative z-10 mx-auto grid max-w-[1240px] gap-8 lg:grid-cols-[.92fr_.78fr] lg:items-center">
          <div className="max-w-[620px]">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/35 bg-black/35 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[.16em] text-[#F4D27A] backdrop-blur-md">
              <Icon name="pin" className="h-4 w-4" />
              Private Residency Intelligence
            </div>
            <h1 className="mt-6 max-w-[560px] font-serif text-[54px] font-bold leading-[.88] tracking-[-.015em] text-[#F8F5EF] drop-shadow-[0_12px_35px_rgba(0,0,0,.7)] sm:text-[74px] lg:text-[78px] xl:text-[86px]">
              Know Where Your Life <span className="text-[#D4AF37]">Is Centered.</span>
            </h1>
            <p className="mt-5 max-w-[470px] text-[18px] font-medium leading-8 text-[#D6D2C8]">
              Track behavioral continuity across state lines. Organize evidence. Strengthen your case. Stay ahead and confident.
            </p>
            <div className="mt-7 flex max-w-[320px] flex-col gap-3 sm:max-w-none sm:flex-row">
              <Link href="/app/dashboard" className="inline-flex min-h-[54px] items-center justify-center gap-3 rounded-[10px] bg-[linear-gradient(135deg,#F4D27A,#D4AF37,#9C7628)] px-7 text-[15px] font-extrabold text-black shadow-[0_18px_50px_rgba(212,175,55,.24)]">
                Start 14-Day Trial <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <Link href="/app/dashboard" className="inline-flex min-h-[54px] items-center justify-center rounded-[10px] border border-[#D4AF37]/22 bg-black/42 px-7 text-[15px] font-extrabold text-[#F8F5EF] backdrop-blur">
                See Your Score
              </Link>
            </div>
            <div className="mt-6 flex items-center gap-2 text-sm text-[#C7C2B7]">
              <span className="grid h-6 w-6 place-items-center rounded-full border border-[#D4AF37]/30 text-[#D4AF37]">
                <Icon name="shield" className="h-3.5 w-3.5" />
              </span>
              Bank-level evidence privacy controls
            </div>

            <div className="mt-10 hidden grid-cols-3 gap-8 text-xs text-[#A9A59C] md:grid">
              {["Protect a Score", "Built for multi-state living", "Daily advisory-ready signals"].map((item, index) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="grid h-8 w-8 place-items-center rounded-full border border-[#D4AF37]/20 text-[#D4AF37]">
                    <Icon name={index === 0 ? "shield" : index === 1 ? "briefcase" : "chart"} className="h-4 w-4" />
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <PrimaryDashboard className="mx-auto w-full max-w-[430px] lg:mr-0" />
        </div>
      </section>

      <section className="-mt-[470px] grid gap-4 px-1 pb-10 sm:px-4 md:-mt-[450px] md:grid-cols-3 lg:hidden">
        <PrimaryDashboard className="relative z-20 min-h-[690px]" />
        <PreviewDashboard />
        <MobileFooterPanel />
      </section>

      <section className="hidden border-y border-[#D4AF37]/10 bg-[#030303] px-5 py-8 lg:block">
        <div className="mx-auto grid max-w-[1000px] grid-cols-5 gap-8">
          {proofItems.map(([item, icon]) => (
            <div key={item} className="flex items-center justify-center gap-2 text-xs font-semibold text-[#AFA99C]">
              <Icon name={icon} className="h-4 w-4 text-[#D4AF37]" />
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="how" className="hidden bg-[#050606] px-5 py-16 lg:block lg:px-16">
        <div className="mx-auto max-w-[1100px]">
          <h2 className="mx-auto max-w-xl text-center font-serif text-5xl font-bold leading-[.94] text-[#F8F5EF]">Evidence. Behavior. Continuity. All in One Place.</h2>
          <div className="mt-12 grid grid-cols-4 gap-8">
            {operatingPillars.map(([title, copy], index) => (
              <article key={title}>
                <div className="mb-5 grid h-10 w-10 place-items-center rounded-[9px] border border-[#D4AF37]/28 text-[#D4AF37]">
                  <Icon name={index === 0 ? "chart" : index === 1 ? "file" : index === 2 ? "shield" : "pin"} className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-bold text-[#F8F5EF]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#AAA59A]">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="hidden lg:block">
        <OperationalSystem />
        <TestimonialSection />
        <FooterCta />
      </div>

      <SiteFooter />
    </main>
  );
}

function MobileFooterPanel() {
  return (
    <aside className="rounded-[22px] border border-[#D4AF37]/22 bg-[#050606]/95 p-7 shadow-[0_34px_110px_rgba(0,0,0,.72)]">
      <h2 className="font-serif text-4xl font-bold leading-[.95] text-[#F8F5EF]">Start of Strengthening Your Residency Today.</h2>
      <div className="relative mt-8 h-48 overflow-hidden rounded-[16px] border border-white/10">
        <IntelligenceMap />
      </div>
      <div className="mt-6 rounded-[14px] border border-white/10 bg-white/[.04] p-4">
        <div className="flex items-center gap-3 text-[#D4AF37]">
          <Icon name="lock" className="h-6 w-6" />
          <span className="text-[12px] font-extrabold uppercase tracking-[.18em]">Start in seconds</span>
        </div>
        <p className="mt-3 text-sm leading-6 text-[#B8B8B8]">Your data is private, scoped, and never shared without control.</p>
      </div>
      <div className="mt-7">
        <BrandMark />
        {["Product", "Company", "Resources", "Legal"].map((item) => (
          <div key={item} className="mt-5 flex items-center justify-between border-b border-white/10 pb-4 text-sm font-extrabold uppercase tracking-[.12em] text-[#D8D4CA]">
            {item}
            <span className="text-[#B8B8B8]">›</span>
          </div>
        ))}
        <p className="mt-8 text-sm font-bold text-[#F8F5EF]">Stay Informed</p>
        <p className="mt-2 text-sm leading-6 text-[#B8B8B8]">Residency insights delivered to your inbox.</p>
        <div className="mt-5 flex overflow-hidden rounded-[10px] border border-[#D4AF37]/18 bg-white/[.035]">
          <input className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-[#F8F5EF] outline-none placeholder:text-[#777]" placeholder="Enter your email" aria-label="Email address" />
          <button className="grid w-14 place-items-center bg-[#D4AF37] text-black" aria-label="Submit newsletter">
            <Icon name="arrow" className="h-5 w-5" />
          </button>
        </div>
      </div>
    </aside>
  );
}
