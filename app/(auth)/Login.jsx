import ScreenWrapper from "@/components/ScreenWrapper";
import { theme } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import { useState } from "react";

import {
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

  return (
    <ScreenWrapper bg={"white"}>
      <View style={styles.content}>
        <View style={styles.formContainer}>
          <View
            style={{
              paddingBottom: verticalScale(40),
              rowGap: 6,
            }}
          >
            <Text style={styles.loginText}>Log In</Text>
            <Text style={styles.formSubTitle}>
              Login to your FloorWalk Shopper Portal
            </Text>
          </View>
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
                fontSize: scale(15),
                fontWeight: "700",
                color: theme.colors.primary,
              }}
            >
              (Sign Up)
            </Text>
          </Link>
        </View>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },

  welcomeTitle: {
    fontSize: moderateScale(30),
    color: "#003C5D",
    textAlign: "center",
    fontWeight: "700",
  },
  formSubTitle: {
    fontSize: scale(14),
    textAlign: "center",
    fontWeight: "500",
    color: "#4B5563",
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

    padding: moderateScale(20),
  },
  loginText: {
    fontSize: moderateScale(26),
    textAlign: "center",
    fontWeight: "600",
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
});
