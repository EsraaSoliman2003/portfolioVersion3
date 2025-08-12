import React from "react";
import styles from "./Technologies.module.css";
import { motion } from "framer-motion";
import data from "../../data/technologies.json";
import TypewriterText from "../../components/TypewriterText/TypewriterText";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      duration: 0.6,
    },
  },
};

export default function Technologies() {
  return (
    <motion.section
      className={styles.container}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {[
        { title: "Tools", items: data.tools },
        { title: "Frameworks", items: data.frameworks },
        { title: "Libraries", items: data.libraries },
      ].map(({ title, items }) => (
        <div key={title} className={styles.techSection}>
          {/* <h3 className={styles.sectionTitle}>{title}</h3> */}
          <TypewriterText text={title} />
          <div className={styles.techGrid}>
            {items.map(({ title, logo }) => (
              <div key={title} className={styles.techCard}>
                <img
                  src={logo}
                  alt={`${title} logo`}
                  className={styles.techLogo}
                  loading="lazy"
                />
                <span className={styles.techTitle}>{title}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </motion.section>
  );
}
