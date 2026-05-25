import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { colors } from "../data/story";

// البيانات بعد تحسينها وإضافة النصوص الرومانسية المكملة للقصة
const timelineData = [
  {
    year: "25 August 2025",
    title: "أول مرة أشوفك.. وأول مرة ألاقي نفسي",
    text: "نظرة واحدة كانت كافية لتبدأ أجمل صدفة، يوم أن تلاقت الأرواح وتوقف الزمن ليعلن بداية حكايتنا.",
    emoji: "✨",
    side: "left",
  },
  {
    year: "5 September 2025",
    title: "قراءة الفاتحة",
    text: "أول خطوة في طريقنا معاً، اجتمعت القلوب والأيادي وتعاهدنا على المودة والرحمة والمحبة الصادقة.",
    emoji: "🤝",
    side: "right",
  },
  {
    year: "16 October 2025",
    title: "الخطوبة",
    text: "وعد بأن يكون دائماً بجانبها.. وأوفى بوعده. يوم توجنا فيه حبنا بالدبل وسط فرحة ومباركة الأحباب.",
    emoji: "💍",
    side: "left",
  },
  {
    year: "1 June 2026",
    title: "يوم الزفاف",
    text: "بداية رحلة العمر، اليوم الذي تتشابك فيه الأيدي للأبد لنكتب معاً أجمل وأهم فصول حكايتنا.",
    emoji: "👑",
    side: "right",
  },
];

const cssStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&family=Cinzel:wght@400;600&display=swap');

  .story-section {
    background: #0a1a0f;
    padding: 120px 20px;
    position: relative;
    overflow: hidden;
  }

  .timeline-container {
    max-width: 900px;
    margin: 0 auto;
    position: relative;
  }

  /* الخط الذهبي المركزي - ثابت دائماً في المنتصف */
  .timeline-line {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 2px;
    transform: translateX(-50%);
    background: linear-gradient(to bottom, transparent, rgba(212,175,55,0.6) 15%, rgba(212,175,55,0.6) 85%, transparent);
    z-index: 1;
  }

  /* التوزيع الأساسي: يمين - مسافة المنتصف - يسار */
  .timeline-event-row {
    display: grid;
    /* استخدام مساحة متغيرة للمنتصف لتصغر في الموبايل */
    grid-template-columns: 1fr clamp(40px, 8vw, 80px) 1fr;
    align-items: center;
    gap: clamp(8px, 2vw, 20px);
    width: 100%;
    margin-bottom: 40px;
  }

  /* تصميم الكروت الزجاجية الفاخرة */
  .timeline-card {
    border-radius: 16px;
    background: rgba(2, 4, 10, 0.65);
    border: 1px solid rgba(212, 175, 55, 0.15);
    backdrop-filter: blur(12px);
    box-shadow: 0 15px 35px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.05);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    position: relative;
    overflow: hidden;
    /* هوامش داخلية متغيرة تصغر على الموبايل */
    padding: clamp(12px, 3vw, 28px) clamp(10px, 3vw, 32px);
  }

  .timeline-card::before {
    content: '';
    position: absolute;
    top: -50%; left: -50%; width: 200%; height: 200%;
    background: radial-gradient(circle, rgba(212,175,55,0.1) 0%, transparent 70%);
    opacity: 0;
    transition: opacity 0.4s ease;
    pointer-events: none;
  }

  .timeline-card:hover {
    transform: translateY(-8px);
    border-color: rgba(212, 175, 55, 0.4);
    box-shadow: 0 20px 45px rgba(0,0,0,0.6), 0 0 20px rgba(212,175,55,0.15);
  }

  .timeline-card:hover::before {
    opacity: 1;
  }

  /* تعديلات طفيفة جداً للموبايل للحفاظ على التنسيق */
  @media (max-width: 768px) {
    .story-section {
      padding: 60px 10px; /* تقليل المسافة الجانبية لإعطاء مساحة أكبر للكروت */
    }
    .timeline-event-row {
      margin-bottom: 25px;
    }
  }
