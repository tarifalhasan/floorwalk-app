import { CircularProgress } from "@/components/CustomProgressBar";
import {
  AntDesign,
  Feather,
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { DrawerActions } from "@react-navigation/native";
import { router, useNavigation, usePathname } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { scale, verticalScale } from "react-native-size-matters";

const CustomDrawerContent = (props) => {
  const pathname = usePathname();
  const { bottom } = useSafeAreaInsets();

  const ratings = { stars: 4, score: 93 };
  const navigation = useNavigation();

  useEffect(() => {}, [pathname]);

  const closeDrawer = () => {
    navigation.dispatch(DrawerActions.closeDrawer());
  };
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.header}>
          <CircularProgress
            avatar={{
              uri: "https://avatars.githubusercontent.com/u/92237522?v=4",
            }}
            progress={50}
          />
          <View>
            <Text style={styles.welcomeText}>Welcome back</Text>
            <Text style={styles.username}>Tarif </Text>
            <Text style={styles.email}>demo@gmail.com</Text>
          </View>
        </View>

        <View style={styles.ratingContainer}>
          <View
            style={{
              gap: scale(4),
            }}
          >
            <Text style={styles.ratingLabel}>Audit Rating</Text>
            <Text
              style={{
                fontWeight: "800",
                fontSize: scale(12),
                color: "#FCE301",
              }}
            >
              {ratings.stars}/5
            </Text>
            <View style={styles.starContainer}>
              {[
                ...Array(
                  Math.min(Math.max(parseInt(ratings.stars) || 0, 0), 5)
                ),
              ].map((_, i) => (
                <FontAwesome key={i} name="star" size={24} color="#FCE301" />
              ))}
              {[
                ...Array(
                  5 - Math.min(Math.max(parseInt(ratings.stars) || 0, 0), 5)
                ),
              ].map((_, i) => (
                <FontAwesome key={i} name="star" size={24} color="#ddd" />
              ))}
            </View>
          </View>

          <View
            style={{
              gap: scale(4),
              borderBottomColor: "#eee",
              borderBottomWidth: 1,
              paddingBottom: verticalScale(16),
            }}
          >
            <Text style={styles.scoreLabel}>Certification Score</Text>
            <Text style={styles.score}>{`${ratings.score}/100`}</Text>
            <View style={styles.progressBar}>
              <View
                style={[styles.progressFill, { width: `${ratings.score}%` }]}
              />
            </View>
          </View>
        </View>

        <DrawerItem
          icon={({ color, size }) => (
            <MaterialCommunityIcons
              name="certificate"
              size={size}
              color={pathname == "/certificate" ? "#007DC1" : "#9CA3AF"}
            />
          )}
          label={"Certificate"}
          labelStyle={[
            styles.navItemLabel,
            { color: pathname == "/feed" ? "#007DC1" : "##9CA3AF" },
          ]}
          onPress={() => {
            router.push("/certificate");
          }}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <Feather
              name="user"
              size={size}
              color={pathname == "/profile" ? "#007DC1" : "#9CA3AF"}
            />
          )}
          label={"Profile"}
          labelStyle={[
            styles.navItemLabel,
            { color: pathname == "/feed" ? "#007DC1" : "##9CA3AF" },
          ]}
          onPress={() => {
            router.push("/profile");
          }}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <AntDesign
              name="linechart"
              size={size}
              color={pathname == "/assignment-rocess" ? "#007DC1" : "#9CA3AF"}
            />
          )}
          label={"Assignment Process"}
          labelStyle={[
            styles.navItemLabel,
            { color: pathname == "/feed" ? "#007DC1" : "##9CA3AF" },
          ]}
          onPress={() => {
            router.push("/assignment-rocess");
          }}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <Feather
              name="help-circle"
              size={size}
              color={pathname == "/help" ? "#007DC1" : "#9CA3AF"}
            />
          )}
          label={"Help"}
          labelStyle={[
            styles.navItemLabel,
            { color: pathname == "/feed" ? "#007DC1" : "##9CA3AF" },
          ]}
          onPress={() => {
            router.push("/help");
          }}
        />
      </DrawerContentScrollView>
      <View
        style={{
          paddingBottom: bottom + verticalScale(16),
          padding: scale(25),
          gap: 10,
        }}
      >
        <TouchableOpacity style={styles.menu}>
          <SimpleLineIcons name="globe" size={24} color={"#9CA3AF"} />
          <Text
            style={[
              styles.navItemLabel,
              {
                color: "#9CA3AF",
              },
            ]}
          >
            Language
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menu}
          onPress={() => router.push("Login")}
        >
          <MaterialIcons name="logout" size={24} color="#9CA3AF" />
          <Text
            style={[
              styles.navItemLabel,
              {
                color: "#9CA3AF",
              },
            ]}
          >
            Log out
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default function Layout() {
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{ headerShown: false }}
    ></Drawer>
  );
}

const styles = StyleSheet.create({
  navItemLabel: {
    marginLeft: scale(-4),
    fontSize: scale(16),
  },
  menu: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: scale(10),
  },
  header: {
    alignItems: "flex-start",
    paddingBottom: verticalScale(20),
    borderBottomWidth: 1,
    borderBottomColor: "#b3b3b3",
    flexDirection: "row",
    columnGap: scale(14),
  },

  welcomeText: {
    fontSize: scale(15),
    fontWeight: "600",
    color: "#003C5D",
  },
  username: {
    fontSize: scale(15),
    fontWeight: "600",
    color: "#003C5D",
  },
  email: {
    fontSize: scale(12),
    color: "#4B5563",
    marginTop: 5,
  },
  ratingContainer: {
    marginVertical: verticalScale(20),
    gap: scale(10),
  },
  ratingLabel: {
    fontSize: scale(18),
    fontWeight: "700",
    color: "#003C5D",
  },
  starContainer: {
    flexDirection: "row",
    gap: 4,
  },
  scoreLabel: {
    fontSize: scale(16),
    fontWeight: "500",
    color: "#333",
    marginTop: verticalScale(10),
  },
  progressBar: {
    height: scale(8),
    backgroundColor: "#eee",
    borderRadius: 4,
    overflow: "hidden",
    marginTop: 5,
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#8DC63F",
  },
  score: {
    fontSize: scale(14),
    color: "#8DC63F",
    marginTop: 5,
  },
});
