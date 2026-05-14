/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                'cat-primary': '#285f85',
                'cat-bg': '#f0f0f0',
                'cat-secondary': '#9bc6bf',
                'cat-tertiary': '#ffd9cb'
            },
            fontFamily: {
                sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
