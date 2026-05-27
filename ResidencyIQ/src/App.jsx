const { useMemo, useState } = React;
const { createRoot } = ReactDOM;

function IconBase({ children, size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}

const Banknote = (props) => <IconBase {...props}><rect x="3" y="6" width="18" height="12" rx="2" /><circle cx="12" cy="12" r="2.5" /><path d="M6 9h1.5M16.5 15H18" /></IconBase>;
const BriefcaseBusiness = (props) => <IconBase {...props}><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5h8v2M3 12h18M10 12v2h4v-2" /></IconBase>;
const CalendarDays = (props) => <IconBase {...props}><rect x="4" y="5" width="16" height="15" rx="2" /><path d="M8 3v4M16 3v4M4 10h16M8 14h.01M12 14h.01M16 14h.01" /></IconBase>;
const Car = (props) => <IconBase {...props}><path d="M5 13l2-5h10l2 5" /><rect x="3" y="12" width="18" height="6" rx="2" /><path d="M7 18v2M17 18v2M7 15h.01M17 15h.01" /></IconBase>;
const Check = (props) => <IconBase {...props}><path d="M20 6L9 17l-5-5" /></IconBase>;
const ChevronRight = (props) => <IconBase {...props}><path d="M9 18l6-6-6-6" /></IconBase>;
const CircleGauge = (props) => <IconBase {...props}><path d="M19 16a8 8 0 1 0-14 0" /><path d="M12 13l4-5" /><path d="M12 13h.01" /></IconBase>;
const FileCheck2 = (props) => <IconBase {...props}><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" /><path d="M14 3v6h6M9 15l2 2 4-5" /></IconBase>;
const FileText = (props) => <IconBase {...props}><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" /><path d="M14 3v6h6M8 13h8M8 17h6" /></IconBase>;
const Globe2 = (props) => <IconBase {...props}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></IconBase>;
const Home = (props) => <IconBase {...props}><path d="M3 11l9-8 9 8" /><path d="M5 10v10h14V10M9 20v-6h6v6" /></IconBase>;
const LayoutDashboard = (props) => <IconBase {...props}><rect x="3" y="3" width="7" height="8" rx="1" /><rect x="14" y="3" width="7" height="5" rx="1" /><rect x="14" y="12" width="7" height="9" rx="1" /><rect x="3" y="15" width="7" height="6" rx="1" /></IconBase>;
const Lock = (props) => <IconBase {...props}><rect x="4" y="10" width="16" height="10" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></IconBase>;
const MapPin = (props) => <IconBase {...props}><path d="M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 1 1 16 0z" /><circle cx="12" cy="10" r="2.5" /></IconBase>;
const Menu = (props) => <IconBase {...props}><path d="M4 7h16M4 12h16M4 17h16" /></IconBase>;
const Plane = (props) => <IconBase {...props}><path d="M22 2L11 13" /><path d="M22 2l-7 20-4-9-9-4 20-7z" /></IconBase>;
const Plus = (props) => <IconBase {...props}><path d="M12 5v14M5 12h14" /></IconBase>;
const Settings = (props) => <IconBase {...props}><circle cx="12" cy="12" r="3" /><path d="M19 12a7 7 0 0 0-.1-1.2l2-1.5-2-3.4-2.4 1a7 7 0 0 0-2-1.1L14 3h-4l-.5 2.8a7 7 0 0 0-2 1.1l-2.4-1-2 3.4 2 1.5A7 7 0 0 0 5 12c0 .4 0 .8.1 1.2l-2 1.5 2 3.4 2.4-1a7 7 0 0 0 2 1.1L10 21h4l.5-2.8a7 7 0 0 0 2-1.1l2.4 1 2-3.4-2-1.5c.1-.4.1-.8.1-1.2z" /></IconBase>;
const ShieldCheck = (props) => <IconBase {...props}><path d="M12 3l8 3v6c0 5-3.4 8-8 9-4.6-1-8-4-8-9V6l8-3z" /><path d="M8.5 12l2.2 2.2 4.8-5" /></IconBase>;
const Upload = (props) => <IconBase {...props}><path d="M12 16V4M7 9l5-5 5 5M5 20h14" /></IconBase>;
const User = (props) => <IconBase {...props}><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></IconBase>;
const WalletCards = (props) => <IconBase {...props}><rect x="3" y="6" width="18" height="13" rx="2" /><path d="M3 10h18M7 15h4" /></IconBase>;
const X = (props) => <IconBase {...props}><path d="M18 6L6 18M6 6l12 12" /></IconBase>;

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "checklist", label: "Checklist", icon: FileCheck2 },
  { id: "evidence", label: "Evidence", icon: Upload },
  { id: "upgrade", label: "Upgrade", icon: Lock },
  { id: "settings", label: "Settings", icon: Settings },
];

