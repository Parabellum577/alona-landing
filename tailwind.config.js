import animate from "tailwindcss-animate"

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
      './pages/**/*.{ts,tsx}',
      './components/**/*.{ts,tsx}',
      './app/**/*.{ts,tsx}',
      './src/**/*.{ts,tsx}',
    ],
    theme: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
      extend: {
        colors: {
          border: "hsl(var(--border))",
          input: "hsl(var(--input))",
          ring: "hsl(var(--ring))",
          background: "hsl(var(--background))",
          foreground: "hsl(var(--foreground))",
          primary: {
            DEFAULT: "#81A433",
            hover: "#95BD3B",
            light: "#A8D344",
            dark: "#5C7625",
            sage: "#C4E475",
            foreground: "hsl(var(--primary-foreground))",
          },
          secondary: {
            DEFAULT: "hsl(var(--secondary))",
            foreground: "hsl(var(--secondary-foreground))",
          },
          destructive: {
            DEFAULT: "hsl(var(--destructive))",
            foreground: "hsl(var(--destructive-foreground))",
          },
          muted: {
            DEFAULT: "hsl(var(--muted))",
            foreground: "hsl(var(--muted-foreground))",
          },
          accent: {
            DEFAULT: "hsl(var(--accent))",
            foreground: "hsl(var(--accent-foreground))",
          },
          popover: {
            DEFAULT: "hsl(var(--popover))",
            foreground: "hsl(var(--popover-foreground))",
          },
          card: {
            DEFAULT: "hsl(var(--card))",
            foreground: "hsl(var(--card-foreground))",
          },
        },
        borderRadius: {
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)",
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
          'spin-slow': 'spin-slow 15s linear infinite',
          gradient: 'gradient 3s ease infinite',
          "bounce-scale": "bounce-scale 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
          'spin-slow-1': 'spin-slow-1 15s linear infinite',
          'spin-slow-3': 'spin-slow-3 15s linear infinite',
        },
        keyframes: {
          "accordion-down": {
            from: { height: 0 },
            to: { height: "var(--radix-accordion-content-height)" },
          },
          'spin-slow': {
            from: { transform: 'translate(-34%, -23%) rotate(0deg)' },
            to: { transform: 'translate(-34%, -23%) rotate(360deg)' }
          },
          'spin-slow-1': {
            from: { transform: 'translate(-25%, -21%) rotate(0deg)' },
            to: { transform: 'translate(-25%, -21%) rotate(-360deg)' }
          },
          'spin-slow-3': {
            from: { transform: 'translate(-27%, -19%) rotate(0deg)' },
            to: { transform: 'translate(-27%, -19%) rotate(360deg)' }
          },
          "accordion-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: 0 },
          },
          gradient: {
            '0%, 100%': {
              'background-position': '0% 50%',
            },
            '50%': {
              'background-position': '100% 50%',
            },
          },
          "bounce-scale": {
            "0%": { transform: "scale(0)" },
            "70%": { transform: "scale(1.1)" },
            "100%": { transform: "scale(1)" }
          }
        },
        backgroundSize: {
          '200%': '200%',
        },
      },
    },
    plugins: [
      animate,
      function({ addVariant }) {
        addVariant('group-hover-spin', ':where(.hover-spin:hover &)')
      },
    ],
  }