import { useEffect, useState } from "react";

const colors = {
  bgTop: "#0B162C",
  bgBottom: "#02040A",
  moonCenter: "#FFFDF5",
  moonGlow: "#D4AF37",
  silhouette: "#050B14",
  textLight: "#FFFDF5",
  textGold: "#D4AF37",
};

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;1,400&family=Cinzel:wght@400;600&family=Alex+Brush&display=swap');
  
  * { box-sizing: border-box; margin: 0; padding: 0; }

  .intro-wrapper {
    width: 100vw; height: 100vh;
    background: radial-gradient(circle at center, ${colors.bgTop} 0%, ${colors.bgBottom} 100%);
    display: flex; flex-direction: column;
    align-items: center; 
    justify-content: center; 
    gap: 10px; 
    padding: 20px;
    overflow: hidden; position: relative;
    transition: opacity 1s cubic-bezier(0.4, 0, 0.2, 1), transform 1s ease;
  }

  .intro-wrapper.fade-out {
    opacity: 0;
    transform: scale(1.02);
    pointer-events: none;
  }

  .star {
    position: absolute; background: #fff; border-radius: 50%;
    animation: twinkle var(--duration) infinite ease-in-out var(--delay);
  }
  @keyframes twinkle {
    0%, 100% { opacity: 0.1; transform: scale(0.8); }
    50% { opacity: 1; transform: scale(1.3); filter: drop-shadow(0 0 3px #fff); }
  }

  .shooting-star {
    position: absolute; top: 5%; left: -15%;
    width: 250px; height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,1) 50%, transparent);
    transform: rotate(22deg);
    animation: shoot 6s infinite cubic-bezier(0.25, 1, 0.5, 1);
    opacity: 0;
  }
  @keyframes shoot {
    0% { transform: translateX(0) translateY(0) rotate(22deg); opacity: 0; }
    5% { opacity: 0.9; filter: drop-shadow(0 0 5px #fff); }
    15% { transform: translateX(1100px) translateY(440px) rotate(22deg); opacity: 0; }
    100% { opacity: 0; }
  }

  .firefly {
    animation: floatOrganic 4s ease-in-out infinite alternate var(--delay);
  }
  @keyframes floatOrganic {
    0% { transform: translateY(0) translateX(0) scale(0.8); opacity: 0.2; }
    50% { transform: translateY(-30px) translateX(20px) scale(1.4); opacity: 1; filter: drop-shadow(0 0 4px ${colors.moonGlow}); }
    100% { transform: translateY(-60px) translateX(-15px) scale(1); opacity: 0; }
  }

  .scene-container {
    width: 100%; max-width: 550px;
    display: flex; flex-direction: column;
    justify-content: center; z-index: 5;
    opacity: 0; animation: fadeInScene 2.5s ease 0.3s forwards;
    margin-top: -12vh; 
    margin-bottom: -70px; 
  }
  @keyframes fadeInScene { to { opacity: 1; } }

  .main-scene { width: 100%; height: auto; overflow: visible; }

  /* تأثير التنفس الطبيعي للعرسان */
  .breathing-silhouette {
    animation: breathe 3.5s ease-in-out infinite alternate;
    transform-origin: 250px 241px; /* النقطة السفلية عشان التمدد يكون لفوق بس */
  }
  @keyframes breathe {
    0% { transform: scaleY(1); }
    100% { transform: scaleY(1.015); }
  }

  /* تأثير مياه البحيرة */
  .water-ripple-lines {
    animation: waterLines 3s ease-in-out infinite alternate;
    opacity: 0.4;
  }
  @keyframes waterLines {
    0% { transform: translateX(-3px); opacity: 0.2; }
    100% { transform: translateX(3px); opacity: 0.6; }
  }

  .reflection-scene {
    width: 100%; height: auto;
    transform: scaleY(-0.8) translateY(-1px);
    opacity: 0.16;
    filter: blur(5px);
    mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3) 30%, transparent 75%);
    -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3) 30%, transparent 75%);
    animation: waterRipple 4s ease-in-out infinite alternate;
  }
  @keyframes waterRipple {
    0% { filter: blur(4px) skewX(-0.5deg); }
    100% { filter: blur(6px) skewX(0.5deg); }
  }

  .ring-sparkle {
    animation: pulseSparkle 2s infinite ease-in-out;
    transform-origin: 249px 149px;
  }
  @keyframes pulseSparkle {
    0%, 100% { transform: scale(0.6) rotate(0deg); opacity: 0.5; filter: blur(0.5px); }
    50% { transform: scale(1.8) rotate(45deg); opacity: 1; filter: drop-shadow(0 0 8px #fff); }
  }

  .text-overlay {
    text-align: center; width: 100%; max-width: 500px;
    opacity: 0; animation: textUp 2s cubic-bezier(.22,1,.36,1) 1.2s forwards;
    z-index: 15;
    margin-top: -30px; 
  }
  @keyframes textUp {
    from { opacity: 0; transform: translateY(25px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .she-said {
    font-family: 'Alex Brush', cursive;
    font-size: clamp(2.3rem, 5.5vw, 3.5rem);
    color: ${colors.textLight};
    text-shadow: 0 0 20px rgba(255,253,245,0.4);
    margin-bottom: -12px;
  }

  .yes {
    font-family: 'Cinzel', serif;
    font-size: clamp(4rem, 12vw, 7.5rem);
    font-weight: 400; letter-spacing: .12em;
    color: transparent;
    -webkit-text-stroke: 1px rgba(212,175,55,0.5);
    background: linear-gradient(to bottom, #FFFDF5 30%, #D4AF37 85%);
    -webkit-background-clip: text;
    background-clip: text;
    text-shadow: 0 0 50px rgba(212,175,55,0.4);
    animation: textPulse 3s ease-in-out infinite alternate;
  }
  @keyframes textPulse {
    0% { filter: drop-shadow(0 0 15px rgba(212,175,55,0.3)); transform: scale(1); }
    100% { filter: drop-shadow(0 0 35px rgba(212,175,55,0.7)); transform: scale(1.03); }
  }

  .divider { display: flex; align-items: center; justify-content: center; margin: 15px 0; }
  .line { width: 70px; height: 1px; background: linear-gradient(90deg, transparent, ${colors.textGold}, transparent); }
  .diamond { width: 5px; height: 5px; background: ${colors.textGold}; transform: rotate(45deg); margin: 0 12px; box-shadow: 0 0 10px ${colors.textGold};}

  .names {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(1.1rem, 3vw, 1.4rem);
    color: ${colors.textLight};
    letter-spacing: .4em; text-transform: uppercase;
    font-weight: 300;
  }

  .enter-btn {
    margin-top: 3vh;
    font-family: 'Cormorant Garamond', serif;
    font-size: 0.9rem; letter-spacing: .3em;
    color: rgba(255,253,245,0.85);
    background: rgba(212,175,55,0.05);
    border: 1px solid rgba(212,175,55,0.3);
    padding: 12px 45px; border-radius: 50px;
    cursor: pointer; opacity: 0;
    backdrop-filter: blur(5px);
    animation: textUp 1.5s ease 2.2s forwards;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .enter-btn:hover {
    color: #FFF;
    border-color: ${colors.textGold};
    background: rgba(212,175,55,0.15);
    letter-spacing: .35em;
    box-shadow: 0 0 25px rgba(212,175,55,0.2) inset, 0 0 30px rgba(212,175,55,0.5);
    transform: translateY(-2px);
  }
`;

export default function PremiumProposal({ onComplete }) {
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [gone, setGone] = useState(false);

  const handleExit = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      setGone(true);
      onComplete?.();
    }, 1000);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleExit();
    }, 7500);
    return () => clearTimeout(timer);
  }, []);

  if (gone) return null;

  const SceneSVG = ({ className }) => (
    <svg
      className={className}
      viewBox="0 0 500 250"
      fill="none"
      strokeLinejoin="round"
      strokeLinecap="round"
    >
      <defs>
        <radialGradient id="moonLight" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={colors.moonCenter} stopOpacity="1" />
          <stop offset="25%" stopColor={colors.moonCenter} stopOpacity="0.8" />
          <stop offset="50%" stopColor={colors.moonGlow} stopOpacity="0.4" />
          <stop offset="100%" stopColor={colors.moonGlow} stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* الهالة المضيئة الكبيرة للقمر */}
      <circle cx="250" cy="135" r="140" fill="url(#moonLight)" opacity="0.4" />
      {/* القمر الأساسي */}
      <circle cx="250" cy="135" r="95" fill="url(#moonLight)" />

      {/* يراعات سحرية بأحجام وألوان مختلفة */}
      <circle
        cx="230"
        cy="160"
        r="1.5"
        fill="#FFF"
        className="firefly"
        style={{ "--delay": "0s" }}
      />
      <circle
        cx="265"
        cy="135"
        r="1.8"
        fill={colors.moonGlow}
        className="firefly"
        style={{ "--delay": "1.2s" }}
      />
      <circle
        cx="215"
        cy="145"
        r="1.2"
        fill="#FFF"
        className="firefly"
        style={{ "--delay": "0.5s" }}
      />
      <circle
        cx="280"
        cy="170"
        r="2"
        fill={colors.moonGlow}
        className="firefly"
        style={{ "--delay": "2.1s" }}
      />
      <circle
        cx="190"
        cy="180"
        r="1.5"
        fill="#FFF"
        className="firefly"
        style={{ "--delay": "1.8s" }}
      />

      {/* الأرضية السفلية المضيئة قليلاً من المنتصف */}
      <path d="M 0 250 Q 250 238 500 250 Z" fill={colors.silhouette} />
      <path
        d="M 0 250 Q 250 238 500 250"
        fill="none"
        stroke="rgba(212,175,55,0.4)"
        strokeWidth="0.8"
      />

      {/* تموجات الماء تحت الأرضية */}
      <g className="water-ripple-lines">
        <line
          x1="180"
          y1="246"
          x2="320"
          y2="246"
          stroke={colors.moonGlow}
          strokeWidth="0.5"
        />
        <line
          x1="220"
          y1="248"
          x2="280"
          y2="248"
          stroke="#FFF"
          strokeWidth="0.3"
        />
      </g>

      <g className="breathing-silhouette">
        {/* ── العريس المحسن ── */}
        <g fill={colors.silhouette}>
          {/* الرأس مع تفاصيل أدق للأنف والشعر */}
          <path d="M 188 131 C 195 128, 200 133, 199 138 C 198 142, 192 145, 188 145 C 182 145, 182 134, 188 131 Z" />
          {/* ظهر البدلة (Tuxedo) مع خصر ممشوق */}
          <path d="M 190 145 C 208 145, 205 160, 195 190 L 178 185 C 180 155, 185 145, 190 145 Z" />
          {/* الركبة المرفوعة بشكل رياضي طبيعي */}
          <path d="M 195 190 C 215 195, 222 195, 222 200 L 215 208 C 200 205, 190 205, 186 200 Z" />
          <path d="M 222 200 L 221 235 L 212 235 L 215 208 Z" />
          <path d="M 221 233 L 232 237 L 232 240 L 211 240 Z" /> {/* الحذاء */}
          {/* الركبة المستندة على الأرض */}
          <path d="M 178 185 L 157 233 L 171 237 L 191 195 Z" />
          <path d="M 157 233 L 138 238 L 138 240 L 161 240 Z" />
          {/* اليد الممدودة تحمل العلبة (تم تنعيم الانحناء) */}
          <path
            d="M 197 151 C 215 155, 230 162, 245 155"
            fill="none"
            stroke={colors.silhouette}
            strokeWidth="3.2"
          />
          {/* اليد الخلفية */}
          <path
            d="M 188 148 C 175 160, 175 165, 172 170"
            fill="none"
            stroke={colors.silhouette}
            strokeWidth="3"
          />
        </g>

        {/* ── العروسة المحسنة ── */}
        <g>
          {/* طرحة الفستان الانسيابية */}
          <path
            d="M 284 128 C 320 135, 335 180, 355 240 L 325 240 C 310 195, 298 150, 284 128 Z"
            fill="rgba(255, 255, 255, 0.18)"
          />

          <g fill={colors.silhouette}>
            {/* رأس العروس (Updo Hair) */}
            <path d="M 280 124 C 285 118, 292 125, 288 132 C 284 135, 275 135, 277 128 C 278 125, 278 126, 280 124 Z" />
            <circle cx="282" cy="125" r="4.8" />

            {/* الرقبة والظهر */}
            <path d="M 278 132 C 283 138, 282 145, 275 142 C 275 137, 276 135, 278 132 Z" />
            <path d="M 276 141 C 295 155, 285 178, 271 178 C 265 155, 268 145, 276 141 Z" />

            {/* فستان زفاف منفوش (Ballgown) فخم جداً */}
            <path d="M 271 178 C 290 180, 315 200, 335 240 L 235 240 C 248 210, 260 185, 271 178 Z" />

            {/* اليد على الفم (تأثر ورومانسية) */}
            <path
              d="M 276 149 C 260 155, 265 145, 274 135"
              fill="none"
              stroke={colors.silhouette}
              strokeWidth="2.5"
            />
          </g>
        </g>
      </g>

      {/* ── بريق الخاتم والعلبة ── */}
      <g>
        <rect
          x="247.5"
          y="152.5"
          width="5"
          height="4"
          fill={colors.moonGlow}
          rx="1"
        />
        <circle
          className="ring-sparkle"
          cx="249"
          cy="149"
          r="2.5"
          fill="#FFF"
        />
        <path
          d="M 249 143 L 249 155 M 243 149 L 255 149"
          stroke="#FFF"
          strokeWidth="0.8"
          className="ring-sparkle"
        />
      </g>
    </svg>
  );

  return (
    <>
      <style>{css}</style>
      <div className={`intro-wrapper ${isFadingOut ? "fade-out" : ""}`}>
        {/* النجوم */}
        <div
          className="star"
          style={{
            top: "15%",
            left: "20%",
            width: "2px",
            height: "2px",
            "--duration": "3s",
            "--delay": "0s",
          }}
        />
        <div
          className="star"
          style={{
            top: "25%",
            left: "75%",
            width: "1.5px",
            height: "1.5px",
            "--duration": "4s",
            "--delay": "1s",
          }}
        />
        <div
          className="star"
          style={{
            top: "40%",
            left: "10%",
            width: "2.5px",
            height: "2.5px",
            "--duration": "2.5s",
            "--delay": "0.5s",
          }}
        />
        <div
          className="star"
          style={{
            top: "12%",
            left: "85%",
            width: "2px",
            height: "2px",
            "--duration": "5s",
            "--delay": "1.5s",
          }}
        />
        <div
          className="star"
          style={{
            top: "50%",
            left: "80%",
            width: "1.5px",
            height: "1.5px",
            "--duration": "3.5s",
            "--delay": "2s",
          }}
        />

        <div className="shooting-star" />

        {/* مشهد العرسان */}
        <div className="scene-container">
          <SceneSVG className="main-scene" />
          <SceneSVG className="reflection-scene" />
        </div>

        {/* النصوص */}
        <div className="text-overlay">
          <p className="she-said">she said</p>
          <div className="yes">YES</div>

          <div className="divider">
            <div className="line" />
            <div className="diamond" />
            <div className="line" />
          </div>

          <p className="names">Omar &nbsp;&nbsp;&nbsp; Salma</p>

          <button className="enter-btn" onClick={handleExit}>
            ENTER
          </button>
        </div>
      </div>
    </>
  );
}
