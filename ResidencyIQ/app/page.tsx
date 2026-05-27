import Link from "next/link";

const metrics = [
  ["Nevada days", "124"],
  ["California days", "81"],
  ["Evidence", "12 docs"],
  ["Checklist", "7 / 12"],
];

const activity = [
  ["Nevada driver’s license added", "+6"],
  ["Utility bill uploaded", "+4"],
  ["California overnight trend", "−3"],
];

function BrandMark() {
  return (
    <div className="brand">
      <div className="brandBug">R</div>
      <div className="brandWord">
        <span>RESIDENCY</span><b>IQ</b>
      </div>
    </div>
  );
}

function MobilityMap() {
  return (
    <div className="mapPanel" aria-hidden="true">
      <svg viewBox="0 0 900 520" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="cityGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f6d875" stopOpacity=".95" />
            <stop offset="55%" stopColor="#d4af37" stopOpacity=".25" />
            <stop offset="100%" stopColor="#d4af37" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="route" x1="0" x2="1">
            <stop stopColor="#f4d27a" stopOpacity=".05" />
            <stop offset=".5" stopColor="#f4d27a" stopOpacity=".65" />
            <stop offset="1" stopColor="#f4d27a" stopOpacity=".06" />
          </linearGradient>
          <filter id="blur">
            <feGaussianBlur stdDeviation="7" />
          </filter>
        </defs>

        <rect width="900" height="520" fill="#030404" />
        <path d="M-40 230 C130 80 300 90 450 140 C610 195 710 80 940 145 L940 540 L-40 540 Z" fill="#101311" opacity=".72"/>
        <path d="M-60 335 C120 250 275 270 390 328 C540 405 700 310 970 368 L970 540 L-60 540 Z" fill="#0c0f0d" opacity=".94"/>
        <path d="M60 390 C210 280 330 330 470 372 C650 427 715 340 910 410" fill="none" stroke="#171b18" strokeWidth="85" opacity=".8"/>
        <path d="M0 120 H900 M0 220 H900 M0 320 H900 M0 420 H900 M150 0 V520 M330 0 V520 M510 0 V520 M690 0 V520" stroke="#3b3320" strokeOpacity=".17" strokeWidth="1"/>

        <path d="M100 405 C290 255 535 225 785 105" stroke="url(#route)" strokeWidth="3" fill="none"/>
        <path d="M125 160 C275 330 495 425 835 365" stroke="url(#route)" strokeWidth="2" fill="none"/>
        <path d="M250 455 C430 260 575 190 875 175" stroke="url(#route)" strokeWidth="1.7" fill="none"/>

        {[
          [110,392,7],[180,170,3],[260,330,4],[342,285,6],[405,365,3],[505,236,5],
          [585,210,3],[666,315,6],[740,122,10],[808,260,4],[862,176,7],
          [210,420,2],[298,214,2],[450,165,2],[602,395,2],[705,270,3]
        ].map(([x,y,r], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r={r*4} fill="url(#cityGlow)" filter="url(#blur)" opacity=".5"/>
            <circle cx={x} cy={y} r={r} fill="#f4d27a" opacity=".78"/>
          </g>
        ))}
      </svg>
    </div>
  );
}

function Dashboard() {
  return (
    <section className="dashboard">
      <div className="dashHeader">
        <div>
          <p className="eyebrow">PRIVATE RESIDENCY PROFILE</p>
          <h2>ResidencyIQ Score</h2>
        </div>
        <div className="live">Live mock</div>
      </div>

      <div className="scoreRow">
        <div>
          <div className="score">72</div>
          <p className="status">Nevada Continuity Strengthening</p>
        </div>
        <div className="ring"><span>72%</span></div>
      </div>

      <div className="metricGrid">
        {metrics.map(([label, value]) => (
          <div className="metric" key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
          </div>
        ))}
      </div>

      <div className="signalGrid">
        <div className="signal">
          <span>Nevada Corroboration</span>
          <strong>68%</strong>
        </div>
        <div className="signal amber">
          <span>California Exposure</span>
          <strong>Moderate</strong>
        </div>
      </div>

      <div className="activity">
        <p className="eyebrow">RECENT SCORE ACTIVITY</p>
        {activity.map(([label, score]) => (
          <div className="activityLine" key={label}>
            <span>{label}</span>
            <b>{score}</b>
          </div>
        ))}
      </div>

      <div className="miniChart">
        {[38, 42, 45, 51, 55, 59, 62, 66, 68, 72].map((h, i) => (
          <i key={i} style={{ height: `${h}%` }} />
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="page">
      <header className="topbar">
        <BrandMark />
        <nav className="desktopNav">
          <Link href="#how">How It Works</Link>
          <Link href="#pricing">Pricing</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/app/dashboard">Sign In</Link>
          <Link className="navCta" href="/app/dashboard">Start Trial</Link>
        </nav>
        <button className="menu" aria-label="Open navigation"><span/><span/><span/></button>
      </header>

      <section className="hero">
        <MobilityMap />
        <div className="heroCopy">
          <p className="pill">RESIDENCY INTELLIGENCE. REAL CONTINUITY.</p>
          <h1>Know Where Your Life Is Centered.</h1>
          <p className="lede">
            Residency tracking for multi-state living. Organize domicile evidence, monitor
            behavioral continuity, and share advisor-ready residency intelligence.
          </p>
          <div className="ctaRow">
            <Link href="/app/dashboard" className="primary">Start 14-Day Trial</Link>
            <Link href="/app/dashboard" className="secondary">See Your Score</Link>
          </div>
        </div>
        <Dashboard />
      </section>

      <section className="proofStrip">
        {["Dynamic Score", "Evidence Vault", "Advisor Sharing", "Exposure Alerts"].map((x) => (
          <div key={x}>{x}</div>
        ))}
      </section>

      <section className="migration">
        <div>
          <p className="eyebrow">POPULAR MIGRATION GUIDES</p>
          <h2>Planning a move across state lines?</h2>
        </div>
        <div className="migrationLinks">
          {[
            ["California to Nevada", "/moving-from-california-to-nevada"],
            ["California to Texas", "/moving-from-california-to-texas"],
            ["California to Florida", "/moving-from-california-to-florida"],
            ["New York to Florida", "/moving-from-new-york-to-florida"],
          ].map(([label, href]) => (
            <Link href={href} key={label}>{label}<span>View guide →</span></Link>
          ))}
        </div>
      </section>
    </main>
  );
}
