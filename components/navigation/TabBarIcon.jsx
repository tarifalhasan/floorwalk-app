import Ionicons from "@expo/vector-icons/Ionicons";

export function TabBarIcon(props) {
  return (
    <Ionicons
      size={28}
      style={{ marginBottom: -3, ...props.style }}
      {...props}
    />
  );
}