`;

function TimelineEvent({ event, index }) {
  const isLeft = event.side === "left";

  const card = (
    <div
      className="timeline-card"
      style={{
        textAlign: isLeft ? "right" : "left", // توجيه النص ناحية الخط المنتصف دائماً
        width: "100%",
        maxWidth: "400px",
        direction: "rtl", // لضبط سياق النص العربي
      }}
    >
      <p
        style={{
          fontFamily: "Cinzel, serif",
          color: colors.gold || "#D4AF37",
          fontSize: "clamp(0.55rem, 1.5vw, 0.8rem)", // خط مرن
          letterSpacing: "0.1em",
          marginBottom: "8px",
          direction: "ltr", // لأن التاريخ باللغة الإنجليزية
        }}
      >
        {event.year}
      </p>
      <h3
        style={{
          fontFamily: "Amiri, serif",
          color: "#FFFDF5",
          fontSize: "clamp(0.9rem, 3.5vw, 1.4rem)", // عنوان مرن
          fontWeight: "700",
          marginBottom: "8px",
          lineHeight: "1.4",
        }}
      >
        {event.title}
      </h3>
      <p
        style={{
          fontFamily: "Amiri, serif",
          color: "#A4B3C6",
          fontSize: "clamp(0.7rem, 2.5vw, 1rem)", // نص مرن
          lineHeight: "1.6",
          fontWeight: "400",
        }}
      >
        {event.text}
      </p>
    </div>
  );

  const dot = (
    <motion.div
      whileInView={{
        scale: [0, 1.2, 1],
        filter: ["brightness(1)", "brightness(1.5)", "brightness(1)"],
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      style={{
        width: "clamp(35px, 8vw, 50px)", // دائرة تصغر في الموبايل
        height: "clamp(35px, 8vw, 50px)",
        borderRadius: "50%",
        background:
          "linear-gradient(135deg, rgba(2,4,10,1) 0%, rgba(20,25,40,1) 100%)",
        border: `2px solid ${colors.gold || "#D4AF37"}`,
        boxShadow: `0 0 20px rgba(212,175,55,0.3), inset 0 0 10px rgba(212,175,55,0.2)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "clamp(1rem, 3vw, 1.4rem)", // إيموجي يصغر في الموبايل
        flexShrink: 0,
        zIndex: 2,
        margin: "0 auto",
      }}
    >
      {event.emoji}
    </motion.div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        ease: [0.25, 1, 0.5, 1],
      }}
      className="timeline-event-row"
    >
      {/* المساحة اليسرى */}
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        {isLeft ? card : null}
      </div>

      {/* النقطة المركزية */}
      <div style={{ display: "flex", justifyContent: "center" }}>{dot}</div>

      {/* المساحة اليمنى */}
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        {!isLeft ? card : null}
      </div>
    </motion.div>
  );
}

export default function LoveStory() {
  return (
    <section className="story-section">
      <style>{cssStyles}</style>

      {/* إضاءة خلفية ناعمة */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "80%",
          height: "80%",
          background:
            "radial-gradient(circle, rgba(212,175,55,0.03) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* عنوان القسم */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          textAlign: "center",
          marginBottom: "clamp(60px, 10vw, 100px)",
          position: "relative",
          zIndex: 2,
        }}
      >
        <p
          style={{
            fontFamily: "Cinzel, sans-serif",
            color: colors.gold || "#D4AF37",
            letterSpacing: "0.4em",
            fontSize: "clamp(0.6rem, 2vw, 0.75rem)",
            marginBottom: "16px",
          }}
        >
          ✦ THE JOURNEY ✦
        </p>
        <h2
          style={{
            fontFamily: "Amiri, serif",
            color: "#FFFDF5",
            fontSize: "clamp(2rem, 6vw, 3.8rem)",
            fontWeight: "700",
          }}
        >
          قصة حبنا
        </h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 1 }}
          style={{
            height: "1px",
            width: "clamp(80px, 15vw, 120px)",
            background: `linear-gradient(to right, transparent, ${colors.gold || "#D4AF37"}, transparent)`,
            margin: "24px auto 0",
          }}
        />
      </motion.div>

      {/* قسم التايم لاين */}
      <div className="timeline-container">
        {/* الخط الرأسي مع تأثير رسم انسيابي */}
        <motion.div
          initial={{ scaleY: 0, transformOrigin: "top" }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="timeline-line"
        />

        <div style={{ position: "relative", zIndex: 2 }}>
          {timelineData.map((event, i) => (
            <TimelineEvent key={i} event={event} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
