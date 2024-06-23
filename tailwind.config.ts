import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                'lightest-blue': '#caf0f8',
                'lighter-blue': '#90e0ef',
                'darkest-blue': '#03045e',
                'dark-blue': '#023e8a',
            },
            keyframes: {
                slideIn: {
                    '0%': { transform: 'translateX(100%)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' },
                },
                slideOut: {
                    '0%': { transform: 'translateX(0)', opacity: '1' },
                    '100%': { transform: 'translateX(-100%)', opacity: '0' },
                },
                shake: {
                    '10%, 90%': { transform: 'translateX(-1px)' },
                    '20%, 80%': { transform: 'translateX(2px)' },
                    '30%, 50%, 70%': { transform: 'translateX(-4px)' },
                    '40%, 60%': { transform: 'translateX(4px)' },
                },
                slideInTop: {
                    '0%': { transform: 'translateY(-100%)' },
                    '100%': { transform: 'translateY(0)' },
                },
                slideInBottom: {
                    '0%': { transform: 'translateY(100%)' },
                    '100%': { transform: 'translateY(0)' },
                },
            },
            animation: {
                slideIn: 'slideIn 1s ease-in-out',
                slideOut: 'slideOut 1s ease-in-out',
                shake: 'shake 0.5s ease-in-out',
                slideInTop: 'slideInTop 0.5s ease-in-out forwards',
                slideInBottom: 'slideInBottom 0.5s ease-in-out forwards',
            },
        },
    },
    plugins: [],
};
export default config;
