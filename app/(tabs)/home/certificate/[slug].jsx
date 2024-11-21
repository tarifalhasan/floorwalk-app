import ScreenWrapper from "@/components/ScreenWrapper";
import { Stack } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";

export default function GetCertificate() {
  const [instructionsRead, setInstructionsRead] = useState(false);

  const skills = [
    "Comprehension Skill",
    "Visual Observation Skill",
    "Listening Skill",
    "English Grammar Knowledge",
    "Problem-solving ability",
  ];

  const instructions = [
    "Upon completion of this test, you will be registered as a Certified Auditor.",
    "No go-backs are permitted.",
    "Only 1 attempt is allowed.",
    "Test scores out of 100 will be displayed on successful completion of the test.",
    "There is no time limit to complete the test.",
  ];

  return (
    <ScreenWrapper bg="#fff">
      <Stack.Screen options={{ headerShown: false }} />
      <Text>Hello</Text>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: scale(16),
  },
  title: {
    fontSize: verticalScale(18),
    fontWeight: "700",
    color: "#003C5D",
    marginBottom: verticalScale(16),
    textAlign: "center",
  },
  description: {
    fontSize: verticalScale(14),
    color: "#4B5563",
    marginBottom: verticalScale(16),
  },
  subtitle: {
    fontSize: verticalScale(18),
    fontWeight: "700",
    color: "#003C5D",
    marginBottom: verticalScale(16),
  },
  skillContainer: {
    padding: scale(8),
    backgroundColor: "rgba(215, 241, 255, 0.25)",
  },
  skillItem: {
    marginBottom: verticalScale(8),
  },
  skillText: {
    fontSize: scale(12),
    color: "#003C5D",
  },
  instructionsTitle: {
    fontSize: scale(14),
    fontWeight: "400",
    color: "#003C5D",
    marginTop: verticalScale(16),
    marginBottom: verticalScale(16),
  },
  instructionContainer: {
    padding: scale(8),
    backgroundColor: "rgba(215, 241, 255, 0.25)",
  },
  instructionItem: {
    flexDirection: "row",
    marginBottom: verticalScale(8),
  },
  bulletPoint: {
    fontSize: scale(12),
    color: "#666",
    marginRight: scale(8),
  },
  instructionText: {
    fontSize: scale(12),
    color: "#666",
    flex: 1,
  },
  footer: {
    paddingHorizontal: scale(16),
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: verticalScale(16),
    marginBottom: verticalScale(16),
  },
  checkbox: {
    width: scale(20),
    height: scale(20),
    borderWidth: 1,
    borderColor: "#007AFF",
    marginRight: scale(8),
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxText: {
    fontSize: scale(12),
    color: "#003C5D",
  },
  startButton: {
    backgroundColor: "#007DC1",
    borderRadius: scale(8),
    paddingVertical: verticalScale(12),
    marginBottom: verticalScale(16),
  },
  startButtonDisabled: {
    backgroundColor: "#E5E5E5",
  },
  startButtonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: scale(14),
    fontWeight: "600",
  },
  startButtonTextDisabled: {
    color: "#999",
  },
});
