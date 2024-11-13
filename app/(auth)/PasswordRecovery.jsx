import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import {} from "react-native-web";
import Button from "../../components/Button";
import { theme } from "../../constants/theme";
import { hp, wp } from "../../helpers/common";

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
        <StatusBar style="dark" />
        <View style={styles.container}>
          <Text style={styles.subtitle}>
            Use your registered e-mail address for password recovery
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
          {/* reCAPTCHA placeholder */}
          <View style={styles.recaptcha}>
            <Text style={styles.recaptchaText}>
              reCAPTCHA verification would go here
            </Text>
          </View>
          <Button onPress={() => {}} title={"Reset Password"} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(4),
    paddingTop: hp(2),
    backgroundColor: "#fff",
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: theme.colors.primary_100,
    textAlign: "left",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: theme.colors.neutral_600,
    textAlign: "left",
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
