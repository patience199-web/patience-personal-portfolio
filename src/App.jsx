import React, { useEffect, useMemo, useState } from 'react';

const EMAIL = 'pwatimudhara@gmail.com';
const PHONE_PRIMARY = '+263 786 149 821';
const PHONE_SECONDARY = '+263 774 848 434';
const LINKEDIN = 'https://www.linkedin.com/in/patience-watimudhara-488727354/';

const projects = [
  {
    id: 'internship',
    title: 'Internship Management System',
    category: 'Systems',
    status: 'Deployed · Integration in progress',
    description: 'A platform designed to help students register internship placements, manage attachment details and assessment schedules. The frontend is deployed; PostgreSQL integration is being completed for full database-backed functionality.',
    stack: ['React', 'Vite', 'Django REST', 'PostgreSQL', 'Vercel'],
    link: 'https://internship-management-system-8yxu.vercel.app/',
    linkLabel: 'View deployment',
    visual: 'internship',
    number: '01',
  },
  {
    id: 'school',
    title: 'School Management System',
    category: 'Systems',
    status: 'In development',
    description: 'An ongoing information-systems project exploring how digital tools can support school administration and bring everyday academic processes into one organised platform.',
    stack: ['React', 'Vite', 'Django', 'PostgreSQL'],
    visual: 'school',
    number: '02',
  },
  {
    id: 'zari',
    title: 'Zari Vaal Lodge',
    category: 'Web',
    status: 'Live website',
    description: 'Designed and developed a hospitality website from scratch using WordPress and Elementor, presenting the lodge and its services through a clear, professional online presence.',
    stack: ['WordPress', 'Elementor', 'Website design'],
    link: 'https://zarivaallodge.co.za/',
    linkLabel: 'Visit website',
    visual: 'zari',
    number: '03',
  },
  {
    id: 'oven',
    title: 'Oven Delights',
    category: 'Web',
    status: 'Live website',
    description: 'A website for a cake-baking business, organised to showcase its brand, baked products and customer-facing information.',
    stack: ['WordPress', 'Website content', 'Design'],
    link: 'https://ovendelights.great-site.net/',
    linkLabel: 'Visit website',
    visual: 'oven',
    number: '04',
  },
  {
    id: 'esport',
    title: 'eSportBeHub',
    category: 'Web',
    status: 'Client project',
    description: 'A client-focused sports betting website project, applying web development skills to deliver a digital platform aligned with the project brief.',
    stack: ['Web development', 'Client project'],
    link: 'https://esportbehub.com/',
    linkLabel: 'Visit website',
    visual: 'esport',
    number: '05',
  },
];

const filters = ['All', 'Web', 'Systems'];

function Icon({ name, size = 18 }) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  };

  const paths = {
    arrow: <><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></>,
    external: <><path d="M14 4h6v6" /><path d="M10 14 20 4" /><path d="M20 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h6" /></>,
    sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" /></>,
    moon: <path d="M20.8 13A8.5 8.5 0 0 1 11 3.2 8.5 8.5 0 1 0 20.8 13Z" />,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    close: <><path d="m18 6-12 12M6 6l12 12" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    pin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    code: <><path d="m8 8-4 4 4 4m8-8 4 4-4 4m-3-11-2 14" /></>,
    layers: <><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5M3 16l9 5 9-5" /></>,
    search: <><circle cx="10.8" cy="10.8" r="6.8" /><path d="m16 16 5 5" /></>,
    database: <><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" /></>,
    check: <path d="m5 12 4 4L19 6" />,
  };

  return <svg {...common}>{paths[name] || paths.arrow}</svg>;
}

function ProjectVisual({ type }) {
  const visualContent = {
    internship: <div className="mini-dashboard"><div className="mini-sidebar"><i /><i /><i /><i /></div><div className="mini-main"><div className="mini-topline" /><div className="mini-kpis"><i /><i /><i /></div><div className="mini-panel"><b /><span /><span /><span /></div></div></div>,
    school: <div className="mini-school"><div className="school-header"><i /><span /><b /></div><div className="school-grid"><i /><i /><i /><i /></div><div className="school-lines"><span /><span /><span /></div></div>,
    zari: <div className="mini-hospitality"><span className="mini-eyebrow">WELCOME TO</span><b>ZARI VAAL<br />LODGE</b><i /><span className="mini-cta">DISCOVER MORE ↗</span></div>,
    oven: <div className="mini-bakery"><span className="bakery-sun" /><span className="mini-eyebrow">FRESHLY MADE</span><b>Oven<br />Delights</b><span className="bakery-dots">✳ &nbsp; ✳ &nbsp; ✳</span></div>,
    esport: <div className="mini-esport"><div className="esport-head"><b>eSPORT<span>BE</span>HUB</b><i>LIVE</i></div><div className="esport-score"><span>TEAM A</span><b>2 : 1</b><span>TEAM B</span></div><div className="esport-bars"><i /><i /><i /></div></div>,
  };
  return <div className={`project-visual visual-${type}`} aria-hidden="true">{visualContent[type]}</div>;
}

