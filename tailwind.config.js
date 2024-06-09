import { nextui } from "@nextui-org/theme";
const svgToDataUri = require("mini-svg-data-uri");

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      boxShadow: {
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
      },
      animation: {
        "meteor-effect": "meteor 5s linear infinite",
      },
      keyframes: {
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
      },
      colors: {
        "washed-purple": {
          50: "#f8f7ff",
          100: "#e8e7ff",
          200: "#dddcff",
          300: "#cdcbff",
          400: "#c4c1ff",
          500: "#b5b2ff",
          600: "#a5a2e8",
          700: "#817eb5",
          800: "#64628c",
          900: "#4c4b6b",
        },
        "washed-blue": {
          50: "#f0f3ff",
          100: "#d0daff",
          200: "#bac9ff",
          300: "#9ab0ff",
          400: "#86a1ff",
          500: "#6889ff",
          600: "#5f7de8",
          700: "#4a61b5",
          800: "#394b8c",
          900: "#2c3a6b",
        },
        "primary-blue": {
          50: "#e6f0ff",
          100: "#b1d1ff",
          200: "#8cbaff",
          300: "#579bff",
          400: "#3687ff",
          500: "#0469ff",
          600: "#0460e8",
          700: "#034bb5",
          800: "#023a8c",
          900: "#022c6b",
        },
        "primary-purple": {
          50: "#f1e6ff",
          100: "#d3b0ff",
          200: "#bd8aff",
          300: "#9f54ff",
          400: "#8d33ff",
          500: "#7000ff",
          600: "#6600e8",
          700: "#5000b5",
          800: "#3e008c",
          900: "#2f006b",
        },
        brand: {
          washedPurple: "#b5b2ff",
          WashedBlue: "#6889ff",
          primaryBlue: "#0469ff",
          primaryPurple: "#7000ff",
          dark: "#030014",
        },
        neutrals: {
          50: "#e6e6e8",
          100: "#b1b0b6",
          200: "#8b8a93",
          300: "#565462",
          400: "#353343",
          500: "#030014",
          600: "#030012",
          700: "#02000e",
          800: "#02000b",
          900: "#010008",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    addVariablesForColors,
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "bg-grid": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
    nextui({
      themes: {
        light: {
          layout: {},
          colors: {
            background: "#ffffff",
            foreground: "#030712",
            secondary: "#f3f4f6",
            divider: "#e5e7eb",
            primary: "#6f00ff",
            overlay: "#ffffff",
            focus: "#f3f4f6",
            danger: "#ef4444",
          },
        },
        dark: {
          layout: {},
          colors: {
            background: "#030014",
            foreground: "#CAC2FF",
            secondary: "#1f2937",
            divider: "#282637",
            primary: "#6f00ff",
            overlay: "#030712",
            focus: "#1f2937",
            danger: "#7f1d1d",
          },
        },
      },
    }),
  ],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
