import { useState, useEffect } from "react";
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
  CircleCheck,
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
  { name: "Python", icon: FaPython, color: "#3776AB" },
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
  { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
  { name: "Node.js", icon: FaNodeJs, color: "#68A063" },
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
  { name: "Docker", icon: FaDocker, color: "#2496ED" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "Pandas", icon: SiPandas, color: "#E70488" },
  { name: "Flutter", icon: SiFlutter, color: "#54C5F8" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
];

const heroAvatars = [
  "/avatars/Confident 3D Character with Floating Heart.png",
  "/avatars/coding-avatar-transparent.png",
  "/avatars/Content Music Listener Avatar.png",
  "/avatars/Curly-Haired Coffee Portrait.png",
  "/avatars/Curly-Haired Character with Backpack.png",
  "/avatars/Thoughtful Coder with Idea Bulb.png",
];


// ----------------------------------
// MAIN APP
// ----------------------------------

function App() {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const [heroAvatar] = useState(() => {
    const randomIndex = Math.floor(Math.random() * heroAvatars.length);
    return heroAvatars[randomIndex];
  });
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      id="top"
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


      {/* MAIN NAVIGATION */}

      <nav className="main-navigation">
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#about">About Me</a>
      </nav>


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
              src={heroAvatar}
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
          title="AI-DevOps Assistant"
          subtitle="Agentic AI / DevOps"
          description="An AI-powered support-ticket triage system demonstrating an agentic software development lifecycle."
          tags="Python · AI Agents · RAG"
          href="https://github.com/Abshek07/support-ticket-triage-assistant"
        />

        <ProjectCard
          title="AI Incident Investigation Agent"
          subtitle="Agentic AI / RAG"
          description="Analyzes application logs and deployment records to identify possible root causes and recommend remediation."
          tags="Python · FastAPI · Gemini · LangGraph"
        />

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

        {showAllProjects && (
          <>
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
          </>
        )}

      </section>

      <div className="projects-more-wrap">
        <button
          className="projects-more-button"
          onClick={() => setShowAllProjects(!showAllProjects)}
        >
          {showAllProjects ? "View less projects ↑" : "View more projects ↓"}
        </button>
      </div>


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


      {/* EDUCATION SECTION */}
      <section className="education-section" id="education">

        <div className="section-heading">
          <span className="section-eyebrow">ACADEMIC BACKGROUND</span>
          <h2>
            Education <GraduationCap />
          </h2>
          <p>My academic journey and qualifications.</p>
        </div>

        <div className="education-grid">

          {/* BACHELOR'S DEGREE */}
          <motion.div
            className="education-card card"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="education-card-top">
              <span className="education-date">2023 — 2027</span>
              <GraduationCap className="education-icon" />
            </div>

            <h3>GM University</h3>
            <p className="education-degree">
              Bachelor of Technology (B.Tech)
            </p>
            <p>Computer Science and Engineering</p>

            <div className="education-meta">
              <span>Specialization: Data Science</span>
              <span>CGPA: 7.6 / 10</span>
              <span>Expected Graduation: 2027</span>
            </div>
          </motion.div>

          {/* PRE-UNIVERSITY EDUCATION */}
          <motion.div
            className="education-card card"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="education-card-top">
              <span className="education-date">PRE-UNIVERSITY</span>
              <GraduationCap className="education-icon" />
            </div>

            <h3>JSS SM PU College</h3>
            <p className="education-degree">
              Pre-University Course (PUC)
            </p>
            <p>Dharwad, Karnataka</p>

            <div className="education-meta">
              <span>Percentage: 84.96%</span>
            </div>
          </motion.div>

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


        <div className="skills-marquee">
          {/* TOP ROW: RIGHT TO LEFT */}
          <div className="skills-marquee-row">
            <div className="skills-marquee-track move-left">
              {[...skills.slice(0, 8), ...skills.slice(0, 8)].map(
                (skill, index) => {
                  const Icon = skill.icon;

                  return (
                    <div
                      className="marquee-skill"
                      key={`top-${index}`}
                      title={skill.name}
                    >
                      <Icon style={{ color: skill.color }} />
                    </div>
                  );
                }
              )}
            </div>
          </div>

          {/* BOTTOM ROW: LEFT TO RIGHT */}
          <div className="skills-marquee-row">
            <div className="skills-marquee-track move-right">
              {[...skills.slice(8), ...skills.slice(8)].map(
                (skill, index) => {
                  const Icon = skill.icon;

                  return (
                    <div
                      className="marquee-skill"
                      key={`bottom-${index}`}
                      title={skill.name}
                    >
                      <Icon style={{ color: skill.color }} />
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </section>


      {/* ABOUT SECTION */}

      <section className="about-section" id="about">
        <div className="about-container">

          {/* Heading */}
          <div className="about-heading">
            <h2>
              About Me
              <CircleCheck size={27} />
            </h2>
          </div>

          {/* Description */}
          <div className="about-description">
            <p>
              I'm a Computer Science undergraduate at GM University,
              specializing in Data Science. I'm passionate about
              software development and enjoy turning ideas into
              practical applications.
            </p>

            <p>
              I've worked on projects involving Python, React,
              Flutter, databases and AI technologies. I enjoy
              learning new technologies and building solutions
              that solve real-world problems.
            </p>

            <p>
              Currently, I'm focusing on strengthening my software
              engineering skills, exploring full-stack development
              and preparing for opportunities where I can grow
              as a developer.
            </p>
          </div>

          {/* Avatar + Contact Card */}
          <div className="about-bottom">

            <div className="about-avatar">
              <img
                src="/avatars/Cheerful 3D Avatar Calling You.png"
                alt="Developer avatar"
              />
            </div>

            <div className="about-contact-card">

              <a href="mailto:abhishekgoudapatil1407@gmail.com">
                <Mail size={17} />
                <span>abhishekgoudapatil@gmail.com</span>
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin size={17} />
                <span>Abhishekagouda Patil</span>
              </a>

            </div>

          </div>

        </div>
      </section>

      {/* COMPACT FOOTER: PART OF THE ABOUT LAYOUT */}
      <footer className="contact-section" id="contact">
        <div className="footer-socials">
          <a href="https://github.com/Abshek07" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </div>
        <p className="copyright">
          © 2026 Abhishekagouda Patil. All rights reserved.
        </p>
      </footer>

      {/* BACK TO TOP */}
      {showBackToTop && (
        <a
          href="#top"
          className="back-to-top"
          aria-label="Back to top"
          title="Back to top"
        >
          ↑
        </a>
      )}


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
  href,
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

        {href && (
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={`View ${title}`}
          >
            <ArrowUpRight />
          </a>
        )}
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
