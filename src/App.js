import logo from "./logo.svg";
import { useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Prelodder from "./components/Prelodder";
import Header from "../src/components/Header";
import Work from "../src/components/Work";
import Should from "../src/components/Should";
import Choose from "../src/components/Choose";
import Testimonals from "../src/components/Testimonals";
import Footer from "../src/components/Footer";
// import AOS from "aos";
// import "aos/dist/aos.css";
function App() {
  // useEffect(() => {
  //   AOS.init({
  //     once: true,
  //   });
  // }, []);
  return (
    <>
      <Prelodder />
      <Header />
      <Work />
      <Should />
      <Choose />
      <Testimonals />
      <Footer />
    </>
  );
}

export default App;
