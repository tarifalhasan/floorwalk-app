import {
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from "@expo-google-fonts/inter";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

import { useFonts } from "expo-font";
import { Stack } from "expo-router";

import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { MenuProvider } from "react-native-popup-menu";
import "react-native-reanimated";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  let [fontsLoaded] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <MenuProvider>
      <GestureHandlerRootView>
        <BottomSheetModalProvider>
          <StatusBar style="dark" />
          <Stack>
            <Stack.Screen
              name="AuditorCertificationTest"
              options={{ headerShown: false }}
            />
            <Stack.Screen name="index" options={{ headerShown: false }} />

            <Stack.Screen
              name="(auth)/Login"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="(auth)/Signup"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="(auth)/PasswordRecovery"
              options={{ headerTitle: "Password Recovery" }}
            />
            <Stack.Screen name="+not-found" />
            <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
          </Stack>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </MenuProvider>
  );
}
