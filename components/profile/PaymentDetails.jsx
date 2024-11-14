import { StyleSheet, Text, View } from "react-native";

const PaymentDetails = () => (
  <View style={styles.paymentDetails}>
    <Text style={styles.sectionTitle}>Payment Methods</Text>
    {/* Add content for payment details here */}
  </View>
);

const styles = StyleSheet.create({
  paymentDetails: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#003366",
    marginBottom: 8,
  },
});

export default PaymentDetails;
