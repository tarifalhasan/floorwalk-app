import { theme } from "@/constants/theme";
import { hp } from "@/helpers/common";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

const TabItem = ({ isActive, onPress, iconSource, label }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.tab,
        {
          borderColor: isActive ? theme.colors.primary_100 : "transparent",
          paddingBottom: hp(1),
        },
      ]}
    >
      <Image
        source={iconSource}
        style={{
          width: hp(4),
          height: hp(4),
          tintColor: isActive ? theme.colors.primary_100 : "#9F9C9C",
        }}
      />
      <Text
        style={{
          color: isActive ? theme.colors.primary_100 : "#9F9C9C",
          fontSize: hp(2),
          fontWeight: "600",
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tab: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    borderBottomWidth: 4,
    gap: 2,
  },
});

export default TabItem;
