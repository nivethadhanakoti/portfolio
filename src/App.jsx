import { useState, useEffect } from "react";
import "./App.css";

// ── DATA ──────────────────────────────────────────────────────────────────────
const PROJECTS = [
  { title: "Content Generation of Legal Multi-Documents via Argumentative Abstraction", date: "Jul'25 - Present", description: "This project proposes a Multi-document Summarization system tailored to Legal domain, capable of taking a set of related legal documents and generate a timeline-ordered summary using an argument oriented graph framework.", tech: ["NLP", "Knowledge Graph", "Machine Learning"], github: "https://github.com/nivethadhanakoti/Legal-MultiDocument-Summarization" },
  { title: "Sentimental Analysis for McDonald's Reviews", date: "Feb 2025 - Apr 2025", description: "Flask web application that analyses McDonald's restaurant reviews and predicts sentiment as negative, neutral, or positive — enabling data-driven brand reputation management.", tech: ["Python", "Flask", "Machine Learning", "NLP", "HTML/CSS"], github: "https://github.com/PRANEETHAPADALA/McDonalds-Review-Sentimental-Analysis" },
  { title: "InternTrack Full-Stack Web App", date: "Feb 2025 - Apr 2025", description: "Streamlines internship record management with authorization-based access, Google Drive integration for document storage, and Google Sheets for data validation.", tech: ["React", "Node.js", "Google Drive API", "Google Sheets API", "Auth"], github: "https://github.com/nivethadhanakoti/InternTrack-Full-Stack" },
  { title: "Low Light Enhancement & Object Detection", date: "Sep 2024 - Dec 2024", description: "Enhances low-light images using Histogram Equalization, CLAHE, Bilateral filtering, Gamma correction, and Unsharp Masking; performs object detection via Semantic Segmentation.", tech: ["Python", "OpenCV", "Deep Learning", "Semantic Segmentation"], github: "https://github.com/nivethadhanakoti/Semantic-Segmentation" },
  { title: "Super Mario - The Adventure Quest", date: "Sep 2024 - Dec 2024", description: "A Mario Bros-style platformer clone enhanced with AI — ML algorithms drive adaptive enemy behaviour and dynamic level design for a unique experience every run.", tech: ["Python", "Pygame", "Machine Learning", "AI"], github: "https://github.com/nivethadhanakoti/Adventure-Quest-Mario" },
  { title: "Nihas Flower Works (E-Commerce)", date: "Jun 2024 - Oct 2024", description: "Fully functional frontend e-commerce site for a bouquet shop that accepts orders which are received and fulfilled by the business.", tech: ["HTML", "CSS", "JavaScript"], github: "https://github.com/nivethadhanakoti/Nihas", live: "https://nihas.netlify.app" },
  { title: "Pharmacy Management System", date: "Apr 2024 - Jul 2024", description: "Desktop application for online medicine ordering, built with NetBeans and Oracle SQL for robust data management.", tech: ["Java", "NetBeans", "Oracle SQL"], github: "https://github.com/nivethadhanakoti/Pharmacy-Management-System" },
  { title: "Health & Fitness App", date: "Feb 2024 - Mar 2024", description: "Flutter mobile app that recommends personalised diet plans and exercises based on age and tracks daily step counts.", tech: ["Flutter", "Dart", "Android Studio"], github: "https://github.com/nivethadhanakoti/Health-and-Fitness-App" },
  { title: "Tourism & Travel Management System", date: "Aug 2023 - Jan 2024", description: "Java application for booking travel destination packages with transport facilities and AI-powered personalised recommendations.", tech: ["Java", "AI/ML", "SQL"], github: "https://github.com/nivethadhanakoti/Tourism-and-Travel-Management-System" },
  { title: "Cab Booking System", date: "Apr 2023 - Jul 2023", description: "C-based cab booking system using Graph Search for driver allocation and ML algorithms for demand-pattern prediction and cost estimation.", tech: ["C", "Graph Algorithms", "Machine Learning"], github: "https://github.com/nivethadhanakoti/Cab-Hailing" },
  { title: "Sentimental Analysis of Tweets", date: "Mar 2023 - Jun 2023", description: "Python ML application that classifies tweet sentiments into positive, negative, and neutral categories from large scientific datasets.", tech: ["Python", "Machine Learning", "NLP", "Data Analysis"], github: "https://github.com/nivethadhanakoti/Tweet-Sentiment-Analysis" },
];

