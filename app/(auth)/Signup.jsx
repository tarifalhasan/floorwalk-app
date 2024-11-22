import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useRef, useState } from "react";
import {
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import CountryCodeDropdownPicker from "react-native-dropdown-country-picker";
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
  const [selected, setSelected] = useState("+91");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");

  const flatListRef = useRef(null);

  const handleSignup = () => {
    console.log("Signup attempted with:", formData);
  };

  const renderFormItem = ({ item, index }) => {
    switch (item.key) {
      case "firstName":
        return (
          <TextInput
            style={styles.input}
            placeholder="First Name"
            value={formData.firstName}
            onChangeText={(text) =>
              setFormData({ ...formData, firstName: text })
            }
            autoCapitalize="words"
            onFocus={() =>
              flatListRef.current?.scrollToIndex({ index, animated: true })
            }
          />
        );
      case "email":
        return (
          <TextInput
            style={styles.input}
            placeholder="Email Id"
            value={formData.email}
            onChangeText={(text) => setFormData({ ...formData, email: text })}
            keyboardType="email-address"
            autoCapitalize="none"
            onFocus={() =>
              flatListRef.current?.scrollToIndex({ index, animated: true })
            }
          />
        );
      case "brandName":
        return (
          <TextInput
            style={styles.input}
            placeholder="Brand Name"
            value={formData.brandName}
            onChangeText={(text) =>
              setFormData({ ...formData, brandName: text })
            }
            autoCapitalize="words"
            onFocus={() =>
              flatListRef.current?.scrollToIndex({ index, animated: true })
            }
          />
        );
      case "phone":
        return (
          <View style={styles.phoneContainer}>
            <CountryCodeDropdownPicker
              selected={selected}
              setSelected={setSelected}
              setCountryDetails={setCountry}
              phone={phone}
              setPhone={setPhone}
              countryCodeTextStyles={{
                fontSize: moderateScale(14),
                borderWidth: 0,
              }}
              countryCodeContainerStyles={{
                borderWidth: 0,
                borderRightWidth: 2,
                borderRadius: 0,
              }}
              phoneStyles={{
                borderWidth: 0,
              }}
              searchStyles={{
                backgroundColor: "#fff",
                height: scale(45),
                zIndex: 10,
              }}
              dropdownStyles={{
                backgroundColor: "#fff",
                opacity: 1,
                zIndex: 10,
                position: "relative",
              }}
            />
          </View>
        );
      case "password":
        return (
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Password"
              value={formData.password}
              onChangeText={(text) =>
                setFormData({ ...formData, password: text })
              }
              secureTextEntry={!showPassword}
              onFocus={() =>
                flatListRef.current?.scrollToIndex({ index, animated: true })
              }
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
        );
      default:
        return null;
    }
  };

  const formItems = [
    { key: "firstName" },
    { key: "email" },
    { key: "brandName" },
    { key: "phone" },
    { key: "password" },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
      >
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
        <FlatList
          ref={flatListRef}
          data={[{ key: "header" }, ...formItems, { key: "footer" }]}
          renderItem={({ item, index }) => {
            if (item.key === "header") {
              return (
                <View style={styles.headerContainer}>
                  <Text style={styles.welcomeTitle}>Welcome to</Text>
                  <Text style={styles.portalTitle}>
                    <Text style={styles.floorWalk}>FloorWalk</Text>
                    {"\n"}
                    Shopper Portal
                  </Text>
                </View>
              );
            } else if (item.key === "footer") {
              return (
                <>
                  <TouchableOpacity
                    style={styles.signupButton}
                    onPress={handleSignup}
                  >
                    <Text style={styles.signupButtonText}>Create Account</Text>
                  </TouchableOpacity>
                  <View style={styles.loginLinkContainer}>
                    <Text style={styles.loginLinkText}>
                      Already have an account{" "}
                    </Text>
                    <Link href={"/Login"}>
                      <Text style={styles.loginLink}>Login</Text>
                    </Link>
                  </View>
                  <View style={styles.howItWorks}>
                    <Text style={styles.howItWorksTitle}>How It Works</Text>
                    <Text style={styles.howItWorksText}>
                      Watch this 90 seconds video to know how can FloorWalk help
                      you improve your Consumer Experience.
                    </Text>
                  </View>
                </>
              );
            } else {
              return renderFormItem({ item, index: index - 1 });
            }
          }}
          keyExtractor={(item, index) => item.key + index}
          contentContainerStyle={styles.content}
          style={{
            zIndex: 3,
          }}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
  },
  leftDecoration: {
    width: moderateScale(70),
    height: verticalScale(150),
    position: "absolute",
    top: verticalScale(90),
    left: 0,
    zIndex: 1,
  },
  rightDecoration: {
    width: moderateScale(70),
    height: verticalScale(150),
    position: "absolute",
    top: verticalScale(90),
    right: 0,
    zIndex: 1,
  },
  content: {
    padding: moderateScale(20),
  },
  logo: {
    width: scale(140),
    height: verticalScale(60),
    marginTop: verticalScale(30),
    alignSelf: "center",
  },
  headerContainer: {
    paddingVertical: verticalScale(30),
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
    height: verticalScale(45),
    zIndex: 10,
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
    zIndex: -2,
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
    marginTop: verticalScale(15),
  },
  signupButtonText: {
    color: "#fff",
    fontSize: moderateScale(16),
    fontWeight: "600",
  },
  loginLinkContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: scale(14),
    flexDirection: "row",
  },
  loginLinkText: {
    fontSize: scale(14),
    fontWeight: "400",
  },
  loginLink: {
    fontSize: scale(16),
    fontWeight: "700",
    color: "#0088CC",
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
