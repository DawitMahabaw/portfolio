/**
 * Design System Tokens: Tailwind & CSS Variable Mapping
 * 
 * Palette:
 * - Background: Dark navy / near-black (#050713, #090D1E)
 * - Accent: Futuristic Purple (#8B5CF6 / #A855F7)
 * - Secondary Accent: Electric Cyan (#06B6D4 / #38BDF8)
 * - Typography: Poppins for headings & body, JetBrains Mono for code
 * - Body Text: Soft slate gray (#94A3B8)
 */

export const designTokens = {
  colors: {
    background: {
      primary: '#050713',       // Near-black dark navy canvas
      secondary: '#090D1E',     // Section secondary background
      surface: '#0E1428',       // Slightly elevated surface
      card: 'rgba(13, 18, 38, 0.65)', // Glass card surface
      cardHover: 'rgba(20, 28, 56, 0.8)',
      glass: 'rgba(255, 255, 255, 0.03)',
    },
    accent: {
      purple: {
        DEFAULT: '#8B5CF6',     // Violet/Purple 500
        light: '#A855F7',       // Purple 500
        lighter: '#C084FC',     // Purple 400
        dark: '#7C3AED',        // Violet 600
        glow: 'rgba(168, 85, 247, 0.35)',
        subtle: 'rgba(168, 85, 247, 0.12)',
      },
      secondary: {
        DEFAULT: '#06B6D4',     // Cyan 500
        light: '#38BDF8',       // Sky 400
        glow: 'rgba(6, 182, 212, 0.35)',
        subtle: 'rgba(6, 182, 212, 0.12)',
      },
    },
    text: {
      title: '#FFFFFF',         // Crisp heading white
      body: '#94A3B8',          // Soft gray body text (Slate 400)
      muted: '#64748B',         // Subtle text (Slate 500)
      accent: '#C084FC',        // Purple highlighted text
    },
    border: {
      subtle: 'rgba(255, 255, 255, 0.08)',
      glass: 'rgba(255, 255, 255, 0.12)',
      accent: 'rgba(168, 85, 247, 0.28)',
      accentHover: 'rgba(168, 85, 247, 0.6)',
    },
    gradients: {
      purpleToCyan: 'linear-gradient(135deg, #A855F7 0%, #06B6D4 100%)',
      purpleToIndigo: 'linear-gradient(135deg, #A855F7 0%, #6366F1 100%)',
      cardGlass: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
      glowRadial: 'radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.15) 0%, transparent 70%)',
    },
  },
  fontFamily: {
    heading: ['Poppins', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
    body: ['Poppins', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
    mono: ['JetBrains Mono', 'monospace'],
  },
  borderRadius: {
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '18px',
    xl: '24px',
    full: '9999px',
  },
  boxShadow: {
    glass: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
    glassSm: '0 4px 16px 0 rgba(0, 0, 0, 0.25)',
    glowPurple: '0 0 25px rgba(168, 85, 247, 0.35)',
    glowCyan: '0 0 25px rgba(6, 182, 212, 0.35)',
  },
  spacing: {
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    5: '20px',
    6: '24px',
    8: '32px',
    10: '40px',
    12: '48px',
    16: '64px',
  },
};

export default designTokens;
