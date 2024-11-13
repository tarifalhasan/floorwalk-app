import { wp } from "@/helpers/common";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Image, Pressable, StyleSheet, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <Pressable>
        <MaterialIcons name="menu" size={32} color="#9CA3AF" />
      </Pressable>
      <Image
        source={require("@/assets/images/logo.png")}
        style={{
          width: 124,
          height: 56,
        }}
      />
      <Pressable>
        <Ionicons name="notifications-outline" size={30} color="black" />
      </Pressable>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: wp(4),
    backgroundColor: "#FAFAFA",
    paddingVertical: 4,
  },
});
