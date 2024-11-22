import ScreenWrapper from "@/components/ScreenWrapper";
import { theme } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width: deviceWidth, height: deviceHeight } = Dimensions.get("window");

const hp = (percentage) => {
  return (percentage * deviceHeight) / 100;
};

const wp = (percentage) => {
  return (percentage * deviceWidth) / 100;
};

const AuditCard = ({
  storeName,
  storeLocation,
  earnings,
  reimbursement,
  isWaitlist,
  onApply,
}) => (
  <View style={styles.card}>
    <View style={styles.cardDivider} />
    <Text style={styles.cardTitle}>Audit Details</Text>

    <View style={styles.cardSection}>
      <Text style={styles.sectionTitle}>Store Name</Text>
      <Text style={styles.sectionText}>{storeName}</Text>
    </View>

    <View style={styles.cardSection}>
      <Text style={styles.sectionTitle}>Store Location</Text>
      <Text style={styles.sectionText}>{storeLocation}</Text>
    </View>

    <View style={styles.cardSection}>
      <Text style={styles.sectionTitle}>Audit Type</Text>
      <Text style={styles.blueText}>Walk In</Text>
    </View>

    <View style={styles.cardSection}>
      <Text style={styles.sectionTitle}>Earnings</Text>
      <View>
        <View style={styles.earningsRow}>
          <Text style={styles.earningsLabel}>Earnings</Text>
          <Text style={styles.earningsValue}>₹ {earnings}</Text>
        </View>
        <View style={styles.earningsRow}>
          <Text style={styles.earningsLabel}>Reimbursement</Text>
          <Text style={styles.earningsValue}>₹ {reimbursement}</Text>
        </View>
      </View>
    </View>

    {isWaitlist ? (
      <View style={styles.waitlistContainer}>
        <View style={styles.waitlistBadge}>
          <Ionicons name="star" size={wp(3)} color="#FFB800" />
          <Text style={styles.waitlistText}>Waitlist</Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="trash-outline" size={wp(6)} color="#4B5563" />
        </TouchableOpacity>
      </View>
    ) : (
      <TouchableOpacity style={styles.applyButton} onPress={onApply}>
        <Text style={styles.applyButtonText}>Apply Now</Text>
      </TouchableOpacity>
    )}
  </View>
);

