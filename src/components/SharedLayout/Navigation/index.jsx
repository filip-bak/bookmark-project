import React from "react";
import Logo from "../../Logo";
import NavLinks from "../NavLinks";
import Button from "../../Button";
import styles from "./Navigation.module.scss";
import icons from "@icons/icons.svg";
import { useNavigation } from "../NavigationContext";

const Navigation = () => {
  const { toggleMenu } = useNavigation();

  return (
    <div className={styles.container}>
      <Logo className={styles.logo} dark />
      <nav className={styles.nav}>
        <NavLinks />
        <Button variant="secondary" shadow>
          LOGIN
        </Button>
      </nav>
      <button className={styles.burger} onClick={toggleMenu}>
        <svg className={styles.icon}>
          <use href={`${icons}#icon-hamburger`}></use>
        </svg>
      </button>
    </div>
  );
};

export default Navigation;
