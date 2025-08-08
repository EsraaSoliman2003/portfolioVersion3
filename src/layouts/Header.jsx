import React from "react";
import { NavLink } from "react-router-dom";
import { Home, Contact } from "lucide-react";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          <Home size={18} /> Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          <Contact size={18} /> About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          <Contact size={18} /> Projects
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          <Contact size={18} /> Contact
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
