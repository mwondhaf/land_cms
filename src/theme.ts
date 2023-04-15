import { createTheme } from "@mui/material";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    greenBtn: true;
    warningBtn: true;
    lightOnPrimary: true;
    lightOnPrimaryOutlined: true;
    transparent: true;
  }
}

declare module "@mui/material/Chip" {
  interface ChipPropsVariantOverrides {
    primary: true;
  }
}

export const shades = {
  orange: {
    light: "#f5e3d0",
    200: "#ebc7a2",
    300: "#e2ab73",
    400: "#d88f45",
    main: "#ce7316",
    dark: "#a55c12",
    700: "#7c450d",
    800: "#522e09",
    900: "#291704",
  },

  green: {
    light: "#dff1dc",
    hover: "#4c9241",
    600: "#4c9241",
    main: "#5fb751",
    dark: "#132510",
  },

  primary: {
    light: "#d2e6ef",
    200: "#a4cdde",
    300: "#77b4ce",
    400: "#499bbd",
    main: "#1c82ad",
    600: "#16688a",
    700: "#114e68",
    800: "#0b3445",
    dark: "#061a23",
  },
  neutral: {
    light: "#ffffff",
    lightMedium: "#dddddd",
    medium: "#999999",
    mediumDark: "#555555",
    dark: "#111111",
  },
  tone: {
    red: "#f84c5d",
    darkBlue: "#0F243F",
    bg: "#F5F8FB",
  },
};

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1290,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: ["Inter", "serif"].join(","),
  },
  palette: {
    ...shades,
  },
  components: {
    MuiChip: {
      variants: [
        {
          props: { variant: "primary" },
          style: {
            textTransform: "none",
            backgroundColor: shades.green.main,
            color: shades.green.light,
            "&:hover": {
              backgroundColor: shades.green.hover,
            },
          },
        },
      ],
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        sx: {
          borderRadius: 1,
          textTransform: "none",
        },
      },
      variants: [
        {
          props: { variant: "greenBtn" },
          style: {
            height: 30,
            textTransform: "none",
            backgroundColor: shades.green.main,
            color: shades.green.light,
            "&:hover": {
              backgroundColor: shades.green.hover,
            },
          },
        },
        {
          props: { variant: "warningBtn" },
          style: {
            textTransform: "none",
            height: 30,
            backgroundColor: shades.orange.main,
            color: shades.orange.light,
            "&:hover": {
              backgroundColor: shades.orange.dark,
            },
          },
        },
      ],
    },

    MuiTextField: {
      defaultProps: {
        InputProps: {
          disableUnderline: true,
        },
      },
    },
  },
});

export default theme;
