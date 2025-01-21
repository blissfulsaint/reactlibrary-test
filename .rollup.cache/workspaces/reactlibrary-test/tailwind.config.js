var config = {
    content: [
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        './.storybook/**/*.{js,jsx,ts,tsx}'
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
        },
    },
    plugins: [],
};
export default config;
//# sourceMappingURL=tailwind.config.js.map