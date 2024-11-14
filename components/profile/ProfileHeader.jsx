import { theme } from "@/constants/theme";
import { hp, wp } from "@/helpers/common";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

const ProfileHeader = ({ onBack, onMenu }) => (
  <View style={styles.header}>
    <Ionicons name="chevron-back" size={24} color="#003366" onPress={onBack} />
    <Text style={styles.headerTitle}>Profile</Text>
    <Ionicons name="menu" size={24} color="#003366" onPress={onMenu} />
  </View>
);

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: wp(4),
    paddingBottom: hp(2),
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  headerTitle: {
    fontSize: hp(2.4),
    fontWeight: "bold",
    color: theme.colors.primary_100,
  },
});

export default ProfileHeader;
