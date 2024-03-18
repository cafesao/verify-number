/** @type {import('tailwindcss').Config} */
export default {
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: '#0000ff',
                    secondary: '#49d300',
                    accent: '#00a1de',
                    neutral: '#222222',
                    'base-100': '#182729',
                    info: '#0075b2',
                    success: '#009800',
                    warning: '#ff6900',
                    error: '#ff555b',
                },
            },
        ],
    },
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {},
    },
    plugins: [require('daisyui')],
}