const SKILLS = [
  { cat: "Programming Languages", icon: "⟨/⟩", color: "var(--accent1)", glow: "rgba(124,92,191,0.3)", items: ["Python", "C", "C++", "Java"] },
  { cat: "Web Development", icon: "◈", color: "var(--accent2)", glow: "rgba(74,126,212,0.3)", items: ["HTML", "CSS", "JavaScript", "Angular", "React JS", "Oracle"] },
  { cat: "Mobile & Design", icon: "✦", color: "#e879a0", glow: "rgba(232,121,160,0.3)", items: ["Flutter", "Dart", "Canva", "Adobe Photoshop", "Android Studio"] },
  { cat: "Tools & Platforms", icon: "⬡", color: "#48c98a", glow: "rgba(72,201,138,0.3)", items: ["VS Code", "Git", "GitHub", "NetBeans", ".NET Core"] },
];

const EDUCATION = [
  {
    title: "Bachelor of Engineering - Computer Science & Engineering",
    org: "SSN College of Engineering",
    date: "2022 - 2026",
    score: "CGPA: 9.0",
    desc: "Pursuing a B.E. in Computer Science at one of Tamil Nadu's premier engineering institutions, exploring full-stack development, data science, machine learning, and AI through coursework and hands-on projects.",
  },
  {
    title: "Class 12th - Higher Secondary (HSC)",
    org: "Cluny Matriculation Higher Secondary School",
    date: "2022",
    score: "Percentage: 97.6%",
    desc: "Completed higher secondary schooling with distinction, building a strong foundation in Mathematics, Physics, Chemistry, and Computer Science.",
  },
  {
    title: "Class 10th - Secondary (SSLC)",
    org: "Cluny Matriculation Higher Secondary School",
    date: "2020",
    score: "Percentage: 97.8%",
    desc: "Achieved outstanding results in the State Board examinations, excelling in all subjects and ranking among the top performers in the school.",
  },
];

const EXPERIENCE = [
  {
    title: "Trainee - Tata Elxsi",
    org: "Full-Time Internship",
    date: "Jan 2026 - Jun 2026",
    desc: "Contributed to the design and implementation of responsive web applications using Angular framework, integrated with .NET Core backend services.",
  },
  {
    title: "Summer Intern - Agaram Infotech",
    org: "Software Development Internship",
    date: "May 2025 - Jul 2025",
    desc: "Involved in the Complaint Management System, catering to client-specific business, and worked with senior developers. Participated in code reviews and testing to ensure the standard and bug-free delivery.",
  },
  {
    title: "Software Development Engineer Intern - Agaram Infotech",
    org: "Software Development Internship",
    date: "Aug 2024 - Jan 2025",
    desc: "Implemented responsive web applications using Angular, integrating with backend services built on .NET Core. Collaborated with team members to optimize and ensure seamless data flow between frontend and backend systems.",
  },
];

const ROLES = [
  {
    title: "Technical Head in ACM-W Student Chapter",
    org: "SSN College of Engineering",
    date: "Aug 2025 - Present",
    desc: "Leading technical initiatives for the ACM-W chapter, organising workshops on emerging technologies and mentoring junior students in web development and data science projects.",
  },
  {
    title: "Event Organiser in ACM Student Chapter",
    org: "SSN College of Engineering",
    date: "Jul 2025 - Present",
    desc: "Planning and executing technical events, hackathons, and guest lecture series for the ACM student community, co-ordinating with industry professionals and faculty advisors.",
  },
  {
    title: "Student Representative in IQAC",
    org: "SSN College of Engineering",
    date: "2025 - Present",
    desc: "Representing the student body in the Internal Quality Assessment Cell, providing feedback on academic processes and contributing to quality enhancement initiatives.",
  },
  {
    title: "Student Alumni Representative",
    org: "SSN College of Engineering",
    date: "2024 - Present",
    desc: "Bridging the gap between current students and alumni by facilitating networking sessions, mentorship programmes, and career guidance opportunities.",
  },
  {
    title: "School Pupil Leader",
    org: "Cluny Matriculation Higher Secondary School",
    date: "2020 - 2022",
    desc: "Served as the head student leader, representing the student body, organising school-wide events, and acting as a liaison between students and school administration.",
  },
];

