import { useState } from "react";
import { useScroll, motion } from "framer-motion";
import Intro from "./components/Intro";
import Hero from "./components/Hero";
import LoveStory from "./components/LoveStory";
import Gallery from "./components/Gallery";
import Details from "./components/Details";
import Location from "./components/Location";
import RSVP from "./components/RSVP";
import QuranSection from "./components/QuranSection";
import { colors } from "./data/story";

function App() {
  const [introComplete, setIntroComplete] = useState(false);
  const { scrollYProgress } = useScroll();

  return (
    <>
      <Intro onComplete={() => setIntroComplete(true)} />

      {introComplete && (
        <main style={{ background: colors.bg }}>
          <motion.div
            style={{
              scaleX: scrollYProgress,
              transformOrigin: "left",
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              height: "2px",
              background: `linear-gradient(to right, ${colors.emerald}, ${colors.gold})`,
              zIndex: 100,
            }}
          />

          <Hero />
          <LoveStory />
          <Gallery />
          <Details />
          <Location />
          <QuranSection />
          <RSVP />
        </main>
      )}
    </>
  );
}

export default App;
