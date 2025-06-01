import { useState } from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const socialLinks = [
    {
      id: "instagram",
      icon: "contact/instagramIcon.png",
      label: "Instagram",
      url: "https://www.instagram.com/younesthepoet",
      text: "@younesthepoet",
    },
    {
      id: "youtube",
      icon: "contact/youtubeIcon.png",
      label: "YouTube",
      url: "https://www.youtube.com/younesthepoet",
      text: "younesthepoet",
    },
  ];

  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h2 className={styles.title}>Get in Touch</h2>
          <p className={styles.subtitle}>Connect with me on social media</p>
        </div>

        <div className={styles.links}>
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.link} ${
                hoveredLink === link.id ? styles.hovered : ""
              }`}
              onMouseEnter={() => setHoveredLink(link.id)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <div className={styles.iconContainer}>
                <img src={getImageUrl(link.icon)} alt={`${link.label} icon`} />
              </div>
              <div className={styles.linkContent}>
                <span className={styles.label}>{link.label}</span>
                <span className={styles.text}>{link.text}</span>
              </div>
              <svg
                className={styles.arrow}
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.33337 8H12.6667"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M8.00004 3.33325L12.6667 7.99992L8.00004 12.6666"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          ))}
        </div>
      </div>

      <div className={styles.footer}>
        <p>
          © {new Date().getFullYear()} Younes The Poet. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
