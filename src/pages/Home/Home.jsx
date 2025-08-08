import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import myImage from "../../../public/images/me.png";

const fullText = "Hello, I'm Esraa Soliman\nReactJS Developer\nI'm in this field since 2022";

const Home = () => {
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
    <div className={styles.home}>
      <main className={styles.mainSection}>
        <div className={styles.textSection}>

          <h1 className={styles.title}>
            {text}
            <span className={styles.cursor}>|</span>
          </h1>
        </div>

        <div className={styles.imgSection}>
          <img src={myImage} alt="hero" className={styles.heroImage} />
        </div>
      </main>
    </div>
  );
};

export default Home;
