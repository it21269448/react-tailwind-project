// tailwind.config.js
module.exports = {

 
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
    "./public/index.html",
  ],

  // Extending the default theme
  theme: {
    extend: {
      
      colors: {
        'brand-blue': '#1992d4',
        'bluish-purple': '#6B3CC9',
        'yuzu-jam': '#F28D35',
        'ICE-ICE-BABY':'#6A44F2'
       
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
        
      },
      
    },
  },

  // Variants can be extended to add additional styles based on state
  variants: {
    extend: {
      // Example: Enable 'disabled' variant for opacity
      opacity: ['disabled'],
      // Add other variants here
    },
  },

  // Tailwind plugins
  plugins: [
    // Add Tailwind CSS plugins here if needed
  ],
};
