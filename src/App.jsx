import React, { useState, useEffect } from "react";
import {
  Moon, Sun, Mail, Phone, MapPin, ExternalLink, ArrowUpRight,
  Terminal, Globe, Send, CheckCircle2,
} from "lucide-react";

/* ---------------------------------------------------------------
   DATA
---------------------------------------------------------------- */

const SKILL_GROUPS = [
  {
    label: "frontend",
    items: ["React.js", "Next.js", "React Native", "TypeScript", "JavaScript (ES6+)", "PWA", "Tailwind CSS", "Ant Design"],
  },
  {
    label: "state",
    items: ["Redux", "Redux Toolkit", "React Hook Form", "React Query", "Context API"],
  },
  {
    label: "backend",
    items: ["Node.js", "Express.js", "REST APIs", "GraphQL", "PHP", "Laravel"],
  },
  {
    label: "cms",
    items: ["WordPress", "Elementor", "ACF", "Visual Composer", "WPML", "Joomla"],
  },
  {
    label: "tools",
    items: ["Git", "CI/CD", "Docker", "AWS", "Firebase", "Webpack"],
  },
];

const PROFICIENCY = [
  { name: "React.js", level: 95 },
  { name: "Next.js", level: 90 },
  { name: "JavaScript", level: 95 },
  { name: "WordPress", level: 90 },
  { name: "PHP", level: 70 },
  { name: "Node.js", level: 75 },
  { name: "React Native", level: 65 },
  { name: "Tailwind CSS", level: 85 },
  { name: "Express.js", level: 75 },
  { name: "Ant Design", level: 75 },
  { name: "Git", level: 85 },
];

const EXPERIENCE = [
  {
    company: "Delfard Tejarat",
    role: "Senior Frontend Developer — Full-time",
    date: "May 2023 — Present",
    tags: ["React.js", "PWA", "REST API", "React Hook Form", "Redux", "React Query"],
    bullets: [
      "Building a Progressive Web App with a React.js panel for a delivery-tracking product.",
      "Managing forms with React Hook Form and app state with Redux and React Query.",
    ],
    links: ["vtap.ir", "sabaf.rmto.ir", "delfard.com", "cbls.ir"],
  },
  {
    company: "Bernet",
    role: "WordPress Developer — Part-time, Remote",
    date: "Aug 2024 — Jan 2025",
    tags: ["WordPress", "Redux plugin", "WPML"],
    bullets: [
      "Built and maintained WordPress sites with a Redux-based plugin setup.",
      "Ran a multilingual site on WPML for a two-language audience.",
    ],
    links: ["arziz.com", "komodeshop.ir"],
  },
  {
    company: "Hacoupian",
    role: "Full-Stack Developer — Full-time",
    date: "Mar 2020 — Jul 2022",
    tags: ["WordPress", "React.js", "Tailwind", "Antd", "REST API", "Redux", "Leaflet"],
    bullets: [
      "Combined WordPress and a React.js + Tailwind + Antd frontend for an e-commerce platform.",
      "Wired the app up to REST APIs with Redux, and added interactive maps with Leaflet.",
    ],
    links: ["hacoupian.net", "shop.hacoupian.net", "my.hacoupian.net", "hacotech.hacoupian.net"],
  },
  {
    company: "NovinMarketing",
    role: "WordPress Developer — Full-time",
    date: "Jan 2019 — Feb 2020",
    tags: ["WordPress", "REST API", "Redux plugin", "Elementor", "ACF"],
    bullets: [
      "Built REST-API-driven WordPress sites with custom Redux-powered plugins.",
      "Created flexible, editor-friendly pages with Elementor and Advanced Custom Fields.",
    ],
    links: ["novinmarketing.com", "diacobin.com", "zarrinfood.com.au", "barfab.co", "mcathermowood.co", "mokaabgroup.com"],
  },
  {
    company: "EspinasWeb",
    role: "PHP Developer — Full-time",
    date: "Apr 2018 — May 2019",
    tags: ["WordPress", "Laravel", "Redux plugin", "Visual Composer", "ACF"],
    bullets: [
      "Developed with WordPress and Laravel side by side across client projects.",
      "Extended sites with Visual Composer, ACF and custom Redux-powered plugins.",
    ],
    links: ["sitedp.com", "kdm-co.com", "charmnegar.com", "umgt.ae", "iphatehran.com", "noorsaform.com", "broudatzagros.com", "fenos.be", "fanparto.ir"],
  },
  {
    company: "SeoYab",
    role: "WordPress Developer — Full-time",
    date: "Apr 2017 — Apr 2018",
    tags: ["WordPress", "Joomla", "Visual Composer", "ACF"],
    bullets: [
      "Built and maintained sites across both WordPress and Joomla.",
      "Used Visual Composer and ACF to give clients flexible, editable page layouts.",
    ],
    links: ["taisizco.com", "taraz-company.com"],
  },
];

