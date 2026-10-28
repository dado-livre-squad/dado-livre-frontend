import Header from "@/components/Header/Header";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    'RobotoSlab-Regular': require('@/assets/fonts/RobotoSlab-Regular.ttf'),
    'RobotoSlab-SemiBold': require('@/assets/fonts/RobotoSlab-SemiBold.ttf'),
    'RobotoSlab-Bold': require('@/assets/fonts/RobotoSlab-Bold.ttf'),
    'RobotoSlab-ExtraBold': require('@/assets/fonts/RobotoSlab-ExtraBold.ttf'),
    'Nunito-Light': require('@/assets/fonts/Nunito-Light.ttf'),
    'Nunito-Medium': require('@/assets/fonts/Nunito-Medium.ttf'),
    'Nunito-ExtraBold': require('@/assets/fonts/Nunito-ExtraBold.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded || error) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <Header/>
      <Stack
        screenOptions={{
          animation: 'slide_from_bottom',
          animationDuration: 100,
          headerShown: false
        }}
      />
    </>
  )
}
