/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        BarlowCon: ['"BarlowCon"', "sans-serif"],
        Barlow: ['"Barlow"', "sans-serif"],
        Bellefair: ['"Bellefair"', "serif"],
      },
      colors: {
        "blue-black": "#0B0D17",
        "blue-white": "#D0D6F9",
      },
      backgroundImage: {
        "desktop-bg-home":
          "url('/assets/images/home/background-home-desktop.jpg')",
        "tablet-bg-home":
          "url('/assets/images/home/background-home-tablet.jpg')",
        "mobile-bg-home":
          "url('/assets/images/home/background-home-mobile.jpg')",
        "desktop-bg-destination":
          "url('/assets/images/destination/background-destination-desktop.jpg')",
        "tablet-bg-destination":
          "url('/assets/images/destination/background-destination-tablet.jpg')",
        "mobile-bg-destination":
          "url('/assets/images/destination/background-destination-mobile.jpg')",
        "desktop-bg-crew":
          "url('/assets/images/crew/background-crew-desktop.jpg')",
        "tablet-bg-crew":
          "url('/assets/images/crew/background-crew-tablet.jpg')",
        "mobile-bg-crew":
          "url('/assets/images/crew/background-crew-mobile.jpg')",
        "desktop-bg-technology":
          "url('/assets/images/technology/background-technology-desktop.jpg')",
        "tablet-bg-technology":
          "url('/assets/images/technology/background-technology-tablet.jpg')",
        "mobile-bg-technology":
          "url('/assets/images/technology/background-technology-mobile.jpg')",
        "404-page":
          "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/debfab09-22c5-4345-a4cf-228002defab9/d8mof28-b947f653-eee4-4925-b3cb-753880b940e8.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2RlYmZhYjA5LTIyYzUtNDM0NS1hNGNmLTIyODAwMmRlZmFiOVwvZDhtb2YyOC1iOTQ3ZjY1My1lZWU0LTQ5MjUtYjNjYi03NTM4ODBiOTQwZTguZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.luhAmG3vTm7B5y_iXyT2g5QdB-9E1o679TTJ5w_rb5M')",
      },
      spacing: {
        generalInlineMT: "clamp(1.5rem, 0.546rem + 4.071vw, 2.5rem)", // 24-40 mobile to tablet
        generalInlineTD: "clamp(2.5rem, -6.5rem + 18.75vw, 10.375rem)", // 40-166 tablet to desktop

        generalBlockMT: "clamp(1.5rem, 0.546rem + 4.071vw, 2.5rem)", // 24-40 mobile to tablet
        generalBlockTD: "clamp(2.5rem, 1.929rem + 1.19vw, 3rem)", // 24-40 tablet to desktop

        headerInlineTD: "clamp(2.5rem, 0.786rem + 3.571vw, 4rem)", // 40-64 tablet to desktop
        headerTopTD: "clamp(0rem, -6.154rem + 9.615vw, 2.5rem)", // 0-40 tablet to desktop
        homeBlockMT: "clamp(1.5rem, -4.702rem + 26.463vw, 8rem)", // 24-128 mobile to tablet/desktop

        techContentTDL: "clamp(2.5rem, -6.5rem + 18.75vw, 10.375rem)", // 40-166 tablet to desktop
        techContentTDY: "clamp(2.5rem, 1.929rem + 1.19vw, 3rem)", // 40-48 tablet to desktop
        techTextB: "clamp(3rem, 3.477rem + -2.036vw, 2.5rem)", // 48-40 mobile to tablet
        30: "7.5rem",
        68: "17rem",
      },
      fontSize: {
        preset1: [
          "clamp(5rem, 1.183rem + 16.285vw, 9rem)",
          {
            lineHeight: "normal",
            letterSpacing: "0",
          },
        ], // 80-144 mobile to tablet
        preset2: [
          "6.25rem",
          {
            lineHeight: "normal",
            letterSpacing: "0",
          },
        ],
        preset3: [
          "3.5rem",
          {
            lineHeight: "normal",
            letterSpacing: "0",
          },
        ],
        preset4: [
          "clamp(1.125rem, 0.29rem + 3.562vw, 2rem)",
          {
            lineHeight: "normal",
            letterSpacing: "0",
          },
        ], // 18-32 mobile to tablet
        preset5: [
          "1.75rem",
          {
            lineHeight: "normal",
            letterSpacing: "4px",
          },
        ],
        preset6: [
          "clamp(1rem, 0.284rem + 3.053vw, 1.75rem)",
          {
            lineHeight: "normal",
            letterSpacing: "0",
          },
        ], // 16-28 mobile to tablet
        preset7: [
          "0.875rem",
          {
            lineHeight: "normal",
            letterSpacing: "2px",
          },
        ],
        preset8: [
          "clamp(0.875rem, 0.756rem + 0.509vw, 1rem)",
          {
            lineHeight: "normal",
            letterSpacing: "2px",
          },
        ], // 14-16 mobile to tablet
        preset9: [
          "clamp(0.938rem, 0.871rem + 0.282vw, 1.125rem)",
          {
            lineHeight: "normal",
            letterSpacing: "0",
          },
        ], // 15-18 mobile to desktop
        pagesH1MT: "clamp(1rem, 0.761rem + 1.018vw, 1.25rem)", //16-20 mobile to tablet
        pagesH1TD: "clamp(1.25rem, 0.679rem + 1.19vw, 1.75rem)", //20-28 mobile to desktop
        destH2MT: "clamp(3.5rem, 2.069rem + 6.107vw, 5rem)", // 56-80 mobile to tablet
        destH2TD: "clamp(5rem, 2.714rem + 4.762vw, 7rem)", // 80-96 tablet to desktop
        crewTechH2MT: "clamp(1.125rem, 0.767rem + 1.527vw, 1.5rem)", // 18-24 mobile to tablet
        crewTechH2TD: "clamp(1.5rem, 0.929rem + 1.19vw, 2rem)", // 24-32 tablet to desktop
        crewTechH3MT: "clamp(1.5rem, 0.546rem + 4.071vw, 2.5rem)", // 24-40 mobile to tablet
        crewTechH3TD: "clamp(2.5rem, 1.357rem + 2.381vw, 3.5rem)", // 40-56 tablet to desktop
      },
    },
  },
  plugins: [],
};
