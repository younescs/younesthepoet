import { useState } from "react";
import styles from "./MailingList.module.css";

export const MailingList = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would normally submit to a backend service
    setIsSubmitted(true);
  };

  return (
    <section className={styles.container} id="mailing-list">
      <div className={styles.stars}></div>
      <div className={styles.twinkling}></div>
      <div className={styles.content}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>Join My Mailing List</h2>
          <p className={styles.subtitle}>
            Subscribe to get updates on new releases, shows, and exclusive
            content
          </p>
        </div>

        <div className={styles.formContainer}>
          {isSubmitted ? (
            <div className={styles.successMessage}>
              <div className={styles.icon}>
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18457 2.99721 7.13633 4.39828 5.49707C5.79935 3.85782 7.69279 2.71538 9.79619 2.24015C11.8996 1.76491 14.1003 1.98234 16.07 2.86"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 4L12 14.01L9 11.01"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>Thank you for subscribing!</h3>
              <p>You'll receive updates straight to your inbox.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.inputGroup}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className={styles.input}
                />
                <button type="submit" className={styles.submitButton}>
                  Subscribe
                </button>
              </div>
              <p className={styles.disclaimer}>
                By subscribing, you agree to receive emails from me. Don't
                worry, I respect your privacy and will never share your
                information.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
