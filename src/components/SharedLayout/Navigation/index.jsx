import React from "react";
import Logo from "../../Logo";
import NavLinks from "../NavLinks";
import Button from "../../Button";
import styles from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <div className={styles.container}>
      <Logo className={styles.logo} dark />
      <nav className={styles.nav}>
        <NavLinks />
        <Button variant="secondary" shadow>
          LOGIN
        </Button>
      </nav>
    </div>
  );
};

export default Navigation;
