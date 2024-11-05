import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  ThemeProvider,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import CreateScreen from "./(tabs)";
import JoinPage from "./(tabs)/join";
import SignUpPage from "./(tabs)/signup";
import { StyleSheet } from "react-native";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  const Stack = createNativeStackNavigator();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <NavigationContainer independent>
        <Stack.Navigator>
          <Stack.Screen name="Create" component={CreateScreen} />
          <Stack.Screen name="Join" component={JoinPage} />
          <Stack.Screen name="Sign Up" component={SignUpPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

