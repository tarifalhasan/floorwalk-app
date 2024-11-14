import { theme } from "@/constants/theme";
import { hp, wp } from "@/helpers/common";
import { Image, StyleSheet, Text, View } from "react-native";

const CertificationScoreCard = ({ score = 93, maxScore = 100 }) => {
  const progressPercentage = (score / maxScore) * 100; // Calculate the percentage

  return (
    <View style={styles.card}>
      <Image
        style={{
          width: hp(6),
          height: hp(6),
        }}
        source={require("@/assets/icons/docs.png")}
      />
      <Text style={styles.title}>Certification Score</Text>
      <Text style={styles.scoreText}>{`${score}/${maxScore}`}</Text>
      <View style={styles.progressContainer}>
        <View
          style={[styles.filledProgress, { width: `${progressPercentage}%` }]}
        />
        <View style={styles.emptyProgress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: "#FAFAFA",
    borderRadius: 12,
    padding: wp(2),
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    flex: 1,
  },
  iconContainer: {
    backgroundColor: "#E9F7E4",
    borderRadius: 20,
    padding: 8,
    marginBottom: 8,
  },
  title: {
    fontSize: hp(2),
    color: theme.colors.primary_100,
    fontWeight: "600",
    paddingVertical: hp(1.2),
  },
  scoreText: {
    fontSize: hp(1.4),
    color: "#A3C14A",
    fontWeight: "bold",
    marginBottom: 8,
  },
  progressContainer: {
    width: "80%",
    height: 8,
    flexDirection: "row",
    backgroundColor: "#E0E0E0",
    borderRadius: 10,
    overflow: "hidden",
    marginTop: 4,
  },
  filledProgress: {
    height: "100%",
    backgroundColor: "#A3C14A",
    borderRadius: 10,
  },
  emptyProgress: {
    flex: 1, // Fills the remaining space
  },
});

export default CertificationScoreCard;
