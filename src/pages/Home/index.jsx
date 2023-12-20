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
import Modal from "../../components/Modal";

const Home = () => {
  return (
    <>
      <Header />
      <Features />
      <Download />
      <FAQ />
      <Newsletter />
      <Modal />
    </>
  );
};

export default Home;
