import React, { useState, useEffect } from "react";
import styles from "./TypewriterText.module.css";

const TypewriterText = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return (
    <h1>
      <span className={styles.wrapper}>
        {displayedText}
        <span className={styles.cursor}>|</span>
      </span>
    </h1>
  );
};

export default TypewriterText;
