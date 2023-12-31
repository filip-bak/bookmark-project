import styles from "./NavLinks.module.scss";

const NavLinks = ({ className, column = false, light = false }) => {
  const lightStyle = light ? styles.light : "";
  const columnStyle = column ? styles.column : "";
  const customStyle = className ? className : "";

  return (
    <div className={`${styles.container} ${columnStyle} ${customStyle}`}>
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
