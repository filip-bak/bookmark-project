import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";

const SharedLayout = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
};

export default SharedLayout;
