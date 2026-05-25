import { motion } from "framer-motion";
import { colors } from "../data/story";

const cssStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&family=Aref+Ruqaa&display=swap');

  .quran-section {
    background: #02040A;
    padding: 120px 24px;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 80vh;
  }

  .quran-card {
    max-width: 900px;
    text-align: center;
    position: relative;
    z-index: 2;
    padding: 60px 40px;
    border-radius: 20px;
    background: linear-gradient(180deg, rgba(2, 4, 10, 0.2) 0%, rgba(20, 25, 40, 0.6) 100%);
    border: 1px solid rgba(212, 175, 55, 0.15);
    box-shadow: 0 30px 60px rgba(0,0,0,0.6), inset 0 0 30px rgba(212,175,55,0.05);
    backdrop-filter: blur(12px);
  }

  .basmalah {
    font-family: 'Aref Ruqaa', serif; /* خط الرقعة لبسم الله */
    font-size: 1.5rem;
    color: #D4AF37;
    margin-bottom: 30px;
    opacity: 0.9;
  }

  .quran-verse {
    font-family: 'Amiri', serif;
    font-size: clamp(1.8rem, 4vw, 2.6rem);
    line-height: 2;
    font-weight: 700;
    color: transparent;
    background: linear-gradient(135deg, #FFFDF5 0%, #D4AF37 40%, #B38F24 70%, #FFFDF5 100%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shineGleam 8s linear infinite;
    direction: rtl;
  }

  .quran-brackets {
    color: #D4AF37;
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 400;
    margin: 0 8px;
    opacity: 0.8;
  }

  .quran-surah {
    font-family: 'Amiri', serif;
    color: #A4B3C6;
    font-size: 1.1rem;
    margin-top: 30px;
    letter-spacing: 0.05em;
  }

  /* تأثير الهالة المضيئة التي تنبض خلف اللوحة */
  .glow-background {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60vw;
    height: 60vw;
    background: radial-gradient(circle, rgba(212,175,55,0.05) 0%, transparent 60%);
    border-radius: 50%;
    pointer-events: none;
    z-index: 1;
    animation: pulseGlow 6s ease-in-out infinite alternate;
  }

  @keyframes pulseGlow {
    0% { transform: translate(-50%, -50%) scale(0.9); opacity: 0.5; }
    100% { transform: translate(-50%, -50%) scale(1.1); opacity: 1; }
  }

  @keyframes shineGleam {
    0% { background-position: 0% center; }
    100% { background-position: 200% center; }
  }

  @media (max-width: 768px) {
    .quran-card {
      padding: 40px 20px;
    }
    .quran-verse {
      line-height: 1.8;
    }
  }
`;

export default function QuranSection() {
  return (
    <section className="quran-section">
      <style>{cssStyles}</style>

      {/* الهالة المضيئة في الخلفية */}
      <div className="glow-background" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
        className="quran-card"
      >
        {/* فاصل ديكوري علوي */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.5 }}
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "24px",
          }}
        >
          <svg width="150" height="15" viewBox="0 0 150 15" fill="none">
            <path
              d="M0 7.5H65M85 7.5H150"
              stroke="#D4AF37"
              strokeWidth="1"
              strokeOpacity="0.5"
            />
            <circle cx="75" cy="7.5" r="3" fill="#D4AF37" />
            <circle cx="68" cy="7.5" r="1.5" fill="#D4AF37" fillOpacity="0.6" />
            <circle cx="82" cy="7.5" r="1.5" fill="#D4AF37" fillOpacity="0.6" />
          </svg>
        </motion.div>

        {/* البسملة */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="basmalah"
        >
          بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ
        </motion.p>

        {/* الآية القرآنية */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 1.1 }}
          style={{ display: "inline-block" }}
        >
          <span className="quran-verse">
            وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا
            لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ
            إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَتَفَكَّرُونَ
          </span>
        </motion.div>

        {/* اسم السورة ورقم الآية */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.5 }}
          className="quran-surah"
        >
          [ سورة الروم - آية ٢١ ]
        </motion.p>

        {/* فاصل ديكوري سفلي */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.5 }}
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "30px",
          }}
        >
          <svg width="150" height="15" viewBox="0 0 150 15" fill="none">
            <path
              d="M0 7.5H65M85 7.5H150"
              stroke="#D4AF37"
              strokeWidth="1"
              strokeOpacity="0.5"
            />
            <circle cx="75" cy="7.5" r="3" fill="#D4AF37" />
            <circle cx="68" cy="7.5" r="1.5" fill="#D4AF37" fillOpacity="0.6" />
            <circle cx="82" cy="7.5" r="1.5" fill="#D4AF37" fillOpacity="0.6" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
