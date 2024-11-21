import { Ionicons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Button from "../../components/Button";
import ScreenWrapper from "../../components/ScreenWrapper";
import { theme } from "../../constants/theme";
import { wp } from "../../helpers/common";

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={{
          flexGrow: 1,
        }}
      >
        <ScreenWrapper bg="#ffff">
          <StatusBar style="dark" />
          <View style={styles.container}>
            <Text style={styles.title}>Log In sdd</Text>
            <Text style={styles.subtitle}>
              <Text style={{ fontWeight: "bold" }}>Login</Text> to your
              FloorWalk Shopper Portal
            </Text>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Email Id</Text>
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Password</Text>
              <View style={styles.passwordContainer}>
                <TextInput
                  style={[styles.input, styles.passwordInput]}
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                  placeholder="Password"
                />
                <Pressable
                  onPress={() => setShowPassword(!showPassword)}
                  style={styles.eyeIcon}
                >
                  <Ionicons
                    name={showPassword ? "eye-off-outline" : "eye-outline"}
                    size={24}
                    color={theme.colors.neutral_400}
                  />
                </Pressable>
              </View>
            </View>

            <TouchableOpacity onPress={() => router.push("PasswordRecovery")}>
              <Text style={styles.forgotPassword}>Forgot Password ?</Text>
            </TouchableOpacity>

            {/* Placeholder for reCAPTCHA */}
            <View style={styles.recaptcha}>
              <Text style={styles.recaptchaText}>I'm not a robot</Text>

              <Text style={styles.recaptchaFooter}>Privacy - Terms</Text>
            </View>

            <Button onPress={() => router.push("/home")} title={"Log In"} />

            <Link asChild href={"/Signup"} style={styles.signupContainer}>
              <TouchableOpacity onPress={() => {}}>
                <Text style={styles.signupText}>
                  Create Account{" "}
                  <Text style={styles.signupSubtext}>(Sign Up)</Text>
                </Text>
              </TouchableOpacity>
            </Link>
          </View>
        </ScreenWrapper>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(4),
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: theme.colors.primary_100,
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: theme.colors.neutral_600,
    textAlign: "center",
    marginBottom: 32,
    fontWeight: "400",
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: theme.colors.neutral_600,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: theme.colors.neutral_400,
    paddingVertical: 12,
    paddingHorizontal: 10,
    fontSize: 16,
    borderRadius: 8,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  passwordInput: {
    flex: 1,
  },
  eyeIcon: {
    position: "absolute",
    right: 0,
    padding: 8,
  },
  forgotPassword: {
    color: theme.colors.secondary_700,
    textAlign: "left",
    marginTop: 8,
    marginBottom: 20,
  },
  recaptcha: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 4,
    padding: 12,
    marginBottom: 20,
    backgroundColor: "#f9f9f9",
    alignItems: "center",
  },
  recaptchaText: {
    fontSize: 16,
    color: "#333",
    fontWeight: "bold",
    marginBottom: 8,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "#333",
    backgroundColor: "#fff",
    marginRight: 8,
  },
  recaptchaLabel: {
    fontSize: 14,
    color: "#333",
  },
  recaptchaFooter: {
    fontSize: 12,
    color: "#666",
    marginTop: 8,
    textAlign: "center",
  },
  signupContainer: {
    alignItems: "center",
  },
  signupText: {
    color: theme.colors.primary,
    fontSize: 16,
  },
  signupSubtext: {
    color: theme.colors.primary,
  },
});
