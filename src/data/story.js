const colors = {
  bg: '#0a1a0f',
  bgLight: '#24100fff',
  bgCard: 'rgba(16,50,24,0.8)',
  gold: '#D4AF37',
  goldLight: '#F5E6A3',
  goldDim: 'rgba(212,175,55,0.2)',
  emerald: '#10b981',
  emeraldDim: 'rgba(16,185,129,0.15)',
  text: '#FFFDF5',
  textMuted: '#9CA3AF',
  textDim: '#6B7280',
}

const story = {
  groom: 'Ahmed',
  bride: 'Nour',
  date: '15 · 06 · 2025',
  weddingDate: '2026-06-15T20:00:00',
  venue: 'Royal Garden Hall',
  venueAddress: 'Alexandria, Egypt',
  lat: 31.2001,
  lng: 29.9187,
  dressCode: 'Black Tie',

  timeline: [
    { year: '2019', title: 'First Encounter', text: 'On an ordinary day — he saw her and knew something was different about her smile', emoji: '✨', side: 'left' },
    { year: '2020', title: 'First Words', text: 'He gathered his courage — from the very first message it felt like they had known each other forever', emoji: '💬', side: 'right' },
    { year: '2021', title: 'First Promise', text: 'He promised to always be by her side — and he kept his word', emoji: '🤝', side: 'left' },
    { year: '2022', title: 'First Journey', text: 'They travelled together and discovered that home is wherever they are with each other', emoji: '✈️', side: 'right' },
    { year: '2023', title: 'The Proposal', text: 'He got down on one knee and asked the question that changed their lives forever', emoji: '💍', side: 'left' },
    { year: '2025', title: 'The Wedding', text: 'The day finally came — the day they say to the whole world: we chose each other', emoji: '👑', side: 'right' },
  ],

gallery: [
  {
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
    caption: 'The Beginning'
  },

  {
    src: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&q=80',
    caption: 'Together Forever'
  },
  {
    src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80',
    caption: 'A New Chapter'
  },
],

  messages: [
    { from: 'The Family', text: 'Wishing you a lifetime of love and laughter' },
    { from: 'Best Friends', text: 'You were made for each other — always knew it' },
    { from: 'The Couple', text: 'Thank you for being part of our special day' },
  ],
}

export { colors }
export default story