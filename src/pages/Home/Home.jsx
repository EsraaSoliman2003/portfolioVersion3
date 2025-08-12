import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import myImage from "../../../public/images/me.png";
import { Link } from "@mui/material";
import { Facebook, Twitter, Github, Linkedin } from "lucide-react";

const fullText = "Hello, I'm Esraa Soliman\nReactJS Developer";

const Home = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText.charAt(index));
        setIndex((prev) => prev + 1);
      }, 65);
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

          {/* Social Links */}
          <div className={styles.socialLinks}>
            <Link
              target="_blank"
              href="https://www.facebook.com/esraa.ibrahim.58910"
            >
              <Facebook className={styles.iconLink} />
            </Link>
            <Link target="_blank" href="https://twitter.com/EsraaEb44091913">
              <Twitter className={styles.iconLink} />
            </Link>
            <Link target="_blank" href="https://github.com/EsraaSoliman2003">
              <Github className={styles.iconLink} />
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/esraa-soliman-7b132a249/"
            >
              <Linkedin className={styles.iconLink} />
            </Link>
          </div>

          <a
            href="/EsraaSoliman_CV.pdf"
            download
            className={`${styles.btnPrimary} ${styles.btnCV}`}
          >
            Download CV
          </a>
        </div>

        <div className={styles.imgSection}>
          <img src={myImage} alt="hero" className={styles.heroImage} />
        </div>
      </main>
    </div>
  );
};

export default Home;
