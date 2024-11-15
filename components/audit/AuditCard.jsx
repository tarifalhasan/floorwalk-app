import { theme } from "@/constants/theme";
import { hp, wp } from "@/helpers/common";
import { Feather } from "@expo/vector-icons";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const AuditCard = ({ logoUrl, title, auditDate, status, onReApply }) => {
  const getStatusStyle = () => {
    switch (status) {
      case "Rejected":
        return styles.auditRejectedStatus;
      case "Waited List":
        return styles.waitedListStatusStatus;
      default:
        return styles.defaultStatus;
    }
  };

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
          <Text style={styles.auditLabel}>Audit Date</Text>
          <Text style={styles.auditValue}>{auditDate}</Text>
        </View>
        <View style={styles.auditDetailRow}>
          <Text style={styles.auditLabel}>Status</Text>
          <View style={getStatusStyle()}>
            <View
              style={{
                width: 8,
                height: 8,
                borderRadius: 1000,
                backgroundColor:
                  status === "Rejected" ? "#4B5563" : theme.colors.warning_200,
              }}
            ></View>
            <Text
              style={{
                color:
                  status === "Rejected" ? "#4B5563" : theme.colors.warning_200,
                fontSize: hp(1.5),
                fontWeight: "400",
              }}
            >
              {status}
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: wp(2),
          flex: 1,
        }}
      >
        <TouchableOpacity
          onPress={onReApply}
          style={[
            {
              flex: 1,
            },
            styles.viewOpportunitiesButton,
          ]}
        >
          <Text style={styles.viewOpportunitiesText}>Re Apply</Text>
        </TouchableOpacity>
        {status === "Rejected" && (
          <TouchableOpacity>
            <Feather name="trash" size={24} color="#9CA3AF" />
          </TouchableOpacity>
        )}
      </View>
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
  auditRejectedStatus: {
    paddingHorizontal: hp(2),
    paddingVertical: 4,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F4F6",
    gap: 7,
    borderRadius: 10000,
  },
  waitedListStatusStatus: {
    paddingHorizontal: hp(2),
    paddingVertical: 4,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FEFCE8",
    gap: 7,
    borderRadius: 10000,
  },

  rejectedStatus: {
    backgroundColor: "#e74c3c", // Red for Rejected
  },
  waitedListStatus: {
    backgroundColor: "#f1c40f", // Yellow for Waited List
  },
  defaultStatus: {
    backgroundColor: "#ccc", // Gray for Default
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
    backgroundColor: theme.colors.primary,
    paddingVertical: hp(1.8),
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
