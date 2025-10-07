const config = {
  plugins: ["@tailwindcss/postcss"],
    theme: {
    extend: {
      screens: {
        // ✅ custom device breakpoints
        tablet: { raw: "(min-width:1026px) and (max-width:1279px)" },
        iphone: { raw: "(max-width:767px)" },
      },
    },
  }
};

export default config;