const TERMINAL_LINES = [
  { cmd: "whoami", out: "mohsen sami — software engineer" },
  { cmd: "cat focus.json", out: '{ "frontend": "react / next.js", "backend": "node / php", "experience": "9+ years" }' },
  { cmd: "./ship.sh portfolio", out: "build complete — deployed ✓" },
];

/* ---------------------------------------------------------------
   TERMINAL (signature hero element)
---------------------------------------------------------------- */

function TerminalWindow() {
  const [lines, setLines] = useState([]);

  useEffect(() => {
    let lineIdx = 0;
    let charIdx = 0;
    let phase = "cmd";
    let current = { cmd: "", out: "", done: false };
    let mounted = true;

    function tick() {
      if (!mounted) return;
      if (lineIdx >= TERMINAL_LINES.length) return;
      const target = TERMINAL_LINES[lineIdx];

      if (phase === "cmd") {
        if (charIdx <= target.cmd.length) {
          current = { ...current, cmd: target.cmd.slice(0, charIdx), out: "", done: false };
          setLines((prev) => {
            const next = [...prev];
            next[lineIdx] = current;
            return next;
          });
          charIdx++;
          setTimeout(tick, 38);
        } else {
          phase = "out";
          charIdx = 0;
          setTimeout(tick, 250);
        }
      } else {
        if (charIdx <= target.out.length) {
          current = { ...current, out: target.out.slice(0, charIdx), done: charIdx === target.out.length };
          setLines((prev) => {
            const next = [...prev];
            next[lineIdx] = current;
            return next;
          });
          charIdx++;
          setTimeout(tick, 12);
        } else {
          lineIdx++;
          charIdx = 0;
          phase = "cmd";
          current = { cmd: "", out: "", done: false };
          setTimeout(tick, 400);
        }
      }
    }
    setTimeout(tick, 500);
    return () => { mounted = false; };
  }, []);

  return (
    <div className="term-window w-full max-w-md rounded-lg overflow-hidden">
      <div className="term-bar flex items-center gap-2 px-4 py-3">
        <span className="term-dot" style={{ background: "#ff5f57" }} />
        <span className="term-dot" style={{ background: "#febc2e" }} />
        <span className="term-dot" style={{ background: "#28c840" }} />
        <span className="term-title flex-1 text-center text-xs">mohsen@portfolio: ~</span>
      </div>
      <div className="term-body px-5 py-5 font-mono text-sm leading-relaxed min-h-[220px]">
        {lines.map((l, i) => (
          <div key={i} className="mb-3">
            <div>
              <span className="term-prompt">➜ ~ </span>
              <span className="term-cmd">{l.cmd}</span>
              {!l.out && i === lines.length - 1 && <span className="term-cursor">▍</span>}
            </div>
            {l.out && (
              <div className="term-out pl-1">
                {l.out}
                {i === lines.length - 1 && !l.done && <span className="term-cursor">▍</span>}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------
   CONTACT FORM
   UI-only for now — wire handleSubmit up to an email service
   (Formspree, EmailJS, your own API route, etc.) when ready.
---------------------------------------------------------------- */

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: send `form` to your backend / email service here.
    console.log("Contact form submitted:", form);
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  }

  if (sent) {
    return (
      <div className="card rounded-lg p-8 text-center">
        <CheckCircle2 className="text-accent mx-auto mb-3" size={28} />
        <p className="font-medium mb-1">Message ready to send</p>
        <p className="text-sm text-muted mb-4">
          This form isn't wired to a backend yet — hook it up to Formspree, EmailJS or your own API route.
        </p>
        <button onClick={() => setSent(false)} className="ghost-btn rounded-md px-4 py-2 text-sm">
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card rounded-lg p-6 sm:p-8 text-left space-y-5">
      <div>
        <label htmlFor="name" className="mono text-xs text-muted block mb-2">name</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          placeholder="Your name"
          className="form-input w-full rounded-md px-4 py-2.5 text-sm"
        />
      </div>
      <div>
        <label htmlFor="email" className="mono text-xs text-muted block mb-2">email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="you@example.com"
          className="form-input w-full rounded-md px-4 py-2.5 text-sm"
        />
      </div>
      <div>
        <label htmlFor="message" className="mono text-xs text-muted block mb-2">message</label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell me a bit about the project…"
          className="form-input w-full rounded-md px-4 py-2.5 text-sm resize-none"
        />
      </div>
      <button type="submit" className="accent-btn rounded-md px-5 py-2.5 text-sm font-medium inline-flex items-center gap-2">
        Send message <Send size={15} />
      </button>
    </form>
  );
}

/* ---------------------------------------------------------------
   MAIN COMPONENT
---------------------------------------------------------------- */

export default function App() {
  const [dark, setDark] = useState(true);

  return (
    <div className={dark ? "theme-dark" : "theme-light"}>
      <div className="pf-root min-h-screen">
        {/* NAV */}
        <header className="nav-blur sticky top-0 z-50">
          <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
            <a href="#top" className="flex items-center gap-3">
              <img
                src="/profile.png"
                alt="Mohsen Sami"
                className="w-9 h-9 rounded-full object-cover avatar-ring"
              />
              <span className="mono text-sm text-accent">~/mohsen-sami</span>
            </a>
            <nav className="hidden sm:flex items-center gap-6 text-sm mono">
              <a href="#about" className="text-muted hover:text-accent transition-colors">about</a>
              <a href="#skills" className="text-muted hover:text-accent transition-colors">skills</a>
              <a href="#experience" className="text-muted hover:text-accent transition-colors">experience</a>
              <a href="#contact" className="text-muted hover:text-accent transition-colors">contact</a>
            </nav>
            <button
              aria-label="Toggle theme"
              onClick={() => setDark((d) => !d)}
              className="ghost-btn rounded-full p-2"
            >
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>
        </header>

        {/* HERO */}
        <section id="top" className="max-w-5xl mx-auto px-6 pt-16 pb-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-up">
            <div className="flex items-center gap-4 mb-5">
              <img
                src="/profile.png"
                alt="Mohsen Sami"
                className="w-16 h-16 rounded-full object-cover avatar-ring"
              />
              <div>
                <p className="mono text-xs section-eyebrow">$ whoami</p>
                <p className="text-sm text-muted">Software Engineer</p>
              </div>
            </div>
            <h1 className="display text-4xl sm:text-5xl font-semibold leading-tight mb-4">
              Mohsen Sami
            </h1>
            <p className="text-lg text-muted mb-6">
              Full-stack developer building fast, clean, mobile-first web apps with
              <span className="text-accent"> React</span>,
              <span className="text-accent"> Next.js</span> and
              <span className="text-accent"> WordPress</span>.
            </p>
            <p className="text-sm text-muted leading-relaxed mb-8 max-w-md">
              9+ years building scalable, high-performance web apps — React.js and Next.js on the
              frontend, Node.js and PHP on the backend, with a focus on clean code, SEO-friendly
              performance and production-ready Progressive Web Apps.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#contact" className="accent-btn rounded-md px-5 py-2.5 text-sm font-medium inline-flex items-center gap-2">
                Get in touch <ArrowUpRight size={15} />
              </a>
              <a href="#experience" className="ghost-btn rounded-md px-5 py-2.5 text-sm font-medium inline-flex items-center gap-2">
                View experience
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end fade-up" style={{ animationDelay: "0.15s" }}>
            <TerminalWindow />
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-6">
          <div className="h-px border-custom border-t" />
        </div>

        {/* ABOUT */}
        <section id="about" className="max-w-5xl mx-auto px-6 py-20">
          <p className="mono text-xs section-eyebrow mb-3">// about</p>
          <h2 className="display text-2xl sm:text-3xl font-semibold mb-6">A developer who cares about the details</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <p className="md:col-span-2 text-muted leading-relaxed">
              I'm a web developer with over nine years of experience building scalable,
              high-performance web applications. My focus is React.js and Next.js, combined with
              strong JavaScript fundamentals and modern frontend architecture. I've also spent
              years deep in the WordPress and React.js ecosystems, shipping user-focused products
              that balance performance, maintainability and clean code. On the backend I work with
              Node.js, RESTful and GraphQL APIs, and headless CMS setups, and I specialize in
              responsive, mobile-first interfaces tuned for SEO and performance — including
              Progressive Web Apps. I enjoy collaborating across teams to deliver reliable,
              production-ready work that matches modern standards and real business goals.
            </p>
            <div className="card rounded-lg p-5">
              <div className="flex items-center gap-2 text-sm mono text-muted mb-3">
                <Terminal size={14} className="text-accent" /> currently
              </div>
              <p className="text-sm font-medium">Senior Frontend Developer</p>
              <p className="text-sm text-muted">@ Delfard Tejarat</p>
              <div className="h-px border-custom border-t my-4" />
              <div className="flex items-center gap-2 text-sm text-muted">
                <MapPin size={14} className="text-accent" /> Tehran, Iran
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="max-w-5xl mx-auto px-6 py-20">
          <p className="mono text-xs section-eyebrow mb-3">// skills</p>
          <h2 className="display text-2xl sm:text-3xl font-semibold mb-10">Tools I reach for</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-5">
              {PROFICIENCY.map((s) => (
                <div key={s.name}>
                  <div className="flex items-center justify-between text-sm mb-1.5">
                    <span className="mono">{s.name}</span>
                    <span className="mono text-xs text-muted">{s.level}%</span>
                  </div>
                  <div className="skill-track rounded-full h-1.5 w-full overflow-hidden">
                    <div className="skill-fill h-full rounded-full" style={{ width: `${s.level}%` }} />
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-8">
              {SKILL_GROUPS.map((g) => (
                <div key={g.label}>
                  <p className="mono text-xs text-muted mb-3">{g.label}/</p>
                  <div className="flex flex-wrap gap-2">
                    {g.items.map((it) => (
                      <span key={it} className="tag-pill rounded-md px-3 py-1.5 text-xs mono">
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="max-w-5xl mx-auto px-6 py-20">
          <p className="mono text-xs section-eyebrow mb-3">// experience</p>
          <h2 className="display text-2xl sm:text-3xl font-semibold mb-10">Where I've worked</h2>

          <div className="relative pl-8">
            <div className="timeline-line absolute left-[7px] top-2 bottom-2 w-px" />
            <div className="space-y-10">
              {EXPERIENCE.map((job) => (
                <div key={job.company + job.date} className="relative">
                  <span className="timeline-dot glow-dot absolute -left-8 top-1.5 w-3.5 h-3.5 rounded-full" />
                  <div className="card rounded-lg p-6">
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                      <h3 className="font-semibold text-lg">{job.company}</h3>
                      <span className="mono text-xs text-muted">{job.date}</span>
                    </div>
                    <p className="text-sm text-accent mono mb-4">{job.role}</p>
                    <ul className="space-y-2 mb-4">
                      {job.bullets.map((b, i) => (
                        <li key={i} className="text-sm text-muted leading-relaxed flex gap-2">
                          <span className="text-accent">›</span> {b}
                        </li>
                      ))}
                    </ul>
                    {job.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {job.tags.map((t) => (
                          <span key={t} className="tag-pill rounded-md px-2.5 py-1 text-[11px] mono">{t}</span>
                        ))}
                      </div>
                    )}
                    {job.links.length > 0 && (
                      <div className="flex flex-wrap gap-3 pt-2 border-t border-custom mt-2">
                        {job.links.map((l) => (
                          <span key={l} className="mono text-[11px] text-muted flex items-center gap-1">
                            <ExternalLink size={11} /> {l}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="max-w-5xl mx-auto px-6 py-20">
          <p className="mono text-xs section-eyebrow mb-3">// contact</p>
          <h2 className="display text-2xl sm:text-3xl font-semibold mb-4">Let's build something together</h2>
          <p className="text-muted mb-10 max-w-md">
            Open to full-time roles and freelance projects — reach out any time.
          </p>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="card rounded-xl p-8">
              <div className="flex flex-col gap-4 text-sm">
                <a href="mailto:mohsensami.work@gmail.com" className="flex items-center gap-3 hover:text-accent transition-colors">
                  <Mail size={16} className="text-accent" /> mohsensami.work@gmail.com
                </a>
                <a href="tel:+989033451850" className="flex items-center gap-3 hover:text-accent transition-colors">
                  <Phone size={16} className="text-accent" /> +98 903 345 1850
                </a>
                <a href="https://sami.liara.run" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-accent transition-colors">
                  <Globe size={16} className="text-accent" /> sami.liara.run
                </a>
                <div className="flex items-center gap-3 text-muted">
                  <MapPin size={16} className="text-accent" /> Tehran, Iran
                </div>
              </div>
              <div className="h-px border-custom border-t my-6" />
              <p className="mono text-[11px] text-muted leading-relaxed">
                Prefer email or a call? Use the details above. Or drop a message using the form —
                it's ready for you to connect to a backend later.
              </p>
            </div>

            <ContactForm />
          </div>
        </section>

        <footer className="max-w-5xl mx-auto px-6 py-8 flex flex-wrap items-center justify-between gap-3 border-t border-custom">
          <p className="mono text-[11px] text-muted">© {new Date().getFullYear()} Mohsen Sami</p>
          <p className="mono text-[11px] text-muted">built with React &amp; Tailwind</p>
        </footer>
      </div>
    </div>
  );
}
