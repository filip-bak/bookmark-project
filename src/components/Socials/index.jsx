import styles from "./Socials.module.scss";
import icons from "@icons/icons.svg";

const Socials = () => {
  return (
    <div className={styles.social}>
      <a className={styles.link} href="#">
        <svg className={styles.icon}>
          <use href={`${icons}#icon-facebook`}></use>
        </svg>
      </a>
      <a className={styles.link} href="#">
        <svg className={styles.icon}>
          <use href={`${icons}#icon-twitter`}></use>
        </svg>
      </a>
    </div>
  );
};

export default Socials;
