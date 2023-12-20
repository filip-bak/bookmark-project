import Logo from "../../Logo";
import { useNavigation } from "../NavigationContext";
import NavLinks from "../NavLinks";
import icons from "@icons/icons.svg";
import styles from "./MobileNavigation.module.scss";
import Button from "../../Button";
import Socials from "../../Socials";

const MobileNavigation = () => {
  const { isOpen, toggleMenu } = useNavigation();

  return (
    <div className={`${styles.container} ${isOpen ? styles.open : ""}`}>
      <div className={styles.content}>
        <div className={styles.box}>
          <Logo />

          <button className={styles.btn} onClick={toggleMenu}>
            <svg className={styles.close}>
              <use href={`${icons}#icon-close`}></use>
            </svg>
          </button>
        </div>

        <NavLinks className={styles["nav-links"]} light column />
        <Button width={310} height={47} className={styles["login-btn"]}>
          LOGIN
        </Button>
        <Socials />
      </div>
    </div>
  );
};

export default MobileNavigation;
