import { motion } from "framer-motion";
import { colors } from "../data/story";
import story from "../data/story";

function Location() {
  function openMap() {
    window.open(
      "https://www.google.com/maps/search/%D8%B1%D9%88%D9%8A%D8%A7%D9%84+%D8%A8%D9%84%D8%A7%D8%B3+%E2%80%AD/@31.2426608,30.0064978,15.83z?entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D",
      "_blank",
    );
  }

  return (
    <section style={{ background: "#000", padding: "100px 24px" }}>
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
          ✦ FIND US ✦
        </p>
        <h2
          style={{
            fontFamily: "Georgia, serif",
            color: colors.text,
            fontSize: "clamp(2rem, 5vw, 3rem)",
          }}
        >
          Location
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

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          maxWidth: "500px",
          margin: "0 auto",
          borderRadius: "20px",
          overflow: "hidden",
          border: `1px solid ${colors.goldDim}`,
        }}
      >
        {/* Map Preview */}
        <div
          style={{
            height: "260px",
            background: `linear-gradient(135deg, ${colors.bg}, #000)`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* grid lines decoration */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: `${i * 20}%`,
                height: "1px",
                background: colors.goldDim,
              }}
            />
          ))}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: `${i * 20}%`,
                width: "1px",
                background: colors.goldDim,
              }}
            />
          ))}

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{ fontSize: "2.5rem", zIndex: 1 }}
          >
            📍
          </motion.div>
          <p
            style={{
              color: colors.text,
              fontFamily: "Georgia, serif",
              fontSize: "1rem",
              zIndex: 1,
            }}
          >
            {story.venue}
          </p>
          <p style={{ color: colors.textMuted, fontSize: "0.8rem", zIndex: 1 }}>
            {story.venueAddress}
          </p>
        </div>

        {/* زرار GPS */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          onClick={openMap}
          style={{
            width: "100%",
            padding: "18px",
            background: `linear-gradient(135deg, ${colors.emerald}, #059669)`,
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <span style={{ fontSize: "1.1rem" }}>🗺️</span>
          <span
            style={{
              color: "#fff",
              fontFamily: "Georgia, serif",
              fontSize: "0.95rem",
              letterSpacing: "0.1em",
            }}
          >
            Open in Google Maps
          </span>
        </motion.button>
      </motion.div>
    </section>
  );
}

export default Location;
