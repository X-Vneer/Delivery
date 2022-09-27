import { useState, useEffect } from "react";
import AboutUs from "./components/AboutUs";
import BACSection from "./components/BACSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SectionDivider from "./components/SectionDivider";
import SingleDivider from "./components/SingleDivider";
import Clints from "./components/Clints";
import HowToOrder from "./components/HowToOrder";
import TermsAndConditions from "./components/TermsAndConditions";

function App() {
  const [lang, setLang] = useState("En");
  useEffect(() => {
    const lang = window.localStorage.getItem("lang");
    setLang(lang || "En");
  }, []);

  return (
    <>
      <Navbar lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <HowToOrder lang={lang} />
      <SectionDivider />
      <AboutUs lang={lang} />
      <SingleDivider />
      <Clints lang={lang} />
      <BACSection lang={lang} />
      <SingleDivider />
      {/* <TermsAndConditions lang={lang} /> */}
      <Footer lang={lang} />
    </>
  );
}

export default App;