const CERTIFICATIONS = [
  { name: "Google Data Analytics Professional Certificate", provider: "Google · Coursera", tag: "8 Courses", category: "Data & Analytics", color: "#4285F4" },
  { name: "Google Project Management Professional Certificate", provider: "Google · Coursera", tag: "6 Courses", category: "Management", color: "#34A853" },
  { name: "Google Business Intelligence Certificate", provider: "Google · Coursera", tag: "3 Courses", category: "Data & Analytics", color: "#4285F4" },
  { name: "Foundations of Cyber Security", provider: "Google · Coursera", tag: "Security", category: "Cyber Security", color: "#EA4335" },
  { name: "Data Analytics with Python", provider: "NPTEL", tag: "NPTEL", category: "Data & Analytics", color: "#FF6B35" },
  { name: "Affective Computing", provider: "NPTEL", tag: "NPTEL", category: "AI & ML", color: "#FF6B35" },
  { name: "Cyber Security and Privacy", provider: "NPTEL", tag: "NPTEL", category: "Cyber Security", color: "#FF6B35" },
  { name: "Data Science Methodology", provider: "IBM · Coursera", tag: "IBM", category: "Data & Analytics", color: "#1F70C1" },
  { name: "Machine Learning Introduction to Everyone", provider: "IBM · Coursera", tag: "IBM", category: "AI & ML", color: "#1F70C1" },
  { name: "DevOps on AWS Specialization", provider: "Amazon Web Services · Coursera", tag: "4 Courses", category: "Cloud & DevOps", color: "#FF9900" },
  { name: "Intro to Basic Game Development using Scratch", provider: "Coursera Project Network", tag: "Project", category: "Development", color: "#0056D2" },
  { name: "Intro to Data Analysis using Microsoft Excel", provider: "Coursera Project Network", tag: "Project", category: "Data & Analytics", color: "#0056D2" },
];

const PUBLICATIONS = [
  { title: "A Methodical Examination in the Pursuit of Big Data Analytics in Digital Media Broadcasting", journal: "IJNIET - Volume 24 Issue 4, July 2024", issn: "ISSN 2319-6319", link: "https://www.ijniet.org/issues/volume-24-issue-4-july-2024/" },
  { title: "Contrasting a Conventional Approach with Digital Approach for Brand Communication Scrutiny", journal: "Journal of Xidian University - Volume 18 Issue 7, July 2024", issn: "ISSN 1001-2400", link: "https://xadzkjdx.cn/index.php/volume-18-issue-7-july-24/" },
  { title: "An Overview on Big Educational Data and Analytics, Framework and Constraints", journal: "VDI-Z Integrierte Produktion Journal - Volume 12 Issue 9, Sept 2025", issn: "ISSN 0042-1766", link: "https://vzipjournal.com/volume-12-issue-9-2025/" },
  { title: "An Extensive Analysis of the Procedures in Data Science", journal: "Journal of Computer Science - Volume 18 Issue 11, Nov 2025", issn: "ISSN 1549-3636", link: "https://computersciencejournal.org/volume-18-issue-11-published-in-november-2025/" },
];

const CONFERENCES = [
  {
    badge: "Mar 2024",
    title: "\"A Synopsis of the Framework, Limitations of Big Educational Data and Analytics\"",
    venue: "12th International Conference on Contemporary Engineering and Technology",
  },
  {
    badge: "Feb 2025",
    title: "\"Examining and Comparing a Digital and Conventional Approach to Brand Communication\"",
    venue: "Dayananda Sagar College of Engineering",
  },
  {
    badge: "July 2025",
    title: "\"An Approachable Look at the Search for Big Data Analytics in Digital Media Distribution\"",
    venue: "16th International Journal IEEE Conference on Computing, Communication and Networking Technologies (ICCCNT) at IIT Indore",
  },
];

// ── ICONS ─────────────────────────────────────────────────────────────────────
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);
const ExternalLinkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="17" height="17">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
  </svg>
);
const SunIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
);
const MoonIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
  </svg>
);
const DownloadIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
  </svg>
);
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

