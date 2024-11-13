import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
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
import {} from "react-native-web";
import Button from "../../components/Button";
import ScreenWrapper from "../../components/ScreenWrapper";
import { theme } from "../../constants/theme";
import { wp } from "../../helpers/common";

export default function SignUpScreen() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [brandName, setBrandName] = useState("");
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
        <ScreenWrapper bg="#fff">
          <StatusBar style="dark" />
          <View style={styles.container}>
            <Text style={styles.title}>Sign Up</Text>
            <Text style={styles.subtitle}>
              <Text style={{ fontWeight: "bold" }}>Create Account</Text>{" "}
              FloorWalk Shopper Portal
            </Text>

            {/* Email Id */}
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

            {/* First Name */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>First Name</Text>
              <TextInput
                style={styles.input}
                value={firstName}
                onChangeText={setFirstName}
                placeholder="First Name"
              />
            </View>

            {/* Brand Name */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Brand Name</Text>
              <TextInput
                style={styles.input}
                value={brandName}
                onChangeText={setBrandName}
                placeholder="Brand Name"
              />
            </View>

            {/* Phone Number */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Phone Number</Text>
              <View style={styles.phoneContainer}>
                {/* Add flag and country code picker here */}
                <TextInput
                  style={[styles.input, styles.phoneInput]}
                  placeholder="+91-"
                  keyboardType="phone-pad"
                />
              </View>
            </View>

            {/* Password */}
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
            <TouchableOpacity onPress={() => {}}>
              <Text style={styles.loginText}>
                Already have an account?{" "}
                <Text style={styles.loginLink}>Log In</Text>
              </Text>
            </TouchableOpacity>
            {/* reCAPTCHA placeholder */}
            <View style={styles.recaptcha}>
              <Text style={styles.recaptchaText}>
                reCAPTCHA verification would go here
              </Text>
            </View>
            <Button onPress={() => {}} title={"Create Account"} />
            <Text style={styles.disclaimer}>
              * By signing up, you agree to our Terms Of Use and acknowledge
              you’ve read our Privacy Policy. This site is protected by
              reCAPTCHA Enterprise, Google's Privacy Policy, and Terms Of
              Service apply.
            </Text>
          </View>
        </ScreenWrapper>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(4),
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
  phoneContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  phoneInput: {
    flex: 1,
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
  loginText: {
    color: theme.colors.primary,
    textAlign: "center",
    marginBottom: 20,
    fontSize: 17,
  },
  loginLink: {
    color: theme.colors.primary_100,
  },
  recaptcha: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 12,
    marginBottom: 20,
  },
  recaptchaText: {
    color: "#666",
    textAlign: "center",
  },
  disclaimer: {
    fontSize: 12,
    color: theme.colors.neutral_400,
    textAlign: "center",
    paddingHorizontal: wp(2),
    paddingBottom: 14,
  },
});
