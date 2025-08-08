import React from "react";
import { NavLink } from "react-router-dom";
import { Home, User, Folder, Mail, Briefcase, Award } from "lucide-react";
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
          <User size={18} /> About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          <Folder size={18} /> Projects
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          <Mail size={18} /> Contact
        </NavLink>
        <NavLink
          to="/experience"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          <Briefcase size={18} /> Experience
        </NavLink>
        <NavLink
          to="/certificates"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          <Award size={18} /> Certificates
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
