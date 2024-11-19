import { theme } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text } from "react-native";
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from "react-native-popup-menu";

const FilterMenu = ({ selectedFilter, onSelectFilter, filterItems }) => {
  return (
    <Menu>
      <MenuTrigger>
        <Ionicons name="filter" size={24} color={theme.colors.primary} />
      </MenuTrigger>
      <MenuOptions>
        {filterItems.map((item) => (
          <MenuOption
            key={item.key}
            onSelect={() => onSelectFilter(item.key)}
            style={[styles.option]}
          >
            <Text>{item.label}</Text>
          </MenuOption>
        ))}
      </MenuOptions>
    </Menu>
  );
};

export default FilterMenu;

const styles = StyleSheet.create({
  option: {
    padding: 10,
  },
  selectedOption: {
    backgroundColor: theme.colors.lightGray,
  },
});
