import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";
import styles from "./SharedLayout.module.scss";

const SharedLayout = () => {
  return (
    <div className={styles.wrapper}>
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
};

export default SharedLayout;
