import { theme } from "@/constants/theme";
import { hp } from "@/helpers/common";
import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { scale } from "react-native-size-matters";
import Svg, { Circle, G, Mask, Path } from "react-native-svg";
const AuditRating = ({ rating = 4.5 }) => {
  const maxRating = 5; // Max number of stars

  // Function to generate an array of stars
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= maxRating; i++) {
      stars.push(
        <FontAwesome
          key={i}
          name={i <= rating ? "star" : "star-o"} // Solid star if rating is higher or equal to the current index, otherwise outline
          size={hp(2.5)} // Adjust size as needed
          color="#FCE301" // Color for the stars
        />
      );
    }
    return stars;
  };

  return (
    <View style={styles.card}>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={scale(30)}
        height={scale(30)}
        fill="none"
      >
        <Circle cx={13.08} cy={13.242} r={12.29} fill="#FFFAD2" />
        <Mask
          id="a"
          width={21}
          height={21}
          x={12}
          y={10}
          maskUnits="userSpaceOnUse"
          style={{
            maskType: "alpha",
          }}
        >
          <Path fill="#D9D9D9" d="M12.755 10.784h19.664v19.664H12.755z" />
        </Mask>
        <G mask="url(#a)">
          <Path
            fill="#FCE301"
            d="M22.587 17.257v4.834l1.966 1.516-.737-2.5 1.843-1.31h-2.294l-.778-2.54Zm-5.06 10.733 1.905-6.227-5.038-3.605h6.226l1.967-6.555 1.966 6.555h6.227l-5.039 3.605 1.905 6.227-5.06-3.85-5.058 3.85Z"
          />
        </G>
      </Svg>
      <Text style={styles.title}>Audit Rating</Text>
      <View>
        <Text style={styles.ratting_text}>
          {rating}
          <Text>/5</Text>
        </Text>
        <View style={styles.rattingCountContainer}>{renderStars()}</View>
      </View>
    </View>
  );
};

export default AuditRating;

const styles = StyleSheet.create({
  card: {
    width: "100%",
    flex: 1,
    backgroundColor: "#FAFAFA",
    borderRadius: 12,
    padding: scale(10),
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  title: {
    fontSize: scale(15),
    color: theme.colors.primary_100,
    fontWeight: "700",
    paddingVertical: hp(1.2),
  },
  ratting_text: {
    fontSize: scale(15),
    color: "#FCE301",
    fontWeight: "bold",
    marginBottom: 8,
  },
  rattingCountContainer: {
    flexDirection: "row", // Ensure stars are displayed in a row
    marginTop: 4,
  },
});
