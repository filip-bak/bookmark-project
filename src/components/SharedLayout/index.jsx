import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";
import styles from "./SharedLayout.module.scss";
import { NavigationProvider } from "./NavigationContext";
import MobileNavigation from "./MobileNavigation";

const SharedLayout = () => {
  return (
    <div className={styles.wrapper}>
      <NavigationProvider>
        <Navigation />
        <MobileNavigation />
      </NavigationProvider>
      <Outlet />
      <Footer />
    </div>
  );
};

export default SharedLayout;
