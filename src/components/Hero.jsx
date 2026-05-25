import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { colors } from "../data/story";
import story from "../data/story";

const cssStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&family=Cinzel:wght@400;600&display=swap');

  .hero-section {
    min-height: 100vh;
    background: #02040A;
    position: relative;
    overflow: hidden;
  }
  
  .split-container {
    display: flex;
    flex-direction: row; /* سيبقى هكذا دائماً */
    height: 100vh;
    width: 100%;
  }

  .side-panel {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    padding: 40px;
  }

  /* الأسماء بالخط العربي الذهبي الفاخر */
  .arabic-name {
    font-family: 'Amiri', serif;
    font-weight: 700;
    /* تم تصغير الحد الأدنى للخط ليناسب الموبايل */
    font-size: clamp(1.6rem, 4vw, 5rem); 
    background: linear-gradient(135deg, #FFFDF5 0%, #D4AF37 40%, #B38F24 70%, #FFFDF5 100%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(0 0 15px rgba(212,175,55,0.35));
    direction: rtl;
    letter-spacing: 0;
    margin-top: 10px;
    animation: shineGleam 6s linear infinite;
    text-align: center;
    white-space: nowrap;
  }

  .title-text {
    color: ${colors.gold};
    font-size: clamp(0.5rem, 1.5vw, 0.65rem);
    margin-bottom: 8px;
    font-family: "Cinzel", sans-serif;
  }

  @keyframes shineGleam {
    0% { background-position: 0% center; }
    100% { background-position: 200% center; }
  }

  .center-separator {
    width: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    flex-shrink: 0;
    position: relative;
  }

  .ring-emoji {
    font-size: 2.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    filter: drop-shadow(0 0 10px rgba(212,175,55,0.4));
  }

  /* تجاوب كامل مع الهواتف الذكية مع الحفاظ على التصميم جنباً إلى جنب */
  @media (max-width: 768px) {
    .side-panel {
      padding: 10px; /* تقليل الحواف الجانبية لإعطاء مساحة للأسماء */
    }
    
    .center-separator {
      width: 40px; /* تصغير مساحة المنتصف على الموبايل */
      gap: 10px;
    }
    
    .ring-emoji {
      font-size: 1.5rem; /* تصغير حجم الخاتم */
    }

    .countdown-wrapper {
      bottom: 3vh !important;
      width: 96% !important;
      padding: 12px 5px !important;
      gap: 6px !important;
      border-radius: 12px !important;
    }
    .countdown-box {
      width: 48px !important;
      height: 48px !important;
    }
    .countdown-box span {
      font-size: 1.2rem !important;
    }
    .countdown-label {
      font-size: 0.5rem !important;
      letter-spacing: 0.1em !important;
    }
  }
`;

function useCountdown() {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    function calc() {
      const diff = new Date(story.weddingDate) - new Date();
      if (diff <= 0)
        return setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      setTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    }
    calc();
    const t = setInterval(calc, 1000);
    return () => clearInterval(t);
  }, []);

  return time;
}

function CountdownBox({ value, label }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "6px",
        flex: 1,
      }}
    >
      <div
        className="countdown-box"
        style={{
          width: "70px",
          height: "70px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "12px",
          background:
            "linear-gradient(135deg, rgba(212,175,55,0.02) 0%, rgba(2,4,10,0.8) 100%)",
          border: `1px solid rgba(212,175,55, 0.25)`,
          boxShadow:
            "0 10px 25px rgba(0,0,0,0.4), inset 0 0 12px rgba(212,175,55,0.05)",
          backdropFilter: "blur(8px)",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "20px",
            height: "1px",
            background: colors.gold,
          }}
        />

        <AnimatePresence mode="popLayout">
          <motion.span
            key={value}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            style={{
              fontFamily: "Cinzel, Georgia, serif",
              fontSize: "1.7rem",
              color: colors.gold,
              fontWeight: "400",
              textShadow: "0 0 10px rgba(212,175,55,0.4)",
            }}
          >
            {String(value).padStart(2, "0")}
          </motion.span>
        </AnimatePresence>
      </div>
      <span
        className="countdown-label"
        style={{
          color: "#A4B3C6",
          fontSize: "0.6rem",
          letterSpacing: "0.2em",
          fontWeight: "400",
          fontFamily: "Cinzel, sans-serif",
        }}
      >
        {label}
      </span>
    </div>
  );
}

export default function Hero() {
  const time = useCountdown();

  const groomName = story.groomArabic || story.groom;
  const brideName = story.brideArabic || story.bride;

  return (
    <section className="hero-section">
      <style>{cssStyles}</style>

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "radial-gradient(circle at 50% 40%, rgba(11,22,44,0.6) 0%, transparent 75%)",
          pointerEvents: "none",
        }}
      />

      <div className="split-container">
        {/* ── الجانب الأيسر: العريس ── */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
          className="side-panel"
          style={{
            background: `linear-gradient(135deg, ${"rgb(132, 132, 132)"} 0%, #02040A 100%)`,
            borderRight: `1px solid rgba(212,175,55,0.08)`,
          }}
        >
          <div style={{ zIndex: 2, textAlign: "center", width: "100%" }}>
            <motion.p
              initial={{ opacity: 0, letterSpacing: "0.1em" }}
              animate={{ opacity: 0.6, letterSpacing: "0.3em" }}
              transition={{ delay: 0.3, duration: 1 }}
              className="title-text"
            >
              THE GROOM
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.9 }}
              className="arabic-name"
            >
              {groomName}
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              style={{
                width: "40%",
                height: "1px",
                background: `linear-gradient(90deg, transparent, ${colors.gold}, transparent)`,
                marginTop: "15px",
                marginInline: "auto",
              }}
            />
          </div>
        </motion.div>

        {/* ── فاصل المنتصف: إيموجي الخاتم الأصلي ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 1.2 }}
          className="center-separator"
        >
          <div
            style={{
              flex: 1,
              width: "1px",
              background: `linear-gradient(to bottom, transparent, rgba(212,175,55,0.3))`,
            }}
          />

          <motion.div
            className="ring-emoji"
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            💍
          </motion.div>

          <div
            style={{
              flex: 1,
              width: "1px",
              background: `linear-gradient(to top, transparent, rgba(212,175,55,0.3))`,
            }}
          />
        </motion.div>

        {/* ── الجانب الأيمن: العروسة ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
          className="side-panel"
          style={{
            background: `linear-gradient(225deg, ${" rgb(131, 130, 60)"} 0%, #02040A 100%)`,
            borderLeft: `1px solid rgba(212,175,55,0.08)`,
          }}
        >
          <div style={{ zIndex: 2, textAlign: "center", width: "100%" }}>
            <motion.p
              initial={{ opacity: 0, letterSpacing: "0.1em" }}
              animate={{ opacity: 0.6, letterSpacing: "0.3em" }}
              transition={{ delay: 0.3, duration: 1 }}
              className="title-text"
            >
              THE BRIDE
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.9 }}
              className="arabic-name"
            >
              {brideName}
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              style={{
                width: "40%",
                height: "1px",
                background: `linear-gradient(90deg, transparent, ${colors.gold}, transparent)`,
                marginTop: "15px",
                marginInline: "auto",
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* ── العداد التنازلي الفاخر المطور ── */}
      <motion.div
        initial={{ opacity: 0, y: 30, x: "-50%" }}
        animate={{ opacity: 1, y: 0, x: "-50%" }}
        transition={{ delay: 1.1, duration: 1, ease: [0.25, 1, 0.5, 1] }}
        className="countdown-wrapper"
        style={{
          position: "absolute",
          bottom: "6vh",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 15,
          display: "flex",
          justifyContent: "space-between",
          gap: "10px",
          padding: "18px 36px",
          borderRadius: "20px",
          background: "rgba(2, 4, 10, 0.75)",
          border: "1px solid rgba(212, 175, 55, 0.2)",
          backdropFilter: "blur(20px)",
          boxShadow:
            "0 30px 60px rgba(0, 0, 0, 0.65), inset 0 1px 1px rgba(255,255,255,0.06)",
        }}
      >
        <CountdownBox value={time.days} label="DAYS" />
        <CountdownBox value={time.hours} label="HOURS" />
        <CountdownBox value={time.minutes} label="MINUTES" />
        <CountdownBox value={time.seconds} label="SECONDS" />
      </motion.div>
    </section>
  );
}
