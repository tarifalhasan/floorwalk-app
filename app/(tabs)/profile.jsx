import { CircularProgress } from "@/components/CustomProgressBar";
import AuditRating from "@/components/profile/AuditRating";
import CertificationScoreCard from "@/components/profile/CertificationScoreCard";
import PaymentDetails from "@/components/profile/PaymentDetails";
import PersonalDetails from "@/components/profile/PersonalDetails";
import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfileTabs from "@/components/profile/ProfileTabs";
import ScreenWrapper from "@/components/ScreenWrapper";
import { theme } from "@/constants/theme";
import { hp, wp } from "@/helpers/common";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function ProfilePage() {
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
        <ProfileHeader />
        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          style={styles.content}
          contentContainerStyle={{
            flexGrow: 1,
            paddingBottom: hp(6),
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

          <View
            style={{
              gap: hp(2),
            }}
          >
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
    paddingHorizontal: wp(4),
    paddingTop: hp(2),
  },
  title: {
    fontSize: hp(2.8),
    fontWeight: "bold",
    color: theme.colors.primary_100,
    marginBottom: 16,
  },
  profileSection: {
    alignItems: "center",
    marginBottom: 24,
  },
  name: {
    fontSize: hp(2.4),
    fontWeight: "bold",
    color: "#003366",
    marginTop: 24,
    marginBottom: 8,
  },
  infoCards: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
    gap: wp(5),
  },
  deactivedProfileBtn: {
    paddingVertical: hp(2),
    borderWidth: 1,
    borderColor: theme.colors.warning_200,
    borderRadius: 8,
    alignItems: "center",
  },
  deactivedProfileBtnTxt: {
    fontSize: hp(2.2),
    color: theme.colors.warning_200,
    fontWeight: theme.fonts.medium,
  },
  changePasswordBtn: {
    paddingVertical: hp(2),
    backgroundColor: theme.colors.primary_100,
    borderRadius: 8,
    alignItems: "center",
  },
  changePasswordBtnTxt: {
    fontSize: hp(2.2),
    color: "#fff",
    fontWeight: theme.fonts.medium,
  },
});
