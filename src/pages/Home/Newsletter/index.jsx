import { useEffect, useState } from "react";
import Button from "../../../components/Button";
import styles from "./Newsletter.module.scss";
import { newsletterSchema } from "./schema";
import useResponsive from "../../../hooks/useResponsive";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [peopleCount, setPeopleCount] = useState(35000);

  const { isDesktop } = useResponsive();

  useEffect(() => {
    const animationDuration = 20000;
    const framesPerSecond = 60;
    const decrementPerSecond = 1850;
    const decrement = decrementPerSecond / framesPerSecond;
    const interval = 1000 / framesPerSecond;

    const decreaseCount = () => {
      setPeopleCount((prevCount) => Math.max(0, prevCount - decrement));
    };
    const intervalId = setInterval(decreaseCount, interval);

    if (peopleCount <= 0) {
      clearTimeout(intervalId);
      return;
    }

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
