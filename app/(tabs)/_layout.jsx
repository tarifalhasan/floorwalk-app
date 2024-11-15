import { Tabs } from "expo-router";

import { Image, StyleSheet, Text, View } from "react-native";
import { theme } from "../../constants/theme";
import { hp } from "../../helpers/common";
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          elevation: 0,
          width: "100%",
          borderTopWidth: 1,
          borderTopColor: "#E2E8F0",
          height: hp(9),
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
                source={require("../../assets/images/Home.png")}
                style={{
                  height: hp(3.8),
                  width: hp(3.8),
                }}
              />
              <Text
                style={[
                  styles.iconLabel,
                  {
                    color: focused
                      ? theme.colors.primary_100
                      : theme.colors.neutral_400,
                  },
                ]}
              >
                Home
              </Text>
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
                source={require("../../assets/icons/audit.png")}
                style={{
                  height: hp(3.8),
                  width: hp(3.8),
                }}
              />
              <Text
                style={[
                  styles.iconLabel,
                  {
                    color: focused
                      ? theme.colors.primary_100
                      : theme.colors.neutral_400,
                  },
                ]}
              >
                Audit
              </Text>
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
                source={require("../../assets/images/analytics.png")}
                style={{
                  height: hp(3.8),
                  width: hp(3.8),
                }}
              />
              <Text
                style={[
                  styles.iconLabel,
                  {
                    color: focused
                      ? theme.colors.primary_100
                      : theme.colors.neutral_400,
                  },
                ]}
              >
                Report
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="payment"
        options={{
          title: "Payment",
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <Image
                tintColor={
                  focused ? theme.colors.primary_100 : theme.colors.neutral_400
                }
                source={require("../../assets/images/account_balance_wallet.png")}
                style={{
                  height: hp(3.8),
                  width: hp(3.8),
                }}
              />
              <Text
                style={[
                  styles.iconLabel,
                  {
                    color: focused
                      ? theme.colors.primary_100
                      : theme.colors.neutral_400,
                  },
                ]}
              >
                Payment
              </Text>
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
                source={require("../../assets/images/User.png")}
                style={{
                  height: hp(3.8),
                  width: hp(3.8),
                }}
              />
              <Text
                style={[
                  styles.iconLabel,
                  {
                    color: focused
                      ? theme.colors.primary_100
                      : theme.colors.neutral_400,
                  },
                ]}
              >
                Profile
              </Text>
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
    gap: 4,
  },
  iconLabel: {
    fontSize: hp(1.5),
    fontWeight: theme.fonts.bold,
  },
});
