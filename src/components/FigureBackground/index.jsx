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
      style={{
        width: width,
        top: top,
        height: height,
      }}
      className={`${styles.figure} ${reverse && styles.right}`}
    />
  );
};

export default FigureBackground;
