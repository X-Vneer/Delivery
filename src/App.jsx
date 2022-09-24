import { useState } from "react";
import AboutUs from "./components/AboutUs";
import BACSection from "./components/BACSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SectionDivider from "./components/SectionDivider";
import SingleDivider from "./components/SingleDivider";
import Clints from "./components/Clints";
import HowToOrder from "./components/HowToOrder";

function App() {
  const [lang, setLang] = useState("En");
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
      <Footer lang={lang} />
    </>
  );
}

export default App;
