import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { colors } from '../data/story'
import story from '../data/story'

function useCountdown() {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    function calc() {
      const diff = new Date(story.weddingDate) - new Date()
      if (diff <= 0) return setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      setTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      })
    }
    calc()
    const t = setInterval(calc, 1000)
    return () => clearInterval(t)
  }, [])

  return time
}

function CountdownBox({ value, label }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
      <div style={{
        width: '60px',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '10px',
        background: 'rgba(212,175,55,0.08)',
        border: `1px solid ${colors.goldDim}`,
      }}>
        <span style={{ fontFamily: 'Georgia, serif', fontSize: '1.5rem', color: colors.gold }}>
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span style={{ color: colors.textMuted, fontSize: '0.6rem', letterSpacing: '0.15em' }}>
        {label}
      </span>
    </div>
  )
}

function Hero() {
  const time = useCountdown()

  return (
    <section style={{ minHeight: '100vh', background: '#000', position: 'relative', overflow: 'hidden' }}>

      {/* Split Screen */}
      <div style={{ display: 'flex', flexDirection: 'row', height: '100vh' }}>

        {/* يسار — العريس */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          style={{
            flex: 1,
            background: `linear-gradient(160deg, ${colors.bg} 0%, #000 100%)`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            borderRight: `1px solid ${colors.goldDim}`,
          }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            style={{ color: colors.gold, letterSpacing: '0.3em', fontSize: '0.65rem', marginBottom: '12px' }}
          >
            THE GROOM
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            style={{ fontFamily: 'Georgia, serif', color: colors.text, fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '0.05em' }}
          >
            {story.groom}
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            style={{ width: '60px', height: '1px', background: colors.gold, marginTop: '16px' }}
          />
        </motion.div>

        {/* وسط */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          style={{
            width: '80px',
            background: '#000',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            flexShrink: 0,
          }}
        >
          <div style={{ flex: 1, width: '1px', background: `linear-gradient(to bottom, transparent, ${colors.gold})` }} />
          <span style={{ fontSize: '1.4rem' }}>💍</span>
          <div style={{ flex: 1, width: '1px', background: `linear-gradient(to top, transparent, ${colors.gold})` }} />
        </motion.div>

        {/* يمين — العروسة */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          style={{
            flex: 1,
            background: `linear-gradient(200deg, ${colors.bg} 0%, #000 100%)`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            borderLeft: `1px solid ${colors.goldDim}`,
          }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            style={{ color: colors.gold, letterSpacing: '0.3em', fontSize: '0.65rem', marginBottom: '12px' }}
          >
            THE BRIDE
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            style={{ fontFamily: 'Georgia, serif', color: colors.text, fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '0.05em' }}
          >
            {story.bride}
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            style={{ width: '60px', height: '1px', background: colors.gold, marginTop: '16px' }}
          />
        </motion.div>

      </div>

      {/* Countdown */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          display: 'flex',
          gap: '20px',
          padding: '16px 32px',
          borderRadius: '14px',
          background: 'rgba(0,0,0,0.7)',
          border: `1px solid ${colors.goldDim}`,
          backdropFilter: 'blur(12px)',
        }}
      >
        <CountdownBox value={time.days} label="DAYS" />
        <CountdownBox value={time.hours} label="HRS" />
        <CountdownBox value={time.minutes} label="MIN" />
        <CountdownBox value={time.seconds} label="SEC" />
      </motion.div>

    </section>
  )
}

export default Hero