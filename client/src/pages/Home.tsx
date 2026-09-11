import { FormEvent, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Check,
  ChevronRight,
  CircleDot,
  FileCheck2,
  Github,
  Globe2,
  Linkedin,
  LockKeyhole,
  Mail,
  Menu,
  Network,
  Radar,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  UserRound,
  X,
} from "lucide-react";

const projects = [
  { number: "01", tag: "CAPSTONE / VAPT", title: "Cybersecurity Capstone Project", copy: "A practical assessment covering web and API security, reconnaissance, vulnerability analysis and risk-informed recommendations.", accent: "lime", href: "https://github.com/nessa360/Cybersecurity-Capstone-Project", icon: ShieldCheck },
  { number: "02", tag: "SECURITY AWARENESS", title: "Phishing Simulator", copy: "A web-based simulation exploring social engineering patterns, phishing techniques and the human side of security awareness.", accent: "blue", href: "https://nessa360.github.io/Phishing-Simulator/", icon: Radar },
  { number: "03", tag: "RESEARCH / AUTHENTICATION", title: "Continuous Authentication Using Gait Recognition", copy: "Exploring gait-based continuous authentication and its potential application to mobile money security.", accent: "gold", href: "#research", icon: Network },
  { number: "04", tag: "AI / EMERGING TECHNOLOGY", title: "Agentic AI Project", copy: "An exploration of AI agents, practical applications and the security questions that emerge when systems become more autonomous.", accent: "rose", href: "https://nessa360.github.io/Agentic-AI/", icon: BrainCircuit },
];

const toolkit = [
  ["WAZUH", "SECURITY MONITORING"],
  ["NESSUS", "VULNERABILITY ASSESSMENT"],
  ["NMAP", "RECONNAISSANCE"],
  ["WIRESHARK", "NETWORK ANALYSIS"],
  ["SPLUNK", "SECURITY MONITORING"],
  ["VIRUSTOTAL", "THREAT INTELLIGENCE"],
  ["ANY.RUN", "MALWARE ANALYSIS"],
  ["GRC LAB", "GOVERNANCE & COMPLIANCE"],
];
const research = [
  ["AI-driven educational systems", "AI Security · AI Governance · Emerging Technology"],
  ["Continuous authentication", "Authentication · Machine Learning · Mobile Money Security"],
  ["Cyber reinsurance", "Cyber Risk · Resilience · Governance"],
  ["AI security", "Emerging Threats · Security Applications · Responsible Use"],
  ["Cybersecurity governance", "GRC · Risk · Responsible Technology"],
];

