import React, { Children } from "react";
import PropTypes from "prop-types";
import styles from "./SplitBox.module.scss";

const SplitBox = ({ direction = "left", rowGap = 63, children }) => {
  const directions = {
    left: styles.left,
    right: styles.right,
  };

  return (
    <div
      style={{ rowGap }}
      className={`${styles.container} ${direction && directions[direction]}`}
    >
      {children}
    </div>
  );
};

SplitBox.propTypes = {};

export default SplitBox;
