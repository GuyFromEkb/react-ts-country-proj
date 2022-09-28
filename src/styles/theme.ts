export type TypeTheme = typeof baseTheme & typeof lightTheme;

export const baseTheme = {
  variables: {
    family: "'Nunito Sans', sans-serif",
    sm: "14px",
    md: "16px",
    lg: "23px",
    light: "300",
    normal: "600",
    bold: "800",
    radius: "0.5rem",
  },
};

export const lightTheme = {
  text: "hsl(200, 15%, 8%)",
  bg: "hsl(0, 0%, 98%)",
  "ui-base": "hsl(0, 0%, 100%)",
  shadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
  scroll: "rgb(201, 201, 201)",
};

export const darkTheme = {
  text: "hsl(0, 0%, 100%)",
  bg: "hsl(207, 26%, 17%)",
  "ui-base": "hsl(209, 23%, 22%)",
  shadow: "rgba(245, 245, 245, 0.2) 0 0 8px",
  scroll: "hsl(209, 23%, 22%)",
};
