import styles from "./NavLinks.module.scss";

const NavLinks = ({ light = false }) => {
  const lightStyle = light ? styles.light : "";

  return (
    <div className={styles.container}>
      <a className={`${styles.link} ${lightStyle}`} href="#features">
        Features
      </a>
      <a className={`${styles.link} ${lightStyle}`} href="#pricing">
        Pricing
      </a>
      <a className={`${styles.link} ${lightStyle}`} href="#contact">
        Contact
      </a>
    </div>
  );
};

export default NavLinks;
