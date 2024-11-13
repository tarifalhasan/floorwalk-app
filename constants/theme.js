import { hp } from "@/helpers/common";

export const theme = {
  colors: {
    primary: "#007DC1",
    primary_100: "#003C5D",
    primary_600: "#11ABFF",
    neutral_600: "#4B5563",
    neutral_400: "#9CA3AF",
    secondary: "#8DC63F",
    secondary_700: "#7991A4",
    secondary_800: "#637D92",
    yellow_600: "#FCE301",
    yellow_100: "#FFFAD2",
    warning_200: "#EDA145",
    warning_600: "#FACC15",
    green_100: "#F0FDF4",
    green_600: "#16A34A",
  },
  fonts: {
    medium: "500",
    semoBold: "600",
    bold: "700",
    extraBold: "800",
    black: "900",
  },
  redius: {
    xs: 10,
    sm: 12,
    md: 14,
    lg: 16,
    xl: 18,
    xxl: 22,
  },
};

export const textStyles = {
  fontSize: {
    title: {
      fontSize: hp(1.9),
      fontWeight: theme.fonts.bold,
      color: theme.colors.primary_100,
      FOntFamily: "Inter_700Bold",
    },
    subtitle: {
      fontSize: 14,
      fontWeight: "400",
      color: theme.colors.neutral_600,
    },
    body: {
      fontSize: 12,
      fontWeight: "400",
      color: theme.colors.neutral_600,
    },
    largeTitle: {
      fontSize: 18,
      fontWeight: theme.fonts.extraBold,
      color: theme.colors.primary,
    },
  },
};
