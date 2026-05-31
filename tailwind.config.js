/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'neon-bg': '#050505',
                'neon-bg-alt': '#0a0a0a',
                'neon-card': '#1a1a1a',
                'neon-text': '#f0f0f0',
                'neon-muted': '#a0a0a0',
                'neon-cyan': '#00f3ff',
                'neon-purple': '#bc13fe',

                // Light mode equivalents
                'clean-bg': '#ffffff',
                'clean-bg-alt': '#f3f4f6',
                'clean-text': '#111827',
                'clean-muted': '#4b5563',
                'clean-cyan': '#008080',
                'clean-purple': '#7c3aed',
            },
            fontFamily: {
                sans: ['Outfit', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
