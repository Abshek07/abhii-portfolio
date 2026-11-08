
import { useState } from "react";
import { motion } from "framer-motion";

import {
  Mail,
  Download,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import "./index.css";

// Dynamic theme configurations
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

function App() {
  // Select a different theme on each new session
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
      {/* Top bar */}
      <div className="top-bar">
        <span className="theme-label">
          <span className="theme-dot" />
          {theme.name} theme
        </span>

        <span className="language">
          🇬🇧 En
        </span>
      </div>

      {/* HERO BENTO GRID */}
      <section className="hero-grid">

        {/* Profile card */}
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

        {/* Social card */}
        <motion.div
          className="card social-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <span className="social-background">
            Social
          </span>

          <div className="social-links">

            <a
              href="https://github.com/"
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

        {/* Download CV card */}
        <motion.a
          className="card cv-card"
          href="/resume/Abhishekagouda_ATS_Resume.pdf"
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

        {/* Experience card */}
        <motion.div
          className="card experience-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <strong>02</strong>

          <span>
            Internship experiences
          </span>
        </motion.div>

        {/* Introduction card */}
        <motion.div
          className="card intro-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
        >
          <p>
            Computer Science undergraduate specializing
            in Data Science, passionate about building
            useful software, AI-powered solutions and
            modern web applications.
          </p>
        </motion.div>

        {/* Location card */}
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

      {/* Location information */}
      <p className="visit-text">
        <MapPin size={13} />
        Based in Bengaluru, India
      </p>

      {/* Projects heading */}
      <section className="projects-heading" id="projects">
        <h2>
          Highlighted Projects ✧
        </h2>

        <p>
          Some things I've designed, developed and built.
        </p>
      </section>

      {/* Projects */}
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

    </main>
  );
}

// Reusable project card
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

        <a
          href="#projects"
          aria-label={`View ${title}`}
        >
          <ArrowUpRight />
        </a>

      </div>

      <p>
        {description}
      </p>

      <div className="project-tags">
        {tags}
      </div>

    </motion.article>
  );
}

export default App;
