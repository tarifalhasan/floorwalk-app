import { theme } from "@/constants/theme";
import { Feather, Ionicons } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import { useVideoPlayer, VideoView } from "expo-video";
import { useState } from "react";

import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
const videoSource =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // Implement login logic here
    console.log("Login attempted with:", email, password);
    router.push("/home");
  };

  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

  const player = useVideoPlayer(videoSource, (player) => {
    player.loop = true;
    player.pause();
  });

  return (
    <ScrollView style={styles.container}>
      <Image
        style={{
          width: moderateScale(70),
          height: verticalScale(150),
          position: "absolute",
          top: verticalScale(90),
          left: 0,
        }}
        source={require("@/assets/images/left_login.png")}
      />
      <Image
        style={{
          width: moderateScale(70),
          height: verticalScale(150),
          position: "absolute",
          top: verticalScale(90),
          right: 0,
        }}
        source={require("@/assets/images/right_login.png")}
      />
      <Image
        source={require("@/assets/images/logo.png")}
        style={[styles.logo, { marginTop: verticalScale(30) }]}
        resizeMode="contain"
      />
      <View style={styles.content}>
        {/* Logo */}
        <View
          style={{
            paddingVertical: scale(30),
          }}
        >
          <Text style={styles.welcomeTitle}>Welcome to</Text>
          <Text style={styles.portalTitle}>
            <Text style={styles.floorWalk}>FloorWalk</Text>
            {"\n"}
            Shopper Portal
          </Text>
          <View style={styles.loginOptions}>
            <TouchableOpacity style={styles.loginOption}>
              <Text style={styles.loginOptionText}>For Client login</Text>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
              >
                <Feather name="user" size={scale(20)} color="#007DC1" />
                <Text
                  style={[
                    styles.loginOptionText,
                    {
                      color: "#007DC1",
                      textDecorationLine: "underline",
                      fontWeight: "500",
                    },
                  ]}
                >
                  login ?
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginOption}>
              <Text style={styles.loginOptionText}>For Agency login</Text>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
              >
                <Feather name="users" size={scale(20)} color="#007DC1" />
                <Text
                  style={[
                    styles.loginOptionText,
                    {
                      color: "#007DC1",
                      textDecorationLine: "underline",
                      fontWeight: "500",
                    },
                  ]}
                >
                  login ?
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Login Form */}
        <View style={styles.formContainer}>
          <Text style={styles.loginText}>
            Login to your FloorWalk Client Portal
          </Text>

          {/* Email Input */}
          <TextInput
            style={styles.input}
            placeholder="Email Id"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          {/* Password Input */}
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={() => setShowPassword(!showPassword)}
            >
              <Ionicons
                name={showPassword ? "eye-outline" : "eye-off-outline"}
                size={moderateScale(24)}
                color="#666"
              />
            </TouchableOpacity>
          </View>

          {/* Forgot Password */}

          <View>
            <Link href={"/PasswordRecovery"} asChild>
              <TouchableOpacity style={styles.forgotPassword}>
                <Text style={styles.forgotPasswordText}>Forgot Password ?</Text>
              </TouchableOpacity>
            </Link>
          </View>

          {/* <Recaptcha
            ref={$recaptcha}
            lang="pt"
            siteKey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            baseUrl="http://127.0.0.1"
            size={size}
            theme="dark"
            onLoad={() => Alert.alert("onLoad event")}
            onClose={() => Alert.alert("onClose event")}
            onError={(err) => {
              Alert.alert("onError event");
              console.warn(err);
            }}
            onExpire={() => Alert.alert("onExpire event")}
            onVerify={(token) => {
              Alert.alert("onVerify event");
              setToken(token);
            }}
            enterprise={false}
            hideBadge={false}
          /> */}

          {/* Login Button */}
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Log In</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            padding: scale(14),
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              fontSize: scale(14),
              fontWeight: "400",
            }}
          >
            Don't have account{" "}
          </Text>
          <Link href={"/Signup"}>
            <Text
              style={{
                fontSize: scale(16),
                fontWeight: "700",
                color: theme.colors.primary,
              }}
            >
              Sign Up
            </Text>
          </Link>
        </View>
        {/* How It Works Section */}
        <View style={styles.howItWorks}>
          <Text style={styles.howItWorksTitle}>How It Works</Text>
          <Text style={styles.howItWorksText}>
            Watch this 90 seconds video to know how can FloorWalk help you
            improve your business
          </Text>
        </View>
        <VideoView
          style={styles.video}
          player={player}
          allowsFullscreen
          allowsPictureInPicture
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: moderateScale(20),
  },
  logo: {
    width: scale(140),
    height: verticalScale(60),
    marginTop: verticalScale(10),
  },
  welcomeTitle: {
    fontSize: moderateScale(30),
    color: "#003C5D",
    textAlign: "center",
    fontWeight: "700",
  },
  portalTitle: {
    fontSize: moderateScale(35),
    textAlign: "center",
    fontWeight: "700",
  },
  floorWalk: {
    color: "#8DC63F",
  },
  loginOptions: {
    width: "100%",
    marginBottom: verticalScale(20),
    paddingTop: verticalScale(10),
    gap: scale(2),
  },
  loginOption: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  loginOptionText: {
    fontSize: moderateScale(14),
    color: "#666",
  },
  formContainer: {
    width: "100%",
    backgroundColor: "#fff",
    padding: moderateScale(20),
    borderRadius: moderateScale(10),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  loginText: {
    fontSize: moderateScale(16),
    marginBottom: verticalScale(20),
    textAlign: "center",
  },
  input: {
    width: "100%",
    height: verticalScale(45),
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: moderateScale(5),
    paddingHorizontal: moderateScale(15),
    marginBottom: verticalScale(15),
    fontSize: moderateScale(14),
  },
  passwordContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: moderateScale(5),
    marginBottom: verticalScale(15),
  },
  passwordInput: {
    flex: 1,
    height: verticalScale(45),
    paddingHorizontal: moderateScale(15),
    fontSize: moderateScale(14),
  },
  eyeIcon: {
    padding: moderateScale(10),
  },
  forgotPassword: {
    alignSelf: "flex-end",
    marginBottom: verticalScale(20),
  },
  forgotPasswordText: {
    color: "#666",
    fontSize: moderateScale(14),
  },
  loginButton: {
    width: "100%",
    backgroundColor: "#0088CC",
    padding: moderateScale(15),
    borderRadius: moderateScale(5),
    alignItems: "center",
  },
  loginButtonText: {
    color: "#fff",
    fontSize: moderateScale(16),
    fontWeight: "600",
  },
  howItWorks: {
    marginTop: verticalScale(30),
    alignItems: "center",
  },
  howItWorksTitle: {
    fontSize: moderateScale(20),
    color: "#003366",
    marginBottom: verticalScale(10),
  },
  howItWorksText: {
    textAlign: "center",
    color: "#666",
    fontSize: moderateScale(14),
    paddingHorizontal: moderateScale(20),
  },

  video: {
    width: "100%",
    height: verticalScale(180),
    marginTop: verticalScale(8),
  },
});
