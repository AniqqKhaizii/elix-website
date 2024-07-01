import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Solutions from "./components/Solutions/Solutions";
import About from "./components/About/About";
import Spkb from "./components/SpkbSolution/Spkb";
const App = () => {
  let heroData = [
    { text1: '"FROM ENFORCER', text2: 'TO ENFORCEMENT"', text3: 'Elix Solution Sdn. Bhd.' },
    { text1: "Transforming Enforcement with Integrated Precision" }
  ]

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);


  return (
    <div>
      <Navbar />
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
      <Spkb />
      <Solutions />

      <About />
    </div>

  );
}

export default App

