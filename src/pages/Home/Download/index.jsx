import React from "react";
import styles from "./Download.module.scss";
import Cards from "./Cards";
import { downloadCards } from "./cardsConfig";

const Download = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>Download the extension</h2>
        <p className={styles.description}>
          We've got more browsers in the pipeline. Please do let us know if
          you've got a favourite you'd like us to prioritize
        </p>
      </div>
      <div className={styles.box}>
        <Cards cards={downloadCards} />
      </div>
    </div>
  );
};

export default Download;
