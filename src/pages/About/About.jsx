import styles from "./About.module.css";
import TypewriterText from "../../components/TypewriterText/TypewriterText";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className={styles.about}>
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <TypewriterText text="About" />
        <p className={styles.text}>
          I am a dedicated and passionate individual who loves blending
          creativity with technology to craft engaging digital experiences. I
          thrive on challenges and continuously seek to improve my skills while
          bringing innovative ideas to life.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
