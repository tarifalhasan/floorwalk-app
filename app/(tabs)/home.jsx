import Header from "@/components/Header";
import { CertificationCard } from "@/components/home/CertificationCard";
import WelcomeBackCard from "@/components/home/WelcomeBackCard";
import ScreenWrapper from "@/components/ScreenWrapper";
import { textStyles, theme } from "@/constants/theme";
import { hp, wp } from "@/helpers/common";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Home = () => {
  const welcomeCardsData = [
    { id: "1", title: "Welcome Back 1" },
    { id: "2", title: "Welcome Back 2" },
    { id: "3", title: "Welcome Back 3" },
  ];
  return (
    <ScreenWrapper bg="#fff">
      <StatusBar style="dark" />
      <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        style={styles.container}
      >
        <View style={styles.headerContainer}>
          <Text style={textStyles.fontSize.title}>View Opportunities</Text>
          <Image
            source={require("@/assets/images/privacy_tip.png")}
            style={{
              width: hp(3.5),
              height: hp(3.5),
            }}
          />
        </View>
        <View>
          <View style={styles.findOpportunitiesContainer}>
            <TextInput
              style={styles.findOpportunitiesSearchInput}
              placeholderTextColor={theme.colors.neutral_400}
              placeholder="Nibav Home Lifts Audits"
            />
            <AntDesign name="close" size={24} color="#D9D9D9" />
          </View>
          <TouchableOpacity style={styles.searchBtn}>
            <MaterialIcons name="search" size={24} color="white" />
            <Text
              style={{
                color: "#fff",
                fontWeight: "600",
                fontSize: hp(1.8),
              }}
            >
              Find Opportunities
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          style={{
            paddingTop: hp(2),
          }}
          data={welcomeCardsData}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <WelcomeBackCard title={item.title} />}
          contentContainerStyle={styles.horizontalList}
        />
        <View
          style={{
            marginTop: hp(2),
          }}
        >
          <CertificationCard />
          <CertificationCard />
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(4),
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: hp(2),
  },
  title: {
    fontSize: hp(1.6),
  },

  findOpportunitiesContainer: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: theme.colors.neutral_400,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: wp(4),
    height: hp(6.6),
    marginVertical: hp(2),
  },
  findOpportunitiesSearchInput: {
    flex: 1,
    borderWidth: 0,
    height: "100%",
    fontWeight: "500",
    fontSize: hp(1.87),
    color: theme.colors.neutral_400,
  },
  searchBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 8,
    height: hp(6.6),
    backgroundColor: theme.colors.primary,
    gap: 8,
    borderRadius: 5,
  },
});
