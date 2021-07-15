// tailwind.config.js
module.exports = {
    purge: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        fontFamily: {
            'sans': ['Roboto', 'sans-serif'],
            'serif': ['Roboto', 'serif'],
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}