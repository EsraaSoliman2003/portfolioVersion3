import React, { useState, useEffect } from "react";
import styles from "./About.module.css";

const About = () => {
  const fullText = "About";
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText.charAt(index));
        setIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section className={styles.about}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          {text}
          <span className={styles.cursor}>|</span>
        </h1>
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
