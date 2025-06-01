import styles from "./Shows.module.css";

export const Shows = () => {
  return (
    <section className={styles.container} id="shows">
      <div className={styles.stars}></div>
      <div className={styles.twinkling}></div>
      <div className={styles.content}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>Shows</h2>
          <p className={styles.subtitle}>
            Check out my upcoming live performances
          </p>
        </div>

        <div className={styles.showsContainer}>
          <div className={styles.emptyState}>
            <div className={styles.icon}>
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 2V6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 2V6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 10H21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3>No Upcoming Shows</h3>
            <p>Stay tuned for announcements about upcoming live performances</p>
          </div>
        </div>
      </div>
    </section>
  );
};