function App() {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('pw-theme') || 'dark'; }
    catch { return 'dark'; }
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#101916' : '#f4f5ef');
    try { localStorage.setItem('pw-theme', theme); } catch { /* storage may be unavailable */ }
  }, [theme]);

  useEffect(() => {
    const nodes = document.querySelectorAll('[data-reveal]');
    if (!('IntersectionObserver' in window)) {
      nodes.forEach((node) => node.classList.add('is-visible'));
      return undefined;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const visibleProjects = useMemo(
    () => activeFilter === 'All' ? projects : projects.filter((project) => project.category === activeFilter),
    [activeFilter],
  );

  const closeMenu = () => setMenuOpen(false);
  const toggleTheme = () => setTheme((current) => current === 'dark' ? 'light' : 'dark');

  return (
    <div className="site-shell">
      <div className="page-grain" aria-hidden="true" />
      <header className="site-header">
        <a className="brand-mark" href="#home" onClick={closeMenu} aria-label="Patience Watimudhara home">
          <span className="brand-symbol">P<span>.</span></span>
          <span className="brand-name">PATIENCE WATIMUDHARA</span>
        </a>
        <nav className={`main-nav ${menuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#work" onClick={closeMenu}>Selected work</a>
          <a href="#skills" onClick={closeMenu}>Capabilities</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
        <div className="header-actions">
          <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`} title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={17} />
          </button>
          <a className="header-cta" href="#contact">Let's talk <Icon name="arrow" size={15} /></a>
          <button className="mobile-menu-toggle" type="button" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen}>
            <Icon name={menuOpen ? 'close' : 'menu'} size={20} />
          </button>
        </div>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy" data-reveal>
            <div className="eyebrow"><span className="status-dot" /> AVAILABLE FOR THE RIGHT OPPORTUNITY</div>
            <h1>Building digital<br /><span className="title-accent">things that</span><br />make a difference<span className="title-period">.</span></h1>
            <p className="hero-intro">I'm <strong>Patience Watimudhara</strong> — a Software &amp; Web Developer blending practical engineering with a strong understanding of business, digital experiences and the people who use them.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <Icon name="arrow" size={17} /></a>
              <a className="text-link" href="/Patience_Watimudhara_CV.pdf" download>Download CV <span>↓</span></a>
            </div>
            <div className="hero-meta">
              <span><Icon name="pin" size={15} /> Harare, Zimbabwe</span>
              <span className="meta-divider" />
              <span>Open to international remote roles &amp; relocation</span>
            </div>
          </div>
          <div className="hero-art" data-reveal>
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-cross cross-one">+</div>
            <div className="art-cross cross-two">+</div>
            <div className="hero-card card-back"><span>THINK</span><b>Curious<br />by nature.</b><small>Always learning ↗</small></div>
            <div className="hero-card card-front">
              <div className="card-top"><span>PW / 01</span><span className="card-live"><i /> OPEN TO WORK</span></div>
              <div className="monogram">P<span>W</span><i>.</i></div>
              <div className="card-bottom"><b>SOFTWARE<br />&amp; WEB DEVELOPER</b><span>DESIGN · BUILD · IMPROVE</span></div>
            </div>
            <div className="floating-chip chip-code"><Icon name="code" size={17} /> <span>Build with purpose</span></div>
            <div className="floating-chip chip-stack"><span className="chip-stack-icon">✳</span><span>Ideas into<br />experiences</span></div>
          </div>
          <div className="hero-scroll"><span /> SCROLL TO EXPLORE</div>
        </section>

        <section className="ticker" aria-label="Areas of work">
          <div className="ticker-track">
            {['SOFTWARE DEVELOPMENT', 'WEB EXPERIENCES', 'INFORMATION SYSTEMS', 'DIGITAL SOLUTIONS', 'SOFTWARE DEVELOPMENT', 'WEB EXPERIENCES', 'INFORMATION SYSTEMS', 'DIGITAL SOLUTIONS'].map((item, index) => <span key={`${item}-${index}`}>{item}<i>✳</i></span>)}
          </div>
        </section>

        <section className="about section-wrap section-pad" id="about">
          <div className="section-kicker" data-reveal><span>01 / ABOUT</span><i /></div>
          <div className="about-layout">
            <h2 data-reveal>Curiosity is where<br />good work <em>begins.</em></h2>
            <div className="about-copy" data-reveal>
              <p className="lead">I turn ideas and everyday challenges into useful digital experiences — from business websites to systems that help people work smarter.</p>
              <p>With a background in Electronic Commerce and hands-on experience across development, website administration and digital marketing, I bring both a technical mindset and an appreciation for how technology supports real business needs.</p>
              <p>I'm growing my craft through practical projects, experimentation and continuous learning. I value thoughtful problem-solving, clear communication and building things that are useful beyond the screen.</p>
              <a className="inline-link" href={LINKEDIN} target="_blank" rel="noreferrer">More about my journey <Icon name="external" size={14} /></a>
            </div>
          </div>
          <div className="stats-row" data-reveal>
            <div className="stat"><b>2.1</b><span>Honours degree</span></div>
            <div className="stat"><b>05<span>+</span></b><span>Selected projects</span></div>
            <div className="stat"><b>02</b><span>Systems projects</span></div>
            <div className="stat"><b>360°</b><span>Digital perspective</span></div>
          </div>
        </section>

        <section className="work-section section-pad" id="work">
          <div className="section-wrap">
            <div className="section-kicker" data-reveal><span>02 / SELECTED WORK</span><i /></div>
            <div className="section-heading-row" data-reveal>
              <div><h2>Making ideas<br /><em>real.</em></h2><p>A selection of websites and systems I've built, contributed to or am currently developing.</p></div>
              <div className="project-filters" role="group" aria-label="Filter projects">
                {filters.map((filter) => <button key={filter} type="button" className={activeFilter === filter ? 'filter-active' : ''} onClick={() => setActiveFilter(filter)} aria-pressed={activeFilter === filter}>{filter}</button>)}
              </div>
            </div>
            <div className="projects-grid">
              {visibleProjects.map((project, index) => (
                <article className={`project-card ${project.category === 'Systems' ? 'project-card-wide' : ''}`} key={project.id} data-reveal>
                  <div className="project-image-wrap">
                    <ProjectVisual type={project.visual} />
                    <span className="project-number">{project.number} / 05</span>
                    <span className="project-category">{project.category}</span>
                  </div>
                  <div className="project-info">
                    <div className="project-title-row"><h3>{project.title}</h3><span className="project-status"><i />{project.status}</span></div>
                    <p>{project.description}</p>
                    <div className="project-footer">
                      <div className="tag-list">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
                      {project.link ? <a className="project-link" href={project.link} target="_blank" rel="noreferrer" aria-label={`${project.linkLabel}: ${project.title}`}><Icon name="external" size={16} /></a> : <span className="project-in-progress">IN PROGRESS</span>}
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <p className="work-note" data-reveal>Some projects are live; others are works in progress. Project status is shown transparently above.</p>
          </div>
        </section>

        <section className="capabilities section-wrap section-pad" id="skills">
          <div className="section-kicker" data-reveal><span>03 / CAPABILITIES</span><i /></div>
          <div className="section-heading-row" data-reveal>
            <div><h2>A toolkit for<br /><em>what's next.</em></h2></div>
            <p className="heading-aside">A growing mix of development technologies, practical tools and digital skills I use to take projects from idea to execution.</p>
          </div>
          <div className="capability-grid">
            <div className="capability-card" data-reveal><div className="capability-icon"><Icon name="code" size={21} /></div><span className="capability-index">01</span><h3>Development</h3><p>Building responsive interfaces and application functionality.</p><div className="skill-pills"><span>HTML</span><span>CSS</span><span>JavaScript</span><span>Python</span><span>PHP</span><span>React</span><span>Vite</span><span>Node.js</span><span>Flask</span><span>Django</span></div></div>
            <div className="capability-card" data-reveal><div className="capability-icon"><Icon name="database" size={21} /></div><span className="capability-index">02</span><h3>Data &amp; systems</h3><p>Working with structured data and business-focused platforms.</p><div className="skill-pills"><span>PostgreSQL</span><span>MySQL</span><span>Database management</span><span>Information systems</span><span>Git</span><span>GitHub</span></div></div>
            <div className="capability-card" data-reveal><div className="capability-icon"><Icon name="layers" size={21} /></div><span className="capability-index">03</span><h3>Web &amp; digital</h3><p>Creating, maintaining and improving business websites.</p><div className="skill-pills"><span>WordPress</span><span>Elementor</span><span>Theme &amp; plugins</span><span>Domains</span><span>DNS</span><span>Website administration</span></div></div>
            <div className="capability-card" data-reveal><div className="capability-icon"><Icon name="search" size={21} /></div><span className="capability-index">04</span><h3>SEO &amp; content</h3><p>Supporting discoverability, content quality and performance.</p><div className="skill-pills"><span>Google Analytics</span><span>Search Console</span><span>Semrush</span><span>Screaming Frog</span><span>Keyword research</span><span>Content writing</span><span>Canva</span></div></div>
          </div>
          <div className="learning-strip" data-reveal><span className="learning-star">✳</span><p><b>Always learning.</b> I'm actively strengthening my skills through personal projects and online professional development.</p><span className="learning-label">GROWTH MINDSET / ON</span></div>
        </section>

        <section className="experience-section section-pad" id="experience">
          <div className="section-wrap">
            <div className="section-kicker" data-reveal><span>04 / EXPERIENCE &amp; EDUCATION</span><i /></div>
            <div className="experience-layout">
              <div className="experience-intro" data-reveal><h2>Grounded in<br /><em>experience.</em></h2><p>Every role and project has added a new layer to how I approach technology, collaboration and problem-solving.</p></div>
              <div className="timeline">
                <article className="timeline-item" data-reveal><div className="timeline-date">FEB 2025 — PRESENT</div><div className="timeline-content"><span className="timeline-type">PROFESSIONAL EXPERIENCE</span><h3>Web Developer</h3><h4>Suwani Plant Hire</h4><ul><li>Develop and maintain WordPress websites for client businesses.</li><li>Monitor performance and search visibility using Google Analytics, Google Search Console and Google Site Kit.</li><li>Carry out technical SEO reviews, keyword research and content optimisation.</li><li>Manage themes, plugins, domains and DNS records, and create marketing graphics.</li></ul></div></article>
                <article className="timeline-item" data-reveal><div className="timeline-date">JAN 2023 — AUG 2023</div><div className="timeline-content"><span className="timeline-type">INTERNSHIP</span><h3>Internship Student</h3><h4>Harare Institute of Technology · E-commerce Department</h4><ul><li>Supported database management, data organisation and troubleshooting activities.</li><li>Contributed to the development of an internship management solution for students.</li></ul></div></article>
                <article className="timeline-item" data-reveal><div className="timeline-date">2024</div><div className="timeline-content"><span className="timeline-type">EDUCATION</span><h3>Bachelor of Technology Honours</h3><h4>Electronic Commerce · Harare Institute of Technology</h4><p className="timeline-description">Second Class Upper Division (2.1). Built a foundation across technology, digital business and information systems.</p></div></article>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section section-pad" id="contact">
          <div className="section-wrap contact-inner">
            <div className="section-kicker" data-reveal><span>05 / LET'S CONNECT</span><i /></div>
            <div className="contact-layout">
              <div data-reveal><p className="contact-pretitle">HAVE A PROJECT OR OPPORTUNITY?</p><h2>Let's make<br /><em>something matter.</em></h2><p className="contact-copy">I'm open to conversations about junior software and web development roles, digital projects, international remote opportunities and relocation pathways.</p><a className="button button-primary contact-button" href={`mailto:${EMAIL}?subject=${encodeURIComponent('Opportunity for Patience Watimudhara')}`}>Start a conversation <Icon name="arrow" size={17} /></a></div>
              <div className="contact-details" data-reveal>
                <div className="contact-detail"><span>EMAIL</span><a href={`mailto:${EMAIL}`}>{EMAIL} <Icon name="external" size={14} /></a></div>
                <div className="contact-detail"><span>PHONE</span><a href="tel:+263786149821">{PHONE_PRIMARY}</a><a href="tel:+263774848434">{PHONE_SECONDARY}</a></div>
                <div className="contact-detail"><span>LOCATION</span><b>Harare, Zimbabwe</b></div>
                <div className="contact-detail"><span>PROFESSIONAL PROFILE</span><a href={LINKEDIN} target="_blank" rel="noreferrer">Connect on LinkedIn <Icon name="external" size={14} /></a></div>
                <div className="availability-note"><i /> OPEN TO INTERNATIONAL REMOTE WORK &amp; RELOCATION</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="footer-brand" href="#home">PW<span>.</span></a>
        <span>Designed &amp; built with intention.</span>
        <span>© {new Date().getFullYear()} Patience Watimudhara</span>
        <a className="back-top" href="#home">BACK TO TOP ↑</a>
      </footer>
    </div>
  );
}

export default App;
