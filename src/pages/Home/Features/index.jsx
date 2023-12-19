import Tabs from "../../../components/Tabs";
import styles from "./Features.module.scss";
import { featuresTabs } from "./tabsConfig";

const Features = () => {
  return (
    <section id="features" className={styles.section}>
      <div className={styles.box}>
        <h2 className={styles.title}>Features</h2>
        <p className={styles.description}>
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      <div className={styles.tabs}>
        <Tabs tabs={featuresTabs} />
      </div>
    </section>
  );
};

export default Features;
