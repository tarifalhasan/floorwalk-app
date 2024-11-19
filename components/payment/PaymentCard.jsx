import { theme } from "@/constants/theme";
import { hp, wp } from "@/helpers/common";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const PaymentCard = ({ item }) => {
  return (
    <View key={item.id} style={styles.card}>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <View style={styles.cardRow}>
        <View style={styles.cardColumn}>
          <Text style={styles.label}>Status</Text>
          <View style={styles.statusContainer}>
            <View
              style={[
                styles.statusDot,
                {
                  backgroundColor:
                    item.status === "Paid" ? theme.colors.secondary : "red",
                },
              ]}
            />
            <Text
              style={[
                styles.statusText,
                {
                  color:
                    item.status === "Paid" ? theme.colors.secondary : "red",
                },
              ]}
            >
              {item.status}
            </Text>
          </View>
        </View>
        <View style={styles.cardColumn}>
          <Text style={styles.label}>Audit Type</Text>
          <Text style={styles.valueBlue}>{item.auditType}</Text>
        </View>
      </View>

      <View style={styles.cardRow}>
        <View style={styles.cardColumn}>
          <Text style={styles.label}>Audit Date</Text>
          <Text style={styles.valueBlue}>{item.auditDate}</Text>
        </View>
        <View style={styles.cardColumn}>
          <Text style={styles.label}>Fees</Text>
          <Text style={styles.value}>{item.fees}</Text>
        </View>
      </View>

      <View style={styles.cardRow}>
        <View style={styles.cardColumn}>
          <Text style={styles.label}>Expected Date</Text>
          <Text style={styles.value}>{item.expectedDate}</Text>
        </View>
        <View style={styles.cardColumn}>
          <Text style={styles.label}>Paid on</Text>
          <Text style={styles.value}>{item.paidOn}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.troubleButton}>
        <Text style={styles.troubleButtonText}>Having Trouble?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PaymentCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: theme.redius.lg,
    padding: wp(4),
    marginBottom: hp(2),
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2, // For Android shadow
  },
  cardTitle: {
    fontSize: hp(2.2),
    fontWeight: "bold",
    color: theme.colors.primary_100,
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
    fontSize: hp(1.8),
    color: "#6B7280", // Neutral Gray
    marginBottom: hp(0.5),
    fontWeight: "600",
  },
  value: {
    fontSize: hp(1.8),
    color: theme.colors.primary_100,
    fontWeight: "500",
  },
  valueBlue: {
    fontSize: hp(1.8),
    color: theme.colors.primary,
    fontWeight: "500",
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  statusDot: {
    width: wp(2),
    height: wp(2),
    borderRadius: wp(1),
    marginRight: wp(2),
  },
  statusText: {
    fontSize: hp(1.8),
    fontWeight: "600",
  },
  troubleButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    paddingVertical: hp(1.8),
    alignItems: "center",
    marginTop: hp(1.5),
  },
  troubleButtonText: {
    color: "white",
    fontSize: hp(2),
    fontWeight: "600",
  },
});
