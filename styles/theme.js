export default {
  breakpoint: {
    phone: "0rem",
    tabletPortrait: "37.5rem", // 600px
    tabletLandscape: "56.25rem", // 900px
    desktopM: "75rem", // 1200px
    desktopL: "93.75rem", // 1500px
    desktopXL: "112.5rem", // 1800px
    desktopXXL: "125rem", // 2000px
  },
  font: {
    sansSerif: "Roboto, sans-serif",
    serif: "Roboto Slab, serif",
  },
  color: {
    primary: {
      main: "#FF9800",
    },
    light: "#E2EBF0",
    lightMuted: "#B0BEC5",
    dark: "#151B1F",
    white: "#FFFFFF",
    black: "#000000",
    blue: "#1E88E5",
    red: "#F44336",
    lime: "#CDDC39",
    purple: "#9C27B0",
    amber: "#FFC107",
    green: "#4CAF50",
    grey: "#5B6266",
    bg: "#0A0E0F",
  },
  size: {
    2: "0.125rem",
    4: "0.25rem",
    8: "0.5rem",
    12: "0.75rem",
    16: "1rem",
    24: "1.5rem",
    32: "2rem",
    48: "3rem",
    64: "4rem",
    96: "6rem",
    free: (pixel) => `${pixel / 16}rem`,
  },
  shadow: {
    small: "0px 4px 4px rgba(0, 0, 0, 0.2);",
    big: "0px 8px 16px rgba(0, 0, 0, 0.5);",
  },
};
