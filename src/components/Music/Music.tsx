import styles from "./Music.module.css";
import { getImageUrl } from "../../utils";

export const Music = () => {
  return (
    <section className={styles.container} id="music">
      <div className={styles.stars}></div>
      <div className={styles.twinkling}></div>
      <div className={styles.content}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>Music</h2>
          <p className={styles.subtitle}>Listen to my latest releases</p>
        </div>

        <div className={styles.releaseContainer}>
          <div className={styles.releaseInfo}>
            <div className={styles.badge}>Latest Release</div>
            <h3 className={styles.releaseTitle}>CASAYUL</h3>
            <p className={styles.releaseDescription}>
              A blend of melodic sounds and rhythms that tell stories through
              music.
            </p>
            <div className={styles.actions}>
              <a
                href="https://youtu.be/Huor-R-LiUg"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.streamBtn}
              >
                <img
                  src={getImageUrl("contact/youtubeIcon.png")}
                  alt="YouTube"
                />
                Watch on YouTube
              </a>
            </div>
          </div>

          <div className={styles.videoWrapper}>
            <iframe
              className={styles.videoEmbed}
              src="https://www.youtube.com/embed/Huor-R-LiUg"
              title="CASAYUL by Younes"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className={styles.upcomingReleases}>
          <h3 className={styles.sectionSubtitle}>More music coming soon</h3>
          <div className={styles.releasesGrid}>
            {/* This will be filled with future releases */}
            <div className={styles.comingSoon}>
              <div className={styles.placeholder}>
                <div className={styles.icon}>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M12 16V12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M12 8H12.01"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <p>Stay tuned for new releases</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
