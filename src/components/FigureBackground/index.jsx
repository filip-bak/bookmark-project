import React from "react";
import styles from "./FigureBackground.module.scss";

const FigureBackground = ({
  width = 515,
  height = 347,
  top = "30.5%",
  reverse = false,
}) => {
  return (
    <div
      style={{ width, top, height }}
      className={`${styles.figure} ${reverse && styles.right}`}
    />
  );
};

export default FigureBackground;
