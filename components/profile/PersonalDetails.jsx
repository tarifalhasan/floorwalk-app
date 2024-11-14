import { theme } from "@/constants/theme";
import { hp } from "@/helpers/common";
import { StyleSheet, Text, View } from "react-native";

const PersonalDetails = ({ details }) => (
  <View style={styles.personalDetails}>
    <Text style={styles.sectionTitle}>About</Text>
    {details.map((detail, index) => (
      <View key={index} style={styles.detailRow}>
        <Text style={styles.detailLabel}>{detail.label}</Text>
        <Text style={styles.detailValue}>{detail.value}</Text>
      </View>
    ))}
  </View>
);

const styles = StyleSheet.create({
  personalDetails: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: hp(2),
    fontWeight: "bold",
    color: theme.colors.primary_100,
    marginBottom: 8,
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  detailLabel: {
    fontSize: hp(1.8),
    color: "#666",
  },
  detailValue: {
    fontSize: hp(1.8),
    color: theme.colors.primary_100,
  },
});

export default PersonalDetails;
