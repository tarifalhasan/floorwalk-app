import { FilterMenu } from "@/components/FilterMenu";
import Header from "@/components/Header";
import PaymentCard from "@/components/payment/PaymentCard";
import ScreenWrapper from "@/components/ScreenWrapper";
import { theme } from "@/constants/theme";
import { hp, wp } from "@/helpers/common";
import { Ionicons } from "@expo/vector-icons";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function PaymentScreen() {
  const overviewData = [
    { label: "Total Audits Conducted", value: "800" },
    { label: "Total Fee Payments Transferred", value: "Rs. 46064" },
    { label: "Total Fee Payments Transferred", value: "Rs. 46064" },
    { label: "Total Fee Payments Transferred", value: "Rs. 46064" },
  ];

  const paymentData = [
    {
      id: "1",
      title: "FloorWalk",
      status: "Paid",
      auditType: "Walk In",
      auditDate: "09 August 2024",
      fees: "₹ 800",
      expectedDate: "09 August 2024",
      paidOn: "09 August 2024",
    },
    {
      id: "2",
      title: "Inspection",
      status: "Pending",
      auditType: "Field Visit",
      auditDate: "10 August 2024",
      fees: "₹ 500",
      expectedDate: "12 August 2024",
      paidOn: "N/A",
    },
    {
      id: "3",
      title: "Survey Report",
      status: "Paid",
      auditType: "Online Submission",
      auditDate: "11 August 2024",
      fees: "₹ 1000",
      expectedDate: "11 August 2024",
      paidOn: "11 August 2024",
    },
  ];

  const RenderOverviewItem = ({ item }) => (
    <View style={[styles.overviewBox]}>
      <Text style={styles.overviewLabel}>{item.label}</Text>
      <Text style={styles.overviewValue}>{item.value}</Text>
    </View>
  );

  return (
    <ScreenWrapper bg="#fff" style={styles.container}>
      {/* Header */}
      <Header />

      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        {/* Payment Overview */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Payment Overview</Text>

          <FlatList
            data={overviewData}
            renderItem={({ item }) => <RenderOverviewItem item={item} />}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View
          style={{
            paddingHorizontal: wp(4),
            rowGap: hp(1.6),
            paddingTop: hp(1.6),
            flex: 1,
          }}
        >
          <Text style={styles.sectionTitle}>Detailed Payment </Text>
          {/* Search Bar */}

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: hp(2),
            }}
          >
            <View style={[styles.searchContainer]}>
              <TextInput
                placeholder="Search Audits"
                placeholderTextColor="#A0A3A8"
                style={styles.searchInput}
              />
              <TouchableOpacity style={styles.searchButton}>
                <Ionicons name="search-outline" size={24} color="#fff" />
              </TouchableOpacity>
            </View>
            {/* <TouchableOpacity style={styles.filterButton}>
              <Ionicons name="filter" size={24} color={theme.colors.primary} />
            </TouchableOpacity> */}
            <FilterMenu />
          </View>

          {paymentData.map((item) => (
            <PaymentCard key={item.id} item={item} />
          ))}
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  section: {
    marginTop: hp(2),
    paddingHorizontal: wp(4),
  },
  sectionTitle: {
    marginBottom: hp(1),
    fontSize: hp(2.3),
    fontWeight: "700",
    color: theme.colors.primary_100,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 6,
    overflow: "hidden",
    flex: 1,
    borderColor: "#9CA3AF",
    borderWidth: 1,
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: wp(4),
    height: hp(6.5),
    fontSize: hp(1.8),
    color: "#353E4C",
  },
  searchButton: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: wp(3),
    backgroundColor: theme.colors.primary,
    height: hp(6.5),
  },
  filterButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: theme.redius.md,
    padding: wp(3),
    marginLeft: wp(2),
  },

  overviewContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: theme.redius.md,
    overflow: "hidden",
  },
  overviewBox: {
    borderRadius: 16,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.06,
    shadowRadius: 55,
    elevation: 4,
    marginVertical: 10,
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
    gap: wp(0.6),
    alignItems: "flex-start",
    marginHorizontal: wp(2),
    maxWidth: 210,
  },

  borderLeft: {
    borderLeftWidth: 1,
    borderLeftColor: "#E5E7EB",
  },
  overviewLabel: {
    marginBottom: hp(0.5),
    fontSize: hp(1.9),
    fontWeight: "700",
    color: theme.colors.primary_100,
  },
  overviewValue: {
    color: theme.colors.primary,
    fontSize: hp(1.8),
    fontWeight: "700",
  },

  card: {
    backgroundColor: "white",
    borderRadius: theme.redius.lg,
    padding: wp(4),
    marginBottom: hp(2),
  },
  cardTitle: {
    marginBottom: hp(2),
  },
  cardRow: {
    flexDirection: "row",
    marginBottom: hp(2),
  },
  cardColumn: {
    flex: 1,
  },
  label: {
    marginBottom: hp(0.5),
  },
  value: {
    color: theme.colors.primary_100,
  },
  valueBlue: {
    color: theme.colors.primary,
  },
  troubleButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.redius.md,
    padding: hp(1.5),
    alignItems: "center",
  },
  troubleButtonText: {
    color: "white",
    fontWeight: theme.fonts.medium,
  },
});
