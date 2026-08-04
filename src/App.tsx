import { useState } from "react";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import Location from "./components/Location";
import ScaleWrapper from "./components/ScaleWrapper";
import AutoScrollIntro from "./components/AutoScrollIntro";
import BackgroundMusic from "./components/BackgroundMusic";
import CoverScreen from "./components/CoverScreen";
import bgMM from "./assets/bgMM.jpg";
import gold1 from "./assets/gold1.png";
import gold2 from "./assets/gold2.png";

function App() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      {!isOpened && <CoverScreen onOpen={() => setIsOpened(true)} />}

      {isOpened && (
        <>
          <AutoScrollIntro duration={20000} />
          <BackgroundMusic />

          <ScaleWrapper>
            <div
              className="relative overflow-hidden"
              style={{
                backgroundImage: `url(${bgMM})`,
                backgroundRepeat: "repeat-y",
                backgroundPosition: "top center",
                backgroundSize: "100% auto",
              }}
            >
              <Hero />
              <Countdown />
              <Location />

              <div className="relative h-[250px]">
                <img src={gold1} className="left-decoration" alt="" />
                <img src={gold2} className="right-decoration" alt="" />
              </div>
            </div>
          </ScaleWrapper>
        </>
      )}
    </>
  );
}

export default App;