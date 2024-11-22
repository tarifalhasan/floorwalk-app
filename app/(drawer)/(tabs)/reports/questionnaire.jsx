import ScreenWrapper from "@/components/ScreenWrapper";
import { theme } from "@/constants/theme";
import { hp, wp } from "@/helpers/common";
import { Ionicons } from "@expo/vector-icons";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Component() {
  const [formData, setFormData] = useState({
    question1: "",
    question2: "",
    comments: "",
    question3: new Set(),
  });

  const handleCheckbox = (option) => {
    const newSelection = new Set(formData.question3);
    if (newSelection.has(option)) {
      newSelection.delete(option);
    } else {
      newSelection.add(option);
    }
    setFormData((prev) => ({ ...prev, question3: newSelection }));
  };

  return (
    <ScreenWrapper bg="#fff">
      <StatusBar style="dark" />
      <Stack.Screen
        options={{
          headerRight: () => <DrawerToggleButton tintColor="#9CA3AF" />,
          headerTitleAlign: "center",
          title: "Nagpur ECO - ELITE, Nagpur",
          headerTitleStyle: { fontSize: hp(2) },
        }}
      />

      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        style={styles.content}
      >
        <Text style={styles.title}>Questionnaire</Text>

        {/* Question 1 */}
        <View style={styles.questionContainer}>
          <Text style={styles.questionNumber}>Question 1</Text>
          <Text style={styles.questionText}>
            How would you rate your overall experience with our dealership?
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Type Here"
            value={formData.question1}
            onChangeText={(text) =>
              setFormData((prev) => ({ ...prev, question1: text }))
            }
          />
        </View>

        {/* Question 2 */}
        <View style={styles.questionContainer}>
          <Text style={styles.questionNumber}>Question 2</Text>
          <Text style={styles.questionText}>
            How would you rate your overall experience with our dealership?
          </Text>
          <View style={styles.radioGroup}>
            <TouchableOpacity
              style={styles.radioOption}
              onPress={() =>
                setFormData((prev) => ({ ...prev, question2: "Yes" }))
              }
            >
              <View style={styles.radio}>
                {formData.question2 === "Yes" && (
                  <View style={styles.radioInner} />
                )}
              </View>
              <Text style={styles.radioText}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.radioOption}
              onPress={() =>
                setFormData((prev) => ({ ...prev, question2: "No" }))
              }
            >
              <View style={styles.radio}>
                {formData.question2 === "No" && (
                  <View style={styles.radioInner} />
                )}
              </View>
              <Text style={styles.radioText}>NO</Text>
            </TouchableOpacity>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Add Comments"
            value={formData.comments}
            onChangeText={(text) =>
              setFormData((prev) => ({ ...prev, comments: text }))
            }
          />
        </View>

        {/* Question 3 */}
        <View style={styles.questionContainer}>
          <Text style={styles.questionNumber}>Question 3</Text>
          <Text style={styles.questionText}>
            How would you rate your overall experience with our dealership?
          </Text>
          {["Option 1", "Option 2", "Option 3", "Option 4"].map((option) => (
            <TouchableOpacity
              key={option}
              style={styles.checkboxOption}
              onPress={() => handleCheckbox(option)}
            >
              <View style={styles.checkbox}>
                {formData.question3.has(option) && (
                  <Ionicons
                    name="checkmark"
                    size={16}
                    color={theme.colors.primary}
                  />
                )}
              </View>
              <Text style={styles.checkboxText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Footer */}
      <View style={styles.bottomButtons}>
        <TouchableOpacity style={styles.backBtn}>
          <Text style={styles.backBtnText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.nextBtn]}>
          <Text style={styles.nextBtnText}>Next</Text>
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
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  },
  backButton: {
    padding: 4,
  },
  menuButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "600",
    flex: 1,
    textAlign: "center",
  },
  content: {
    flex: 1,
    paddingHorizontal: wp(4),
    paddingTop: hp(4),

    paddingBottom: hp(50),
  },
  title: {
    fontSize: hp(2.6),
    fontWeight: "600",
    color: theme.colors.primary,
    textAlign: "center",
    marginBottom: 24,
  },
  questionContainer: {
    marginBottom: 24,
  },
  questionNumber: {
    fontSize: hp(2),
    fontWeight: "600",
    color: theme.colors.primary,
    marginBottom: 8,
  },
  questionText: {
    fontSize: 14,
    color: "#4A5E6D",
    marginBottom: 16,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
    paddingVertical: 8,
    fontSize: 14,
  },
  radioGroup: {
    marginBottom: 16,
  },
  radioOption: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: theme.colors.primary,
    marginRight: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: theme.colors.primary,
  },
  radioText: {
    fontSize: 14,
    color: "#333",
  },
  checkboxOption: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    marginRight: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxText: {
    fontSize: 14,
    color: "#333",
  },
  footer: {
    flexDirection: "row",
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: "#E5E5E5",
  },
  backBtn: {
    flex: 1,
    paddingVertical: 12,
    marginRight: 8,
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 8,
  },
  backBtnText: {
    textAlign: "center",
    color: "#333",
    fontSize: 16,
  },
  submitBtn: {
    flex: 1,
    paddingVertical: 12,
    marginLeft: 8,
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
  },
  submitBtnText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
  },
  bottomButtons: {
    flexDirection: "row",
    paddingHorizontal: wp(4),
    flexDirection: "row",
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
    backgroundColor: "#fff",
  },
  backBtn: {
    flex: 1,
    paddingVertical: 12,
    marginRight: 8,
    borderWidth: 1,
    borderColor: "#9CA3AF",
    borderRadius: 4,
  },
  nextBtn: {
    flex: 1,
    paddingVertical: 12,
    marginLeft: 8,
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
  },
  backBtnText: {
    textAlign: "center",
    color: "#333",
    fontSize: 16,
  },
  nextBtnText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
  },
});
