import CustomCountryPicker from "@/components/CountryPicker";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

export default function SignupScreen() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    brandName: "",
    phoneNumber: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [countryCode, setCountryCode] = useState("IN");
  const [country, setCountry] = useState(null);

  const handleSignup = () => {
    console.log("Signup attempted with:", formData);
  };

  const onSelect = (country) => {
    setCountryCode(country.cca2);
    setCountry(country);
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.leftDecoration}
        source={require("@/assets/images/left_login.png")}
      />
      <Image
        style={styles.rightDecoration}
        source={require("@/assets/images/right_login.png")}
      />
      <Image
        source={require("@/assets/images/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.content}>
        <View style={styles.headerContainer}>
          <Text style={styles.welcomeTitle}>Welcome to</Text>
          <Text style={styles.portalTitle}>
            <Text style={styles.floorWalk}>FloorWalk</Text>
            {"\n"}
            Shopper Portal
          </Text>
        </View>

        {/* Signup Form */}
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="First Name"
            value={formData.firstName}
            onChangeText={(text) =>
              setFormData({ ...formData, firstName: text })
            }
            autoCapitalize="words"
          />

          <TextInput
            style={styles.input}
            placeholder="Email Id"
            value={formData.email}
            onChangeText={(text) => setFormData({ ...formData, email: text })}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput
            style={styles.input}
            placeholder="Brand Name"
            value={formData.brandName}
            onChangeText={(text) =>
              setFormData({ ...formData, brandName: text })
            }
            autoCapitalize="words"
          />

          <View style={styles.phoneContainer}>
            <CustomCountryPicker
              countryCode={countryCode}
              withFilter
              withFlag
              withCountryNameButton={false}
              withAlphaFilter
              withCallingCode
              withEmoji
              onSelect={onSelect}
              containerButtonStyle={styles.countryPickerButton}
            />
            <TextInput
              style={styles.phoneInput}
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChangeText={(text) =>
                setFormData({ ...formData, phoneNumber: text })
              }
              keyboardType="phone-pad"
            />
          </View>

          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Password"
              value={formData.password}
              onChangeText={(text) =>
                setFormData({ ...formData, password: text })
              }
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={() => setShowPassword(!showPassword)}
            >
              <Ionicons
                name={showPassword ? "eye-outline" : "eye-off-outline"}
                size={moderateScale(24)}
                color="#666"
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
            <Text style={styles.signupButtonText}>Create Account</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            padding: scale(14),
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              fontSize: scale(14),
              fontWeight: "400",
            }}
          >
            Already have an account{" "}
          </Text>
          <Link href={"/Login"}>
            <Text
              style={{
                fontSize: scale(16),
                fontWeight: "700",
                color: theme.colors.primary,
              }}
            >
              Login
            </Text>
          </Link>
        </View>

        {/* How It Works Section */}
        <View style={styles.howItWorks}>
          <Text style={styles.howItWorksTitle}>How It Works</Text>
          <Text style={styles.howItWorksText}>
            Watch this 90 seconds video to know how can FloorWalk help you
            improve your Consumer Experience.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  leftDecoration: {
    width: moderateScale(70),
    height: verticalScale(150),
    position: "absolute",
    top: verticalScale(90),
    left: 0,
  },
  rightDecoration: {
    width: moderateScale(70),
    height: verticalScale(150),
    position: "absolute",
    top: verticalScale(90),
    right: 0,
  },
  content: {
    padding: moderateScale(20),
  },
  logo: {
    width: scale(140),
    height: verticalScale(60),
    marginTop: verticalScale(10),
    alignSelf: "center",
  },
  headerContainer: {
    paddingVertical: scale(30),
  },
  welcomeTitle: {
    fontSize: moderateScale(30),
    color: "#003C5D",
    textAlign: "center",
    fontWeight: "700",
  },
  portalTitle: {
    fontSize: moderateScale(35),
    textAlign: "center",
    fontWeight: "700",
  },
  floorWalk: {
    color: "#8DC63F",
  },
  formContainer: {
    width: "100%",
    backgroundColor: "#fff",
    padding: moderateScale(20),
    borderRadius: moderateScale(10),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  input: {
    width: "100%",
    height: verticalScale(45),
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: moderateScale(5),
    paddingHorizontal: moderateScale(15),
    marginBottom: verticalScale(15),
    fontSize: moderateScale(14),
  },
  phoneContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: verticalScale(15),
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: moderateScale(5),
  },
  countryPickerButton: {
    paddingHorizontal: moderateScale(10),
  },
  phoneInput: {
    flex: 1,
    height: verticalScale(45),
    paddingHorizontal: moderateScale(15),
    fontSize: moderateScale(14),
  },
  passwordContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: moderateScale(5),
    marginBottom: verticalScale(15),
  },
  passwordInput: {
    flex: 1,
    height: verticalScale(45),
    paddingHorizontal: moderateScale(15),
    fontSize: moderateScale(14),
  },
  eyeIcon: {
    padding: moderateScale(10),
  },
  signupButton: {
    width: "100%",
    backgroundColor: "#0088CC",
    padding: moderateScale(15),
    borderRadius: moderateScale(5),
    alignItems: "center",
  },
  signupButtonText: {
    color: "#fff",
    fontSize: moderateScale(16),
    fontWeight: "600",
  },
  howItWorks: {
    marginTop: verticalScale(30),
    alignItems: "center",
  },
  howItWorksTitle: {
    fontSize: moderateScale(20),
    color: "#003366",
    marginBottom: verticalScale(10),
  },
  howItWorksText: {
    textAlign: "center",
    color: "#666",
    fontSize: moderateScale(14),
    paddingHorizontal: moderateScale(20),
  },
});