// ── NAV ───────────────────────────────────────────────────────────────────────
const NAV_ITEMS = ["Home", "About", "Projects", "Publications", "Certifications", "Contact"];

function Navbar({ active, setActive, theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="nav-logo" onClick={() => setActive("Home")}>
        <span className="logo-nd">ND</span><span className="logo-dot">.</span>
      </div>
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        {NAV_ITEMS.map((item) => (
          <li key={item}>
            <button
              className={`nav-btn ${active === item ? "nav-active" : ""}`}
              onClick={() => { setActive(item); setMenuOpen(false); }}
            >
              {item}
            </button>
          </li>
        ))}
        <li>
          <a href="/nivetha-portfolio/2026-03-21_Nivetha_2_page_Resume.pdf" download className="nav-resume-btn">
            <DownloadIcon /> Resume
          </a>
        </li>
      </ul>
      <div className="nav-right">
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "dark" ? <SunIcon /> : <MoonIcon />}
        </button>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}

// ── HOME ──────────────────────────────────────────────────────────────────────
function Home({ setActive }) {
  return (
    <section className="home-section">
      <div className="home-bg-blobs">
        <div className="blob blob1" />
        <div className="blob blob2" />
        <div className="blob blob3" />
      </div>
      <div className="home-content">
        <div className="home-welcome-pill">Welcome to my portfolio</div>
        <h1 className="home-name">
          Nivetha<br /><span className="name-accent">Dhanakoti</span>
        </h1>
        <div className="home-roles">
          <span>Computer Science Engineer</span>
          <span className="role-sep">·</span>
          <span>Full-Stack Developer</span>
          <span className="role-sep">·</span>
          <span>Data Science &amp; AI Enthusiast</span>
        </div>
        <p className="home-tagline">
          Senior @ SSN College of Engineering &nbsp;|&nbsp; Trainee @ Tata Elxsi &nbsp;|&nbsp; Ex-SDE Intern @ Agaram
        </p>
        <div className="home-cta">
          <button className="cta-primary" onClick={() => setActive("Projects")}>View My Work</button>
          <button className="cta-outline" onClick={() => setActive("Contact")}>Get In Touch</button>
          <a href="/nivetha-portfolio/2026-03-21_Nivetha_2_page_Resume.pdf" download className="cta-outline">
            <DownloadIcon /> Download C
          </a>
        </div>
        <div className="home-social">
          <a href="https://github.com/nivethadhanakoti" target="_blank" rel="noopener noreferrer" className="social-chip">
            <GithubIcon /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/nivetha-dhanakoti-5ba8b4302/" target="_blank" rel="noopener noreferrer" className="social-chip">
            <LinkedInIcon /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

// ── ABOUT ─────────────────────────────────────────────────────────────────────
function About() {
  return (
    <section className="page-section about-section">
      <div className="section-header">
        <p className="section-label">ABOUT ME</p>
        <h2>Who I <span className="accent">Am</span></h2>
        <div className="section-underline" />
      </div>

      <div className="about-block card-glass">
        <p className="about-bio-text">
          Hello! I'm Nivetha Dhanakoti, a Computer Science student passionate about Web Designing,
          Graphics and Data Analytics. I enjoy solving problems by building creative, data-driven
          solutions that blend design with technology. My experience across academic projects has
          strengthened my analytical thinking as well as my ability to lead and coordinate teams
          effectively. I'm always eager to learn, explore new technologies, and collaborate on
          impactful projects that turn ideas into meaningful outcomes.
        </p>
      </div>

      {/* ROW 1 ── Education (left) | Technical Skills (right) */}
      <div className="about-two-col">
        <div>
          <div className="about-section-title">Education</div>
          <div className="timeline">
            {EDUCATION.map((e) => (
              <div className="timeline-item" key={e.title}>
                <div className="timeline-dot" />
                <div className="timeline-content card-glass">
                  <div className="edu-card-body">
                    <div className="edu-title-row">
                      <h3 className="edu-title">
                        {e.title.split("\n").map((line, i) => (
                          <span key={i}>{line}{i < e.title.split("\n").length - 1 && <br/>}</span>
                        ))}
                      </h3>
                      <span className="timeline-date edu-date">{e.date}</span>
                    </div>
                    <p className="timeline-org">{e.org}</p>
                    {e.score && <p className="edu-score">{e.score}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="about-section-title">Technical Skills</div>
          <div className="skills-card-v2">
            <div className="skills-grid-bg" />
            {SKILLS.map((group) => (
              <div key={group.cat} className="skill-group-v2" style={{"--cat-color": group.color, "--cat-glow": group.glow}}>
                <div className="skill-cat-v2">
                  <span className="skill-cat-icon">{group.icon}</span>
                  <span className="skill-cat-label">{group.cat}</span>
                </div>
                <div className="skill-tags-v2">
                  {group.items.map((s) => (
                    <span key={s} className="skill-tag-v2"><span>{s}</span></span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Experience */}
      <div className="about-section-title">Experience</div>
      <div className="timeline">
        {EXPERIENCE.map((e) => (
          <div className="timeline-item" key={e.title}>
            <div className="timeline-dot timeline-dot-accent2" />
            <div className="timeline-content card-glass">
              <div className="timeline-header">
                <div className="timeline-header-left">
                  <h3>{e.title}</h3>
                  <p className="timeline-org">{e.org}</p>
                </div>
                <div className="timeline-meta">
                  <span className="timeline-date">{e.date}</span>
                </div>
              </div>
              <p className="timeline-desc">{e.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Roles & Responsibilities */}
      <div className="about-section-title">Roles &amp; Responsibilities</div>
      <div className="timeline">
        {ROLES.map((r) => (
          <div className="timeline-item" key={r.title}>
            <div className="timeline-dot timeline-dot-green" />
            <div className="timeline-content card-glass">
              <div className="timeline-header">
                <div className="timeline-header-left">
                  <h3>{r.title}</h3>
                  <p className="timeline-org">{r.org}</p>
                </div>
                <div className="timeline-meta">
                  <span className="timeline-date">{r.date}</span>
                </div>
              </div>
              <p className="timeline-desc">{r.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── PROJECTS ──────────────────────────────────────────────────────────────────
function Projects() {
  return (
    <section className="page-section projects-page">
      <div className="section-header">
        <p className="section-label">PORTFOLIO</p>
        <h2>My <span className="accent">Projects</span></h2>
        <div className="section-underline" />
        <p className="section-sub">Click the GitHub or Live Demo buttons to explore each project.</p>
      </div>
      <div className="projects-grid">
        {PROJECTS.map((p) => (
          <div key={p.title} className="project-card card-glass">
            <div className="project-top">
              <h3 className="project-title">{p.title}</h3>
              <span className="project-date">{p.date}</span>
            </div>
            <p className="project-desc">{p.description}</p>
            <div className="project-tech">
              {p.tech.map((t) => <span key={t} className="tech-badge">{t}</span>)}
            </div>
            <div className="project-actions">
              <a href={p.github} target="_blank" rel="noreferrer" className="btn-github">
                <GithubIcon /> GitHub
              </a>
              {p.live && (
                <a href={p.live} target="_blank" rel="noreferrer" className="btn-live">
                  <ExternalLinkIcon /> Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── PUBLICATIONS ──────────────────────────────────────────────────────────────
function Publications() {
  return (
    <section className="page-section">
      <div className="section-header">
        <p className="section-label">RESEARCH</p>
        <h2>Research &amp; <span className="accent">Publications</span></h2>
        <div className="section-underline" />
      </div>
      <div className="pub-grid">
        {PUBLICATIONS.map((p) => (
          <div key={p.title} className="pub-card card-glass">
            <div className="pub-icon">📄</div>
            <h3>{p.title}</h3>
            <p className="pub-journal">{p.journal}</p>
            <div className="pub-footer">
              <span className="pub-issn">{p.issn}</span>
              {p.link && (
                <a href={p.link} target="_blank" rel="noreferrer" className="pub-link-btn">
                  View Publication ↗
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="section-header" style={{ marginTop: "3.5rem" }}>
        <p className="section-label">CONFERENCES</p>
        <h2>Conference <span className="accent">Presentations</span></h2>
        <div className="section-underline" />
      </div>
      <div className="conf-grid">
        {CONFERENCES.map((c) => (
          <div key={c.badge} className="conf-card card-glass">
            <span className="conf-badge">{c.badge}</span>
            <h3>{c.title}</h3>
            <p>{c.venue}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── CERTIFICATIONS ────────────────────────────────────────────────────────────
function Certifications() {
  const categories = [...new Set(CERTIFICATIONS.map(c => c.category))];
  return (
    <section className="page-section">
      <div className="section-header">
        <p className="section-label">LEARNING</p>
        <h2>Certifications &amp; <span className="accent">Courses</span></h2>
        <div className="section-underline" />
        <p className="section-sub">{CERTIFICATIONS.length} certifications across {categories.length} domains</p>
      </div>
      {categories.map(cat => (
        <div key={cat} className="cert-category-block">
          <div className="cert-category-label">{cat}</div>
          <div className="cert-grid">
            {CERTIFICATIONS.filter(c => c.category === cat).map((c) => (
              <div key={c.name} className="cert-card card-glass" style={{"--cert-color": c.color}}>
                <div className="cert-card-top">
                  <div className="cert-provider-dot" style={{background: c.color}} />
                  <span className="cert-tag" style={{color: c.color, background: `${c.color}18`, borderColor: `${c.color}40`}}>{c.tag}</span>
                </div>
                <h4>{c.name}</h4>
                <p className="cert-provider">{c.provider}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

// ── CONTACT ───────────────────────────────────────────────────────────────────
function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = () => {
    if (form.name && form.email && form.message) {
      window.location.href = `mailto:nivikoti@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${encodeURIComponent(form.email)}`;
      setSent(true);
    }
  };
  return (
    <section className="page-section contact-section">
      <div className="section-header">
        <p className="section-label">CONTACT</p>
        <h2>Get In <span className="accent">Touch</span></h2>
        <div className="section-underline" />
        <p className="section-sub">Have an opportunity or just want to say hi? My inbox is always open.</p>
      </div>
      <div className="contact-grid">
        <div className="contact-info card-glass">
          <h3>Contact Details</h3>
          <div className="contact-item"><span>📧</span><a href="mailto:nivikoti@gmail.com">nivikoti@gmail.com</a></div>
          <div className="contact-item"><span>💼</span><a href="https://www.linkedin.com/in/nivetha-dhanakoti-5ba8b4302/" target="_blank" rel="noreferrer">LinkedIn Profile</a></div>
          <div className="contact-item"><span>🐙</span><a href="https://github.com/nivethadhanakoti" target="_blank" rel="noreferrer">GitHub Profile</a></div>
          <div className="contact-item"><span>📍</span><span>Chennai, Tamil Nadu, India</span></div>
          <div className="availability-badge"><span className="avail-dot" />Open to Opportunities</div>
          <a href="/nivetha-portfolio/2026-03-21_Nivetha_2_page_Resume.pdf" download className="download-resume-btn">
            <DownloadIcon /> Download Resume
          </a>
        </div>
        <div className="contact-form card-glass">
          {sent ? (
            <div className="sent-msg">
              <div className="sent-icon">✅</div>
              <h3>Message Sent!</h3>
              <p>Your email client should have opened. I'll get back to you soon.</p>
            </div>
          ) : (
            <>
              <h3>Send a Message</h3>
              <div className="form-group">
                <label>Name</label>
                <input name="name" value={form.name} onChange={handle} placeholder="Your name" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input name="email" type="email" value={form.email} onChange={handle} placeholder="your@email.com" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea name="message" value={form.message} onChange={handle} placeholder="What's on your mind?" rows={5} />
              </div>
              <button className="submit-btn" onClick={submit}>Send Message ✦</button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

// ── APP ───────────────────────────────────────────────────────────────────────
export default function App() {
  const [active, setActive] = useState("Home");
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
  const pages = { Home, About, Projects, Publications, Certifications, Contact };
  const PageComponent = pages[active];

  return (
    <div className="app">
      <Navbar active={active} setActive={setActive} theme={theme} toggleTheme={toggleTheme} />
      <main className="main-content">
        <PageComponent setActive={setActive} />
      </main>
      <footer className="footer">
        <p>Designed &amp; Built by <strong>Nivetha Dhanakoti</strong> · {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}