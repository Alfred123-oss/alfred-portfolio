
import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Link,
  useLocation,
} from "react-router";

const projects = [
  {
    title: "Climate-Smart Agriculture",
    category: "IoT & WSN",
    description:
      "A project concept exploring how wireless sensors can monitor soil moisture, temperature, humidity, and light to support better farm decisions.",
    tags: ["Arduino", "Sensors", "LoRa", "IoT"],
    status: "Project concept",
  },
  {
    title: "Environmental Monitoring",
    category: "IoT & WSN",
    description:
      "A sensor-based monitoring concept for collecting environmental readings and supporting data-informed decisions.",
    tags: ["Sensor Networks", "Data", "Monitoring"],
    status: "Project concept",
  },
  {
    title: "Connected Systems",
    category: "Networking",
    description:
      "Practical learning in network configuration, device connectivity, troubleshooting, and reliable communication between systems.",
    tags: ["Networking", "Connectivity", "Troubleshooting"],
    status: "Learning portfolio",
  },
  {
    title: "Personal Portfolio",
    category: "Web Development",
    description:
      "A personal portfolio built with React, JavaScript, and CSS to present my background, projects, skills, and experience.",
    tags: ["React", "JavaScript", "CSS"],
    status: "In development",
  },
];

const skillGroups = [
  {
    category: "Networking",
    skills: [
      "Computer Networking",
      "Network Troubleshooting",
      "Network Configuration",
      "Device Connectivity",
    ],
  },
  {
    category: "IoT & Embedded",
    skills: [
      "Wireless Sensor Networks",
      "Internet of Things",
      "Arduino",
      "Embedded Systems",
      "Sensor Integration",
    ],
  },
  {
    category: "Web Development",
    skills: ["React", "JavaScript", "HTML", "CSS"],
  },
  {
    category: "Professional",
    skills: ["Teamwork", "Mentoring", "Communication", "Problem Solving"],
  },
];

const experiences = [
  {
    role: "Ugandan Country Representative",
    organization: "Mastercard Foundation Scholars, USIU-Africa",
    period: "2025 – Present",
    description:
      "Represent Ugandan scholars, support communication, and contribute to coordination and community engagement among fellow scholars.",
  },
  {
    role: "Volunteer & Technology Mentor",
    organization: "Angaza Technology Literacy Center",
    period: "2025 – Present",
    description:
      "Support technology literacy and peer learning by helping learners develop practical digital skills and confidence using technology.",
  },
  {
    role: "ICT / Registry Intern",
    organization: "National Identification and Registration Authority (NIRA), Uganda",
    period: "January – April 2025",
    description:
      "Gained practical exposure to ICT support, registry processes, records handling, and administrative workflows.",
  },
];

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Skills", to: "/skills" },
  { label: "Experience", to: "/experience" },
  { label: "Contact", to: "/contact" },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading reveal">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h1>{title}</h1>
      {description && <p>{description}</p>}
    </div>
  );
}

