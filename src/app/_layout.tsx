import Header from "@/components/Header/Header";
import { AuthProvider } from "@/contexts/AuthContext";
import { ThemeProvider, useTheme } from "@/contexts/ThemeContext";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { ImageBackground, StyleSheet } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [isSplashReady, setIsSplashReady] = useState(false);
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
    // Oculta a splash padrão do sistema/Expo Go para exibir a tela de carregamento com tela-inicio.png
    SplashScreen.hideAsync();
    const timer = setTimeout(() => {
      setIsSplashReady(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if ((!fontsLoaded && !error) || !isSplashReady) {
    return (
      <ImageBackground
        source={require("@/assets/images/tela-inicio.png")}
        style={styles.splashBackground}
        resizeMode="cover"
      />
    );
  }

  return (
    <ThemeProvider>
      <AuthProvider>
      
      <RootNavigator />
      
      </AuthProvider>
    </ThemeProvider>
  )
}

function RootNavigator() {
  const { theme } = useTheme();

  return (
    <>
      <StatusBar style="light" />
      <Header/>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: theme.background },
          animation: "fade",
          animationDuration: 200
        }}
      >
        <Stack.Screen name="(tabs)" />
      </Stack>
    </>
  )
}

const styles = StyleSheet.create({
  splashBackground: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
