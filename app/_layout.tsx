import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function RootLayout() {
  return (
    <>
      <StatusBar backgroundColor="#132639" barStyle="light-content" />
      <Stack
        screenOptions={{
          headerShown: false,
          statusBarStyle: "dark",
        }}
      />
    </>
  );
}