import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Solutions from "./components/Solutions/Solutions";
import Title from "./components/Title/Title";
import About from "./components/About/About";
const App = () => {
  let heroData = [
    {text1:"Elix Solution", text2:"Sdn. Bhd."},
    {text1:"SaaS Services", text2:"Enforcement System"}
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
      <div className="section2">
      <Title subTitle="Our Services" Title="What We Offer"/>
      <Solutions/>
      </div>
      <About />
    </div>
    
  );
}

export default App

