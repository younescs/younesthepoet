import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section id="home" className={styles.container}>
      <div className={styles.content}>
        <div className={styles.intro}>
          <span className={styles.greeting}>Hello, I'm</span>
          <h1 className={styles.title}>
            <span className={styles.highlight}>Younes</span>
          </h1>
          <h2 className={styles.subtitle}>Artist | Human Being</h2>
        </div>
        <p className={styles.description}>
          Creating sounds and visuals that resonate with your soul.
        </p>
        <div className={styles.cta}>
          <a href="#music" className={styles.primaryBtn}>
            Listen to Music
          </a>
          <a href="#contact" className={styles.contactBtn}>
            Follow Me
          </a>
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <img
          src={getImageUrl("hero/heroImage.png")}
          alt="Portrait of Younes"
          className={styles.heroImg}
        />
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
