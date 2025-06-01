import styles from "./Shop.module.css";

export const Shop = () => {
  return (
    <section className={styles.container} id="shop">
      <div className={styles.stars}></div>
      <div className={styles.twinkling}></div>
      <div className={styles.content}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>Shop</h2>
          <p className={styles.subtitle}>
            Browse and purchase exclusive merchandise
          </p>
        </div>

        <div className={styles.shopContainer}>
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
                  d="M20.59 13.41L13.42 20.58C13.2343 20.766 13.0137 20.9135 12.7709 21.0141C12.5281 21.1148 12.2678 21.1666 12.005 21.1666C11.7422 21.1666 11.4819 21.1148 11.2391 21.0141C10.9963 20.9135 10.7757 20.766 10.59 20.58L2 12V2H12L20.59 10.59C20.9625 10.9647 21.1716 11.4716 21.1716 12C21.1716 12.5284 20.9625 13.0353 20.59 13.41Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 7H7.01"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3>Coming Soon</h3>
            <p>
              Merchandise will be available soon. Stay tuned for exclusive
              items.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
