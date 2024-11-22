import { CircularProgress } from "@/components/CustomProgressBar";
import AuditRating from "@/components/profile/AuditRating";
import CertificationScoreCard from "@/components/profile/CertificationScoreCard";
import PaymentDetails from "@/components/profile/PaymentDetails";
import PersonalDetails from "@/components/profile/PersonalDetails";
import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfileTabs from "@/components/profile/ProfileTabs";
import { theme } from "@/constants/theme";
import { AntDesign } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, scale, verticalScale } from "react-native-size-matters"; // Importing from size-matters

export default function ProfilePage() {
  const [isWhatsappChecked, setWhatsappChecked] = useState(true);
  const [isEmailChecked, setEmailChecked] = useState(true);
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("personal");
  const personalDetails = [
    { label: "Username", value: "Pooja Satfale" },
    { label: "Phone No.", value: "1234567891" },
    { label: "Whatsapp Number", value: "1234567891" },
    { label: "Email ID", value: "poojasatfale@gmail.com" },
  ];

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
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
          <TouchableOpacity style={styles.editProfileBtn}>
            <AntDesign name="edit" size={24} color="white" />
            <Text
              style={{
                fontSize: scale(14),
                fontWeight: "600",
                color: "#fafafa",
              }}
            >
              Edit My Profile
            </Text>
          </TouchableOpacity>
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
            paddingBottom: verticalScale(20),
            rowGap: verticalScale(10),
          }}
        >
          <Text style={{ fontSize: scale(12), color: "#898384" }}>
            Receive New Opportunities
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View style={styles.section}>
              <Checkbox
                style={styles.checkbox}
                value={isEmailChecked}
                onValueChange={setEmailChecked}
                color={isEmailChecked ? "#3398FF" : "#eeee"}
              />
              <Text style={styles.paragraph}>Email</Text>
            </View>
            <View style={styles.section}>
              <Checkbox
                style={styles.checkbox}
                value={isWhatsappChecked}
                onValueChange={setWhatsappChecked}
                color={isWhatsappChecked ? "#3398FF" : "#eeee"}
              />
              <Text style={styles.paragraph}>Whatsapp</Text>
            </View>
          </View>
        </View>
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
    </SafeAreaView>
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
    rowGap: verticalScale(8),
  },
  editProfileBtn: {
    backgroundColor: "#007DC1",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: scale(4),
    height: verticalScale(42),
    paddingHorizontal: moderateScale(20),
    borderRadius: scale(8),
  },
  name: {
    fontSize: moderateScale(20),
    fontWeight: "bold",
    color: "#003366",

    marginBottom: verticalScale(4),
  },
  infoCards: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: verticalScale(24),
    gap: scale(20),
  },
  buttonsContainer: {
    gap: verticalScale(16),
    paddingBottom: verticalScale(40),
  },
  deactivedProfileBtn: {
    height: verticalScale(42),
    borderWidth: 1,
    borderColor: theme.colors.warning_200,
    borderRadius: moderateScale(8),
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  deactivedProfileBtnTxt: {
    fontSize: moderateScale(18),
    color: theme.colors.warning_200,
    fontWeight: theme.fonts.medium,
  },
  changePasswordBtn: {
    height: verticalScale(42),
    backgroundColor: theme.colors.primary,
    borderRadius: moderateScale(8),
    alignItems: "center",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: theme.colors.primary,
  },
  changePasswordBtnTxt: {
    fontSize: moderateScale(18),
    color: "#fff",
    fontWeight: theme.fonts.medium,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
  },
  paragraph: {
    fontSize: scale(14),
    color: "#4B5563",
  },
  checkbox: {
    margin: 8,
  },
});
