import PropTypes from "prop-types";
import FigureBackground from "../FigureBackground";
import Button from "../Button";
import styles from "./FeatureTab.module.scss";
import { useEffect, useRef, useState } from "react";
import { featuresTabs } from "../../pages/Home/Features/tabsConfig";

const FeatureTab = ({ tab }) => {
  const isBigFigure =
    tab.id === featuresTabs[1].id || tab.id === featuresTabs[2].id;

  return (
    <>
      <div className={styles.poster}>
        <img className={styles.illustration} src={tab.img} alt="illustration" />
        <FigureBackground
          width={640}
          height={isBigFigure ? 400 : 354}
          top="80px"
          reverse
        />
        {/* <FigureBackground width={640} top="24%" reverse /> */}
      </div>
      <div className={styles.box}>
        <h3 className={styles.title}>{tab.title}</h3>
        <p className={styles.description}>{tab.description}</p>
        <Button
          variant="primary"
          width={114}
          height={48}
          textClass={styles["btn-text"]}
          shadow
        >
          More Info
        </Button>
      </div>
    </>
  );
};

FeatureTab.propTypes = {};

export default FeatureTab;
