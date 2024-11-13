import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

// Reusable Button component with multiple variants
const Button = ({ onPress, title, variant = "primary", style, textStyle }) => {
  const buttonStyles = styles[variant] || styles.primary; // Default to primary if no variant is provided
  const textStyles = textStylesVariant[variant] || textStylesVariant.primary; // Default text style for primary

  return (
    <TouchableOpacity
      style={[styles.button, buttonStyles, style]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, textStyles, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 16,
    marginBottom: 20,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },
  primary: {
    backgroundColor: "#0088cc",
  },
  secondary: {
    backgroundColor: "#f0f0f0",
    borderWidth: 1,
    borderColor: "#ccc",
  },
  danger: {
    backgroundColor: "#f44336",
  },
  link: {
    backgroundColor: "transparent",
  },
});

const textStylesVariant = StyleSheet.create({
  primary: {
    color: "#fff",
  },
  secondary: {
    color: "#003366",
  },
  danger: {
    color: "#fff",
  },
  link: {
    color: "#0088cc",
    textDecorationLine: "underline",
  },
});

export default Button;
