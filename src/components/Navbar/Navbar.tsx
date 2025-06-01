import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

export const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <a
        className={styles.title}
        href="#"
        onClick={(e) => {
          e.preventDefault();
          scrollToTop();
        }}
      >
        <span className={styles.highlight}>الشاعر</span>
      </a>
      <div className={styles.menu}>
        <button
          className={styles.menuBtn}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`${styles.hamburger} ${menuOpen ? styles.active : ""}`}
          ></span>
        </button>
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#music">Music</a>
          </li>
          <li>
            <a href="#videos">Videos</a>
          </li>
          <li>
            <a href="#shows">Shows</a>
          </li>
          <li>
            <a href="#shop">Shop</a>
          </li>
          <li>
            <a href="#mailing-list">Join</a>
          </li>
          <li>
            <a href="#contact" className={styles.contactLink}>
              Connect
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
