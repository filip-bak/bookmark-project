import { Fragment, useState } from "react";
import PropTypes from "prop-types";
import styles from "./Tabs.module.scss";
import SplitBox from "../SplitBox";
import FeatureTab from "../FeatureTab";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const isActiveStyles = (tabId) => (tabId === activeTab ? styles.active : "");
  const activeTabContent = tabs.filter((tab) => tab.id === activeTab);

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  return (
    <div className={styles.container}>
      <div className={styles.list}>
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`${styles.tab} ${isActiveStyles(tab.id)}`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className={styles["tab-content"]}>
        {activeTabContent.map((tab) => (
          <div key={tab.id} className={isActiveStyles(tab.id)}>
            <SplitBox direction="right" rowGap={1}>
              <FeatureTab tab={tab} />
            </SplitBox>
          </div>
        ))}
      </div>
    </div>
  );
};

Tabs.propTypes = {};

export default Tabs;
