import Logo from "../../Logo";
import NavLinks from "../NavLinks";
import styles from "./Footer.module.scss";
import icons from "@icons/icons.svg";

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
            <use href={`${icons}#icon-facebook`}></use>
          </svg>
        </a>
        <a className={styles.link} href="#">
          <svg className={styles.icon}>
            <use href={`${icons}#icon-twitter`}></use>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Footer;
