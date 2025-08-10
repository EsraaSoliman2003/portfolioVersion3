import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projectsData from "../../data/projects.json";
import styles from "./Projects.module.css";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("Top");

  // ترتيب المشاريع حسب priority
  const sortedProjects = [...projectsData].sort((a, b) => a.priority - b.priority);

  // كل الفئات
  const categories = [...new Set(projectsData.map((p) => p.category))];

  // فلترة المشاريع
  const filteredProjects = sortedProjects.filter((p) => p.category === selectedCategory);

  // إعدادات الحركة
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, y: -30, transition: { duration: 0.3 } }
  };

  return (
    <div className={styles.projectsContainer}>
      <h1 className={styles.projectsTitle}>My Projects</h1>

      {/* أزرار الفلتر */}
      <div className={styles.filters}>
        {categories.map((cat, i) => (
          <button
            key={i}
            className={`${styles.filterBtn} ${selectedCategory === cat ? styles.active : ""}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* الشبكة */}
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
              <img
                src={project.imhPath}
                alt={project.ProjectTitle}
                className={styles.projectImg}
              />
              <div className={styles.projectOverlay}>
                <div>
                  <h2>{project.ProjectTitle}</h2>
                  <p>{project.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
