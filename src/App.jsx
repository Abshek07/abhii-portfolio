import { useState } from "react";
import { motion } from "framer-motion";

import {
  Mail,
  Download,
  MapPin,
  ArrowUpRight,
  BriefcaseBusiness,
  GraduationCap,
  Code2,
  ExternalLink,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
  FaPython,
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa";

import {
  SiMongodb,
  SiMysql,
  SiPandas,
  SiFlutter,
  SiFirebase,
  SiTailwindcss,
  SiScikitlearn,
} from "react-icons/si";

import "./index.css";

// ----------------------------------
// DYNAMIC THEMES
// ----------------------------------

const themes = [
  {
    name: "ocean",
    accent: "#00baff",
    glow: "rgba(0,186,255,.15)",
  },
  {
    name: "sunset",
    accent: "#f59e0b",
    glow: "rgba(245,158,11,.15)",
  },
  {
    name: "galaxy",
    accent: "#a78bfa",
    glow: "rgba(167,139,250,.17)",
  },
  {
    name: "emerald",
    accent: "#34d399",
    glow: "rgba(52,211,153,.15)",
  },
  {
    name: "crimson",
    accent: "#fb7185",
    glow: "rgba(251,113,133,.15)",
  },
];

// ----------------------------------
// EXPERIENCE DATA
// ----------------------------------

const experiences = [
  {
    company: "EVOASTRA",
    role: "Data Scientist Intern",
    date: "JAN 2026 — MAR 2026",
    description:
      "Worked as a Data Scientist Intern, gaining practical experience in data science and analytical workflows.",
    skills: ["Python", "Data Science", "Analytics"],
    certificate: "/certificates/evoastra-internship.pdf",
  },
  {
    company: "ALTIMETRIK",
    role: "Project Intern",
    date: "JUL 2026 — OCT 2026",
    description:
      "Contributed to backend development and API integration for an application project and worked with AWS cloud technologies.",
    skills: ["Backend Development", "REST APIs", "AWS"],
  },
  {
    company: "WSA",
    role: "Full Stack Web Development Intern",
    date: "MAR 2026 — APR 2026",
    description:
      "Completed internship training with hands-on exposure to foundational programming using HTML, CSS, JavaScript and React, along with SDLC-based MERN Stack project building.",
    skills: ["HTML", "CSS", "JavaScript", "React", "MERN Stack"],
    certificate: "/certificates/wsa-internship.pdf",
  },
];

// ----------------------------------
// SKILLS DATA
// ----------------------------------

const skills = [
  { name: "Python", icon: FaPython },
  { name: "React", icon: FaReact },
  { name: "JavaScript", icon: FaJs },
  { name: "HTML5", icon: FaHtml5 },
  { name: "CSS3", icon: FaCss3Alt },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Git", icon: FaGitAlt },
  { name: "Docker", icon: FaDocker },
  { name: "MongoDB", icon: SiMongodb },
  { name: "MySQL", icon: SiMysql },
  { name: "Pandas", icon: SiPandas },
  { name: "Flutter", icon: SiFlutter },
  { name: "Firebase", icon: SiFirebase },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Scikit-learn", icon: SiScikitlearn },
];

// ----------------------------------
// MAIN APP
// ----------------------------------

function App() {
  const [theme] = useState(() => {
    const previous = sessionStorage.getItem("abhi-theme");

    const choices = themes.filter(
      (item) => item.name !== previous
    );

    const selected =
      choices[Math.floor(Math.random() * choices.length)];

    sessionStorage.setItem("abhi-theme", selected.name);

    return selected;
  });

  return (
    <main
      className="portfolio"
      style={{
        "--accent": theme.accent,
        "--glow": theme.glow,
      }}
    >
      {/* TOP BAR */}

      <div className="top-bar">
        <span className="theme-label">
          <span className="theme-dot" />
          {theme.name} theme
        </span>

        <span className="language">🇬🇧 En</span>
      </div>

      {/* HERO SECTION */}

      <section className="hero-grid">

        <motion.div
          className="card profile-card"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="avatar-glow">
            <motion.img
              src="/avatars/Neon Developer Avatar Portrait.png"
              alt="Abhishekagouda Patil"
              className="avatar"
              animate={{
                y: [0, -8, 0],
                rotate: [0, 1, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          <h1>Abhishekagouda Patil</h1>

          <p className="role">
            <span>⟹</span>
            Software Developer
            <span>⟸</span>
          </p>
        </motion.div>

        {/* SOCIAL CARD */}

        <motion.div
          className="card social-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <span className="social-background">Social</span>

          <div className="social-links">
            <a
              href="https://github.com/Abshek07"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:abhishekgoudapatil1407@gmail.com"
              aria-label="Email"
            >
              <Mail />
            </a>
          </div>
        </motion.div>

        {/* CV CARD */}

        <motion.a
          className="card cv-card"
          href="/resume/Abhishekagouda_Patil_ATS_Resume%20(1).pdf"
          download
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
        >
          <div className="cv-blur" />

          <span className="download-button">
            <Download size={16} />
            Download CV
          </span>
        </motion.a>

        {/* EXPERIENCE COUNTER */}

        <motion.div
          className="card experience-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <strong>+03</strong>
          <span>Internship experiences</span>
        </motion.div>

        {/* INTRODUCTION */}

        <motion.div
          className="card intro-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
        >
          <p>
            Computer Science undergraduate specializing in
            Data Science, passionate about building useful
            software, AI-powered solutions and modern web
            applications.
          </p>
        </motion.div>

        {/* LOCATION */}

        <motion.div
          className="card location-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="map-grid">
            <div className="map-road road-one" />
            <div className="map-road road-two" />

            <div className="map-pin">
              <MapPin size={22} />
            </div>

            <span className="map-city">
              BENGALURU, INDIA
            </span>
          </div>
        </motion.div>

      </section>

      <p className="visit-text">
        <MapPin size={13} />
        Based in Bengaluru, India
      </p>

      {/* PROJECTS SECTION */}

      <section className="projects-heading" id="projects">
        <h2>Highlighted Projects ✧</h2>
        <p>Some things I've designed, developed and built.</p>
      </section>

      <section className="project-grid">

        <ProjectCard
          title="Sentiment Analysis"
          subtitle="Machine Learning / NLP"
          description="A text classification model using Python, TF-IDF and Scikit-learn."
          tags="Python · NLP · Scikit-learn"
        />

        <ProjectCard
          title="Anomaly Detection"
          subtitle="AI / Data Science"
          description="A machine learning workflow for identifying unusual patterns in datasets."
          tags="Python · Pandas · Isolation Forest"
        />

        <ProjectCard
          title="Blue-Green Deployment"
          subtitle="DevOps / Cloud"
          description="Container-based deployment workflow designed for zero-downtime releases."
          tags="Docker · Nginx · GitHub Actions"
        />

        <ProjectCard
          title="Silver Jubilee Portal"
          subtitle="Web Development"
          description="A bilingual digital portal with QR access and alumni engagement features."
          tags="React · Tailwind · Firebase"
        />

      </section>

      {/* EXPERIENCE SECTION */}

      <section className="experience-section" id="experience">

        <div className="section-heading">
          <span className="section-eyebrow">MY JOURNEY</span>
          <h2>
            Work Experience <BriefcaseBusiness />
          </h2>
          <p>My professional journey and internship experiences.</p>
        </div>

        <div className="experience-timeline">

          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.company}
              {...experience}
              index={index}
            />
          ))}

        </div>
      </section>

      {/* FLOATING SKILLS SECTION */}

      <section className="skills-section" id="skills">

        <div className="section-heading">
          <span className="section-eyebrow">MY TOOLKIT</span>
          <h2>
            Skills <Code2 />
          </h2>
          <p>Technologies and tools I work with.</p>
        </div>

        <div className="floating-skills">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                className="floating-skill"
                title={skill.name}
                animate={{
                  y: [0, -12 - (index % 4) * 3, 0],
                  rotate: [0, index % 2 === 0 ? 5 : -5, 0],
                }}
                transition={{
                  duration: 3 + (index % 4),
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.15,
                }}
                whileHover={{ scale: 1.2 }}
              >
                <Icon />
                <span>{skill.name}</span>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* EDUCATION SECTION */}

      <section className="education-section" id="education">

        <div className="section-heading">
          <span className="section-eyebrow">ACADEMIC BACKGROUND</span>
          <h2>
            Education <GraduationCap />
          </h2>
        </div>

        <div className="education-card card">
          <span className="education-date">2023 — 2027</span>
          <h3>GM University</h3>
          <p>B.Tech — Computer Science, Data Science</p>
          <span className="education-detail">
            Expected graduation: 2027
          </span>
        </div>

      </section>

      {/* ABOUT SECTION */}

      <section className="about-section" id="about">

        <div className="section-heading">
          <span className="section-eyebrow">GET TO KNOW ME</span>
          <h2>About Me ✧</h2>
        </div>

        <div className="about-card card">
          <p>
            I'm a Computer Science undergraduate at GM
            University, specializing in Data Science.
            I enjoy developing software, exploring AI
            technologies and building practical solutions.
          </p>

          <p>
            My interests include Python development,
            full-stack engineering, machine learning
            and cloud technologies.
          </p>
        </div>

      </section>

      {/* CONTACT SECTION */}

      <footer className="contact-section" id="contact">
        <h2>Let's Connect</h2>

        <p>
          Have an opportunity or interesting project?
          Let's connect.
        </p>

        <a
          href="mailto:abhishekgoudapatil1407@gmail.com"
          className="contact-button"
        >
          <Mail size={17} />
          Contact Me
        </a>

        <div className="footer-socials">
          <a
            href="https://github.com/Abshek07"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>

        <p className="copyright">
          © 2026 Abhishekagouda Patil. All rights reserved.
        </p>
      </footer>

    </main>
  );
}

