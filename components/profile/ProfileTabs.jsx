import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ProfileTabs = ({ activeTab, onTabChange }) => (
  <View style={styles.tabs}>
    <TouchableOpacity
      style={[styles.tab, activeTab === "personal" && styles.activeTab]}
      onPress={() => onTabChange("personal")}
    >
      <Text
        style={[
          styles.tabText,
          activeTab === "personal" && styles.activeTabText,
        ]}
      >
        Personal Details
      </Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={[styles.tab, activeTab === "payment" && styles.activeTab]}
      onPress={() => onTabChange("payment")}
    >
      <Text
        style={[
          styles.tabText,
          activeTab === "payment" && styles.activeTabText,
        ]}
      >
        Payment Details
      </Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  tabs: {
    flexDirection: "row",
    marginBottom: 16,
  },
  tab: {
    flex: 1,
    paddingVertical: 8,
    alignItems: "center",
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#0077be",
  },
  tabText: {
    color: "#666",
  },
  activeTabText: {
    color: "#0077be",
    fontWeight: "bold",
  },
});

export default ProfileTabs;
