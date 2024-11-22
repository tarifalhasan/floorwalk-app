import { theme } from "@/constants/theme";
import { wp } from "@/helpers/common";
import { StyleSheet, Text, View } from "react-native";
import { scale } from "react-native-size-matters";
import Svg, { Circle, G, Mask, Path } from "react-native-svg";
const CertificationScoreCard = ({ score = 93, maxScore = 100 }) => {
  const progressPercentage = (score / maxScore) * 100; // Calculate the percentage

  return (
    <View style={styles.card}>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={scale(40)}
        height={scale(40)}
        fill="none"
      >
        <Circle cx={13.08} cy={12.299} r={12.29} fill="#ECF6DF" />
        <Mask
          id="a"
          width={21}
          height={21}
          x={12}
          y={9}
          maskUnits="userSpaceOnUse"
          style={{
            maskType: "alpha",
          }}
        >
          <Path fill="#D9D9D9" d="M12.755 9.841h19.664v19.664H12.755z" />
        </Mask>
        <G mask="url(#a)">
          <Path
            fill="#8DC63F"
            d="M16.852 27.047c-.451 0-.837-.16-1.158-.482a1.578 1.578 0 0 1-.481-1.157v-11.47c0-.451.16-.837.481-1.158.321-.32.707-.481 1.158-.481h11.47c.45 0 .837.16 1.157.481.321.321.482.707.482 1.158v11.47c0 .45-.16.836-.482 1.157-.32.321-.706.482-1.157.482h-11.47Zm0-13.11v11.471h11.47v-11.47h-1.639v5.735l-2.048-1.23-2.048 1.23v-5.735h-5.735Z"
          />
        </G>
      </Svg>
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
    fontSize: scale(15),
    color: theme.colors.primary_100,
    fontWeight: "700",
  },
  scoreText: {
    fontSize: scale(15),
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
