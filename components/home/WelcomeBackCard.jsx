import { theme } from "@/constants/theme";
import { hp, wp } from "@/helpers/common";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CircularProgress } from "../CustomProgressBar";

const WelcomeBackCard = () => {
  return (
    <View style={styles.container}>
      <CircularProgress progress={50} />
      <View style={styles.textContainer}>
        <Text style={styles.welcomeText}>Welcome back</Text>
        <Text style={styles.nameText}>Pooja Satfale</Text>
        <Text style={styles.emailText}>poojasatfale@gmail.com</Text>
        <Text style={styles.pendingDetailsText}>2 Pending details</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Complete Your Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.06,
    shadowRadius: 55,
    elevation: 4,
    flexDirection: "row",
    margin: 10,
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
    gap: wp(4),
    alignItems: "flex-start",
  },
  progressCircle: {
    // You can adjust styles for the progress circle here if needed
  },
  circleInner: {
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#f5f5f5",
  },
  initial: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
  },
  textContainer: {
    gap: 2,
    flex: 1,
  },
  welcomeText: {
    fontSize: hp(2),
    fontWeight: "bold",
    color: theme.colors.primary_100,
  },
  nameText: {
    fontSize: hp(1.8),
    fontWeight: "600",
    color: theme.colors.primary_100,
  },
  emailText: {
    fontSize: hp(1.5),
    color: theme.colors.neutral_600,
    marginTop: 2,
  },
  pendingDetailsText: {
    fontSize: hp(1.5),
    color: theme.colors.primary_600,
    marginTop: 4,
    fontWeight: theme.fonts.bold,
  },
  button: {
    backgroundColor: "transparent",
    paddingVertical: hp(1.4),
    paddingHorizontal: 15,
    borderRadius: 6,
    marginTop: 10,
    borderWidth: 1,
    borderColor: theme.colors.primary,
  },
  buttonText: {
    color: theme.colors.primary,
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default WelcomeBackCard;
