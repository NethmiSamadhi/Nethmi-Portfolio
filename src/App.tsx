import { useEffect, useState } from 'react';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, MapPin, Menu, Moon, Sun, X } from 'lucide-react';

const projects = [
  {no:'01',kind:'Mobile · Applied AI',name:'SYNTRA',lead:'AI-powered personal financial planning and decision support.',copy:'Turns everyday financial data into clear guidance through a Financial Health Score, recommendations, what-if simulations and future planning tools.',stack:['React Native','Node.js','Firebase','Gemini AI'],accent:'mint',link:'https://github.com/NethmiSamadhi'},
  {no:'02',kind:'Desktop · Retail',name:'LAKDIWA POS',lead:'Offline-first operations for a real Sri Lankan retailer.',copy:'A production-focused point-of-sale system covering billing, inventory, GRN receiving, customers, expenses, thermal receipts and owner reporting.',stack:['React','Electron','Express','SQLite'],accent:'blue'},
  {no:'03',kind:'Full-stack · Workflow',name:'TeamPulse',lead:'Weekly reporting with secure role-based review workflows.',copy:'Employees submit progress while leads and managers review reports, track versions and understand team performance through dashboard analytics.',stack:['React','TypeScript','Express','Prisma'],accent:'violet',link:'https://github.com/NethmiSamadhi/TeamPulse-Weekly-Report-System'}
];

const skills = [
  ['Frontend','React, TypeScript, JavaScript, HTML, CSS, Vite'],
  ['Backend','Node.js, Express, PHP, Laravel, Java, REST APIs'],
  ['Mobile','React Native, Expo, Android Java'],
  ['Data','MySQL, SQLite, Oracle, Firebase, Prisma'],
  ['AI & Analytics','Gemini API, Python, OpenCV, Data Warehousing'],
  ['Tools','Git, GitHub, Postman, Figma, VS Code']
];

