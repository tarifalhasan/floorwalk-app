import { hp, wp } from "@/helpers/common";
import { Redirect } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";

export default function WelcomeScreen() {
  Redirect({ href: "/Login" });
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {/* Top Background Pattern */}
      <View style={styles.topPattern}>
        <Image
          source={require("@/assets/images/welcome1.png")}
          style={{
            width: "100%",
            height: "100%",
          }}
          resizeMode="cover"
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.welcomeText}>
          <Text style={styles.welcomeTo}>Welcome to{"\n"}</Text>
          <Text style={styles.portalText}>FloorWalk Shopper Portal</Text>
        </Text>

        <Image
          source={require("@/assets/images/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Bottom Background Pattern */}
      <View style={styles.bottomPattern}>
        <Image
          source={require("@/assets/images/welcome2.png")}
          style={{
            width: "100%",
            height: "100%",
          }}
          resizeMode="cover"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  topPattern: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: hp(35),
    zIndex: 1,
  },
  bottomPattern: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: hp(46),
    zIndex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: wp(8),
    zIndex: 4,
  },
  welcomeText: {
    textAlign: "center",
    marginBottom: hp(1.4),
  },
  welcomeTo: {
    fontSize: wp(6),
    color: "#007DC1",
    fontWeight: "600",
  },
  portalText: {
    fontSize: wp(6),
    color: "#s8DC63F",
    fontWeight: "600",
  },
  logo: {
    width: wp(60),
    height: wp(35),
  },
});
