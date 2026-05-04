import { motion } from 'framer-motion'
import { colors } from '../data/story'
import story from '../data/story'

function TimelineEvent({ event, index }) {
  const isLeft = event.side === 'left'

  const card = (
    <div style={{
      padding: '20px 24px',
      borderRadius: '14px',
      background: colors.bgCard,
      border: `1px solid ${colors.goldDim}`,
      maxWidth: '280px',
      textAlign: isLeft ? 'right' : 'left',
    }}>
      <p style={{ color: colors.gold, fontSize: '0.7rem', letterSpacing: '0.2em', marginBottom: '6px' }}>
        {event.year}
      </p>
      <h3 style={{ fontFamily: 'Georgia, serif', color: colors.text, fontSize: '1.1rem', marginBottom: '8px' }}>
        {event.title}
      </h3>
      <p style={{ color: colors.textMuted, fontSize: '0.85rem', lineHeight: 1.7 }}>
        {event.text}
      </p>
    </div>
  )

  const dot = (
    <motion.div
      whileInView={{ scale: [0, 1.3, 1] }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{
        width: '44px',
        height: '44px',
        borderRadius: '50%',
        background: colors.bg,
        border: `2px solid ${colors.gold}`,
        boxShadow: `0 0 16px rgba(212,175,55,0.25)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.1rem',
        flexShrink: 0,
        zIndex: 2,
      }}
    >
      {event.emoji}
    </motion.div>
  )

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: 'easeOut' }}
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 60px 1fr',
        alignItems: 'center',
        gap: '16px',
        width: '100%',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        {isLeft ? card : null}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {dot}
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        {!isLeft ? card : null}
      </div>
    </motion.div>
  )
}

function LoveStory() {
  return (
    <section style={{ background: colors.bg, padding: '100px 24px', position: 'relative', overflow: 'hidden' }}>

      {/* عنوان */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: 'center', marginBottom: '80px' }}
      >
        <p style={{ color: colors.emerald, letterSpacing: '0.35em', fontSize: '0.7rem', marginBottom: '14px' }}>
          ✦ THEIR STORY ✦
        </p>
        <h2 style={{ fontFamily: 'Georgia, serif', color: colors.text, fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
          Their Love Story
        </h2>
        <div style={{
          height: '1px', width: '100px',
          background: `linear-gradient(to right, transparent, ${colors.gold}, transparent)`,
          margin: '20px auto 0',
        }} />
      </motion.div>

      {/* Timeline */}
      <div style={{ maxWidth: '700px', margin: '0 auto', position: 'relative' }}>

        {/* خط رأسي */}
        <div style={{
          position: 'absolute',
          top: 0, bottom: 0,
          left: '50%',
          width: '1px',
          transform: 'translateX(-50%)',
          background: `linear-gradient(to bottom, transparent, ${colors.gold} 10%, ${colors.gold} 90%, transparent)`,
        }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', position: 'relative' }}>
          {story.timeline.map((event, i) => (
            <TimelineEvent key={i} event={event} index={i} />
          ))}
        </div>
      </div>

    </section>
  )
}

export default LoveStory