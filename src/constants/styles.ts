import { ViewStyle } from "react-native";

export const colors = {
  primary: "#007AFF",
  secondary: "#5856D6",
  white: "#fff",
  dark_1: "#2B394E",
  app_color: "#FF6C78",
  gray_1: '#80808087',
  neutral: (opacity: number) => `rgba(10, 10, 10, ${opacity})`,
};

export const radius = {
  small: 8,
  xs: 10,
  sm: 12,
  md: 14,
  lg: 16,
  xl: 18,
  curve: 100,
};

export const fontSize = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
}

export const globalStyles = {
  container: {
    flex: 1,
    backgroundColor: colors.white,
  } as ViewStyle,
  allCenter: {
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
  } as ViewStyle,
  flexRowCenter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  } as ViewStyle,
  flexRowBtw: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  } as ViewStyle,
};
