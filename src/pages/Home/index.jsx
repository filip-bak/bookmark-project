import Modal from "../../components/Modal";
import Download from "./Download";
import FAQ from "./FAQ";
import Features from "./Features";
import Header from "./Header";
import Newsletter from "./Newsletter";

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
