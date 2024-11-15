import { theme } from "@/constants/theme";
import { hp } from "@/helpers/common";
import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ReportCard({
  title,
  progress,
  location,
  status,
  statusColor,
  auditDate,
  fees,
  reimbursement,
  auditType,
  auditTypeColor = theme.colors.primary,
  slug,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{title}</Text>

        {/* Progress Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Report Completion %</Text>
          <Text style={styles.progress_text}>{progress}/100</Text>
          <View style={styles.progressContainer}>
            <View style={[styles.progressBar, { width: `${progress}%` }]} />
            <Text style={styles.progressText}>{progress}/100</Text>
          </View>
        </View>

        {/* Location Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Location</Text>
          <Text style={styles.address}>{location}</Text>
        </View>

        {/* Status Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Status</Text>
          <View style={styles.statusContainer}>
            <View
              style={[styles.statusDot, { backgroundColor: statusColor }]}
            />
            <Text style={[styles.statusText, { color: statusColor }]}>
              {status}
            </Text>
          </View>
        </View>

        {/* Info Grid */}
        <View style={styles.grid}>
          <View style={styles.gridItem}>
            <Text style={styles.gridLabel}>Audit Date</Text>
            <Text style={styles.gridValue}>{auditDate}</Text>
          </View>
          <View style={styles.gridItem}>
            <Text style={styles.gridLabel}>Fees</Text>
            <Text style={styles.gridValue}>{fees}</Text>
          </View>
          <View style={styles.gridItem}>
            <Text style={styles.gridLabel}>Reimbursement Up To</Text>
            <Text style={styles.gridValue}>{reimbursement}</Text>
          </View>
          <View style={styles.gridItem}>
            <Text style={styles.gridLabel}>Audit Type</Text>
            <Text style={[styles.gridValue, { color: auditTypeColor }]}>
              {auditType}
            </Text>
          </View>
        </View>

        {/* View More Button */}
        <Link href={slug || "/home"} asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>View More</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: hp(2),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: hp(2.4),
    fontWeight: "700",
    color: theme.colors.primary_100,
    marginBottom: hp(2),
  },
  section: {
    marginBottom: hp(2),
  },
  sectionTitle: {
    fontSize: hp(2.4),
    color: theme.colors.primary_100,
    marginBottom: 8,
    fontWeight: "600",
  },
  progress_text: {
    fontSize: hp(1.6),
    fontWeight: "800",
    color: theme.colors.secondary,
    marginBottom: hp(1),
  },
  progressContainer: {
    height: 8,
    backgroundColor: "#e0e0e0",
    borderRadius: 4,
    overflow: "hidden",
    marginBottom: 4,
  },
  progressBar: {
    height: "100%",
    backgroundColor: theme.colors.secondary,
    borderRadius: 4,
  },
  progressText: {
    fontSize: 12,
    color: "#666",
  },
  address: {
    fontSize: hp(1.7),
    color: theme.colors.neutral_600,
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 8,
  },
  statusText: {
    fontSize: hp(1.7),
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: -8,
    marginBottom: hp(2),
  },
  gridItem: {
    width: "50%",
    paddingHorizontal: 8,
    marginBottom: hp(2),
  },
  gridLabel: {
    fontSize: hp(1.8),
    color: "#003C5D",
    marginBottom: 4,
    fontWeight: "700",
  },
  gridValue: {
    fontSize: hp(1.5),
    color: theme.colors.primary,
    fontWeight: "500",
    backgroundColor: "rgba(75, 107, 251, 0.05)",
    padding: 3,
    borderRadius: 4.392,
    width: "auto",
  },
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    padding: 14,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: hp(2),
    fontWeight: "600",
  },
});
