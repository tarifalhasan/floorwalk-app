import ScreenWrapper from "@/components/ScreenWrapper";
import { theme } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { DrawerToggleButton } from "@react-navigation/drawer";
import Checkbox from "expo-checkbox";
import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { ScaledSheet, scale } from "react-native-size-matters";

export default function CertificationTest() {
  const [isChecked, setIsChecked] = useState(false);

  const navigation = useRouter();
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
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.back()}
          style={styles.backButton}
        >
          <Ionicons name="chevron-back" size={scale(24)} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Certificate</Text>
        <DrawerToggleButton tintColor="#9CA3AF" />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Auditor Certification Test</Text>

        <Text style={styles.description}>
          This certification will help us understand you better. By completing
          this certificate, you will increase your chances for getting mystery
          audits. The higher the score, better are the chances of getting
          mystery audits.
        </Text>

        <Text style={styles.subheading}>
          The Auditor Certification test will be conducted to check
        </Text>

        {skills.map((skill, index) => (
          <View key={skill} style={styles.skillItem}>
            <Text style={styles.skillText}>{`${index + 1}. ${skill}`}</Text>
          </View>
        ))}

        <Text style={styles.subheading}>Test instructions</Text>

        {instructions.map((instruction) => (
          <View key={instruction} style={styles.instructionItem}>
            <Text style={styles.bulletPoint}>➡️</Text>
            <Text style={styles.instructionText}>{instruction}</Text>
          </View>
        ))}

        <View style={styles.checkboxContainer}>
          <Checkbox
            value={isChecked}
            onValueChange={setIsChecked}
            color={isChecked ? theme.colors.primary : undefined}
            style={styles.checkbox}
          />
          <Text style={styles.checkboxLabel}>
            I have read & understood the instructions
          </Text>
        </View>

        <TouchableOpacity
          style={[styles.button, !isChecked && styles.buttonDisabled]}
          disabled={!isChecked}
        >
          <Text style={styles.buttonText}>Start Test Now</Text>
        </TouchableOpacity>
      </ScrollView>
    </ScreenWrapper>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: "14@s",
    paddingVertical: "12@vs",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  },
  backButton: {
    padding: "4@s",
  },
  menuButton: {
    padding: "2@s",
  },
  headerTitle: {
    fontSize: "16@s",
    fontWeight: "600",
    color: "#000",
  },
  content: {
    flex: 1,
    padding: "16@s",
    paddingHorizontal: "24@s",
  },
  title: {
    fontSize: "20@s",
    fontWeight: "bold",
    color: "#000",
    marginBottom: "12@vs",
  },
  description: {
    fontSize: "14@s",
    color: "#666",
    lineHeight: "20@vs",
    marginBottom: "20@vs",
  },
  subheading: {
    fontSize: "16@s",
    fontWeight: "600",
    color: "#000",
    marginTop: "16@vs",
    marginBottom: "12@vs",
  },
  skillItem: {
    marginBottom: "8@vs",
  },
  skillText: {
    fontSize: "14@s",
    color: "#000",
    lineHeight: "20@vs",
  },
  instructionItem: {
    flexDirection: "row",
    marginBottom: "8@vs",
    paddingRight: "16@s",
  },
  bulletPoint: {
    fontSize: "14@s",
    color: "#666",
    marginRight: "8@s",
  },
  instructionText: {
    flex: 1,
    fontSize: "14@s",
    color: "#666",
    lineHeight: "20@vs",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "20@vs",
    marginBottom: "24@vs",
  },
  checkbox: {
    marginRight: "8@s",
  },
  checkboxLabel: {
    fontSize: "14@s",
    color: "#000",
  },
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: "4@s",
    paddingVertical: "12@vs",
    alignItems: "center",
    marginBottom: "32@vs",
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonText: {
    color: "#fff",
    fontSize: "14@s",
    fontWeight: "400",
  },
});
