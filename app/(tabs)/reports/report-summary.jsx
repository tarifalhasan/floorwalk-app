import ScreenWrapper from "@/components/ScreenWrapper";
import { theme } from "@/constants/theme";
import { hp, wp } from "@/helpers/common";
import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function ReportSummart() {
  const router = useRouter();
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

          <View style={styles.content}>
            <Text style={styles.sectionTitle}>Report Summary</Text>
            <View style={styles.detailsContainer}>
              <Text style={styles.label}>Report Summary</Text>
              <TextInput
                placeholder="report text here"
                multiline
                style={styles.input}
                numberOfLines={4}
              />
              <Text
                style={[
                  styles.label,
                  {
                    color: "#EDA145",
                  },
                ]}
              >
                (Min 150 characters in length), [150 characters remaining.]
              </Text>
            </View>
          </View>
        </ScreenWrapper>
      </ScrollView>
      <View style={styles.bottomButtons}>
        <TouchableOpacity style={styles.backBtn}>
          <Text style={styles.backBtnText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.nextBtn]}>
          <Text style={styles.nextBtnText}>Next</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
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
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  label: {
    fontSize: hp(2),
    color: theme.colors.neutral_600,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: theme.colors.neutral_400,
    paddingVertical: hp(1.6),
    paddingHorizontal: 10,
    fontSize: 16,
    borderRadius: 8,
    textAlignVertical: "top",
  },

  backButton: {
    padding: 4,
  },
  menuButton: {
    padding: 4,
  },
  headerTitle: {
    flex: 1,
    fontSize: hp(2.2),
    fontWeight: "600",
    textAlign: "center",
    marginHorizontal: 16,
  },
  content: {
    flex: 1,
    paddingBottom: hp(10),
  },
  sectionTitle: {
    fontSize: hp(2.69),
    fontWeight: "600",
    color: theme.colors.primary,
    textAlign: "center",
    marginVertical: 16,
  },
  detailsContainer: {
    paddingHorizontal: wp(4),
    backgroundColor: "#FAFAFA",
    paddingVertical: hp(4),
    paddingHorizontal: wp(4),
    gap: 10,
  },

  bottomButtons: {
    flexDirection: "row",
    paddingHorizontal: wp(4),
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
    backgroundColor: "#fff",
    borderTopColor: "#ece7eced",
    borderTopWidth: 1,
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