function PageIntro({ eyebrow, title, description }) {
  return (
    <div className="page-intro">
      <span className="eyebrow">{eyebrow}</span>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="nav-container">
        <Link className="brand" to="/" onClick={closeMenu}>
          <img
            src="/profile.jpg"
            alt="Alfred Giranyutha"
            className="brand-photo"
          />
          <span className="brand-text">
            <strong>Alfred Giranyutha</strong>
            <small>Networking · IoT · Technology</small>
          </span>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                isActive ? "nav-route active" : "nav-route"
              }
              onClick={closeMenu}
            >
              {item.label}
            </NavLink>
          ))}

          <Link
            className="button button-small nav-cta"
            to="/contact"
            onClick={closeMenu}
          >
            Let's Connect <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <Link to="/" className="footer-brand">
          <span className="footer-mark">AG</span>
          <span>
            <strong>Alfred Giranyutha</strong>
            <small>Networking · IoT · Technology</small>
          </span>
        </Link>

        <p>
          Building practical skills and exploring technology that solves
          real-world problems.
        </p>

        <div className="footer-links">
          {navItems.map((item) => (
            <Link key={item.to} to={item.to}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Alfred Giranyutha</span>
        <a href="mailto:giranyuthaa@gmail.com">giranyuthaa@gmail.com</a>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <main>
      <section className="hero page-shell">
        <div className="hero-content reveal">
          <span className="availability">
            <span className="availability-dot" />
            Information Systems & Technology Student
          </span>

          <p className="hero-greeting">Hello, I'm</p>
          <h1>
            Alfred <span>Giranyutha</span>
          </h1>

          <h2>
            Networking, IoT &amp; practical technology solutions.
          </h2>

          <p className="hero-description">
            I am an Information Systems and Technology student at USIU-Africa
            with a concentration in Networking. I am interested in connected
            systems, wireless sensor networks, IoT, and using digital skills
            to address practical challenges.
          </p>

          <div className="hero-actions">
            <Link to="/projects" className="button">
              Explore My Projects <span aria-hidden="true">↗</span>
            </Link>
            <Link to="/about" className="button button-outline">
              More About Me
            </Link>
          </div>

          <div className="hero-socials">
            <a
              href="https://www.linkedin.com/in/giranyutha-alfred-576a4b265/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/Alfred123-oss/alfred.github.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
            <a href="mailto:giranyuthaa@gmail.com">Email ↗</a>
          </div>
        </div>

        <div className="hero-visual reveal">
          <div className="hero-image-frame">
            <div className="image-decoration image-decoration-one" />
            <div className="image-decoration image-decoration-two" />
            <img
              className="hero-image"
              src="/profile.jpg"
              alt="Portrait of Alfred Giranyutha"
            />
            <div className="image-caption">
              <span className="caption-icon">✳</span>
              <span>
                <strong>Learning by doing</strong>
                <small>Networking · IoT · Digital skills</small>
              </span>
            </div>
          </div>

          <div className="floating-tag floating-tag-top">
            <span>⌘</span> Networking
          </div>
          <div className="floating-tag floating-tag-bottom">
            <span>◉</span> Sensor Networks
          </div>
        </div>
      </section>

      <section className="quick-overview section-wrap">
        <div className="overview-card reveal">
          <span className="overview-number">01</span>
          <h3>Networking</h3>
          <p>Connectivity, configuration, and troubleshooting.</p>
          <Link to="/skills">Explore skills ↗</Link>
        </div>

        <div className="overview-card reveal">
          <span className="overview-number">02</span>
          <h3>IoT &amp; WSN</h3>
          <p>Connected sensors and practical monitoring concepts.</p>
          <Link to="/projects">View projects ↗</Link>
        </div>

        <div className="overview-card reveal">
          <span className="overview-number">03</span>
          <h3>Community</h3>
          <p>Mentoring, teamwork, and digital literacy.</p>
          <Link to="/experience">My experience ↗</Link>
        </div>
      </section>

      <section className="home-about section-wrap section-block">
        <div className="home-about-copy reveal">
          <span className="eyebrow">A LITTLE ABOUT ME</span>
          <h2>Technology is most valuable when it solves real problems.</h2>
          <p>
            My focus is on learning through practical projects, strengthening
            my networking knowledge, and exploring how connected devices can
            support communities and everyday work.
          </p>
          <Link to="/about" className="text-link">
            Read my story <span>→</span>
          </Link>
        </div>

        <div className="home-about-details reveal">
          <div>
            <span className="detail-symbol">⌁</span>
            <strong>Practical learning</strong>
            <p>Building understanding through hands-on work.</p>
          </div>
          <div>
            <span className="detail-symbol">◎</span>
            <strong>Community impact</strong>
            <p>Sharing knowledge and supporting digital skills.</p>
          </div>
        </div>
      </section>

      <section className="home-cta section-wrap">
        <div className="cta-panel reveal">
          <div>
            <span className="eyebrow">LET'S CONNECT</span>
            <h2>Have a project, idea, or opportunity in mind?</h2>
            <p>
              I welcome conversations about networking, IoT, technology, and
              community-focused initiatives.
            </p>
          </div>
          <Link to="/contact" className="button">
            Get in Touch <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

function About() {
  return (
    <main className="page-shell inner-page">
      <PageIntro
        eyebrow="ABOUT ME"
        title="My background and direction"
        description="A little about my studies, interests, values, and the work I hope to contribute to."
      />

      <section className="about-grid">
        <article className="about-main-card panel reveal">
          <span className="eyebrow">MY STORY</span>
          <h2>Learning technology with a practical mindset.</h2>
          <p>
            I am Alfred Giranyutha, an Information Systems and Technology
            student at the United States International University–Africa
            (USIU-Africa), concentrating in Networking.
          </p>
          <p>
            I am particularly interested in computer networking, wireless
            sensor networks, the Internet of Things, and connected systems. I
            want to strengthen my practical skills and learn how technology
            can improve services, support agriculture, and help communities.
          </p>
          <p>
            Alongside my studies, I value volunteering, mentoring, teamwork,
            and opportunities to help others build digital skills.
          </p>
        </article>

        <aside className="about-side-card panel reveal">
          <img
            src="/profile.jpg"
            alt="Alfred Giranyutha"
            className="about-photo"
          />
          <h3>Alfred Giranyutha</h3>
          <p>Information Systems &amp; Technology</p>
          <div className="about-meta">
            <span>University</span>
            <strong>USIU-Africa</strong>
          </div>
          <div className="about-meta">
            <span>Concentration</span>
            <strong>Networking</strong>
          </div>
          <div className="about-meta">
            <span>Interests</span>
            <strong>IoT &amp; Sensor Networks</strong>
          </div>
        </aside>
      </section>

      <section className="section-block">
        <SectionHeading
          eyebrow="WHAT MATTERS TO ME"
          title="My values"
          description="The principles that shape how I learn, work, and collaborate."
        />

        <div className="value-grid">
          <article className="value-card panel reveal">
            <span className="value-icon">⌘</span>
            <h3>Practical learning</h3>
            <p>
              Developing skills through experimentation, projects, and
              continuous improvement.
            </p>
          </article>
          <article className="value-card panel reveal">
            <span className="value-icon">◎</span>
            <h3>Community</h3>
            <p>
              Sharing knowledge and helping people access useful digital
              skills.
            </p>
          </article>
          <article className="value-card panel reveal">
            <span className="value-icon">↗</span>
            <h3>Growth</h3>
            <p>
              Staying curious, learning from others, and taking on new
              challenges.
            </p>
          </article>
        </div>
      </section>

      <section className="venture-section section-block">
        <div className="venture-panel panel reveal">
          <div className="venture-label">ENTREPRENEURSHIP</div>
          <h2>GrainPlus AgriLink</h2>
          <p>
            I am also developing GrainPlus AgriLink, an agricultural venture
            connected to maize milling and the goal of making quality maize
            flour more accessible. The longer-term direction includes
            strengthening farmer and customer connections, product packaging,
            and digital customer engagement.
          </p>
          <div className="tag-list">
            <span>Agriculture</span>
            <span>Value Addition</span>
            <span>Community Enterprise</span>
          </div>
        </div>
      </section>

      <div className="page-bottom-link">
        <Link to="/projects" className="button">
          Explore My Projects <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </main>
  );
}

function Projects() {
  const [activeProjectFilter, setActiveProjectFilter] = useState("All");

  const filters = [
    "All",
    "Networking",
    "IoT & WSN",
    "Web Development",
  ];

  const filteredProjects =
    activeProjectFilter === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeProjectFilter
        );

  return (
    <main className="page-shell inner-page">
      <PageIntro
        eyebrow="MY WORK"
        title="Projects and practical learning"
        description="A selection of project concepts and practical work that reflect my interests in networking, connected sensors, and web development."
      />

      <section className="projects-section">
        <div className="filter-bar" aria-label="Filter projects">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={`filter-button ${
                activeProjectFilter === filter ? "selected" : ""
              }`}
              onClick={() => setActiveProjectFilter(filter)}
              aria-pressed={activeProjectFilter === filter}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="project-grid">
          {filteredProjects.map((project, index) => (
            <article
              className="project-card panel reveal"
              key={project.title}
              style={{ "--card-order": index }}
            >
              <div className="project-card-top">
                <span className="project-category">{project.category}</span>
                <span className="project-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="project-art">
                <span className="project-art-symbol">
                  {project.category === "Networking"
                    ? "⌘"
                    : project.category === "IoT & WSN"
                      ? "◉"
                      : "〈/〉"}
                </span>
                <span className="project-art-line" />
                <span className="project-art-dot" />
              </div>

              <h2>{project.title}</h2>
              <p>{project.description}</p>

              <div className="tag-list">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <div className="project-card-bottom">
                <span className="project-status">
                  <span /> {project.status}
                </span>
                <Link to="/contact" className="project-link">
                  Discuss <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="empty-state">No projects match this category.</p>
        )}
      </section>

      <section className="home-cta section-block">
        <div className="cta-panel reveal">
          <div>
            <span className="eyebrow">COLLABORATION</span>
            <h2>Interested in working on something practical?</h2>
            <p>
              Get in touch to discuss ideas, projects, or learning
              opportunities.
            </p>
          </div>
          <Link to="/contact" className="button">
            Contact Me <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

function Skills() {
  const [activeSkillFilter, setActiveSkillFilter] = useState("All");

  const filters = [
    "All",
    "Networking",
    "IoT & Embedded",
    "Web Development",
    "Professional",
  ];

  const filteredGroups =
    activeSkillFilter === "All"
      ? skillGroups
      : skillGroups.filter(
          (group) => group.category === activeSkillFilter
        );

  return (
    <main className="page-shell inner-page">
      <PageIntro
        eyebrow="MY TOOLKIT"
        title="Skills and areas of learning"
        description="Skills I am developing through coursework, projects, volunteering, and independent practice."
      />

      <section className="skills-section">
        <div className="filter-bar skill-filter-bar" aria-label="Filter skills">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={`filter-button ${
                activeSkillFilter === filter ? "selected" : ""
              }`}
              onClick={() => setActiveSkillFilter(filter)}
              aria-pressed={activeSkillFilter === filter}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="skill-groups">
          {filteredGroups.map((group) => (
            <section className="skill-group panel reveal" key={group.category}>
              <div className="skill-group-heading">
                <span className="skill-group-icon">
                  {group.category === "Networking"
                    ? "⌘"
                    : group.category === "IoT & Embedded"
                      ? "◉"
                      : group.category === "Web Development"
                        ? "</>"
                        : "✳"}
                </span>
                <div>
                  <h2>{group.category}</h2>
                  <p>{group.skills.length} areas</p>
                </div>
              </div>

              <div className="skill-list">
                {group.skills.map((skill) => (
                  <span className="skill-chip" key={skill}>
                    <span className="skill-chip-dot" />
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="learning-note panel reveal">
        <span className="eyebrow">CONTINUOUS LEARNING</span>
        <h2>Focused on building stronger practical foundations.</h2>
        <p>
          My goal is to keep improving through hands-on networking practice,
          sensor-based projects, and building useful applications.
        </p>
      </section>
    </main>
  );
}

function Experience() {
  return (
    <main className="page-shell inner-page">
      <PageIntro
        eyebrow="MY JOURNEY"
        title="Experience and involvement"
        description="Experiences that have helped me grow in technology, service, communication, and leadership."
      />

      <section className="experience-layout">
        <div className="experience-intro panel reveal">
          <span className="eyebrow">LEARNING BEYOND CLASS</span>
          <h2>Growing through service and experience.</h2>
          <p>
            My experience includes community engagement, technology
            mentoring, representation, and exposure to ICT and registry
            processes.
          </p>
          <Link to="/contact" className="text-link">
            Connect with me <span>→</span>
          </Link>
        </div>

        <div className="timeline">
          {experiences.map((item, index) => (
            <article className="timeline-item reveal" key={item.role}>
              <div className="timeline-marker">
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="timeline-card panel">
                <span className="timeline-period">{item.period}</span>
                <h2>{item.role}</h2>
                <h3>{item.organization}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block">
        <SectionHeading
          eyebrow="BEYOND THE ROLE"
          title="What I bring"
          description="Skills and attitudes I aim to bring to teams and community initiatives."
        />

        <div className="value-grid">
          <article className="value-card panel reveal">
            <span className="value-icon">◎</span>
            <h3>Communication</h3>
            <p>Sharing information clearly and working with different people.</p>
          </article>
          <article className="value-card panel reveal">
            <span className="value-icon">↗</span>
            <h3>Initiative</h3>
            <p>Taking responsibility and contributing where support is needed.</p>
          </article>
          <article className="value-card panel reveal">
            <span className="value-icon">⌘</span>
            <h3>Learning mindset</h3>
            <p>Staying open to feedback and improving through practice.</p>
          </article>
        </div>
      </section>
    </main>
  );
}

function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("giranyuthaa@gmail.com");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = "mailto:giranyuthaa@gmail.com";
    }
  };

  return (
    <main className="page-shell inner-page">
      <PageIntro
        eyebrow="GET IN TOUCH"
        title="Let's start a conversation"
        description="Reach out about networking, IoT, projects, volunteering, or professional opportunities."
      />

      <section className="contact-layout">
        <div className="contact-copy panel reveal">
          <span className="eyebrow">CONTACT ME</span>
          <h2>Good ideas start with a conversation.</h2>
          <p>
            I am open to connecting with people who share an interest in
            technology, practical learning, digital skills, and community
            initiatives.
          </p>

          <button
            className="button"
            type="button"
            onClick={copyEmail}
          >
            {copied ? "Email Copied ✓" : "Copy Email Address"}
          </button>

          <a className="contact-email" href="mailto:giranyuthaa@gmail.com">
            giranyuthaa@gmail.com
          </a>
        </div>

        <div className="contact-methods">
          <a
            className="contact-method panel reveal"
            href="mailto:giranyuthaa@gmail.com"
          >
            <span className="contact-icon">@</span>
            <span className="contact-method-copy">
              <small>Email</small>
              <strong>giranyuthaa@gmail.com</strong>
            </span>
            <span className="contact-arrow">↗</span>
          </a>

          <a
            className="contact-method panel reveal"
            href="https://www.linkedin.com/in/giranyutha-alfred-576a4b265/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-icon">in</span>
            <span className="contact-method-copy">
              <small>LinkedIn</small>
              <strong>Connect professionally</strong>
            </span>
            <span className="contact-arrow">↗</span>
          </a>

          <a
            className="contact-method panel reveal"
            href="https://github.com/Alfred123-oss/alfred.github.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-icon">GH</span>
            <span className="contact-method-copy">
              <small>GitHub</small>
              <strong>View my code and projects</strong>
            </span>
            <span className="contact-arrow">↗</span>
          </a>

          <a
            className="contact-method panel reveal"
            href="https://wa.me/254717971898"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-icon">W</span>
            <span className="contact-method-copy">
              <small>WhatsApp</small>
              <strong>Send me a message</strong>
            </span>
            <span className="contact-arrow">↗</span>
          </a>

          <div className="contact-method panel reveal">
            <span className="contact-icon">☎</span>
            <span className="contact-method-copy">
              <small>Kenya</small>
              <strong>+254 717 971 898</strong>
              <a href="tel:+254717971898">Call this number</a>
            </span>
          </div>

          <div className="contact-method panel reveal">
            <span className="contact-icon">☎</span>
            <span className="contact-method-copy">
              <small>Uganda</small>
              <strong>+256 765 632 531</strong>
              <a href="tel:+256765632531">Call this number</a>
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}

function NotFound() {
  return (
    <main className="page-shell inner-page not-found">
      <span className="eyebrow">404 · PAGE NOT FOUND</span>
      <h1>This page doesn't exist.</h1>
      <p>The page may have moved, or the address may be incorrect.</p>
      <Link to="/" className="button">
        Return Home
      </Link>
    </main>
  );
}

function SiteLayout() {
  const location = useLocation();
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });

    const revealElements = document.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window)) {
      revealElements.forEach((element) => element.classList.add("visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 400);

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />

      {showTop && (
        <button
          type="button"
          className="back-to-top"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑
        </button>
      )}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <SiteLayout />
    </BrowserRouter>
  );
}
