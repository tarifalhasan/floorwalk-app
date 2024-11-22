import { wp } from "@/helpers/common";
import { Ionicons } from "@expo/vector-icons";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { Image, Pressable, StyleSheet, View } from "react-native";

const Header = () => {
  return (
    <>
      <View style={styles.container}>
        <DrawerToggleButton tintColor="#9CA3AF" />
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
    </>
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