const checklistGroups = [
  {
    title: "Identity & Legal",
    icon: ShieldCheck,
    items: [
      "Driver's license updated to claimed domicile state",
      "Voter registration updated",
      "Vehicle registration reviewed",
      "State tax filing position reviewed with advisor",
      "Mail forwarding or mailing address updated",
    ],
  },
  {
    title: "Home & Utilities",
    icon: Home,
    items: [
      "Primary residence lease or deed",
      "Utility bill at claimed domicile",
      "Internet or cable bill",
      "Home insurance / renters insurance",
      "Property tax or HOA documentation",
    ],
  },
  {
    title: "Financial",
    icon: WalletCards,
    items: [
      "Bank account address updated",
      "Credit card billing address updated",
      "Investment account address updated",
      "Insurance policies updated",
      "Recurring bills tied to claimed domicile",
    ],
  },
  {
    title: "Lifestyle / Center of Life",
    icon: User,
    items: [
      "Primary doctors / dentists reviewed",
      "Gym / club memberships reviewed",
      "Dining and spending patterns considered",
      "Business meeting locations considered",
      "Family / social ties considered",
      "Holidays and major events location considered",
    ],
  },
  {
    title: "Travel & Mobility",
    icon: Plane,
    items: [
      "Airport usage patterns",
      "Vehicle garaging location",
      "Toll road usage",
      "Flight / hotel records",
      "Calendar meeting locations",
    ],
  },
  {
    title: "Business / Work",
    icon: BriefcaseBusiness,
    items: [
      "Office location",
      "Board meetings / advisory meetings",
      "Client meetings",
      "Business entity addresses",
      "Payroll / HR address",
    ],
  },
];

const evidenceCategories = [
  "Driver's license",
  "Utility bill",
  "Lease/deed",
  "Insurance document",
  "Bank/credit card statement",
  "Vehicle registration",
  "Travel receipt",
  "Other",
];

const lockedFeatures = [
  { title: "Connect bank accounts", tier: "Connected", icon: Banknote },
  { title: "Analyze credit card geography", tier: "Connected", icon: WalletCards },
  { title: "Add vehicle telematics", tier: "Connected", icon: Car },
  { title: "Sync Google Calendar", tier: "Connected", icon: CalendarDays },
  { title: "Sync Microsoft Calendar", tier: "Connected", icon: CalendarDays },
  { title: "Generate AI audit narrative", tier: "Connected", icon: FileText },
  { title: "Export CPA package", tier: "Connected", icon: BriefcaseBusiness },
  { title: "Add third state", tier: "Connected", icon: MapPin },
  { title: "Enable international tracking", tier: "Global", icon: Globe2 },
];

