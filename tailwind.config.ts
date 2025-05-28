import type {Config} from 'tailwindcss';

export default {
    content: [
        './src/pages/**/*.{js,jsx,ts,tsx}', // Only include files in src/pages
    ],
    theme: {
        extend: {},
    },
    plugins: [],
} satisfies Config;