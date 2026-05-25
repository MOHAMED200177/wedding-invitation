import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { colors } from "../data/story";
import story from "../data/story";

function Gallery() {
  const [current, setCurrent] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const total = story.gallery.length;

  useEffect(() => {
    if (expanded) return;
    const t = setInterval(() => setCurrent((i) => (i + 1) % total), 3500);
    return () => clearInterval(t);
  }, [total, expanded]);

  return (
    <section style={{ background: "#000", padding: "100px 24px" }}>
      {/* عنوان */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: "center", marginBottom: "60px" }}
      >
        <p
          style={{
            color: colors.emerald,
            letterSpacing: "0.35em",
            fontSize: "0.7rem",
            marginBottom: "14px",
          }}
        >
          ✦ MEMORIES ✦
        </p>
        <h2
          style={{
            fontFamily: "Georgia, serif",
            color: colors.text,
            fontSize: "clamp(2rem, 5vw, 3rem)",
          }}
        >
          Our Gallery
        </h2>
        <div
          style={{
            height: "1px",
            width: "100px",
            background: `linear-gradient(to right, transparent, ${colors.gold}, transparent)`,
            margin: "20px auto 0",
          }}
        />
      </motion.div>

      {/* الصورة الرئيسية */}
      <div
        style={{ maxWidth: "600px", margin: "0 auto", position: "relative" }}
      >
        <div
          style={{
            borderRadius: "20px",
            overflow: "hidden",
            border: `1px solid ${colors.goldDim}`,
            position: "relative",
            cursor: "pointer",
            aspectRatio: "3/4",
          }}
          onClick={() => setExpanded(true)}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={story.gallery[current].src}
              alt={story.gallery[current].caption}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </AnimatePresence>

          {/* caption */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              padding: "32px 24px 20px",
              background:
                "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
            }}
          >
            <p
              style={{
                color: colors.text,
                fontFamily: "Georgia, serif",
                fontSize: "1rem",
                letterSpacing: "0.05em",
              }}
            >
              {story.gallery[current].caption}
            </p>
          </div>
        </div>

        {/* dots */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "8px",
            marginTop: "24px",
          }}
        >
          {story.gallery.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                width: i === current ? "24px" : "8px",
                height: "8px",
                borderRadius: "4px",
                background: i === current ? colors.gold : colors.goldDim,
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>

      {/* Expanded */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setExpanded(false)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 50,
              background: "rgba(0,0,0,0.9)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "24px",
            }}
          >
            <motion.img
              src={story.gallery[current].src}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              style={{
                maxWidth: "90vw",
                maxHeight: "90vh",
                borderRadius: "16px",
                objectFit: "contain",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Gallery;
