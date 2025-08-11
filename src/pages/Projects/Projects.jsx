import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projectsData from "../../data/projects.json";
import styles from "./Projects.module.css";
import TypewriterText from "../../components/TypewriterText/TypewriterText";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("Top");
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const categories = [...new Set(projectsData.map((p) => p.category))];

  const filteredProjects = projectsData.filter(
    (p) => p.category === selectedCategory
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, y: -30, transition: { duration: 0.3 } },
  };

  return (
    <div className={styles.projectsContainer}>
      <TypewriterText text="Projects" speed={100} />
      <div className={styles.filters}>
        {categories.map((cat, i) => (
          <button
            key={i}
            className={`${styles.filterBtn} ${
              selectedCategory === cat ? styles.active : ""
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div
        className={styles.projectsGrid}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence>
          {filteredProjects.slice(0, 5).map((project, index) => (
            <motion.div
              key={project.id || index}
              className={`${styles.projectItem} ${styles[`item${index + 1}`]}`}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              layout
            >
              <a
                href={
                  project.linkDesine !== "-" ? project.linkDesine : project.linkGithub
                }
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectLink}
              >
                <img
                  src={project.imhPath}
                  alt={project.ProjectTitle}
                  className={styles.projectImg}
                />
                {isSmallScreen ? (
                  <div className={styles.projectText}>
                    <h2>{project.ProjectTitle}</h2>
                    <p>
                      <strong>Date:</strong> {project.date}
                    </p>
                    <p>
                      <strong>Tools:</strong> {project.tools}
                    </p>
                  </div>
                ) : (
                  <div className={styles.projectOverlay}>
                    <div className={styles.projectText}>
                      <h2>{project.ProjectTitle}</h2>
                      <p>
                        <strong>Date:</strong> {project.date}
                      </p>
                      <p>
                        <strong>Tools:</strong> {project.tools}
                      </p>
                    </div>
                  </div>
                )}
              </a>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}