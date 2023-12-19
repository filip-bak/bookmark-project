// AccordionItem.jsx
import { useState } from "react";
import icons from "@icons/icons.svg";
import styles from "./AccordionItem.module.scss";

const AccordionItem = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.container}>
      <div className={styles.label} onClick={toggleAccordion}>
        {label}
        <svg
          className={`${styles.arrow} ${isOpen ? styles["arrow-rotate"] : ""}`}
        >
          <use href={`${icons}#icon-arrow`}></use>
        </svg>
      </div>
      {isOpen && <p className={styles.content}>{children}</p>}
    </div>
  );
};

export default AccordionItem;
