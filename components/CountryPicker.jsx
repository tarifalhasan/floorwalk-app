import { LogBox } from "react-native";
import CountryPicker from "react-native-country-picker-modal";

// Suppress the specific warning
LogBox.ignoreLogs(["Warning: CountryItem:"]);

const CustomCountryPicker = (props) => {
  return <CountryPicker {...props} />;
};

export default CustomCountryPicker;
