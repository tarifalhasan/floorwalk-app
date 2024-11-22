import SurveyDetailsScreen from "@/components/report/ReportSurveyDetailsScreen";
import ScreenWrapper from "@/components/ScreenWrapper";
import TabItem from "@/components/ui/TabItem";
import { theme } from "@/constants/theme";
import { hp, wp } from "@/helpers/common";
import Container, { Toast } from "toastify-react-native";

import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { Stack, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useCallback, useRef, useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import Svg, { G, Mask, Path } from "react-native-svg";
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
  const [auditReportOpen, setAuditReportOpen] = useState(false);
  const bottomSheetModalRef = useRef(null);
  const performedTheAuditBottomSheetModalRef = useRef(null);
  const performedTheAuditPresentModalPress = useCallback(() => {
    performedTheAuditBottomSheetModalRef.current?.present();
  }, []);
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    ),
    []
  );

  const onHavingTrouble = useCallback(() => {
    bottomSheetModalRef.current?.close();
    setAuditReportOpen(true);
  });

  const onHavingTroubleAgree = () => {
    setAuditReportOpen(false);
    Toast.success("Report Submit Successfully");
  };

  const performedTheAuditReportSubmit = async () => {
    performedTheAuditBottomSheetModalRef.current?.close();
    Toast.success("Audit Report Submited");
    setAuditReportOpen(false);
  };
  const performedTheAuditReportCancel = async () => {
    performedTheAuditBottomSheetModalRef.current?.close();
    Toast.warn("Audit Report Cancel");
    setAuditReportOpen(false);
  };
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
        <View>
          <DrawerToggleButton tintColor="#9CA3AF" />
        </View>
      </View>
      {/* Title Section */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Nagpur ECO - ELITE, Nagpur</Text>
        <Pressable onPress={handlePresentModalPress} style={styles.shareButton}>
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

      <Container
        textStyle={{
          fontSize: scale(13),
        }}
        duration={5000}
        position="top"
      />
      {auditReportOpen && (
        <View
          style={{
            backgroundColor: "#F4F8FB",
            paddingHorizontal: moderateScale(18),
            paddingVertical: verticalScale(10),
            gap: 10,
          }}
        >
          <Text
            style={{
              fontSize: scale(16),
              color: "#003C5D",
              fontWeight: "700",
            }}
          >
            Audit Report
          </Text>
          <Text
            style={{
              fontSize: scale(13),
              color: "#9CA3AF",
              fontWeight: "400",
            }}
          >
            Click Agree if you’re ready to start the audit and have thoroughly
            reviewed the guidelines and questionnaire.
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
            <TouchableOpacity
              onPress={performedTheAuditPresentModalPress}
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 1.5,
                borderColor: theme.colors.primary,
                height: verticalScale(40),
                borderRadius: 6,
                paddingHorizontal: moderateScale(10),
              }}
            >
              <Text
                style={{
                  fontSize: scale(13),
                  color: "#007DC1",
                  fontWeight: "600",
                }}
              >
                Performed the Audit?
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onHavingTroubleAgree}
              style={{
                flex: 0,
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 1.5,
                borderColor: "#8DC63F",
                height: verticalScale(40),
                borderRadius: 6,
                paddingHorizontal: moderateScale(50),
                backgroundColor: "#8DC63F",
              }}
            >
              <Text
                style={{
                  fontSize: scale(13),
                  color: "#fff",
                  fontWeight: "600",
                }}
              >
                Agree
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      <BottomSheetModal
        ref={bottomSheetModalRef}
        enableDismissOnClose
        backdropComponent={renderBackdrop}
      >
        <BottomSheetView style={styles.contentContainer}>
          <View style={{ gap: hp(1.6) }}>
            {/* Help Header */}
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={scale(24)}
                height={scale(24)}
                fill="none"
              >
                <Mask
                  id="a"
                  width={scale(24)}
                  height={scale(24)}
                  x={0}
                  y={0}
                  maskUnits="userSpaceOnUse"
                  style={{
                    maskType: "alpha",
                  }}
                >
                  <Path fill="#D9D9D9" d="M0 0h24v24H0z" />
                </Mask>
                <G mask="url(#a)">
                  <Path
                    fill="#003C5D"
                    d="M12 17c.283 0 .52-.096.713-.288A.968.968 0 0 0 13 16a.968.968 0 0 0-.287-.713A.968.968 0 0 0 12 15a.968.968 0 0 0-.713.287A.968.968 0 0 0 11 16c0 .283.096.52.287.712.192.192.43.288.713.288Zm-1-4h2V7h-2v6Zm-6 8c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 0 1 3 19V5c0-.55.196-1.02.587-1.413A1.926 1.926 0 0 1 5 3h4.2c.217-.6.58-1.083 1.088-1.45A2.857 2.857 0 0 1 12 1c.633 0 1.204.183 1.713.55.508.367.87.85 1.087 1.45H19c.55 0 1.02.196 1.413.587C20.803 3.98 21 4.45 21 5v14c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0 1 19 21H5Zm0-2h14V5H5v14Zm7-14.75a.728.728 0 0 0 .75-.75.728.728 0 0 0-.75-.75.728.728 0 0 0-.75.75.728.728 0 0 0 .75.75Z"
                  />
                </G>
              </Svg>
              <Text style={styles.headerTitle}>Help</Text>
            </View>

            <Text style={styles.helpTitle}>
              Please check with the Project Manager for the Excel sheet of games
              that are to be checked during the visit.
            </Text>

            <View style={styles.additionalInfo}>
              <Text
                style={{
                  fontSize: scale(13),
                  color: theme.colors.primary_100,
                  fontWeight: "400",
                }}
              >
                Before visiting the center, call on the Centralized number of
                the SHOTT (18004199055). If the call gets unanswered within 3
                attempts (After an interval of 2 hours) then, you can stop
                calling. If a call back is received please answer it and attach
                it as proof in the report.
              </Text>
            </View>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                paddingBottom: verticalScale(10),
              }}
            >
              <TouchableOpacity onPress={onHavingTrouble}>
                <Text
                  style={{
                    fontSize: scale(14),
                    fontWeight: "600",
                    color: theme.colors.primary,
                    borderBottomWidth: 1.5,
                    borderBottomColor: theme.colors.primary,
                  }}
                >
                  Having Trouble?
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </BottomSheetView>
      </BottomSheetModal>
      <BottomSheetModal
        ref={performedTheAuditBottomSheetModalRef}
        enableDismissOnClose
        backdropComponent={renderBackdrop}
      >
        <BottomSheetView style={styles.contentContainer}>
          <View style={{ gap: hp(1.6) }}>
            {/* Help Header */}
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Text style={styles.headerTitle}>Performed the Audit?</Text>
            </View>

            <View style={styles.additionalInfo}>
              <Text
                style={{
                  fontSize: scale(13),
                  color: theme.colors.primary_100,
                  fontWeight: "400",
                }}
              >
                If you did not perform or not going to perform the Audit please
                give reason and click No and If you did or gong to perform,
                please click{" "}
                <Text
                  style={{ fontWeight: "700", color: theme.colors.primary }}
                >
                  Yes
                </Text>{" "}
                and Fill the Report wlth ln a 48 hours.
              </Text>
            </View>
            <TextInput
              style={{
                height: scale(100),
                width: "100%",
                borderBottomColor: "#9CA3AF",
                borderBottomWidth: 1.5,
                borderRadius: 8,
                padding: moderateScale(4),
                fontSize: scale(14),
                color: "#9CA3AF",
              }}
              placeholderTextColor={"#9CA3AF"}
              placeholder="Reason:(Optional)"
              multiline
              textAlign="top"
              numberOfLines={4}
            />
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
            >
              <TouchableOpacity
                onPress={performedTheAuditReportSubmit}
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  borderWidth: 1.5,
                  borderColor: "#8DC63F",
                  height: verticalScale(40),
                  borderRadius: 6,
                  paddingHorizontal: moderateScale(50),
                  backgroundColor: "#8DC63F",
                }}
              >
                <Text
                  style={{
                    fontSize: scale(13),
                    color: "#fff",
                    fontWeight: "600",
                  }}
                >
                  Yes
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={performedTheAuditReportCancel}
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  borderWidth: 1.5,
                  borderColor: theme.colors.primary,
                  height: verticalScale(40),
                  borderRadius: 6,
                  paddingHorizontal: moderateScale(50),
                  backgroundColor: theme.colors.primary,
                }}
              >
                <Text
                  style={{
                    fontSize: scale(13),
                    color: "#fff",
                    fontWeight: "600",
                  }}
                >
                  No
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </BottomSheetView>
      </BottomSheetModal>
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
  contentContainer: {
    paddingHorizontal: hp(2.5),
    paddingBottom: hp(2),
    paddingTop: hp(1),
  },
  headerTitle: {
    fontSize: hp(2),
    fontWeight: "700",
    color: theme.colors.primary_100,
  },
  helpTitle: {
    fontSize: scale(16),
    fontWeight: "600",
    color: theme.colors.primary,
  },
  helpDescription: {
    fontSize: scale(12),
    fontWeight: "400",
    color: theme.colors.neutral_600,
  },
  additionalInfo: {
    backgroundColor: "rgba(215, 241, 255, 0.25)",
    padding: scale(10),
    borderRadius: 10,
    gap: 8,
  },
});
