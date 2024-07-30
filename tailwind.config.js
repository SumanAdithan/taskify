/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                background: '#eff1f7',
                primary: '#16bbe5',
            },
        },
    },
    plugins: [],
};
