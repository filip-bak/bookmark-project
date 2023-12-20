import { useEffect, useState } from "react";
import Button from "../../../components/Button";
import { newsletterSchema } from "./schema";
import useResponsive from "../../../hooks/useResponsive";
import styles from "./Newsletter.module.scss";
import icons from "@icons/icons.svg";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [peopleCount, setPeopleCount] = useState(35000);

  const { isDesktop } = useResponsive();

  useEffect(() => {
    const decrementPerSecond = 1750;
    const durationInSeconds = 20;
    const updateInterval = 50;
    const updatesPerSecond = 1000 / updateInterval;

    const totalUpdates = durationInSeconds * updatesPerSecond;
    const decrementPerUpdate = decrementPerSecond / updatesPerSecond;

    let currentUpdate = 0;

    const intervalId = setInterval(() => {
      currentUpdate++;

      setPeopleCount((prevValue) =>
        Math.max(prevValue - decrementPerUpdate, 0)
      );

      if (currentUpdate >= totalUpdates) {
        clearInterval(intervalId);
        console.log("Countdown completed! 1");
      }
    }, updateInterval);

    return () => {
      clearTimeout(intervalId);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await newsletterSchema.validate({ email }, { abortEarly: false });

      console.log("Form submitted:", email);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div id="contact" className={styles.container}>
      <p className={styles.info}>
        <span className={styles["people-count"]}>
          {Math.round(peopleCount).toLocaleString("en-US")}
        </span>
        + Already joined
      </p>
      <h2 className={styles.title}>Stay up-to-date with what we're doing</h2>
      <form onSubmit={handleSubmit} formNoValidate className={styles.form}>
        <div className={styles.box}>
          <input
            name="email"
            formNoValidate
            onChange={(e) => setEmail(e.target.value)}
            className={`${styles.input} ${error ? styles["input-error"] : ""}`}
            type="text"
            placeholder="Enter your email address"
          />
          {error ? <div className={styles.error}>{error}</div> : null}
          {error ? (
            <svg className={styles["error-icon"]}>
              <use href={`${icons}#icon-error`}></use>
            </svg>
          ) : null}
        </div>

        <Button
          className={styles.btn}
          width={isDesktop ? 126 : 310}
          height={48}
          textClass={styles["btn-text"]}
          variant="secondary"
          type="submit"
        >
          Contact Us
        </Button>
      </form>
    </div>
  );
};

export default Newsletter;
