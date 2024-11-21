import { Dimensions } from "react-native";

const { width: deviceWidth, height: deviceHeight } = Dimensions.get("window");

export const hp = (percentage) => {
  return Math.round((percentage * deviceHeight) / 100); // Ensures an integer
};

export const wp = (percentage) => {
  return Math.round((percentage * deviceWidth) / 100); // Ensures an integer
};
