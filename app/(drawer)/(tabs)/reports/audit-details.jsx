import ScreenWrapper from "@/components/ScreenWrapper";
import { theme } from "@/constants/theme";
import { hp, wp } from "@/helpers/common";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { Stack, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function AuditDetails() {
  const router = useRouter();
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

      <View style={{ flex: 1 }}>
        <ScrollView style={styles.content}>
          <Text style={styles.sectionTitle}>Audit Details</Text>
          <View style={styles.detailsContainer}>
            <View style={styles.row}>
              <Text style={styles.label}>Store Name</Text>
              <Text style={styles.value}>SHOTT- Mumbai</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.label}>Audit Type</Text>
              <Text style={styles.valueBlue}>Walk In</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.label}>Status</Text>
              <View style={styles.statusContainer}>
                <View style={styles.statusDot} />
                <Text style={styles.statusText}>Client View</Text>
              </View>
            </View>

            <View style={styles.row}>
              <Text style={styles.label}>Fee</Text>
              <Text style={styles.value}>₹800</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.label}>Reimbursement up to</Text>
              <Text style={styles.value}>₹00</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.label}>Audit Date</Text>
              <Text style={styles.value}>21st Jun 2024</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.label}>Store Address</Text>
              <Text style={styles.value} numberOfLines={3}>
                Shott- 4th Floor, Crystal Point Mall, New Link Rd, Sahayog
                Nagar, Bhudargarh Colony, Andheri West, Mumbai, Maharashtra
                400053
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
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
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
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
  },
  detailsContainer: {
    paddingHorizontal: wp(4),
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: hp(2),
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  label: {
    fontSize: hp(1.9),
    color: "#333",
    flex: 1,
  },
  value: {
    fontSize: hp(1.9),
    color: "#666",
    flex: 1,
    textAlign: "right",
  },
  valueBlue: {
    fontSize: hp(1.9),
    color: theme.colors.primary,
    flex: 1,
    textAlign: "right",
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 1,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#16A34A",
    marginRight: 6,
  },
  statusText: {
    fontSize: 14,
    color: "#16A34A",
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
