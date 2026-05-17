import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projectsData from "../../data/projects.json";
import styles from "./Projects.module.css";
import TypewriterText from "../../components/TypewriterText/TypewriterText";

export default function Projects() {
  const [isSmallScreen, setIsSmallScreen] = useState(
    typeof window !== "undefined" ? window.innerWidth <= 768 : false
  );

  const order = ["Latest", "Top", "Modern", "Complex", "Native", "BackEnd"];

  const getOrder = (cat) => {
    const index = order.indexOf(cat);
    return index === -1 ? 999 : index;
  };

  const categories = [...new Set(projectsData.map((p) => p.category))].sort(
    (a, b) => getOrder(a) - getOrder(b)
  );

  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (categories.length && !selectedCategory) {
      setSelectedCategory(categories[0]);
    }
  }, [categories, selectedCategory]);

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

  const handleProjectClick = (project, e) => {
    if (
      (project.linkDesine === "-" || !project.linkDesine) &&
      (project.linkGithub === "-" || !project.linkGithub)
    ) {
      e.preventDefault();
    }
  };

  return (
    <div className={styles.projectsContainer}>
      <TypewriterText text="Projects" />

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
        key={selectedCategory}
      >
        <AnimatePresence mode="wait">
          {filteredProjects.map((project, index) => {
            const hasLink =
              project.linkDesine !== "-" || project.linkGithub !== "-";

            const link =
              project.linkDesine !== "-"
                ? project.linkDesine
                : project.linkGithub;

            return (
              <motion.div
                key={project.id || index}
                className={styles.projectItem}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
              >
                {hasLink ? (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                    onClick={(e) => handleProjectClick(project, e)}
                  >
                    <div className={styles.imageContainer}>
                      <img
                        src={project.imhPath}
                        alt={project.ProjectTitle}
                        className={styles.projectImg}
                      />
                    </div>

                    <div className={styles.projectOverlay}>
                      <div className={styles.projectInfoCard}>
                        <h2>{project.ProjectTitle}</h2>
                        <p>
                          <strong>Date:</strong> {project.date}
                        </p>
                        <p>
                          <strong>Tools:</strong> {project.tools}
                        </p>
                      </div>
                    </div>
                  </a>
                ) : (
                  <>
                    <div className={styles.imageContainer}>
                      <img
                        src={project.imhPath}
                        alt={project.ProjectTitle}
                        className={styles.projectImg}
                      />
                    </div>

                    <div className={styles.projectOverlay}>
                      <div className={styles.projectInfoCard}>
                        <h2>{project.ProjectTitle}</h2>
                        <p>
                          <strong>Date:</strong> {project.date}
                        </p>
                        <p>
                          <strong>Tools:</strong> {project.tools}
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}