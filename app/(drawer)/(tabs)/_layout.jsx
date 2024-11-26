import { Tabs } from "expo-router";

import { theme } from "@/constants/theme";
import { Image, Platform, StyleSheet, View } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

import { PlatformPressable } from "@react-navigation/elements";
import * as Haptics from "expo-haptics";

export function HapticTab(props) {
  return (
    <PlatformPressable
      {...props}
      onPressIn={(ev) => {
        if (process.env.EXPO_OS === "ios") {
          // Add a soft haptic feedback when pressing down on the tabs.
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }
        props.onPressIn?.(ev);
      }}
    />
  );
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#003C5D",
        tabBarButton: HapticTab,
        tabBarStyle: Platform.select({
          ios: {
            height: moderateScale(90),
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: moderateScale(10),
            paddingTop: verticalScale(12),
          },
          default: {
            elevation: 0,
            borderTopWidth: 1,
            borderTopColor: "#E2E8F0",
            height: moderateScale(70),
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: moderateScale(10),
            paddingTop: scale(10),
          },
        }),
        tabBarLabelStyle: {
          fontSize: scale(13),
          fontWeight: 300,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <Image
                tintColor={
                  focused ? theme.colors.primary_100 : theme.colors.neutral_400
                }
                source={require("@/assets/images/Home.png")}
                style={{
                  width: scale(30),
                  height: scale(30),
                  marginBottom: verticalScale(5),
                }}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="audit"
        options={{
          title: "Audit",
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <Image
                tintColor={
                  focused ? theme.colors.primary_100 : theme.colors.neutral_400
                }
                source={require("@/assets/icons/audit.png")}
                style={{
                  width: scale(30),
                  height: scale(30),
                  marginBottom: verticalScale(5),
                }}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="reports"
        options={{
          title: "Report",
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <Image
                tintColor={
                  focused ? theme.colors.primary_100 : theme.colors.neutral_400
                }
                source={require("@/assets/images/analytics.png")}
                style={{
                  width: scale(30),
                  height: scale(30),
                  marginBottom: verticalScale(5),
                }}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="payment/index"
        options={{
          title: "Payment",
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <Image
                tintColor={
                  focused ? theme.colors.primary_100 : theme.colors.neutral_400
                }
                source={require("@/assets/images/account_balance_wallet.png")}
                style={{
                  width: scale(30),
                  height: scale(30),
                  marginBottom: verticalScale(5),
                }}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <Image
                tintColor={
                  focused ? theme.colors.primary_100 : theme.colors.neutral_400
                }
                source={require("@/assets/images/User.png")}
                style={{
                  width: scale(30),
                  height: scale(30),
                  marginBottom: verticalScale(5),
                }}
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  iconLabel: {
    fontSize: moderateScale(7, 0.4),
    fontWeight: theme.fonts.bold,
  },
});
