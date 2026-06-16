import React from 'react';

const projects = [
  {
    title: 'Robot Building',
    text: 'I enjoy turning parts, wires, motors, and ideas into working robots.',
    accent: 'cyan',
  },
  {
    title: 'Creative Coding',
    text: 'I like learning how code can control movement, sensors, and reactions.',
    accent: 'green',
  },
  {
    title: 'Problem Solving',
    text: 'When something does not work, I test, fix, and improve it step by step.',
    accent: 'yellow',
  },
];

const timeline = [
  ['School', 'I belong to Drishti School, where I learn and grow every day.'],
  ['Teachers', 'My robotics teachers are very supportive and help me a lot in my robotics work.'],
  ['Goal', 'I want to keep learning robotics and build cooler, smarter projects.'],
];

function RobotHero() {
  return (
    <div className="robot-stage" aria-label="Animated robot illustration">
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <svg className="robot" viewBox="0 0 360 360" role="img" aria-label="Fun robot">
        <defs>
          <linearGradient id="botBody" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#38d5e8" />
            <stop offset="100%" stopColor="#76f28b" />
          </linearGradient>
          <linearGradient id="screen" x1="0" x2="1">
            <stop offset="0%" stopColor="#081216" />
            <stop offset="100%" stopColor="#13242a" />
          </linearGradient>
        </defs>
        <path className="beam" d="M74 322 C112 290 250 290 286 322" />
        <g className="antenna">
          <path d="M180 86V42" />
          <circle cx="180" cy="31" r="15" />
        </g>
        <rect className="head" x="88" y="86" width="184" height="126" rx="30" />
        <rect className="screen" x="116" y="124" width="128" height="48" rx="20" />
        <circle className="eye left-eye" cx="153" cy="148" r="8" />
        <circle className="eye right-eye" cx="208" cy="148" r="8" />
        <path className="smile" d="M160 178 C172 188 192 188 204 178" />
        <rect className="body" x="92" y="206" width="176" height="84" rx="24" />
        <g className="left-arm">
          <path d="M93 226H49c-16 0-29 13-29 29v20" />
          <circle cx="20" cy="291" r="16" />
        </g>
        <g className="right-arm">
          <path d="M267 226h44c16 0 29 13 29 29v20" />
          <circle cx="340" cy="291" r="16" />
        </g>
        <circle className="wheel" cx="132" cy="306" r="24" />
        <circle className="wheel" cx="228" cy="306" r="24" />
      </svg>
      <div className="floating-chip chip-a">Grade 7</div>
      <div className="floating-chip chip-b">Robotics</div>
      <div className="floating-chip chip-c">Drishti School</div>
    </div>
  );
}

function App() {
  return (
    <main className="site-shell">
      <nav className="nav">
        <a className="brand" href="#home" aria-label="Shivteg portfolio home">
          <span className="brand-mark">ST</span>
          <span>Shivteg</span>
        </a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#robotics">Robotics</a>
          <a href="#school">School</a>
          <a href="#website">Website</a>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="kicker">Grade 7 Robotics Learner</p>
          <h1>Hi, I am Shivteg.</h1>
          <p className="hero-text">
            I belong to Drishti School, and I love robotics so much. I like building,
            testing, coding, and improving my ideas until they become real projects.
            Visit my website where you can animate your name and try creative text
            effects: <a href="https://shivanimate.vercel.app" target="_blank" rel="noreferrer" style={{color: 'var(--cyan)', textDecoration: 'underline'}}>shivanimate.vercel.app</a>.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="https://shivanimate.vercel.app" target="_blank" rel="noreferrer">
              Visit My Website ↗
            </a>
            <a className="button secondary" href="#robotics">Robotics Work</a>
            <a className="button secondary" href="#school">My School</a>
          </div>
        </div>
        <RobotHero />
      </section>

      <section
        id="website"
        style={{
          margin: '0 auto 42px',
          maxWidth: '1120px',
          padding: '22px 24px',
          border: '1px solid rgba(118, 242, 139, 0.35)',
          borderRadius: '18px',
          background: 'rgba(8, 18, 22, 0.72)',
          boxShadow: '0 18px 55px rgba(0, 0, 0, 0.25)',
        }}
      >
        <p className="section-tag">My Website</p>
        <h2 style={{ margin: '8px 0 10px' }}>Visit my website</h2>
        <p style={{ margin: '0 0 18px', maxWidth: '720px' }}>
          This is my website where you can animate your name and try creative
          text effects.
        </p>
        <a
          className="button primary"
          href="https://shivanimate.vercel.app"
          target="_blank"
          rel="noreferrer"
        >
          shivanimate.vercel.app
        </a>
      </section>

      <section className="about band" id="about">
        <div>
          <p className="section-tag">About Me</p>
          <h2>A young maker who likes learning by building.</h2>
        </div>
        <p>
          I am in Grade 7, but I already enjoy exploring how robots move, sense,
          react, and solve problems. Robotics makes learning feel exciting because
          every project has something new to discover.
        </p>
      </section>

      <section className="cards-section" id="robotics">
        <div className="section-heading">
          <p className="section-tag">Robotics Energy</p>
          <h2>What I Like Working On</h2>
        </div>
        <div className="cards">
          {projects.map((project) => (
            <article className={`card ${project.accent}`} key={project.title}>
              <span className="card-light" />
              <h3>{project.title}</h3>
              <p>{project.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="timeline-section" id="school">
        <div className="section-heading">
          <p className="section-tag">Support System</p>
          <h2>Drishti School and My Teachers</h2>
        </div>
        <div className="timeline">
          {timeline.map(([label, text]) => (
            <article className="timeline-item" key={label}>
              <strong>{label}</strong>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer">
        <span>Built for Shivteg</span>
        <a href="https://shivanimate.vercel.app" target="_blank" rel="noreferrer">
          This is my website: shivanimate.vercel.app
        </a>
      </footer>
    </main>
  );
}

export default App;
