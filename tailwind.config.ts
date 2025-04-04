import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: 'var(--primary)',
                secondary: 'var(--secondary)',
                accent: 'var(--accent)',
                background: {
                    DEFAULT: 'var(--background)',
                    dark: 'var(--background-dark)'
                },
                text: {
                    DEFAULT: 'var(--text)',
                    light: 'var(--text-light)'
                }
            },
            fontFamily: {
                inter: ['Inter', 'sans-serif']
            }
        }
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
    ]
}

export default config 