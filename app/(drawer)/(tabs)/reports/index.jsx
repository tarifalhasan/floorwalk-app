import ReportCard from "@/components/report/ReportCard";
import ScreenWrapper from "@/components/ScreenWrapper";
import { textStyles } from "@/constants/theme";
import { hp, wp } from "@/helpers/common";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from "react-native-popup-menu";

const ReportScreen = () => {
  const router = useRouter();
  return (
    <ScreenWrapper bg="#fff" style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: wp(4),
          backgroundColor: "#FAFAFA",
          paddingVertical: 4,
        }}
      >
        <Menu>
          <MenuTrigger>
            <MaterialIcons name="menu" size={32} color="#9CA3AF" />
          </MenuTrigger>
          <MenuOptions
            style={{
              padding: hp(1.2),
            }}
          >
            <MenuOption onSelect={() => router.push("/reports/audit-details")}>
              <Text
                style={{
                  fontSize: hp(2),
                }}
              >
                Audit Details
              </Text>
            </MenuOption>
            <MenuOption onSelect={() => router.push("/reports/report-summary")}>
              <Text
                style={{
                  fontSize: hp(2),
                }}
              >
                Report Summary
              </Text>
            </MenuOption>
            <MenuOption onSelect={() => router.push("/reports/questionnaire")}>
              <Text
                style={{
                  fontSize: hp(2),
                }}
              >
                Questionnaire
              </Text>
            </MenuOption>
          </MenuOptions>
        </Menu>
        <Image
          source={require("@/assets/images/logo.png")}
          style={{
            width: 124,
            height: 56,
          }}
        />
        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.headerContainer}>
        <Text style={textStyles.fontSize.title}>Report</Text>
        <Image
          source={require("@/assets/images/privacy_tip.png")}
          style={{
            width: hp(3.5),
            height: hp(3.5),
          }}
        />
      </View>

      {/* Audit List */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={styles.reportList}
      >
        <ReportCard
          title="Nagpur ECO - ELITE, Nagpur"
          progress={93}
          location="Unit 2, Ground Floor, Highway Castle, Plot No 5, Amravati Rd, Nagpur, Maharashtra 440023"
          status="Client View"
          statusColor="#4CAF50"
          auditDate="09 August 2024"
          fees="₹ 800"
          reimbursement="₹ 00"
          auditType="Walk In"
          auditTypeColor="#0056F0"
          slug="/reports/details"
        />
        <ReportCard
          title="Nagpur ECO - ELITE, Nagpur"
          progress={93}
          location="Unit 2, Ground Floor, Highway Castle, Plot No 5, Amravati Rd, Nagpur, Maharashtra 440023"
          status="Client View"
          statusColor="#4CAF50"
          auditDate="09 August 2024"
          fees="₹ 800"
          reimbursement="₹ 00"
          auditType="Walk In"
          auditTypeColor="#0056F0"
          slug="/reports/details"
        />
      </ScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f4f4f4" },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: hp(2),
    paddingHorizontal: wp(4),
  },
  title: {
    fontSize: hp(1.6),
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    alignItems: "center",
  },

  reportList: {
    paddingHorizontal: wp(4),
    paddingBottom: hp(4),
    paddingTop: hp(3),
    rowGap: hp(4),
  },
});

export default ReportScreen;
