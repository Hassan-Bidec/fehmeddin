const config = {
  plugins: ["@tailwindcss/postcss"],
    theme: {
    extend: {
      screens: {
        // ✅ custom device breakpoints
        tablet: { raw: "(min-width:1026px) and (max-width:1279px)" },
        iphone: { raw: "(max-width:767px)" },
      //    sm: '640px',
      // md: '768px',
      // custom: '800px', // 👈 custom breakpoint
      // lg: '1024px',
      // xl: '1280px',
      },
    },
  }
};

export default config;
