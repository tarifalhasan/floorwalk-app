import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";

// Example payment methods data
const paymentMethods = [
  {
    id: "1",
    name: "Credit Card",
    icon: () => (
      <MaterialIcons name="credit-card" size={scale(24)} color="#003366" />
    ),
  },
  {
    id: "2",
    name: "PayPal",
    icon: () => <FontAwesome5 name="paypal" size={scale(24)} color="#003366" />,
  },
  {
    id: "3",
    name: "Google Pay",
    icon: () => (
      <FontAwesome5 name="google-wallet" size={scale(24)} color="#003366" />
    ),
  },
];

const PaymentDetails = () => (
  <View style={styles.paymentDetails}>
    <Text style={styles.sectionTitle}>Payment Methods</Text>
    {paymentMethods.map((method) => (
      <View key={method.id} style={styles.paymentMethod}>
        {method.icon()}
        <Text style={styles.paymentName}>{method.name}</Text>
      </View>
    ))}
  </View>
);

const styles = StyleSheet.create({
  paymentDetails: {
    marginBottom: verticalScale(10),
    padding: scale(10),
    backgroundColor: "#f9f9f9",
    borderRadius: scale(5),
  },
  sectionTitle: {
    fontSize: scale(14),
    fontWeight: "600",
    color: "#003366",
    marginBottom: verticalScale(10),
  },
  paymentMethod: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: verticalScale(8),
  },
  paymentName: {
    fontSize: scale(12),
    color: "#003366",
    marginLeft: scale(10),
  },
});

export default PaymentDetails;