// ----------------------------------
// PROJECT CARD
// ----------------------------------

function ProjectCard({
  title,
  subtitle,
  description,
  tags,
}) {
  return (
    <motion.article
      className="card project-card"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25 }}
    >
      <div className="project-top">
        <div>
          <h3>{title}</h3>
          <span>{subtitle}</span>
        </div>

        <a href="#projects" aria-label={`View ${title}`}>
          <ArrowUpRight />
        </a>
      </div>

      <p>{description}</p>

      <div className="project-tags">{tags}</div>
    </motion.article>
  );
}

// ----------------------------------
// EXPERIENCE CARD
// ----------------------------------

function ExperienceCard({
  company,
  role,
  date,
  description,
  skills,
  certificate,
  index,
}) {
  return (
    <motion.article
      className="experience-item"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="experience-date">{date}</div>

      <div className="timeline-marker">
        <span />
      </div>

      <div className="experience-content card">

        <div className="experience-top">
          <div>
            <h3>{company}</h3>
            <span className="experience-role">{role}</span>
          </div>

          <BriefcaseBusiness className="experience-symbol" />
        </div>

        <p className="experience-description">
          {description}
        </p>

        <div className="experience-skills">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>

        {certificate && (
          <a
            className="certificate-link"
            href={certificate}
            target="_blank"
            rel="noreferrer"
          >
            View Certificate <ExternalLink size={13} />
          </a>
        )}

      </div>
    </motion.article>
  );
}

export default App;
