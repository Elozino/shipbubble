import { TextStyle, ViewStyle } from "react-native";
import { wp } from "../helpers/dimens";

export const colors = {
  primary: "#007AFF",
  secondary: "#5856D6",
  white: "#fff",
  dark_1: "#2B394E",
  app_color: "#FF6C78",
  gray_1: "#80808087",
  neutral: (opacity: number) => `rgba(10, 10, 10, ${opacity})`,
  yellow_1: "#FCE490",
  green_1: "#8AE388",
  red_1: '#FF0000'
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
};

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
  flexBtw: {
    alignItems: "center",
    justifyContent: "space-between",
    gap: 20
  } as ViewStyle,
  title: {
    color: colors.dark_1,
    fontSize: fontSize.xl,
    fontWeight: "bold",
  } as TextStyle,
  iconWrapper: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  errorText: {
    color: colors.red_1,
    marginTop: 5,
    fontSize: fontSize.xs,
  }
};
