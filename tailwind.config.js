/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                display: ['Anton', 'sans-serif'],
                body: ['Barlow', 'sans-serif'],
            },
            colors: {
                'sport-navy': '#0A0E1A',
                'sport-gold': '#F5C518',
                'sport-red': '#E8341A',
            },
        },
    },
    plugins: [],
}
