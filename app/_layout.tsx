import { Slot } from "expo-router";
import { StatusBar } from "react-native";
import "expo-dev-client";

export default function RootLayout() {
  return (
    <>
      <StatusBar />
      <Slot />
    </>
  );
}
