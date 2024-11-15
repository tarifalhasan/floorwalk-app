import { theme } from "@/constants/theme";
import { hp, wp } from "@/helpers/common";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const AuditCard = ({
  logoUrl,
  title,
  auditType,
  earnings,
  reimbursement,
  opportunities,
  onViewOpportunities,
}) => {
  return (
    <View style={styles.auditCard}>
      {/* Audit Information */}
      <View style={styles.auditInfo}>
        <View style={styles.auditInfo_content}>
          {/* Logo */}
          {logoUrl && (
            <Image
              source={{ uri: logoUrl }}
              style={styles.auditLogo}
              resizeMode="cover"
            />
          )}
          <Text style={styles.auditTitle}>{title}</Text>
        </View>

        <View style={styles.auditDetailRow}>
          <Text style={styles.auditLabel}>Audit Type</Text>
          <Text style={styles.auditValue}>{auditType}</Text>
        </View>
        <View style={styles.auditDetailRow}>
          <Text style={styles.auditLabel}>Earnings</Text>
          <Text style={styles.auditValue}>₹ {earnings}</Text>
        </View>
        <View style={styles.auditDetailRow}>
          <Text style={styles.auditLabel}>Reimbursement</Text>
          <Text style={styles.auditValue}>₹ {reimbursement}</Text>
        </View>
      </View>

      {/* View Opportunities Button */}
      <TouchableOpacity
        style={styles.viewOpportunitiesButton}
        onPress={onViewOpportunities}
      >
        <Text style={styles.viewOpportunitiesText}>
          View {opportunities} Opportunities
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  auditCard: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
    alignItems: "center",
    marginBottom: 20,
    flex: 1,
  },
  auditInfo_content: {
    flexDirection: "row",
    alignItems: "center",
    gap: wp(2),
  },
  auditLogo: {
    width: hp(16),
    height: hp(12),
    resizeMode: "contain",
    marginBottom: 15,
  },
  auditInfo: { width: "100%", marginBottom: 20 },
  auditTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#003366",
  },
  auditDetailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  auditLabel: {
    fontSize: hp(2),
    color: theme.colors.primary_100,
    fontWeight: "600",
  },
  auditValue: {
    fontSize: hp(2),
    color: theme.colors.primary,
    fontWeight: "500",
    backgroundColor: "rgba(75, 107, 251, 0.05)",
    padding: 4,
    borderRadius: 4,
  },
  viewOpportunitiesButton: {
    backgroundColor: theme.colors.primary_100,
    paddingVertical: hp(2.1),
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    width: "100%",
  },
  viewOpportunitiesText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: hp(1.8),
  },
});

export default AuditCard;
