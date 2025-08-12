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
          I am a dedicated and results-driven individual who combines creativity
          with practical execution to craft engaging and functional digital
          experiences. I am hardworking, highly efficient, and detail-oriented,
          with a strong focus on delivering high-quality results and writing
          clean, maintainable code. I thrive on challenges, stay focused on
          objectives, and continuously work to improve my skills while bringing
          innovative ideas to life.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