const pricingPlans = [
  {
    name: "Assessment",
    price: "$0",
    cta: "Current Plan",
    featured: false,
    includes: [
      "Initial residency assessment",
      "2-state setup",
      "Manual checklist",
      "Basic day tracking",
      "Manual evidence uploads",
      "Limited dashboard",
      "Basic risk indicators",
    ],
  },
  {
    name: "Essential",
    price: "$29/month or $249/year",
    cta: "Coming in Phase 2",
    featured: true,
    includes: [
      "Full 2-state tracking",
      "Automated GPS timeline",
      "Overnight detection",
      "Annual defensibility report",
      "State threshold alerts",
      "Expanded evidence vault",
      "Basic contradiction alerts",
      "PDF export",
    ],
  },
  {
    name: "Connected",
    price: "$99/month or $899/year",
    cta: "Coming Soon",
    featured: false,
    includes: [
      "Up to 5 states",
      "Banking and credit card geography",
      "Calendar integration",
      "Vehicle telematics",
      "AI residency narrative",
      "Center of Life scoring",
      "CPA / attorney export package",
    ],
  },
  {
    name: "Global",
    price: "$299/month or $2,999/year",
    cta: "Coming Soon",
    featured: false,
    includes: [
      "International tracking",
      "Schengen calculator",
      "UK Statutory Residence Test preview",
      "Global travel timeline",
      "Family office dashboard",
      "Advisor collaboration",
      "Priority support",
    ],
  },
];

const initialProfile = {
  name: "",
  email: "",
  primaryState: "Nevada",
  primaryAddress: "",
  secondaryState: "California",
  secondaryAddress: "",
  domicileDate: "",
  residenceType: "",
  goal: "I'm moving from California to Nevada",
  locationEnabled: false,
};

function App() {
  const [screen, setScreen] = useState("landing");
  const [onboardingStep, setOnboardingStep] = useState(0);
  const [profile, setProfile] = useState(initialProfile);
  const [checklist, setChecklist] = useState(() =>
    Object.fromEntries(checklistGroups.flatMap((group) => group.items).map((item) => [item, { status: "Not Started", note: "" }]))
  );
  const [timelineEntries, setTimelineEntries] = useState([
    { date: "2026-05-04", state: "Nevada", overnight: "Yes", notes: "Primary residence setup appointment" },
    { date: "2026-05-10", state: "California", overnight: "No", notes: "Business meeting" },
  ]);
  const [evidence, setEvidence] = useState([
    { name: "Nevada lease summary.pdf", category: "Lease/deed", state: "Nevada", date: "2026-05-12", notes: "Primary residence documentation" },
  ]);
  const [modalFeature, setModalFeature] = useState(null);

  const score = useMemo(() => {
    const completed = Object.values(checklist).filter((item) => item.status === "Completed").length;
    const total =
      30 +
      (profile.primaryAddress ? 10 : 0) +
      (profile.secondaryAddress ? 10 : 0) +
      (profile.locationEnabled ? 15 : 0) +
      completed * 5;
    return Math.min(total, 100);
  }, [checklist, profile]);

  const appStarted = screen !== "landing" && screen !== "onboarding";

  return (
    <div className="app">
      <Header setScreen={setScreen} appStarted={appStarted} />
      {screen === "landing" && <LandingPage setScreen={setScreen} />}
      {screen === "onboarding" && (
        <Onboarding
          step={onboardingStep}
          setStep={setOnboardingStep}
          profile={profile}
          setProfile={setProfile}
          setScreen={setScreen}
        />
      )}
      {appStarted && (
        <main className="app-shell">
          {screen === "dashboard" && (
            <Dashboard
              profile={profile}
              score={score}
              checklist={checklist}
              timelineEntries={timelineEntries}
              setTimelineEntries={setTimelineEntries}
              evidence={evidence}
              setModalFeature={setModalFeature}
            />
          )}
          {screen === "checklist" && <Checklist checklist={checklist} setChecklist={setChecklist} />}
          {screen === "evidence" && <EvidenceVault evidence={evidence} setEvidence={setEvidence} />}
          {screen === "upgrade" && <UpgradePreview />}
          {screen === "settings" && <SettingsPage profile={profile} setProfile={setProfile} />}
          {screen === "privacy" && <PrivacyPage />}
        </main>
      )}
      {appStarted && <BottomNav active={screen} setScreen={setScreen} />}
      {modalFeature && <LockedModal feature={modalFeature} onClose={() => setModalFeature(null)} />}
    </div>
  );
}

