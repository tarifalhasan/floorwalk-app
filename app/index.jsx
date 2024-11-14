import { Link } from "expo-router";
import { Text, View } from "react-native";

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
      <Link href={"/Login"}>Go Login</Link>
      <Link href={"/AuditorCertificationTest"}>AuditorCertificationTest</Link>
    </View>
  );
};

export default Home;
