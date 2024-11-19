import SurveyDetailsScreen from "@/components/report/ReportSurveyDetailsScreen";
import ScreenWrapper from "@/components/ScreenWrapper";
import TabItem from "@/components/ui/TabItem";
import { theme } from "@/constants/theme";
import { hp, wp } from "@/helpers/common";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function AuditReportScreen() {
  const router = useRouter();
  const [sections, setSections] = useState({
    auditDetails: true,
    reportSummary: true,
    attachments: true,
  });

  const toggleSection = (section) => {
    setSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const [tab, setTab] = useState(1);

  return (
    <ScreenWrapper bg="#fff">
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar style="dark" />
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="#9CA3AF" />
        </Pressable>
        <Text style={styles.headerTitle}>View Report</Text>
        <View style={styles.headerRight}>
          <Pressable style={styles.menuButton}>
            <Ionicons name="menu" size={27} color="#9CA3AF" />
          </Pressable>
        </View>
      </View>
      {/* Title Section */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Nagpur ECO - ELITE, Nagpur</Text>
        <Pressable style={styles.shareButton}>
          <Ionicons name="share-outline" size={24} color="#007DC1" />
        </Pressable>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        style={styles.content}
      >
        {/* Audit Details Section */}
        <Pressable
          style={styles.sectionHeader}
          onPress={() => toggleSection("auditDetails")}
        >
          <Text style={styles.sectionTitle}>Audit Details</Text>
          <MaterialIcons
            name={
              sections.auditDetails
                ? "keyboard-arrow-up"
                : "keyboard-arrow-down"
            }
            size={24}
            color="#666"
          />
        </Pressable>

        {sections.auditDetails && (
          <View style={styles.sectionContent}>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Store Name</Text>
              <Text style={styles.detailValue}>SHOTT Mumbai</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={[styles.detailLabel, { flex: 1 }]}>Audit Type</Text>
              <Text
                style={[
                  styles.detailValue,
                  {
                    color: "#007DC1",
                    backgroundColor: "rgba(75, 107, 251, 0.05)",
                    padding: 3,
                    flex: 0,
                  },
                ]}
              >
                Walk In
              </Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Status</Text>
              <View style={styles.statusContainer}>
                <View style={styles.statusDot} />
                <Text style={styles.statusText}>Client View</Text>
              </View>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Fee</Text>
              <Text style={styles.detailValue}>₹800</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Reimbursement up to</Text>
              <Text style={styles.detailValue}>₹0</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Audit Date</Text>
              <Text style={styles.detailValue}>21st Jan 2024</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Store Address</Text>
              <Text style={styles.detailValue}>
                Shop 46, First Floor, Grand Point Mall, New Link Rd, Goregaon
                West, Near Citi Center Factory, Andheri West, Mumbai,
                Maharashtra 400063
              </Text>
            </View>
          </View>
        )}

        <Pressable style={styles.guidelineButton}>
          <Text style={styles.guidelineButtonText}>Open Guideline</Text>
        </Pressable>
        {/* report tab */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: wp(4),
            paddingVertical: hp(2),
          }}
        >
          <TabItem
            isActive={tab === 1}
            onPress={() => setTab(1)}
            iconSource={require("@/assets/icons/demography_user.png")}
            label="Audit"
          />
          <TabItem
            isActive={tab === 2}
            onPress={() => setTab(2)}
            iconSource={require("@/assets/icons/other_admission.png")}
            label="Questionnaire"
          />
        </View>

        {tab === 1 && (
          <>
            {/* Report Summary Section */}
            <Pressable
              style={styles.sectionHeader}
              onPress={() => toggleSection("reportSummary")}
            >
              <Text style={styles.sectionTitle}>Report Summary</Text>
              <MaterialIcons
                name={
                  sections.reportSummary
                    ? "keyboard-arrow-up"
                    : "keyboard-arrow-down"
                }
                size={24}
                color="#666"
              />
            </Pressable>

            {sections.reportSummary && (
              <View style={styles.sectionContent}>
                <Text style={styles.summaryText}>
                  On September 13, 2024, I conducted an audit at the Store Zone
                  within SHOTT Ltd to record business practices and operational
                  standards. During my visit, the store was exceptionally
                  well-maintained, with ample seating space and plenty of
                  serving equipment available. The staff demonstrated
                  professionalism and courtesy throughout my visit. They
                  provided clear explanations regarding configurations and were
                  proactive in addressing any queries I had about their food and
                  beverage services, which met industry standards. I was
                  particularly impressed with the additional fact that they
                  surprised all the customers with complimentary desserts,
                  showing their commitment to enhance each user outing.
                </Text>
              </View>
            )}

            <Pressable
              style={styles.sectionHeader}
              onPress={() => toggleSection("attachments")}
            >
              <Text style={styles.sectionTitle}>Attachments</Text>
              <MaterialIcons
                name={
                  sections.attachments
                    ? "keyboard-arrow-up"
                    : "keyboard-arrow-down"
                }
                size={24}
                color="#666"
              />
            </Pressable>

            {sections.attachments && (
              <View style={styles.sectionContent}>
                <View style={styles.attachmentItem}>
                  <View style={styles.attachmentInfo}>
                    <Ionicons name="musical-note" size={20} color="#666" />
                    <Text style={styles.attachmentText}>
                      Audio Recording - Birthday Party Inquiry
                    </Text>
                  </View>
                  <Pressable>
                    <Ionicons name="close" size={20} color="#666" />
                  </Pressable>
                </View>
                <View style={styles.attachmentItem}>
                  <View style={styles.attachmentInfo}>
                    <Ionicons name="musical-note" size={20} color="#666" />
                    <Text style={styles.attachmentText}>
                      Audio Recording - Birthday Party Inquiry
                    </Text>
                  </View>
                  <Pressable>
                    <Ionicons name="close" size={20} color="#666" />
                  </Pressable>
                </View>
              </View>
            )}
          </>
        )}
        {tab === 2 && <SurveyDetailsScreen />}
      </ScrollView>
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
    height: 44,
    paddingHorizontal: wp(4),
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  headerTitle: {
    fontSize: hp(2.4),
    fontWeight: "700",
    color: theme.colors.primary_100,
  },
  backButton: {
    padding: 8,
    marginLeft: -8,
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuButton: {
    padding: 8,
    marginRight: -8,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: wp(4),
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
    paddingVertical: hp(2),
  },
  title: {
    fontSize: hp(2.6),
    fontWeight: "600",
    color: "#002147",
    flex: 1,
    marginRight: 16,
  },
  shareButton: {
    padding: 8,
    marginRight: -8,
  },
  content: {
    flex: 1,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: wp(4),
    backgroundColor: "rgba(0, 60, 93, 0.05)",
    paddingVertical: hp(2),
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#0088cc",
  },
  sectionContent: {
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: hp(2),
  },
  detailLabel: {
    fontSize: hp(1.6),
    color: theme.colors.primary_100,
    flex: 1,
    fontWeight: "600",
  },
  detailValue: {
    fontSize: hp(1.8),
    color: "#6B7280",
    flex: 2,
    textAlign: "right",
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0FDF4",
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#4CAF50",
    marginRight: 6,
  },
  statusText: {
    color: "#4CAF50",
    fontSize: 14,
  },
  guidelineButton: {
    backgroundColor: "#0088cc",
    padding: 14,
    borderRadius: 8,
    marginHorizontal: 16,
    marginVertical: 16,
  },
  guidelineButtonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },
  summaryText: {
    fontSize: hp(1.7),
    lineHeight: 20,
    color: "#6B7280",
  },
  attachmentItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: wp(1),
    backgroundColor: "#EFF6FF",
    paddingVertical: 3,
    paddingHorizontal: wp(1.5),
    borderRadius: 120,
  },
  attachmentInfo: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  attachmentText: {
    marginLeft: 2,
    fontSize: hp(1.6),
    color: "#003C5D",
  },
  bottomTabs: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
    paddingVertical: 8,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
  },
  tabText: {
    fontSize: 12,
    marginTop: 4,
    color: "#0088cc",
  },
  tabTextInactive: {
    color: "#666",
  },
});
