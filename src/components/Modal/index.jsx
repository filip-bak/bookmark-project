import { useEffect, useState } from "react";
import { featuresTabs } from "../../pages/Home/Features/tabsConfig";
import FeatureTab from "../../components/FeatureTab";
import SplitBox from "../../components/SplitBox";

import styles from "./Modal.module.scss";
import icons from "@icons/icons.svg";

const Modal = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleClose = () => {
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
      {showPopup && (
        <div className={styles.backdrop}>
          <div className={styles.modal}>
            <SplitBox direction="right">
              <FeatureTab tab={featuresTabs[2]} />
            </SplitBox>
            <button className={styles.btn} onClick={handleClose}>
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

export default Modal;
