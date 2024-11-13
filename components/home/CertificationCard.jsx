import { theme } from "@/constants/theme";
import { hp, wp } from "@/helpers/common";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export const CertificationCard = ({
  title = "Auditor Certification Test",
  description = "This certification increase your chances of getting mystery audits. The higher the score, better are the chances of getting mystery audits.",
  buttonText = "Get Certificate",
  imageUrl = "https://images.unsplash.com/photo-1566932769119-7a1fb6d7ce23?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  onPress,
  bgImgSrc = "https://images.unsplash.com/photo-1599474924187-334a4ae5bd3c?q=80&w=1566&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
}) => {
  return (
    <View style={styles.container}>
      {/* Background Image Container */}
      <Image
        source={{ uri: imageUrl }}
        style={styles.backgroundImage}
        resizeMode="cover"
      />

      {/* Content Card */}
      <View style={styles.card}>
        {/* Icon and Title */}

        <Image
          source={{ uri: bgImgSrc }}
          style={{
            height: hp(18),
            width: "100%",
            borderRadius: 10,
          }}
          resizeMode="cover"
        />

        <View style={styles.headerContainer}>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons
              name="certificate"
              size={24}
              color="#0066FF"
            />
          </View>
          <Text style={styles.title}>{title}</Text>
        </View>

        {/* Description */}
        <Text style={styles.description}>{description}</Text>

        {/* Button */}
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width - 40,
    maxWidth: 600,
    aspectRatio: 1,
    borderRadius: 16,
    marginTop: hp(10),
  },
  backgroundImage: {
    width: "100%",
    height: "90%",
    borderRadius: 20,
  },
  card: {
    position: "absolute",
    left: wp(4),
    right: wp(4),
    bottom: hp(7),
    backgroundColor: "#FAFAFA",
    borderRadius: 16,
    padding: hp(2),
    shadowColor: "#000",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.06,
    shadowRadius: 55,
    elevation: 5,
    gap: 8,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginTop: hp(1.5),
    marginBottom: hp(1.5),
  },
  iconContainer: {
    width: 40,
    height: 40,
    backgroundColor: "#E8F1FF",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: hp(2.1),
    fontWeight: "600",
    color: "#000",
    flex: 1,
  },
  description: {
    fontSize: hp(1.2),
    color: "#666",
    lineHeight: 20,
    marginBottom: hp(1.1),
  },
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: hp(1.8),
    fontWeight: "600",
  },
});

// Usage Example:
export default function App() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <CertificationCard
        imageUrl="https://source.unsplash.com/random/800x600/?laptop,work"
        onPress={() => console.log("Certificate button pressed")}
      />
    </View>
  );
}
