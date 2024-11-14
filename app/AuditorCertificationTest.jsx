import ScreenWrapper from "@/components/ScreenWrapper";
import { hp, wp } from "@/helpers/common";
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function AuditorCertificationTest() {
  const [isChecked, setChecked] = useState(false);
  const router = useRouter();
  return (
    <ScreenWrapper style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </Pressable>
        <Text style={styles.headerTitle}>Certificate</Text>
        <Ionicons name="menu" size={24} color="black" />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        style={styles.content}
      >
        <Text style={styles.title}>Auditor Certification Test</Text>
        <Text style={styles.description}>
          This certification will help us understand you better. By completing
          this certificate, you will increase your chances of getting mystery
          audits. The higher the score, better are the chances of getting
          mystery audits.
        </Text>
        <Text style={styles.subtitle}>
          The Auditor Certification test will be conducted to check
        </Text>
        <View style={styles.skillsList}>
          {[
            "Comprehension Skill",
            "Visual Observation Skill",
            "Listening Skill",
            "English Grammar Knowledge",
            "Problem-solving ability",
          ].map((skill, index) => (
            <Text key={index} style={styles.skillItem}>{`${
              index + 1
            }. ${skill}`}</Text>
          ))}
        </View>
        <Text style={styles.subtitle}>Test instructions</Text>
        <View style={styles.instructionItemContent}>
          {[
            "Upon completion of this test, you will be registered as a Certified Auditor.",
            "No go-backs are permitted.",
            "Only 1 attempt is allowed.",
            "Test scores out of 100 will be displayed on successful completion of the test.",
            "There is no time limit to complete the test,",
          ].map((instruction, index) => (
            <View key={index} style={styles.instructionItem}>
              <Text style={styles.instructionText}> ➡️ {instruction}</Text>
            </View>
          ))}
        </View>

        <View style={styles.checkboxContainer}>
          <Checkbox
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? "#0077be" : undefined}
          />
          <Text style={styles.checkboxLabel}>
            I have read & understood the instructions
          </Text>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={[styles.button, !isChecked && styles.buttonDisabled]}
        disabled={!isChecked}
      >
        <Text style={styles.buttonText}>Start Test Now</Text>
      </TouchableOpacity>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: wp(4),
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  headerTitle: {
    fontSize: hp(2),
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    padding: wp(4),
  },
  title: {
    fontSize: hp(2.8),
    fontWeight: "bold",
    marginBottom: hp(1.2),
    color: "#003366",
  },
  description: {
    fontSize: hp(1.6),
    marginBottom: 16,
    color: "#333",
  },
  subtitle: {
    fontSize: hp(2.1),
    fontWeight: "bold",
    marginTop: hp(1.5),
    marginBottom: 8,
    color: "#003366",
  },
  skillsList: {
    marginBottom: hp(2),
    backgroundColor: "rgba(215, 241, 255, 0.25)",
    paddingHorizontal: wp(2.8),
    paddingVertical: hp(1.2),
  },
  skillItem: {
    fontSize: hp(1.7),
    marginBottom: 4,
    color: "#333",
  },
  instructionItem: {
    flexDirection: "row",
    alignItems: "flex-start ",
    marginBottom: 8,
  },
  instructionItemContent: {
    backgroundColor: "rgba(215, 241, 255, 0.25)",
    paddingHorizontal: wp(1.1),
    paddingVertical: hp(1.2),
  },
  instructionText: {
    fontSize: hp(1.7),
    marginLeft: 8,
    color: "#333",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
    marginBottom: 24,
  },
  checkboxLabel: {
    fontSize: hp(1.7),
    marginLeft: 8,
    color: "#333",
  },
  button: {
    backgroundColor: "#0077be",
    paddingVertical: wp(3.5),
    borderRadius: 8,
    alignItems: "center",
    margin: 16,
  },
  buttonDisabled: {
    backgroundColor: "#cccccc",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "400",
  },
});
