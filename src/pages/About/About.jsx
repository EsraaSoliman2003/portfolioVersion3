import styles from "./About.module.css";
import TypewriterText from "../../components/TypewriterText/TypewriterText";

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.content}>
        <TypewriterText text="About"  />
        <p className={styles.text}>
          I am a dedicated and passionate individual who loves blending
          creativity with technology to craft engaging digital experiences. I
          thrive on challenges and continuously seek to improve my skills while
          bringing innovative ideas to life.
        </p>
      </div>
    </section>
  );
};

export default About;