function Mark() { return <a className="portfolio-mark" href="#top" aria-label="Vanessa Baah-Williams home"><span className="mark-symbol"><ShieldCheck size={18} /></span><span>VB<span>.</span></span></a>; }
function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) { return <p className={`eyebrow ${light ? "eyebrow-light" : ""}`}><span />{children}</p>; }
function UpArrow() { return <ArrowUpRight size={16} />; }

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [contactSent, setContactSent] = useState(false);
  const [query, setQuery] = useState("");
  const [querySent, setQuerySent] = useState(false);
  const scrollTo = (id: string) => { setMenuOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); };
  const handleContact = (e: FormEvent<HTMLFormElement>) => { e.preventDefault(); setContactSent(true); };
  const handleQuery = (e: FormEvent<HTMLFormElement>) => { e.preventDefault(); setQuerySent(true); };

  return <div className="site-shell" id="top">
    <header className="site-header"><div className="container nav-inner"><Mark /><nav className={`main-nav ${menuOpen ? "is-open" : ""}`}><button onClick={() => scrollTo("work")}>Selected work</button><button onClick={() => scrollTo("research")}>Research</button><button onClick={() => scrollTo("journey")}>Journey</button><button onClick={() => scrollTo("contact")}>Contact</button><button className="mobile-nav-track" onClick={() => scrollTo("toolkit")}>Practical toolkit <ArrowRight size={16} /></button></nav><div className="nav-actions"><button className="nav-login" onClick={() => scrollTo("about")}><UserRound size={16} /> About Vanessa</button><button className="nav-cta" onClick={() => scrollTo("contact")}>Start a conversation <UpArrow /></button><button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X size={21} /> : <Menu size={21} />}</button></div></div></header>

    <main>
      <section className="portfolio-hero"><div className="hero-grid-pattern" /><div className="container hero-inner"><div className="hero-copy"><div className="hero-kicker"><span className="kicker-line" /> Cybersecurity · Risk · Innovation</div><h1>Make the<br /><em>unknown</em> visible<span className="hero-dot">↗</span></h1><p className="hero-lede">I’m Vanessa Baah-Williams, a cybersecurity professional exploring GRC, VAPT, AI security, security operations and research through hands-on work.</p><div className="hero-buttons"><button className="button button-primary" onClick={() => scrollTo("work")}>Explore selected work <ArrowRight size={17} /></button><button className="button button-ghost" onClick={() => scrollTo("contact")}>Let’s connect <ArrowDownRight size={17} /></button></div><div className="hero-trust"><ShieldCheck size={15} /> Developer + creative technologist with a cybersecurity-first identity</div></div><div className="signal-panel"><div className="signal-top"><span className="signal-live"><span /> SIGNAL / 01</span><span className="signal-time">LIVE NOTES</span></div><div className="signal-visual"><div className="radar-grid" /><div className="radar-ring ring-one" /><div className="radar-ring ring-two" /><div className="radar-sweep" /><div className="radar-point point-a" /><div className="radar-point point-b" /><div className="radar-point point-c" /><span className="radar-label label-a">AI SECURITY</span><span className="radar-label label-b">GRC / RISK</span><span className="radar-label label-c">VAPT</span><div className="radar-center"><TerminalSquare size={17} /></div></div><div className="signal-bottom"><div><small>CURRENT FOCUS</small><strong>Mapping better questions</strong></div><div className="signal-status"><span className="status-dot" /> Exploring</div></div></div></div></section>

      <section className="stats-strip"><div className="container stats-grid"><div><strong>08<span>+</span></strong><span>security domains explored</span></div><div><strong>04<span>+</span></strong><span>hands-on projects</span></div><div><strong>08<span>+</span></strong><span>tools in the toolkit</span></div><div><strong>01<span>×</span></strong><span>curiosity-driven practice</span></div></div></section>

      <section className="section work-section" id="work"><div className="container"><div className="section-heading"><div><Eyebrow>Selected work</Eyebrow><h2>Build. Test.<br /><em>Question.</em></h2></div><div className="heading-aside"><p>Practical work at the intersection of security controls, human behaviour, emerging technology and the systems underneath it all.</p><button className="text-link" onClick={() => scrollTo("contact")}>Discuss a project <UpArrow /></button></div></div><div className="projects-grid">{projects.map(({ number, tag, title, copy, accent, href, icon: Icon }) => <article className={`project-card accent-${accent} ${selectedProject === title ? "is-selected" : ""}`} key={title}><div className="project-top"><span className="project-number">{number}</span><span className="project-icon"><Icon size={22} /></span></div><div><span className="project-tag">{tag}</span><h3>{title}</h3><p>{copy}</p></div><div className="project-footer"><button className="project-arrow" onClick={() => setSelectedProject(selectedProject === title ? null : title)} aria-label={`View ${title}`}><UpArrow /></button><a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{selectedProject === title ? "Close case study" : "View case study"} <ChevronRight size={14} /></a></div></article>)}</div></div></section>

      <section className="about-section" id="about"><div className="container about-grid"><div className="about-art"><div className="headshot-frame"><img src="/headshot_img.png" alt="Vanessa Baah-Williams" /></div><span className="art-note note-one">GRC + VAPT</span><span className="art-note note-two">AI × SECURITY</span></div><div className="about-copy"><Eyebrow light>How I think</Eyebrow><h2>Security is<br /><em>a practice.</em></h2><p className="about-lede">I’m interested in the space between what technology can do, what organisations need and what responsible security asks of all of us.</p><div className="about-list"><div><Check size={17} /><span><strong>Connect the dots</strong><small>Move between technical detail, business context and the people who make systems real.</small></span></div><div><Check size={17} /><span><strong>Learn by doing</strong><small>Use labs, experiments and research to turn abstract risk into useful understanding.</small></span></div><div><Check size={17} /><span><strong>Leave things clearer</strong><small>Good security work creates better decisions, not just more findings.</small></span></div></div><button className="button button-light" onClick={() => scrollTo("journey")}>See the journey <ArrowRight size={17} /></button></div></div></section>

      <section className="toolkit-section" id="toolkit"><div className="container toolkit-grid"><div className="toolkit-copy"><Eyebrow>Practical toolkit</Eyebrow><h2>Less clutter.<br /><em>More signal.</em></h2><p>A working set of tools I use to explore security monitoring, network visibility, vulnerability assessment, threat intelligence and web application security.</p><div className="toolkit-note"><Sparkles size={16} /><span>Tools are part of the practice, not the personality.</span></div></div><div className="toolkit-card"><div className="toolkit-head"><span><TerminalSquare size={17} /> Security lab / toolkit</span><span className="demo-pill">08 TOOLS</span></div><div className="tool-list">{toolkit.map(([tool, category], index) => <div className="tool-row" key={tool}><span className="tool-index">0{index + 1}</span><span className="tool-name">{tool}</span><span className="tool-type">{category}</span><span className="tool-check"><Check size={13} /></span></div>)}</div><div className="toolkit-footer"><LockKeyhole size={13} /> Practical experience over logo walls</div></div></div></section>

      <section className="research-section" id="research"><div className="container"><div className="section-heading"><div><Eyebrow>Research & exploration</Eyebrow><h2>Questions worth<br /><em>following.</em></h2></div><div className="heading-aside"><p>The most interesting security problems are rarely only technical. These are the threads I’m currently pulling.</p></div></div><div className="research-list">{research.map(([title, tags], index) => <article className="research-row" key={title}><span className="research-index">0{index + 1}</span><h3>{title}</h3><span className="research-tags">{tags}</span><ArrowUpRight size={17} /></article>)}</div></div></section>

      <section className="journey-section" id="journey"><div className="container journey-grid"><div className="journey-intro"><Eyebrow light>Journey so far</Eyebrow><h2>Always<br /><em>becoming.</em></h2><p>From information studies to hands-on security work, each chapter has made the next question more interesting.</p></div><div className="journey-track"><div className="track-line" />{["Information studies", "Cybersecurity transition", "Hands-on security training", "GRC experience", "VAPT & security labs", "AI & emerging technology", "Cybersecurity research", "MSc Cybersecurity"].map((item, index) => <div className={`journey-step ${index === 7 ? "current" : ""}`} key={item}><span className="step-dot" /><span className="step-number">0{index + 1}</span><span className="step-name">{item}</span>{index === 7 && <span className="current-label">current horizon</span>}</div>)}</div></div></section>

      <section className="contact-section" id="contact"><div className="container contact-grid"><div className="contact-copy"><Eyebrow light>Let’s make a useful connection</Eyebrow><h2>Have a<br />question?</h2><p>Interested in cybersecurity, responsible AI, research or a project that needs a thoughtful security lens? I’d love to hear what you’re working on.</p><div className="contact-details"><div><Mail size={18} /><span>baahwilliamsvanessa@gmail.com<br /><small>Best for project and professional enquiries</small></span></div><div><Globe2 size={18} /><span>Accra, Ghana<br /><small>Open to global conversations</small></span></div></div></div><div className="contact-form-card">{contactSent ? <div className="form-success"><span><Check size={26} /></span><h3>Message received.</h3><p>Thanks for reaching out. Vanessa’s fictional inbox will be in touch shortly.</p><button className="text-link light-link" onClick={() => setContactSent(false)}>Send another message <ArrowRight size={15} /></button></div> : <form onSubmit={handleContact}><div className="form-row"><label>First name<input required placeholder="Ama" /></label><label>Work email<input required type="email" placeholder="ama@company.com" /></label></div><label>What brings you here?<select defaultValue=""><option value="" disabled>Select a conversation</option><option>Cybersecurity / GRC</option><option>Research collaboration</option><option>Responsible AI</option><option>Creative technology</option></select></label><label>Message<textarea required rows={3} placeholder="A little context about what you’re exploring..." /></label><button type="submit" className="button button-primary form-submit">Send a note <Send size={16} /></button><p className="form-disclaimer">Your message will be sent through the portfolio contact form.</p></form>}</div></div></section>

      <section className="query-section"><div className="container query-inner"><div className="query-icon"><Search size={20} /></div><div><Eyebrow>Still curious?</Eyebrow><h2>Search the <em>signal.</em></h2><p>Try a topic: AI security, GRC, VAPT, research...</p></div><form onSubmit={handleQuery} className="query-form"><input aria-label="Search topics" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="What are you exploring?" /><button type="submit"><ArrowRight size={18} /></button>{querySent && <span className="query-result"><Check size={13} /> Noted: {query || "curiosity"}</span>}</form></div></section>
    </main>

    <footer className="site-footer"><div className="container footer-main"><div className="footer-brand"><Mark /><p>Cybersecurity, thoughtfully explored.<br /><em>One question at a time.</em></p><div className="socials"><a href="https://github.com/nessa360" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={16} /></a><a href="https://www.linkedin.com/in/vanessa-baah-williams-1a4953238" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={16} /></a></div></div><div className="footer-links"><div><strong>Explore</strong><button onClick={() => scrollTo("work")}>Selected work</button><button onClick={() => scrollTo("research")}>Research</button><button onClick={() => scrollTo("toolkit")}>Toolkit</button></div><div><strong>Connect</strong><button onClick={() => scrollTo("contact")}>Start a conversation</button><a href="https://github.com/nessa360" target="_blank" rel="noreferrer">GitHub / nessa360</a><a href="mailto:baahwilliamsvanessa@gmail.com">baahwilliamsvanessa@gmail.com</a></div><div><strong>Currently exploring</strong><span>GRC & ISO 27001</span><span>AI security</span><span>Identity & authentication</span></div></div></div><div className="container footer-bottom"><span>© 2026 Vanessa Baah-Williams. Portfolio concept.</span><span>Privacy · Notes · <button onClick={() => scrollTo("top")}>Back to top</button></span></div></footer>
  </div>;
}
