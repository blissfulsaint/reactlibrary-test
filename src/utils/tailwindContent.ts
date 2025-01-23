export function tailwindContent(): string[] {
    // Returns an array of strings required in consuming app's tailwind.config.ts content
    // in order for tailwind styles to work
    return ["./node_modules/@blissfulsaint/reactlibrary-test/dist/**/*.{js,jsx,ts,tsx}"];
}