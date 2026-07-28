/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          bg: '#0B0E14',
          surface: '#12161F',
          elevated: '#1C2230',
          border: '#252C3B'
        },
        accent: {
          amber: '#F4A125',
          amberDim: '#7A5518',
          green: '#3DD68C',
          greenDim: '#1E5A3F',
          blue: '#5B8DEF',
          blueDim: '#2A3F6E',
          red: '#EF5B5B',
          redDim: '#5C2A2A'
        },
        text: {
          primary: '#EAECF1',
          secondary: '#8B93A7',
          muted: '#5C6577'
        }
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      boxShadow: {
        card: '0 1px 2px rgba(0,0,0,0.4), 0 8px 24px -8px rgba(0,0,0,0.5)'
      }
    }
  },
  plugins: []
}
