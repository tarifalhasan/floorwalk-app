import { theme } from "@/constants/theme";
import { hp, wp } from "@/helpers/common";
import { FontAwesome } from "@expo/vector-icons";
import { Image, StyleSheet, Text, View } from "react-native";

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
      <Image
        style={{
          width: hp(6),
          height: hp(6),
        }}
        source={require("@/assets/icons/stars.png")}
      />
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
    padding: wp(2),
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  title: {
    fontSize: hp(2),
    color: theme.colors.primary_100,
    fontWeight: "600",
    paddingVertical: hp(1.2),
  },
  ratting_text: {
    fontSize: hp(1.4),
    color: "#FCE301",
    fontWeight: "bold",
    marginBottom: 8,
  },
  rattingCountContainer: {
    flexDirection: "row", // Ensure stars are displayed in a row
    marginTop: 4,
  },
});
