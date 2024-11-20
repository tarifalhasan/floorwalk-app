import ScreenWrapper from "@/components/ScreenWrapper";
import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width: deviceWidth, height: deviceHeight } = Dimensions.get("window");

const hp = (percentage) => {
  return (percentage * deviceHeight) / 100;
};

const wp = (percentage) => {
  return (percentage * deviceWidth) / 100;
};

export default function Certificate() {
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
      <StatusBar style="dark" />
      <Stack.Screen
        options={{
          headerRight: () => (
            <Ionicons
              name="menu"
              size={24}
              color="black"
              style={{ marginLeft: 10 }}
            />
          ),
          headerTitleAlign: "center",
          title: "Nagpur ECO - ELITE, Nagpur",
          headerTitleStyle: { fontSize: hp(2) },
        }}
      />

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Auditor Certification Test</Text>

        <Text style={styles.description}>
          This certification will help us understand you better. By completing
          this certificate, you will increase your chances for getting mystery
          audits. The higher the score, better are the chances of getting
          mystery audits.
        </Text>

        <Text style={styles.subtitle}>
          The Auditor Certification test will be conducted to check
        </Text>

        <View
          style={{
            padding: wp(2),
            backgroundColor: "rgba(215, 241, 255, 0.25)",
          }}
        >
          {skills.map((skill, index) => (
            <View key={skill} style={styles.skillItem}>
              <Text style={styles.skillText}>
                {index + 1}. {skill}
              </Text>
            </View>
          ))}
        </View>

        <Text style={styles.instructionsTitle}>Test instructions</Text>

        <View
          style={{
            padding: wp(2),
            backgroundColor: "rgba(215, 241, 255, 0.25)",
          }}
        >
          {instructions.map((instruction) => (
            <View key={instruction} style={styles.instructionItem}>
              <Text style={styles.bulletPoint}>➡️</Text>
              <Text style={styles.instructionText}>{instruction}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
      <View
        style={{
          paddingHorizontal: wp(4),
        }}
      >
        <TouchableOpacity
          style={styles.checkboxContainer}
          onPress={() => setInstructionsRead(!instructionsRead)}
        >
          <View style={styles.checkbox}>
            {instructionsRead && (
              <Ionicons name="checkmark" size={wp(4)} color="#007AFF" />
            )}
          </View>
          <Text style={styles.checkboxText}>
            I have read & understood the instructions
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.startButton,
            !instructionsRead && styles.startButtonDisabled,
          ]}
          disabled={!instructionsRead}
        >
          <Text
            style={[
              styles.startButtonText,
              !instructionsRead && styles.startButtonTextDisabled,
            ]}
          >
            Start Test Now
          </Text>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: wp(4),
    paddingVertical: hp(1.5),
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  },
  backButton: {
    padding: wp(1),
  },
  menuButton: {
    padding: wp(1),
  },
  headerTitle: {
    fontSize: wp(4.5),
    fontWeight: "600",
    flex: 1,
    textAlign: "center",
  },
  content: {
    flex: 1,
    paddingHorizontal: wp(4),
  },
  title: {
    fontSize: hp(2.4),
    fontWeight: "700",
    color: "#003C5D",
    marginBottom: hp(2),
    textAlign: "center",
  },
  description: {
    fontSize: hp(1.9),
    color: "#4B5563",
    marginBottom: hp(2.5),
  },
  subtitle: {
    fontSize: hp(2.4),
    fontWeight: "700",
    color: "#003C5D",
    marginBottom: hp(2),
  },
  skillItem: {
    marginBottom: hp(1.2),
  },
  skillText: {
    fontSize: wp(3.8),
    color: "#003C5D",
  },
  instructionsTitle: {
    fontSize: wp(4),
    fontWeight: "400",
    color: "#003C5D",
    marginTop: hp(2),
    marginBottom: hp(2),
  },
  instructionItem: {
    flexDirection: "row",
    marginBottom: hp(1.2),
    paddingRight: wp(4),
  },
  bulletPoint: {
    fontSize: wp(3.8),
    color: "#666",
    marginRight: wp(2),
  },
  instructionText: {
    fontSize: wp(3.8),
    color: "#666",
    flex: 1,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: hp(2),
    marginBottom: hp(3),
  },
  checkbox: {
    width: wp(5),
    height: wp(5),
    borderWidth: 1,
    borderColor: "#007AFF",
    marginRight: wp(2),
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxText: {
    fontSize: wp(3.8),
    color: "#003C5D",
  },
  startButton: {
    backgroundColor: "#007DC1",
    borderRadius: wp(2),
    paddingVertical: hp(1.8),
    marginBottom: hp(2),
  },
  startButtonDisabled: {
    backgroundColor: "#E5E5E5",
  },
  startButtonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: wp(4),
    fontWeight: "600",
  },
  startButtonTextDisabled: {
    color: "#999",
  },
});
