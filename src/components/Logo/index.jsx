import { Link } from "react-router-dom";
import styles from "./Logo.module.scss";
import PropTypes from "prop-types";

const Logo = ({ className, dark = false }) => {
  return (
    <Link to="/" className={`${styles.container} ${className && className}`}>
      <svg className={`${dark ? styles.dark : styles.light}`}>
        <use href="/src/assets/images/svg/icons.svg#icon-logo-bookmark"></use>
      </svg>
    </Link>
  );
};

Logo.propTypes = {
  dark: PropTypes.bool,
};

export default Logo;
