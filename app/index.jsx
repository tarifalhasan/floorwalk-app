import ScreenWrapper from "@/components/ScreenWrapper";
import { Link } from "expo-router";
import { Text } from "react-native";

const WelcomeScreen = () => {
  return (
    <ScreenWrapper bg="#fff">
      <Text>WelcomeScreen</Text>
      <Link href={"/Login"}>Go Login</Link>
      <Link href={"/AuditorCertificationTest"}>AuditorCertificationTest</Link>
    </ScreenWrapper>
  );
};

export default WelcomeScreen;