export default function Component() {
  const router = useRouter();
  return (
    <ScreenWrapper bg="#fff">
      <StatusBar style="dark" />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Ionicons name="chevron-back" size={wp(6)} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Audits</Text>
        <TouchableOpacity style={styles.menuButton}>
          <Ionicons name="menu" size={wp(6)} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.titleContainer}>
          <Text style={styles.mainTitle}>Nibav Home Lifts Audits</Text>
          <Ionicons name="shield-outline" size={wp(6)} color="#4B5563" />
        </View>

        <View
          style={{
            paddingHorizontal: wp(4),
          }}
        >
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1731243800945-ab7adfde9b8a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
            style={styles.logo}
            resizeMode="cover"
          />
        </View>
        <View
          style={{
            paddingHorizontal: wp(4),
          }}
        >
          <View style={styles.eligibilitySection}>
            <Text style={styles.blueText}>Eligibility</Text>
            <Text style={styles.subTitle}>Audit Brief</Text>
            <Text style={styles.briefText}>
              Less than 3600 ₹, 3600 ₹ - 6000 ₹, 6000 ₹ - 12000 ₹, 12000 ₹ -
              18000 ₹, 18000 ₹ and above
            </Text>

            <Text style={styles.subTitle}>Occupation</Text>
            <Text style={styles.briefText}>
              SERVICE, SELF_EMPLOYED, BUSINESS, RETIRED,
            </Text>

            <Text style={styles.subTitle}>Date availability</Text>
            <Text style={styles.briefText}>30-09-2024 - 31-10-2024</Text>

            <Text style={styles.subTitle}>Auditor age range</Text>
            <Text style={styles.briefText}>25-65</Text>
          </View>
        </View>

        <View style={styles.briefSection}>
          <Text style={styles.subTitle}>Audit Brief</Text>
          <Text style={styles.briefText}>
            This is a non-purchase Walk-in audit at the assigned Showroom which
            offers high-quality customized Homelifts.
          </Text>
        </View>

        <View style={styles.objectiveSection}>
          <Text style={styles.subTitle}>The Main Objective of the Audit</Text>
          <Text style={styles.briefText}>
            To check the overall consumer experience during the visit
          </Text>
        </View>

        <View style={styles.typeSection}>
          <Text style={styles.sectionTitle}>Audit Type</Text>
          <Text style={styles.blueText}>Walk In</Text>
        </View>

        <View style={styles.earningsSection}>
          <Text style={styles.sectionTitle}>Earnings</Text>
          <View style={styles.earningsRow}>
            <Text style={styles.earningsLabel}>Earnings</Text>
            <Text style={styles.earningsValue}>₹ 800</Text>
          </View>
          <View style={styles.earningsRow}>
            <Text style={styles.earningsLabel}>Reimbursement</Text>
            <Text style={styles.earningsValue}>₹ 00</Text>
          </View>
        </View>

        <AuditCard
          storeName="Nagpur ECO - ELITE, Nagpur"
          storeLocation="Unit 2, Ground Floor, Highway Castle, Plot No 5, Amravati Rd, Nagpur, Maharashtra 440023"
          earnings="800"
          reimbursement="00"
        />

        <AuditCard
          storeName="Nagpur ECO - ELITE, Nagpur"
          storeLocation="Unit 2, Ground Floor, Highway Castle, Plot No 5, Amravati Rd, Nagpur, Maharashtra 440023"
          earnings="800"
          reimbursement="00"
          isWaitlist
        />
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
    paddingHorizontal: wp(4),
    paddingVertical: hp(1.5),
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  },
  backButton: {
    padding: wp(1),
  },
  menuButton: {
    padding: wp(1),
  },
  headerTitle: {
    fontSize: wp(4.5),
    fontWeight: "600",
    flex: 1,
    textAlign: "center",
  },
  content: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: hp(2),
    paddingHorizontal: wp(4),
    paddingTop: hp(2),
  },
  mainTitle: {
    fontSize: wp(5),
    fontWeight: "600",
    color: theme.colors.primary_100,
  },
  logo: {
    width: "100%",
    height: hp(15),
    marginBottom: hp(2),
    resizeMode: "cover",
  },
  eligibilitySection: {
    backgroundColor: "#F5F9FF",
    padding: wp(4),
    borderRadius: wp(2),
    marginBottom: hp(2),
  },
  blueText: {
    color: "#007AFF",
    fontSize: wp(3.8),
    fontWeight: "500",
    marginBottom: hp(1),
  },
  subTitle: {
    fontSize: wp(3.8),
    fontWeight: "600",
    color: "#333",
    marginTop: hp(1.5),
    marginBottom: hp(0.5),
  },
  briefText: {
    fontSize: wp(3.5),
    color: "#4B5563",
    lineHeight: wp(5),
  },
  briefSection: {
    marginBottom: hp(2),
    paddingHorizontal: wp(4),
  },
  objectiveSection: {
    marginBottom: hp(2),
    paddingHorizontal: wp(4),
  },
  typeSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: hp(2),
    paddingHorizontal: wp(4),
  },
  earningsSection: {
    marginBottom: hp(2),
    paddingHorizontal: wp(4),
  },
  sectionTitle: {
    fontSize: wp(3.8),
    color: "#003C5D",
    marginBottom: hp(0.5),
    fontWeight: "600",
  },
  earningsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: hp(0.5),
  },
  earningsLabel: {
    fontSize: wp(3.5),
    color: "#4B5563",
  },
  earningsValue: {
    fontSize: wp(3.5),
    color: "#4B5563",
  },
  card: {
    backgroundColor: "#FFF",
    borderRadius: wp(2),
    padding: wp(4),
    marginBottom: hp(2),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginHorizontal: wp(4),
  },
  cardDivider: {
    height: hp(0.5),
    backgroundColor: theme.colors.primary,
    width: "100%",
    marginBottom: hp(2),
    borderRadius: wp(0.5),
  },
  cardTitle: {
    fontSize: wp(4),
    fontWeight: "600",
    color: "#333",
    marginBottom: hp(2),
  },
  cardSection: {
    marginBottom: hp(2),
  },
  sectionText: {
    fontSize: wp(3.5),
    color: "#333",
    lineHeight: wp(5),
  },
  applyButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: wp(1.5),
    paddingVertical: hp(1.5),
    alignItems: "center",
  },
  applyButtonText: {
    color: "#FFF",
    fontSize: wp(3.8),
    fontWeight: "500",
  },
  waitlistContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  waitlistBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF9E6",
    paddingHorizontal: wp(3),
    paddingVertical: hp(0.8),
    borderRadius: wp(4),
  },
  waitlistText: {
    color: "#FFB800",
    fontSize: wp(3.5),
    fontWeight: "500",
    marginLeft: wp(1),
  },
});
