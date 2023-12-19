import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.scss";

const Button = ({
  width = 110,
  height = 40,
  variant = "primary",
  shadow = false,
  textClass,
  props,
  children,
}) => {
  const variants = {
    primary: styles.primary,
    secondary: styles.secondary,
  };

  const classes = [
    styles.container,
    variant && variants[variant],
    shadow && styles.shadow,
  ];
  const buttonClasses = classes.filter(Boolean).join(" ");

  return (
    <button className={buttonClasses} style={{ width, height }} {...props}>
      <span className={textClass}>{children}</span>
    </button>
  );
};

Button.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  variant: PropTypes.oneOf(["primary", "secondary"]),
  shadow: PropTypes.bool,
  props: PropTypes.shape(React.ButtonHTMLAttributes),
  children: PropTypes.node,
};

export default Button;
