import { useEffect, useState } from "react";
import FeatureTab from "../../components/FeatureTab";
import Download from "./Download";
import FAQ from "./FAQ";
import Features from "./Features";
import { featuresTabs } from "./Features/tabsConfig";
import Header from "./Header";
import Newsletter from "./Newsletter";
import styles from "./Home.module.scss";
import SplitBox from "../../components/SplitBox";
import Button from "../../components/Button";
import icons from "@icons/icons.svg";

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
  const handleClick = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    const debounceDelay = 250;
    let timeoutId;

    const handleMouseMove = (e) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (e.pageY <= 10) {
          setShowPopup(true);
        }
      }, debounceDelay);
    };

    const popupTimer = setTimeout(() => {
      setShowPopup(true);
    }, 30000);

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      clearTimeout(popupTimer);
      window.removeEventListener("mouseenter", handleMouseMove);
    };
  }, []);

  return (
    <>
      <Header />
      <Features />
      <Download />
      <FAQ />
      <Newsletter />
      {showPopup && (
        <div className={styles.backdrop}>
          <div className={styles.modal}>
            <SplitBox direction="right">
              <FeatureTab tab={featuresTabs[2]} />
            </SplitBox>
            <button className={styles.btn} onClick={handleClick}>
              <svg className={styles.close}>
                <use href={`${icons}#icon-close`}></use>
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