function Header({ setScreen, appStarted }) {
  return (
    <header className="topbar">
      <button className="brand" onClick={() => setScreen(appStarted ? "dashboard" : "landing")} aria-label="ResidencyIQ home">
        <img src="./assets/residencyiq-logo.png" alt="ResidencyIQ logo" />
      </button>
      <button className="icon-button" aria-label="Open menu" onClick={() => setScreen(appStarted ? "privacy" : "landing")}>
        <Menu size={25} />
      </button>
    </header>
  );
}

function LandingPage({ setScreen }) {
  const trust = [
    { label: "Location Tracking", icon: MapPin },
    { label: "Domicile Checklist", icon: FileCheck2 },
    { label: "Evidence Review", icon: ShieldCheck },
    { label: "Private & Secure", icon: Lock },
  ];
  const audiences = ["Entrepreneurs", "Investors", "Executives", "Digital Nomads", "Athletes"];

  return (
    <main className="landing">
      <section className="hero">
        <div className="orbital" aria-hidden="true" />
        <div className="badge">Residency Intelligence. Real Confidence.</div>
        <h1>Know Where Your Life Is Centered.</h1>
        <p>
          ResidencyIQ helps you begin building an organized, audit-ready residency profile with location history,
          domicile checklists, and defensibility indicators.
        </p>
        <button className="primary-cta" onClick={() => setScreen("onboarding")}>
          Start Free Assessment <ChevronRight size={20} />
        </button>
        <span className="microcopy">
          <Check size={15} /> No credit card required
        </span>
      </section>

      <section className="trust-grid">
        {trust.map(({ label, icon: Icon }) => (
          <div className="trust-item" key={label}>
            <Icon size={28} />
            <span>{label}</span>
          </div>
        ))}
      </section>

      <DashboardPreview />

      <section className="audience">
        <p>Designed for high-mobility profiles</p>
        <div>
          {audiences.map((audience) => (
            <span key={audience}>{audience}</span>
          ))}
        </div>
      </section>

      <footer className="footer-tagline">Your life. Your domicile. Your intelligence.</footer>
    </main>
  );
}

