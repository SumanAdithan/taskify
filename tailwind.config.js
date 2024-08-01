/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                background: '#030B15',
                primary: '#00C4F4',
                border: '#676767',
                secondary: '#DC0046',
            },
            backgroundImage: {
                'conic-gradient-primary':
                    'conic-gradient(transparent,transparent,#00C4F4)',
                'conic-gradient-secondary':
                    'conic-gradient(transparent,transparent,#DC0046)',
            },
        },
    },
    plugins: [],
};
