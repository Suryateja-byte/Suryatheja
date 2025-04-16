import React, { useEffect } from "react";
import ScrollToTop from "./components/ScrollToTop";
import AllRoutes from "./router/AllRoutes";
import AOS from "aos";
import "aos/dist/aos.css";
import AnimatedCursor from "react-animated-cursor";
import { ToastContainer } from "react-toastify";
import heroImg from "./assets/img/hero/dark.jpg";
import heroImgMobile from "./assets/img/hero/img-mobile.jpg";

// Define heroContent here, outside the App component
const heroContent = {
  heroImage: heroImg,
  heroMobileImage: heroImgMobile,
  heroTitleName: "Surya Theja",
  heroDesignation: "Full Stack Developer",
  heroDescriptions: `I'm a passionate Full Stack Developer with experience building responsive websites, dynamic web applications, and database-driven systems. I specialize in both front-end and back-end technologies to create efficient, user-friendly digital solutions.`,
  heroBtn: "more about me",
};

const App = () => {
  // this for animation
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={44}
        color="255, 160, 1"
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={1.2}
      />
      <ScrollToTop />
      <AllRoutes heroContent={heroContent} /> {/* Pass heroContent as a prop */}
      {/* End contact */}
      <ToastContainer />
      {/* Same as */}
    </>
  );
};

export default App;
