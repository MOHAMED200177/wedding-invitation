import { motion } from "framer-motion";
import { colors } from "../data/story";
import story from "../data/story";

const details = [
  { icon: "📅", label: "Date", value: story.date },
  { icon: "🕗", label: "Time", value: "9:00 PM" },
  { icon: "🏛️", label: "Venue", value: story.venue },
  { icon: "📍", label: "Location", value: story.venueAddress },
];

function Details() {
  return (
    <section style={{ background: colors.bg, padding: "100px 24px" }}>
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
          ✦ THE EVENT ✦
        </p>
        <h2
          style={{
            fontFamily: "Georgia, serif",
            color: colors.text,
            fontSize: "clamp(2rem, 5vw, 3rem)",
          }}
        >
          Wedding Details
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

      <div
        style={{
          maxWidth: "500px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        {details.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              padding: "20px 24px",
              borderRadius: "14px",
              background: colors.bgCard,
              border: `1px solid ${colors.goldDim}`,
            }}
          >
            <span style={{ fontSize: "1.4rem", flexShrink: 0 }}>
              {item.icon}
            </span>
            <div>
              <p
                style={{
                  color: colors.gold,
                  fontSize: "0.65rem",
                  letterSpacing: "0.2em",
                  marginBottom: "4px",
                }}
              >
                {item.label.toUpperCase()}
              </p>
              <p
                style={{
                  color: colors.text,
                  fontFamily: "Georgia, serif",
                  fontSize: "1rem",
                }}
              >
                {item.value}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Details;
