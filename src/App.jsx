import { useState } from "react";
import AboutUs from "./components/AboutUs";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  const [lang, setLang] = useState("En");
  return (
    <>
      <Navbar lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <AboutUs lang={lang} />
    </>
  );
}

export default App;
