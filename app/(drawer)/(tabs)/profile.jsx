import { CircularProgress } from "@/components/CustomProgressBar";
import AuditRating from "@/components/profile/AuditRating";
import CertificationScoreCard from "@/components/profile/CertificationScoreCard";
import PaymentDetails from "@/components/profile/PaymentDetails";
import PersonalDetails from "@/components/profile/PersonalDetails";
import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfileTabs from "@/components/profile/ProfileTabs";
import ScreenWrapper from "@/components/ScreenWrapper";
import { theme } from "@/constants/theme";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters"; // Importing from size-matters

export default function ProfilePage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("personal");
  const personalDetails = [
    { label: "Username", value: "Pooja Satfale" },
    { label: "Phone No.", value: "1234567891" },
    { label: "Whatsapp Number", value: "1234567891" },
    { label: "Email ID", value: "poojasatfale@gmail.com" },
  ];

  return (
    <ScreenWrapper bg="#fff">
      <View style={{ flex: 1 }}>
        <ProfileHeader onBack={() => router.back()} />
        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          style={styles.content}
          contentContainerStyle={{
            flexGrow: 1,
            paddingBottom: verticalScale(6),
          }}
        >
          <Text style={styles.title}>My Profile</Text>
          <View style={styles.profileSection}>
            <CircularProgress />
            <Text style={styles.name}>Pooja Satfale</Text>
          </View>
          <View style={styles.infoCards}>
            <CertificationScoreCard score={60} />
            <AuditRating rating={4.5} />
          </View>

          <ProfileTabs activeTab={activeTab} onTabChange={setActiveTab} />

          {activeTab === "personal" && (
            <PersonalDetails details={personalDetails} />
          )}
          {activeTab === "payment" && <PaymentDetails />}

          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.deactivedProfileBtn}>
              <Text style={styles.deactivedProfileBtnTxt}>
                Deactivate profile
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.changePasswordBtn}>
              <Text style={styles.changePasswordBtnTxt}>Change Password</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingHorizontal: scale(16),
    paddingTop: verticalScale(16),
  },
  title: {
    fontSize: moderateScale(22),
    fontWeight: "bold",
    color: theme.colors.primary_100,
    marginBottom: verticalScale(16),
  },
  profileSection: {
    alignItems: "center",
    marginBottom: verticalScale(24),
  },
  name: {
    fontSize: moderateScale(20),
    fontWeight: "bold",
    color: "#003366",
    marginTop: verticalScale(24),
    marginBottom: verticalScale(8),
  },
  infoCards: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: verticalScale(24),
    gap: scale(20),
  },
  buttonsContainer: {
    gap: verticalScale(16),
  },
  deactivedProfileBtn: {
    paddingVertical: verticalScale(12),
    borderWidth: 1,
    borderColor: theme.colors.warning_200,
    borderRadius: moderateScale(8),
    alignItems: "center",
  },
  deactivedProfileBtnTxt: {
    fontSize: moderateScale(18),
    color: theme.colors.warning_200,
    fontWeight: theme.fonts.medium,
  },
  changePasswordBtn: {
    paddingVertical: verticalScale(12),
    backgroundColor: theme.colors.primary_100,
    borderRadius: moderateScale(8),
    alignItems: "center",
  },
  changePasswordBtnTxt: {
    fontSize: moderateScale(18),
    color: "#fff",
    fontWeight: theme.fonts.medium,
  },
});
