import useResponsive from "../../../hooks/useResponsive";
import Logo from "../../Logo";
import Socials from "../../Socials";
import NavLinks from "../NavLinks";
import styles from "./Footer.module.scss";

const Footer = () => {
  const { isDesktop } = useResponsive();

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <Logo className={styles.logo} />
        <NavLinks column={!isDesktop} light />
      </nav>
      <Socials />
    </div>
  );
};

export default Footer;
