import React from "react";
import styles from "./Header.module.scss";
import Button from "@components/Button";
import SplitBox from "@components/SplitBox";
import illustration from "@icons/illustration-hero.svg";
import FigureBackground from "../../../components/FigureBackground";
import useResponsive from "../../../hooks/useResponsive";

const Header = () => {
  const { isDesktop } = useResponsive();

  return (
    <header className={styles.container}>
      <SplitBox>
        <div className={styles.content}>
          <h1 className={styles.title}>A Simple Bookmark Manager</h1>
          <p className={styles.description}>
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <div className={styles.box}>
            <Button
              width={isDesktop ? 166 : 150}
              height={48}
              variant="primary"
              textClass={styles["btn-text"]}
            >
              Get it on Chrome
            </Button>
            <Button
              width={isDesktop ? 160 : 145}
              height={48}
              shadow
              textClass={styles["btn-text"]}
            >
              Get it on Firefox
            </Button>
          </div>
        </div>
        <div className={styles.poster}>
          <img
            className={styles.illustration}
            src={illustration}
            alt="Monitor illustration"
          />
          <FigureBackground
            width={isDesktop ? 515 : 303}
            height={isDesktop ? 354 : 203}
            top={isDesktop ? 139 : 56}
          />
        </div>
      </SplitBox>
    </header>
  );
};

export default Header;
