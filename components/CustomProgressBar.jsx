import { hp } from "@/helpers/common";
import { Image, StyleSheet, Text, View } from "react-native";
import Svg, { Circle, Path } from "react-native-svg";

export const CircularProgress = ({
  size = hp(12),
  strokeWidth = 7,
  progress = 65,
  letter = "S",
  color = "#0066FF",
  backgroundColor = "#E8E8E8",
  avatar = null,
}) => {
  const center = size / 2;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const progressStrokeDashoffset =
    circumference - (progress / 100) * circumference;

  const generateArc = () => {
    return `
      M ${center},${strokeWidth / 2}
      A ${radius},${radius} 0 ${progress > 50 ? 1 : 0},1 
      ${center + radius * Math.sin((progress / 100) * 2 * Math.PI)},
      ${center - radius * Math.cos((progress / 100) * 2 * Math.PI)}
    `;
  };

  return (
    <View style={styles.container}>
      <View style={styles.progressContainer}>
        <Svg width={size} height={size}>
          {/* Background Circle */}
          <Circle
            cx={center}
            cy={center}
            r={radius}
            stroke={backgroundColor}
            strokeWidth={strokeWidth}
            fill="none"
          />
          {/* Progress Arc */}
          <Path
            d={generateArc()}
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            fill="none"
          />
        </Svg>

        {/* Center Avatar or Letter */}
        <View
          style={[
            styles.avatarContainer,
            {
              width: size - strokeWidth - 25,
              height: size - strokeWidth - 25,
              backgroundColor: avatar ? "transparent" : "#E91E63",
              borderRadius: (size - strokeWidth) / 2,
              left: strokeWidth / 2 + 13,
              top: strokeWidth / 2 + 13,
            },
          ]}
        >
          {avatar ? (
            <Image source={avatar} style={styles.avatarImage} />
          ) : (
            <Text style={styles.letter}>{letter}</Text>
          )}
        </View>
      </View>
      <Text style={styles.percentage}>{progress}%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  progressContainer: {
    position: "relative",
  },
  avatarContainer: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarImage: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },
  letter: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFF",
  },
  percentage: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: "600",
    color: "#0066FF",
  },
});
