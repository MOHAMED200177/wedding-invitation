import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'
import { colors } from '../data/story'
import story from '../data/story'

function RSVP() {
  const [attending, setAttending] = useState(null)
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit() {
    if (attending === null) return
    setSubmitted(true)
    if (attending) {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: [colors.gold, colors.emerald, '#fff'],
      })
      setTimeout(() => {
        confetti({
          particleCount: 80,
          angle: 60,
          spread: 70,
          origin: { x: 0, y: 0.6 },
          colors: [colors.gold, colors.emerald],
        })
      }, 400)
      setTimeout(() => {
        confetti({
          particleCount: 80,
          angle: 120,
          spread: 70,
          origin: { x: 1, y: 0.6 },
          colors: [colors.gold, colors.emerald],
        })
      }, 700)
    }
  }

  return (
    <section style={{ background: colors.bg, padding: '100px 24px' }}>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: 'center', marginBottom: '60px' }}
      >
        <p style={{ color: colors.emerald, letterSpacing: '0.35em', fontSize: '0.7rem', marginBottom: '14px' }}>
          ✦ JOIN US ✦
        </p>
        <h2 style={{ fontFamily: 'Georgia, serif', color: colors.text, fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
          Will You Be There?
        </h2>
        <div style={{
          height: '1px', width: '100px',
          background: `linear-gradient(to right, transparent, ${colors.gold}, transparent)`,
          margin: '20px auto 0',
        }} />
      </motion.div>

      <div style={{ maxWidth: '400px', margin: '0 auto' }}>
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
            >
              <p style={{ color: colors.textMuted, textAlign: 'center', fontSize: '0.9rem', marginBottom: '8px' }}>
                {story.groom} & {story.bride} would love to have you there
              </p>

              {/* أزرار الاختيار */}
              <div style={{ display: 'flex', gap: '12px' }}>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setAttending(true)}
                  style={{
                    flex: 1,
                    padding: '16px',
                    borderRadius: '12px',
                    border: `1px solid ${attending === true ? colors.emerald : colors.goldDim}`,
                    background: attending === true ? colors.emeraldDim : 'transparent',
                    color: attending === true ? colors.emerald : colors.textMuted,
                    cursor: 'pointer',
                    fontFamily: 'Georgia, serif',
                    fontSize: '0.95rem',
                    transition: 'all 0.3s ease',
                  }}
                >
                  ✓ Attending
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setAttending(false)}
                  style={{
                    flex: 1,
                    padding: '16px',
                    borderRadius: '12px',
                    border: `1px solid ${attending === false ? '#ef4444' : colors.goldDim}`,
                    background: attending === false ? 'rgba(239,68,68,0.1)' : 'transparent',
                    color: attending === false ? '#ef4444' : colors.textMuted,
                    cursor: 'pointer',
                    fontFamily: 'Georgia, serif',
                    fontSize: '0.95rem',
                    transition: 'all 0.3s ease',
                  }}
                >
                  ✗ Regrets
                </motion.button>
              </div>

              {/* زرار الإرسال */}
              <motion.button
                whileHover={{ scale: attending !== null ? 1.03 : 1 }}
                whileTap={{ scale: attending !== null ? 0.97 : 1 }}
                onClick={handleSubmit}
                style={{
                  width: '100%',
                  padding: '18px',
                  borderRadius: '12px',
                  border: 'none',
                  background: attending !== null
                    ? `linear-gradient(135deg, ${colors.gold}, #b8960c)`
                    : colors.goldDim,
                  color: attending !== null ? '#000' : colors.textDim,
                  cursor: attending !== null ? 'pointer' : 'not-allowed',
                  fontFamily: 'Georgia, serif',
                  fontSize: '1rem',
                  letterSpacing: '0.1em',
                  transition: 'all 0.3s ease',
                }}
              >
                Confirm RSVP
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key="thanks"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{ textAlign: 'center', padding: '40px' }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>
                {attending ? '🎉' : '💌'}
              </div>
              <h3 style={{ fontFamily: 'Georgia, serif', color: colors.text, fontSize: '1.5rem', marginBottom: '12px' }}>
                {attending ? 'See You There!' : 'You Will Be Missed'}
              </h3>
              <p style={{ color: colors.textMuted, fontSize: '0.9rem', lineHeight: 1.7 }}>
                {attending
                  ? `We can't wait to celebrate with you on ${story.date}`
                  : 'Thank you for letting us know — you will be in our hearts'}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </section>
  )
}

export default RSVP