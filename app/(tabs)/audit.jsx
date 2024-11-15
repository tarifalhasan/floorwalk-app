import AuditCard from "@/components/audit/AuditCard";
import Header from "@/components/Header";
import ScreenWrapper from "@/components/ScreenWrapper";
import { textStyles, theme } from "@/constants/theme";
import { hp, wp } from "@/helpers/common";
import { Ionicons } from "@expo/vector-icons";

import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const AuditScreen = () => {
  return (
    <ScreenWrapper bg="#fff" style={styles.container}>
      <Header />

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
      {/* Search Bar */}
      <View
        style={{
          paddingHorizontal: wp(4),
          flexDirection: "row",
          width: "100%",
          paddingBottom: hp(2),
          alignItems: "center",
          gap: wp(2.5),
        }}
      >
        <View style={styles.searchContainer}>
          <TextInput placeholder="Search Audits" style={styles.searchInput} />
          <TouchableOpacity style={styles.searchButton}>
            <Ionicons name="search-outline" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Ionicons name="filter" size={24} color="#007DC1" />
        </TouchableOpacity>
      </View>

      {/* Audit List */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={styles.auditList}
      >
        <AuditCard
          logoUrl="https://t3.ftcdn.net/jpg/04/62/25/46/240_F_462254618_cRb00dp1eiHaEcto3RyeeNDZ8wxA18Z8.jpg"
          title="Nibav Home Lifts Audits"
          auditDate="09/11/2024"
          status={"Rejected"}
          onReApply={() => alert("Viewing Opportunities")}
        />
        <AuditCard
          logoUrl="https://t3.ftcdn.net/jpg/04/62/25/46/240_F_462254618_cRb00dp1eiHaEcto3RyeeNDZ8wxA18Z8.jpg"
          title="Nibav Home Lifts Audits"
          auditDate="09/11/2024"
          status={"Waited List"}
          onReApply={() => alert("Viewing Opportunities")}
        />
      </ScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f4f4f4" },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: hp(2),
    paddingHorizontal: wp(4),
  },
  title: {
    fontSize: hp(1.6),
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    alignItems: "center",
  },

  searchContainer: {
    flexDirection: "row",
    paddingLeft: wp(2),
    alignItems: "center",
    borderWidth: 1,
    borderColor: theme.colors.neutral_400,
    flex: 1,
    borderRadius: 8,
    borderRightWidth: 0,
  },
  searchInput: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    height: hp(6.5),
    borderRadius: 8,
    fontSize: hp(2),

    color: "#353E4C",
    borderRightWidth: 0,
  },
  searchButton: {
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 15,
    height: hp(6.5),
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: theme.colors.primary,
  },
  auditList: {
    paddingHorizontal: wp(4),
    paddingBottom: hp(4),
    paddingTop: hp(3),
  },
});

export default AuditScreen;
