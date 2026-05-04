import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { colors } from '../data/story'
import story from '../data/story'

function Intro({ onComplete }) {
  const [phase, setPhase] = useState(1)

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(2), 1500)
    const t2 = setTimeout(() => setPhase(3), 3800)
    const t3 = setTimeout(() => onComplete(), 5000)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [])

  return (
    <AnimatePresence>
      {phase !== 3 && (
        <motion.div
          exit={{ opacity: 0, transition: { duration: 1.2, ease: 'easeInOut' } }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 50,
            background: '#000',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0px',
          }}
        >
          {/* خط ذهبي فوق */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: phase >= 2 ? 1 : 0, opacity: phase >= 2 ? 1 : 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            style={{
              height: '1px',
              width: '180px',
              background: `linear-gradient(to right, transparent, ${colors.gold}, transparent)`,
              marginBottom: '40px',
            }}
          />

          {/* الاسم */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: phase >= 2 ? 1 : 0, y: phase >= 2 ? 0 : 20 }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(2.2rem, 7vw, 4.5rem)',
              color: colors.gold,
              letterSpacing: '0.12em',
              textAlign: 'center',
              textShadow: `0 0 60px rgba(212,175,55,0.35)`,
            }}
          >
            {story.groom} & {story.bride}
          </motion.h1>

          {/* التاريخ */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: phase >= 2 ? 0.55 : 0, y: phase >= 2 ? 0 : 10 }}
            transition={{ duration: 1, delay: 0.7 }}
            style={{
              color: colors.goldLight,
              letterSpacing: '0.35em',
              fontSize: '0.8rem',
              marginTop: '20px',
              fontFamily: 'Georgia, serif',
            }}
          >
            {story.date}
          </motion.p>

          {/* خط ذهبي تحت */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: phase >= 2 ? 1 : 0, opacity: phase >= 2 ? 1 : 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.4 }}
            style={{
              height: '1px',
              width: '180px',
              background: `linear-gradient(to right, transparent, ${colors.gold}, transparent)`,
              marginTop: '40px',
            }}
          />

          {/* نقاط تحميل */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: phase >= 2 ? 1 : 0 }}
            transition={{ delay: 1.2 }}
            style={{ display: 'flex', gap: '8px', marginTop: '60px' }}
          >
            {[0, 1, 2].map(i => (
              <motion.div
                key={i}
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.3 }}
                style={{
                  width: '5px',
                  height: '5px',
                  borderRadius: '50%',
                  background: colors.gold,
                }}
              />
            ))}
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Intro