function App(){
  const [menu,setMenu]=useState(false); const [light,setLight]=useState(false);
  useEffect(()=>{const observer=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));return()=>observer.disconnect()},[]);
  return <div className={light?'app light':'app'}>
    <div className="sky" aria-hidden="true"><i/><i/><i/><b/><b/></div>
    <header><nav className="nav shell"><a href="#home" className="logo">NS<span>.</span></a><div className={menu?'links open':'links'}>{['About','Work','Skills','Journey','Contact'].map(x=><a key={x} href={'#'+x.toLowerCase()} onClick={()=>setMenu(false)}>{x}</a>)}</div><div className="nav-actions"><button className="icon-btn" onClick={()=>setLight(!light)} aria-label="Change colour theme">{light?<Moon size={17}/>:<Sun size={17}/>}</button><a className="talk" href="mailto:nethmisamadhi822@gmail.com">Let's talk <ArrowUpRight size={16}/></a><button className="menu-btn" onClick={()=>setMenu(!menu)} aria-label="Open navigation">{menu?<X/>:<Menu/>}</button></div></nav></header>

    <main>
      <section className="hero shell" id="home"><div className="hero-copy">
        <div className="available"><span/>Available for software engineering internships</div>
        <p className="hello">Hello, I'm</p><h1>Nethmi<br/><em>Samadhi.</em></h1>
        <h2>I build practical software and intelligent digital experiences.</h2>
        <p className="intro">Third-year BSc (Hons) Computer Science undergraduate specialising in Applied Artificial Intelligence, with an HND in Software Engineering.</p>
        <div className="actions"><a className="primary" href="#work">Explore my work <ArrowDown size={17}/></a><a className="secondary" href="#contact">Contact me <Mail size={17}/></a></div>
        <div className="social"><a href="https://github.com/NethmiSamadhi" target="_blank" rel="noreferrer"><Github size={17}/>GitHub</a><a href="https://www.linkedin.com/in/nethmi-samadhi-271642383/" target="_blank" rel="noreferrer"><Linkedin size={17}/>LinkedIn</a><a href="mailto:nethmisamadhi822@gmail.com"><Mail size={17}/>Email</a><span><MapPin size={17}/>Colombo, Sri Lanka</span></div>
      </div><div className="identity" aria-hidden="true"><div className="ring r1"><span>&lt;/&gt;</span></div><div className="ring r2"><span>AI</span></div><div className="hero-monogram"><strong>NS</strong><small>BUILD · LEARN · GROW</small></div><div className="status-card"><i/><div><small>Current focus</small><strong>Applied AI + Full-stack</strong></div></div></div>
      <div className="scroll">Scroll to discover <span/></div></section>

      <section className="section shell about" id="about"><div className="section-title reveal"><span>01 — About</span><h2>Curiosity became code.<br/><em>Code became impact.</em></h2></div><div className="about-copy reveal"><p className="large">I enjoy taking a real problem from an early idea to a thoughtful, working product.</p><p>My work spans web, mobile, databases, AI integrations and embedded systems. I care about clear user experiences, maintainable engineering and understanding why a solution works—not only making it run.</p><p>Beyond development, I actively participate in the CSSL and IEEE student communities at NIBM and bring the same focus and teamwork to badminton.</p><div className="numbers"><div><strong>10+</strong><span>Projects built</span></div><div><strong>3rd</strong><span>Year undergraduate</span></div><div><strong>∞</strong><span>Drive to learn</span></div></div></div></section>

      <section className="section work" id="work"><div className="shell"><div className="section-title reveal"><span>02 — Selected work</span><h2>Solutions with a reason<br/><em>to exist.</em></h2></div><div className="project-list">{projects.map((p,i)=><article className={'project reveal '+p.accent} key={p.name}><div className="project-art"><div className="mock"><span>{p.kind}</span><strong>{p.name}</strong><div className="mock-lines"><i/><i/><i/></div><small>{p.stack[0]} · {p.stack[1]}</small></div><b>{p.no}</b></div><div className="project-info"><span>{p.kind}</span><h3>{p.name}</h3><h4>{p.lead}</h4><p>{p.copy}</p><ul>{p.stack.map(s=><li key={s}>{s}</li>)}</ul>{p.link&&<a href={p.link} target="_blank" rel="noreferrer">View repository <ArrowUpRight size={17}/></a>}</div></article>)}</div><div className="all-projects reveal"><p>Want to see more experiments, coursework and engineering projects?</p><a href="https://github.com/NethmiSamadhi?tab=repositories" target="_blank" rel="noreferrer"><Github size={18}/> Explore all projects on GitHub <ArrowUpRight size={17}/></a></div></div></section>

      <section className="section shell" id="skills"><div className="section-title reveal"><span>03 — Capabilities</span><h2>A practical engineering<br/><em>toolkit.</em></h2></div><div className="skill-grid reveal">{skills.map((s,i)=><div key={s[0]}><span>0{i+1}</span><h3>{s[0]}</h3><p>{s[1]}</p></div>)}</div></section>

      <section className="section journey" id="journey"><div className="shell"><div className="section-title reveal"><span>04 — Journey</span><h2>Learning with<br/><em>direction.</em></h2></div><div className="timeline reveal"><div><time>Present</time><span/><article><small>National Institute of Business Management</small><h3>BSc (Hons) Computer Science</h3><p>Specialising in Applied Artificial Intelligence · Third year</p></article></div><div><time>Completed</time><span/><article><small>National Institute of Business Management</small><h3>Higher National Diploma</h3><p>Software Engineering</p></article></div><div><time>Beyond class</time><span/><article><small>Community & teamwork</small><h3>CSSL · IEEE · Badminton</h3><p>Active student participation and continuous personal development</p></article></div></div></div></section>

      <section className="section contact shell reveal" id="contact"><div className="contact-card"><div className="contact-photo"><img src="/images/nethmi-samadhi.jpeg" alt="Professional portrait of Nethmi Samadhi"/></div><div className="contact-copy"><span>05 — Contact</span><h2>Let's build something<br/><em>meaningful.</em></h2><p>I'm looking for a software engineering internship where I can contribute, learn quickly and grow with an ambitious team.</p><div className="contact-actions"><a className="contact-email" href="mailto:nethmisamadhi822@gmail.com"><Mail size={19}/> Email me <ArrowUpRight size={18}/></a><a className="contact-linkedin" href="https://www.linkedin.com/in/nethmi-samadhi-271642383/" target="_blank" rel="noreferrer"><Linkedin size={19}/> Connect on LinkedIn <ArrowUpRight size={18}/></a></div></div></div></section>
    </main>
    <footer><div className="shell"><a href="#home" className="logo">NS<span>.</span></a><p>Software Engineering · Applied AI · Colombo</p><div><a href="https://github.com/NethmiSamadhi" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/nethmi-samadhi-271642383/" target="_blank" rel="noreferrer">LinkedIn</a><a href="mailto:nethmisamadhi822@gmail.com">Email</a><a href="#home">Back to top ↑</a></div></div></footer>
  </div>
}
export default App;
