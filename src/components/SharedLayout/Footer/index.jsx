import Logo from "../../Logo";
import NavLinks from "../NavLinks";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <Logo className={styles.logo} />
        <NavLinks light />
      </nav>
      <div className={styles.social}>
        <a className={styles.link} href="#">
          <svg className={styles.icon}>
            <use href="/src/assets/images/svg/icons.svg#icon-facebook"></use>
          </svg>
        </a>
        <a className={styles.link} href="#">
          <svg className={styles.icon}>
            <use href="/src/assets/images/svg/icons.svg#icon-twitter"></use>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Footer;
