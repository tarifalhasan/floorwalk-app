import Header from "@/components/Header";
import AuditCard from "@/components/home/AuditCard";
import CertificationCard from "@/components/home/CertificationCard";

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
import { verticalScale } from "react-native-size-matters";

const certificationCardsData = [
  {
    title: "Auditor Certification Test",
    description:
      "This certification increases your chances of getting mystery audits. The higher the score, the better your chances.",
    buttonText: "Get Certificate",
    imageUrl:
      "https://images.unsplash.com/photo-1566932769119-7a1fb6d7ce23?q=80&w=1470&auto=format&fit=crop",
    bgImgSrc:
      "https://images.unsplash.com/photo-1599474924187-334a4ae5bd3c?q=80&w=1566&auto=format&fit=crop",
    onPress: () => console.log("Auditor Certification pressed"),
    slug: "1",
  },
  {
    title: "Marketing Certification Test",
    description:
      "Boost your marketing skills and demonstrate your expertise to clients with this certification.",
    buttonText: "Start Now",
    imageUrl:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1470&auto=format&fit=crop",
    bgImgSrc:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1566&auto=format&fit=crop",
    onPress: () => console.log("Marketing Certification pressed"),
    slug: "2",
  },
  {
    title: "Leadership Training Certificate",
    description:
      "Enhance your leadership qualities and inspire teams with our advanced training program.",
    buttonText: "Enroll Today",
    imageUrl:
      "https://images.unsplash.com/photo-1593642634443-44adaa06623a?q=80&w=1470&auto=format&fit=crop",
    bgImgSrc:
      "https://images.unsplash.com/photo-1518472745294-25d8fc9a53a9?q=80&w=1566&auto=format&fit=crop",
    onPress: () => console.log("Leadership Training pressed"),
    slug: "3",
  },
  {
    title: "Design Thinking Certification",
    description:
      "Unlock your creative potential and master design thinking with this comprehensive program.",
    buttonText: "Join Now",
    imageUrl:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1470&auto=format&fit=crop",
    bgImgSrc:
      "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?q=80&w=1566&auto=format&fit=crop",
    onPress: () => console.log("Design Thinking Certification pressed"),
    slug: "4",
  },
  {
    title: "AI and Machine Learning Certificate",
    description:
      "Dive into the world of artificial intelligence and machine learning with this intensive program.",
    buttonText: "Get Started",
    imageUrl:
      "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?q=80&w=1470&auto=format&fit=crop",
    bgImgSrc:
      "https://images.unsplash.com/photo-1581092795365-1759cf9b8f4f?q=80&w=1566&auto=format&fit=crop",
    onPress: () => console.log("AI Certification pressed"),
    slug: "6",
  },
];

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
            paddingTop: verticalScale(10),
            paddingBottom: verticalScale(40),
          }}
          data={welcomeCardsData}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <WelcomeBackCard title={item.title} />}
        />

        {certificationCardsData.map((card, index) => (
          <CertificationCard
            key={card.slug}
            title={card.title}
            slug={card.slug}
            description={card.description}
            bgImgSrc={card.bgImgSrc}
            imageUrl={card.imageUrl}
          />
        ))}
        <View
          style={{
            paddingBottom: verticalScale(20),
          }}
        >
          <AuditCard
            logo={
              "https://images.unsplash.com/photo-1731877818770-820faabe2d4c?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            title="Nibav Home"
            subtitle="Lifts Audits"
            auditType="Walk In"
            earnings={800}
            reimbursement={0}
            slug="nibav-home"
          />
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
