import PropTypes from "prop-types";
import FigureBackground from "../FigureBackground";
import Button from "../Button";
import styles from "./FeatureTab.module.scss";
import { featuresTabs } from "../../pages/Home/Features/tabsConfig";
import useResponsive from "../../hooks/useResponsive";

const FeatureTab = ({ tab }) => {
  const isBigFigure =
    tab.id === featuresTabs[1].id || tab.id === featuresTabs[2].id;

  const { isTablet, isDesktop } = useResponsive();

  return (
    <>
      <div className={styles.poster}>
        <img className={styles.illustration} src={tab.img} alt="illustration" />

        <FigureBackground
          width={isDesktop ? 640 : 307}
          height={
            isDesktop ? (isBigFigure ? 400 : 354) : isBigFigure ? 260 : 203
          }
          top={isDesktop ? 80 : 33}
          reverse
        />
      </div>
      <div className={styles.box}>
        <h3 className={styles.title}>{tab.title}</h3>
        <p className={styles.description}>{tab.description}</p>

        {isTablet && (
          <Button
            variant="primary"
            width={114}
            height={48}
            className={styles.btn}
            textClass={styles["btn-text"]}
            shadow
          >
            More Info
          </Button>
        )}
      </div>
    </>
  );
};

FeatureTab.propTypes = {};

export default FeatureTab;