function DashboardPreview() {
  const evidence = [
    ["Location Tracking", "Active"],
    ["Documents", "Partial"],
    ["Financial Activity", "Locked"],
    ["Vehicle Data", "Locked"],
    ["Calendar", "Locked"],
  ];

  return (
    <section className="glass-card preview-card">
      <div className="section-heading">
        <span>Residency Assessment Score</span>
        <strong>72 / 100</strong>
      </div>
      <div className="status-pill">Initial Profile Started</div>
      <div className="metric-row">
        <Metric label="Nevada Days" value="14" />
        <Metric label="California Days" value="8" />
        <Metric label="Evidence Strength" value="Limited" />
      </div>
      <div className="evidence-list">
        {evidence.map(([label, value]) => (
          <div key={label}>
            <span>{label}</span>
            <strong className={value === "Locked" ? "muted" : ""}>{value}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}

function Onboarding({ step, setStep, profile, setProfile, setScreen }) {
  const goals = [
    "I'm moving from California to Nevada",
    "I split time between two states",
    "I'm preparing for a residency review",
    "I travel frequently",
    "I'm exploring international residency later",
  ];

  const finish = (locationEnabled) => {
    setProfile({ ...profile, locationEnabled });
    setScreen("dashboard");
  };

  return (
    <main className="onboarding">
      <div className="progress-dots">
        {[0, 1, 2, 3].map((dot) => (
          <span className={dot <= step ? "active" : ""} key={dot} />
        ))}
      </div>
      <section className="glass-card flow-card">
        {step === 0 && (
          <>
            <Kicker>Step 1</Kicker>
            <h2>Account</h2>
            <TextInput label="Full name" value={profile.name} onChange={(name) => setProfile({ ...profile, name })} />
            <TextInput label="Email" type="email" value={profile.email} onChange={(email) => setProfile({ ...profile, email })} />
            <TextInput label="Password" type="password" />
            <TextInput label="Confirm password" type="password" />
          </>
        )}
        {step === 1 && (
          <>
            <Kicker>Step 2</Kicker>
            <h2>What are you trying to assess?</h2>
            <div className="option-list">
              {goals.map((goal) => (
                <button className={profile.goal === goal ? "selected" : ""} key={goal} onClick={() => setProfile({ ...profile, goal })}>
                  {goal}
                </button>
              ))}
            </div>
          </>
        )}
        {step === 2 && (
          <>
            <Kicker>Step 3</Kicker>
            <h2>Residences</h2>
            <TextInput label="Primary claimed domicile state" value={profile.primaryState} onChange={(primaryState) => setProfile({ ...profile, primaryState })} />
            <TextInput label="Primary residence address" value={profile.primaryAddress} onChange={(primaryAddress) => setProfile({ ...profile, primaryAddress })} />
            <TextInput label="Secondary state" value={profile.secondaryState} onChange={(secondaryState) => setProfile({ ...profile, secondaryState })} />
            <TextInput label="Secondary residence address" value={profile.secondaryAddress} onChange={(secondaryAddress) => setProfile({ ...profile, secondaryAddress })} />
            <TextInput label="Date you began claiming primary domicile" type="date" value={profile.domicileDate} onChange={(domicileDate) => setProfile({ ...profile, domicileDate })} />
            <TextInput label="Own or rent each residence? (optional)" value={profile.residenceType} onChange={(residenceType) => setProfile({ ...profile, residenceType })} />
          </>
        )}
        {step === 3 && (
          <>
            <Kicker>Step 4</Kicker>
            <h2>Tracking Consent</h2>
            <p className="panel-copy">
              ResidencyIQ uses location signals to help organize your residency timeline. You control what is stored and
              shared.
            </p>
            <button className="primary-cta wide" onClick={() => finish(true)}>
              Enable Location Tracking
            </button>
            <button className="secondary-cta wide" onClick={() => finish(false)}>
              Skip for Now
            </button>
          </>
        )}
        {step < 3 && (
          <div className="flow-actions">
            <button className="secondary-cta" disabled={step === 0} onClick={() => setStep(Math.max(step - 1, 0))}>
              Back
            </button>
            <button className="primary-cta" onClick={() => setStep(step + 1)}>
              Continue
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

function Dashboard({ profile, score, checklist, timelineEntries, setTimelineEntries, evidence, setModalFeature }) {
  const [entry, setEntry] = useState({ date: "", state: profile.primaryState, overnight: "Yes", notes: "" });
  const completed = Object.values(checklist).filter((item) => item.status === "Completed").length;
  const risks = [
    { label: "Missing driver's license evidence", state: evidence.some((item) => item.category === "Driver's license") ? "Evidence added" : "Potential documentation gap" },
    { label: "Missing utility evidence", state: evidence.some((item) => item.category === "Utility bill") ? "Evidence added" : "Evidence not yet added" },
    { label: "No location tracking yet", state: profile.locationEnabled ? "Location tracking active" : "Potential documentation gap" },
    { label: "No recent residency timeline entries", state: timelineEntries.length ? "Manual entries present" : "Evidence not yet added" },
    { label: "Financial geography unavailable on Assessment tier", state: "Upgrade required for automated analysis" },
    { label: "Vehicle telematics unavailable on Assessment tier", state: "Upgrade required for automated analysis" },
    { label: "Calendar analysis unavailable on Assessment tier", state: "Upgrade required for automated analysis" },
  ];

  const addEntry = () => {
    if (!entry.date || !entry.state) return;
    setTimelineEntries([{ ...entry }, ...timelineEntries]);
    setEntry({ date: "", state: profile.primaryState, overnight: "Yes", notes: "" });
  };

  return (
    <>
      <ScoreCard profile={profile} score={score} completed={completed} />
      <section className="dashboard-grid">
        <DashboardCard title="Residency Timeline" icon={MapPin}>
          <div className="metric-row">
            <Metric label={`${profile.primaryState} Days`} value="14" />
            <Metric label={`${profile.secondaryState} Days`} value="8" />
            <Metric label="Overnights Logged" value={timelineEntries.filter((item) => item.overnight === "Yes").length} />
          </div>
          <div className="mini-form">
            <TextInput label="Date" type="date" value={entry.date} onChange={(date) => setEntry({ ...entry, date })} />
            <TextInput label="State" value={entry.state} onChange={(state) => setEntry({ ...entry, state })} />
            <label>
              Overnight stay?
              <select value={entry.overnight} onChange={(event) => setEntry({ ...entry, overnight: event.target.value })}>
                <option>Yes</option>
                <option>No</option>
              </select>
            </label>
            <TextInput label="Notes" value={entry.notes} onChange={(notes) => setEntry({ ...entry, notes })} />
            <button className="secondary-cta wide" onClick={addEntry}>
              <Plus size={18} /> Add Timeline Entry
            </button>
          </div>
          <RecentEntries entries={timelineEntries} />
        </DashboardCard>

        <DashboardCard title="Basic Risk Indicators" icon={CircleGauge}>
          <div className="risk-list">
            {risks.map((risk) => (
              <RiskIndicator key={risk.label} {...risk} />
            ))}
          </div>
        </DashboardCard>
      </section>

      <section className="locked-grid">
        {lockedFeatures.map((feature) => (
          <LockedFeatureCard key={feature.title} feature={feature} onClick={() => setModalFeature(feature)} />
        ))}
      </section>
    </>
  );
}

function ScoreCard({ profile, score, completed }) {
  return (
    <section className="glass-card score-card">
      <div>
        <Kicker>ResidencyIQ Assessment</Kicker>
        <h2>{score} / 100</h2>
        <p>Your initial residency profile has started. Add evidence to strengthen your assessment.</p>
      </div>
      <div className="score-ring" style={{ "--score": `${score * 3.6}deg` }}>
        <span>{score}</span>
      </div>
      <div className="profile-line">
        <span>Claimed domicile: <strong>{profile.primaryState || "Not entered"}</strong></span>
        <span>Secondary state: <strong>{profile.secondaryState || "Not entered"}</strong></span>
        <span>Checklist completed: <strong>{completed}</strong></span>
      </div>
    </section>
  );
}

function Checklist({ checklist, setChecklist }) {
  const update = (item, patch) => setChecklist({ ...checklist, [item]: { ...checklist[item], ...patch } });

  return (
    <section className="stack">
      <PageIntro title="Domicile Checklist" text="Track evidence organization and advisor-review items by status. This assessment is informational and is not legal or tax advice." />
      {checklistGroups.map(({ title, items, icon: Icon }) => (
        <DashboardCard title={title} icon={Icon} key={title}>
          <div className="checklist-items">
            {items.map((item) => (
              <ChecklistItem key={item} item={item} value={checklist[item]} onChange={(patch) => update(item, patch)} />
            ))}
          </div>
        </DashboardCard>
      ))}
    </section>
  );
}

function ChecklistItem({ item, value, onChange }) {
  return (
    <article className="checklist-item">
      <div>
        <strong>{item}</strong>
        <select value={value.status} onChange={(event) => onChange({ status: event.target.value })}>
          <option>Not Started</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>
      </div>
      <div className="item-actions">
        <button className="ghost-button"><Upload size={16} /> Upload Document</button>
        <input placeholder="Add note" value={value.note} onChange={(event) => onChange({ note: event.target.value })} />
      </div>
    </article>
  );
}

function EvidenceVault({ evidence, setEvidence }) {
  const [draft, setDraft] = useState({ name: "", category: evidenceCategories[0], state: "Nevada", notes: "" });
  const addEvidence = (category) => {
    const name = draft.name || `${category} placeholder.pdf`;
    setEvidence([{ ...draft, category, name, date: new Date().toISOString().slice(0, 10) }, ...evidence]);
    setDraft({ name: "", category: evidenceCategories[0], state: draft.state, notes: "" });
  };

  return (
    <section className="stack">
      <PageIntro title="Evidence Vault" text="Phase 1 supports manual upload metadata only. Files and integrations remain local/mock placeholders in this build." />
      <div className="evidence-grid">
        {evidenceCategories.map((category) => (
          <EvidenceUploadCard key={category} category={category} draft={draft} setDraft={setDraft} onAdd={() => addEvidence(category)} />
        ))}
      </div>
      <DashboardCard title="Uploaded Evidence Metadata" icon={FileText}>
        <div className="evidence-list">
          {evidence.map((item) => (
            <div key={`${item.name}-${item.date}`}>
              <span>{item.category}</span>
              <strong>{item.name}</strong>
              <small>{item.state} · {item.date} · {item.notes || "No note"}</small>
            </div>
          ))}
        </div>
      </DashboardCard>
    </section>
  );
}

function EvidenceUploadCard({ category, draft, setDraft, onAdd }) {
  return (
    <article className="glass-card evidence-card">
      <Upload size={24} />
      <h3>{category}</h3>
      <input placeholder="File name" value={draft.category === category ? draft.name : ""} onChange={(event) => setDraft({ ...draft, category, name: event.target.value })} />
      <input placeholder="State" value={draft.category === category ? draft.state : ""} onChange={(event) => setDraft({ ...draft, category, state: event.target.value })} />
      <input placeholder="Notes" value={draft.category === category ? draft.notes : ""} onChange={(event) => setDraft({ ...draft, category, notes: event.target.value })} />
      <button className="secondary-cta wide" onClick={onAdd}>Save Metadata</button>
    </article>
  );
}

function UpgradePreview() {
  return (
    <section className="stack">
      <PageIntro title="Upgrade Preview" text="Assessment is useful for initial organization. Essential is the next logical step when automated GPS, overnight detection, alerts, and defensibility reporting matter." />
      <div className="pricing-grid">
        {pricingPlans.map((plan) => <PricingCard key={plan.name} plan={plan} />)}
      </div>
    </section>
  );
}

function PricingCard({ plan }) {
  return (
    <article className={`glass-card pricing-card ${plan.featured ? "featured" : ""}`}>
      <span className="plan-name">{plan.name}</span>
      <h3>{plan.price}</h3>
      <button className={plan.name === "Assessment" ? "secondary-cta wide" : "primary-cta wide"}>{plan.cta}</button>
      <ul>
        {plan.includes.map((item) => (
          <li key={item}><Check size={16} /> {item}</li>
        ))}
      </ul>
    </article>
  );
}

function SettingsPage({ profile, setProfile }) {
  return (
    <section className="stack">
      <PageIntro title="Settings" text="Manage your residency profile, notifications, privacy preferences, and placeholder account actions." />
      <DashboardCard title="Profile" icon={Settings}>
        <TextInput label="Full name" value={profile.name} onChange={(name) => setProfile({ ...profile, name })} />
        <TextInput label="Email" value={profile.email} onChange={(email) => setProfile({ ...profile, email })} />
        <TextInput label="Claimed domicile state" value={profile.primaryState} onChange={(primaryState) => setProfile({ ...profile, primaryState })} />
        <TextInput label="Secondary state" value={profile.secondaryState} onChange={(secondaryState) => setProfile({ ...profile, secondaryState })} />
      </DashboardCard>
      <DashboardCard title="Preferences" icon={ShieldCheck}>
        <label className="toggle"><input type="checkbox" defaultChecked /> Residency timeline reminders</label>
        <label className="toggle"><input type="checkbox" defaultChecked /> Documentation gap notifications</label>
        <label className="toggle"><input type="checkbox" /> Advisor sharing enabled</label>
        <button className="secondary-cta wide">Export data placeholder</button>
        <button className="danger-button wide">Delete account placeholder</button>
      </DashboardCard>
    </section>
  );
}

function PrivacyPage() {
  const points = [
    "Your residency data belongs to you.",
    "You control what evidence is uploaded.",
    "You control what is shared with advisors.",
    "ResidencyIQ does not provide legal or tax advice.",
    "Reports are informational and intended to help organize evidence for review with qualified professionals.",
  ];
  return (
    <main className="app-shell">
      <PageIntro title="Privacy & Trust" text="ResidencyIQ is designed for discreet evidence organization and high-trust residency intelligence." />
      <DashboardCard title="Data Principles" icon={Lock}>
        <div className="trust-copy">
          {points.map((point) => <p key={point}>{point}</p>)}
        </div>
      </DashboardCard>
    </main>
  );
}

function DashboardCard({ title, icon: Icon, children }) {
  return (
    <section className="glass-card dashboard-card">
      <div className="card-title"><Icon size={21} /> <h3>{title}</h3></div>
      {children}
    </section>
  );
}

function LockedFeatureCard({ feature, onClick }) {
  const Icon = feature.icon;
  return (
    <button className="glass-card locked-card" onClick={onClick}>
      <Icon size={22} />
      <span>{feature.title}</span>
      <small>{feature.tier}</small>
      <Lock size={16} />
    </button>
  );
}

function LockedModal({ feature, onClose }) {
  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true">
      <section className="glass-card modal">
        <button className="modal-close" onClick={onClose} aria-label="Close"><X size={20} /></button>
        <Lock size={32} />
        <h2>{feature.title}</h2>
        <p>This feature is part of ResidencyIQ Connected or Global. Phase 2 will introduce paid plans and deeper evidence automation.</p>
        <button className="primary-cta wide" onClick={onClose}>Understood</button>
      </section>
    </div>
  );
}

function BottomNav({ active, setScreen }) {
  return (
    <nav className="bottom-nav">
      {navItems.map(({ id, label, icon: Icon }) => (
        <button className={active === id ? "active" : ""} key={id} onClick={() => setScreen(id)}>
          <Icon size={20} />
          <span>{label}</span>
        </button>
      ))}
    </nav>
  );
}

function RiskIndicator({ label, state }) {
  const tone = state.includes("Upgrade") ? "locked" : state.includes("gap") || state.includes("not yet") ? "warning" : "good";
  return (
    <article className={`risk ${tone}`}>
      <span>{label}</span>
      <strong>{state}</strong>
    </article>
  );
}

function RecentEntries({ entries }) {
  return (
    <div className="recent-list">
      {entries.slice(0, 4).map((entry) => (
        <article key={`${entry.date}-${entry.state}-${entry.notes}`}>
          <span>{entry.date}</span>
          <strong>{entry.state}</strong>
          <small>Overnight: {entry.overnight} · {entry.notes || "No note"}</small>
        </article>
      ))}
    </div>
  );
}

function Metric({ label, value }) {
  return (
    <div className="metric">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function TextInput({ label, value, onChange, type = "text" }) {
  const inputProps = onChange
    ? { value: value || "", onChange: (event) => onChange(event.target.value) }
    : {};

  return (
    <label>
      {label}
      <input type={type} {...inputProps} />
    </label>
  );
}

function Kicker({ children }) {
  return <span className="kicker">{children}</span>;
}

function PageIntro({ title, text }) {
  return (
    <header className="page-intro">
      <Kicker>Assessment Tier</Kicker>
      <h1>{title}</h1>
      <p>{text}</p>
    </header>
  );
}

createRoot(document.getElementById("root")).render(<App />);
