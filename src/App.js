import React, { useEffect } from "react";
import Home from "./components/Home";
import ScrollToTop from "./components/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <ScrollToTop />
      <Home />
      
    </>
  );
};


export default App;
