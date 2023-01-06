// tailwind.config.js
module.exports = {
    content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
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