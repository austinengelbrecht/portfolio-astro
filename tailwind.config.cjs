/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      black: "#000000",

      primary: {
        DEFAULT: "#cda715",
        dark: "#a28511",
      },
      secondary: {
        DEFAULT: "#b6eada",
        dark: "#93c8c2",
      },
      content: "#efedff",
      space: {
        1: "#03001c",
        2: "#303047",
        3: "#301e67",
        4: "#5b8fb9",
      },
    },
    fontFamily: {
      ssp: ["Source Sans Pro", "sans-serif"],
      audiowide: ["Audiowide", "cursive"],
    },
    extend: {},
  },
  plugins: [],
  corePlugins: [
    "accessibility",
    "alignItems",
    "backgroundColor",
    "borderColor",
    "display",
    "flex",
    "flexBasis",
    "flexDirection",
    "flexGrow",
    "flexShrink",
    "flexWrap",
    "fontFamily",
    "fontSize",
    "fontWeight",
    "gap",
    "height",
    "justifyContent",
    "margin",
    "padding",
    "textAlign",
    "textColor",
    "textTransform",
    "textDecoration",
    "width",
  ],
};
