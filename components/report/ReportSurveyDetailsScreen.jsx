import { theme } from "@/constants/theme";
import { hp, wp } from "@/helpers/common";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function SurveyDetailsScreen() {
  const [sections, setSections] = useState([
    {
      id: "1",
      title: "Survey Details 1",
      question:
        "How would you rate your overall experience with our dealership?",
      answer: "The overall experience was excellent!",
      attachments: [
        {
          uri: "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          caption: "Audio Recording - \nBirthday Party Inquiry",
        },
        {
          uri: "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          caption: "Image - \nService Overview",
        },
      ],
      isExpanded: true,
    },
    {
      id: "2",
      title: "Survey Details 2",
      question: "How satisfied were you with the customer service?",
      answer: "The service was very satisfying and professional.",
      attachments: [
        {
          uri: "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          caption: "Screenshot - \nCustomer Feedback",
        },
      ],
      isExpanded: true,
    },
  ]);

  const toggleSection = (id) => {
    setSections(
      sections.map((section) =>
        section.id === id
          ? { ...section, isExpanded: !section.isExpanded }
          : section
      )
    );
  };

  return (
    <View style={styles.container}>
      {sections.map((section) => (
        <View key={section.id} style={styles.section}>
          {/* Section Header */}
          <Pressable
            style={styles.sectionHeader}
            onPress={() => toggleSection(section.id)}
          >
            <Text style={styles.sectionTitle}>{section.title}</Text>
            <MaterialIcons
              name={
                section.isExpanded ? "keyboard-arrow-up" : "keyboard-arrow-down"
              }
              size={24}
              color="#666"
            />
          </Pressable>

          {/* Section Content */}
          {section.isExpanded && (
            <View style={styles.questionContainer}>
              <Text style={styles.questionLabel}>Question</Text>
              <Text style={styles.questionText}>{section.question}</Text>

              <Text style={styles.answerLabel}>Answer</Text>
              <Text style={styles.answerText}>{section.answer}</Text>

              <Text style={styles.attachmentsLabel}>Attachments</Text>
              <View style={styles.attachmentsGrid}>
                {section.attachments.map((attachment, index) => (
                  <View key={index} style={styles.attachmentItem}>
                    <Image
                      source={{ uri: attachment.uri }}
                      style={styles.attachmentImage}
                    />
                    <Text style={styles.attachmentCaption}>
                      {attachment.caption}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          )}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  section: {
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: wp(4),
    backgroundColor: "#f8f8f8",
  },
  sectionTitle: {
    fontSize: hp(2),
    fontWeight: "600",
    color: theme.colors.primary,
  },
  questionContainer: {
    padding: wp(4),
  },
  questionLabel: {
    fontSize: hp(2),
    color: theme.colors.primary,
    marginBottom: 8,
    fontWeight: "700",
  },
  questionText: {
    fontSize: hp(2),
    color: theme.colors.neutral_600,
    marginBottom: 24,
  },
  answerLabel: {
    fontSize: hp(2),
    color: theme.colors.primary,
    marginBottom: 8,
    fontWeight: "700",
  },
  answerText: {
    fontSize: hp(2),
    color: theme.colors.neutral_600,
    marginBottom: 24,
  },
  attachmentsLabel: {
    fontSize: hp(2),
    color: theme.colors.primary,
    marginBottom: 16,
    fontWeight: "700",
  },
  attachmentsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: -8,
  },
  attachmentItem: {
    flex: 1,
    marginHorizontal: 8,
    alignItems: "center",
  },
  attachmentImage: {
    width: hp(12),
    borderRadius: 8,
    marginBottom: 8,
    height: hp(12),
    resizeMode: "cover",
  },
  attachmentCaption: {
    fontSize: hp(1.6),
    color: theme.colors.neutral_600,
    textAlign: "center",
    lineHeight: 16,
  },
});
