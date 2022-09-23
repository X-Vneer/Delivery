import { useState } from "react";
import AboutUs from "./components/AboutUs";
import BACSection from "./components/BACSection";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SectionDivider from "./components/SectionDivider";
import SingleDivider from "./components/SingleDivider";

function App() {
  const [lang, setLang] = useState("En");
  return (
    <>
      <Navbar lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <SectionDivider />
      <AboutUs lang={lang} />
      <SingleDivider />
      <BACSection lang={lang} />
    </>
  );
}

export default App;
