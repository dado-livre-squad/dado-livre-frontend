import { Stack } from "expo-router";
import Header from "../components/Header";

export default function RootLayout() {
  return (
    <>
    <Header/>
      <Stack
        screenOptions={{
          animation: "fade_from_bottom",
          headerShown: false
        }}
      />
      </>
  )
}
