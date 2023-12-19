import React, { Children } from "react";
import PropTypes from "prop-types";
import styles from "./SplitBox.module.scss";

const SplitBox = ({ direction = "left", children }) => {
  const directions = {
    left: styles.left,
    right: styles.right,
  };

  return (
    <div
      className={`${styles.container} ${direction && directions[direction]}`}
    >
      {children}
    </div>
  );
};

SplitBox.propTypes = {};

export default SplitBox;
