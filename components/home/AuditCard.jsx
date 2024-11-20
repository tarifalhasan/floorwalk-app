import { theme } from "@/constants/theme";
import { hp, wp } from "@/helpers/common";
import { Link } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

// Reusable Card Component
const AuditCard = ({
  logo,
  title,
  subtitle,
  auditType,
  earnings,
  reimbursement,
  slug,
}) => {
  return (
    <View style={styles.card}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={{ uri: logo }} style={styles.logo} resizeMode="cover" />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </View>

      {/* Audit Type */}
      <View style={styles.row}>
        <Text style={styles.earningsTitle}>Audit Type</Text>
        <Text
          style={[
            styles.value,
            {
              backgroundColor: "rgba(75, 107, 251, 0.05)",
              padding: 3,
            },
          ]}
        >
          {auditType}
        </Text>
      </View>

      {/* Earnings Section */}
      <View style={styles.earningsSection}>
        <Text style={styles.earningsTitle}>Earnings</Text>
        <View style={styles.earningsRow}>
          <Text style={styles.earningsLabel}>Earnings</Text>
          <Text style={styles.earningsValue}>₹ {earnings}</Text>
        </View>
        <View style={styles.earningsRow}>
          <Text style={styles.earningsLabel}>Reimbursement</Text>
          <Text style={styles.earningsValue}>₹ {reimbursement}</Text>
        </View>
      </View>

      {/* Button */}
      <Link asChild href={`/home/audit/${slug}`}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}> View Opportunities</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default AuditCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: wp(4),
    padding: wp(4),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    margin: wp(2),
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: hp(2),
  },
  logo: {
    width: wp(40),
    height: hp(12),
  },
  titleContainer: {
    marginLeft: wp(3),
  },
  title: {
    fontSize: wp(4.5),
    fontWeight: "600",
    color: "#003366",
  },
  subtitle: {
    fontSize: wp(4),
    color: "#003366",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: hp(2),
  },
  label: {
    fontSize: wp(3.8),
    color: "#97989F",
  },
  value: {
    fontSize: wp(3.8),
    color: theme.colors.primary,
  },
  earningsSection: {
    marginBottom: hp(2),
  },
  earningsTitle: {
    fontSize: wp(4.8),
    color: "#003C5D",
    marginBottom: hp(1),
    fontWeight: "700",
  },
  earningsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: hp(0.5),
  },
  earningsLabel: {
    fontSize: wp(3.8),
    color: "#97989F",
  },
  earningsValue: {
    fontSize: wp(3.8),
    color: "#97989F",
  },
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: wp(1.5),
    paddingVertical: hp(1.5),
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: wp(3.8),
    fontWeight: "500",
  },
});
