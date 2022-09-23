import { useState } from "react";
import AboutUs from "./components/AboutUs";
import BACSection from "./components/BACSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SectionDivider from "./components/SectionDivider";
import SingleDivider from "./components/SingleDivider";
import TermsAndConditions from "./components/TermsAndConditions";

function App() {
  const [lang, setLang] = useState("En");
  return (
    <>
      <Navbar lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <SectionDivider />
      <AboutUs lang={lang} />
      <SingleDivider />
      <TermsAndConditions lang={lang} />
      <BACSection lang={lang} />
      <Footer lang={lang} />
    </>
  );
}

export default App;
