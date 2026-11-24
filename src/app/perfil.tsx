import { AccessibilityCard } from "@/components/AccessbilityCard/AccessibilityCard";
import AuthButtons from "@/components/AuthButtons/AuthButtons";
import { CompareButton } from "@/components/CompareButton/CompareButton";
import { HeaderPerfil } from "@/components/HeaderPerfil/HeaderPerfil";
import LogOutButton from "@/components/LogOutButton/LogOutButton";
import { PerfilCard } from "@/components/PerfilCard/PerfilCard";
import { PerfilSectionHeader } from "@/components/PerfilSectionHeader/PerfilSectionHeader";
import { SettingRow } from "@/components/SettingRow/SettingRow";
import SpinLoader from "@/components/SpinLoader/SpinLoader";
import { StatRow } from "@/components/StatRow/StatRow";
import { FONT_TITLE } from "@/constants/fonts";
import { type Theme } from "@/constants/theme";
import { useAuth } from "@/contexts/AuthContext";
import { useTheme, useThemedStyles } from "@/contexts/ThemeContext";
import { userService } from "@/services/user/user-service";
import { router, Stack } from "expo-router";
import { Bell, CalendarDays, Moon } from "lucide-react-native";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";

export default function PerfilScreen() {
  const { theme, isDark, setDarkMode } = useTheme();
  const { email } = useAuth();

  const styles = useThemedStyles(createStyles);

  const [notifications, setNotifications] = useState(true);
  const [reminders, setReminders] = useState(true);
  const [name, setName] = useState('')
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
  if (!email) {
    setName('');
    return;
  }

  setLoading(true);

  userService
    .userFirstName({ email })
    .then((r) => setName(r.nome))
    .catch((e) => console.log(e))
    .finally(() => setLoading(false));
}, [email]);


  if (isLoading) return <SpinLoader />

  return (
    <>

      <Stack.Screen
        options={{
          title: "Perfil",
          headerShown: true,
          headerShadowVisible: true,
          headerStyle: { backgroundColor: theme.header },
          headerTintColor: theme.headerTint,
          headerTitleStyle: {
            fontFamily: FONT_TITLE,
            fontWeight: "normal",
          },
        }}
      />

      <ScrollView
        style={styles.screen}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {
          !email ? (
            <AuthButtons />
          ) : (
            <>
              <HeaderPerfil
                nome={name}
              />
              <PerfilCard>
                <StatRow label="Candidatos acompanhados" value={3} />
                <StatRow label="Comparações salvas" value={3} last />
              </PerfilCard></>
          )
        }

        <PerfilSectionHeader
          title="Configurações"
          subtitle="Personalize sua experiência no Dado Livre."
        />

        <PerfilCard>
          <SettingRow
            icon={Moon}
            title="Fundo escuro"
            description={isDark ? "Ativado" : "Desativado"}
            value={isDark}
            onValueChange={setDarkMode}
          />
          <SettingRow
            icon={Bell}
            title="Notificações"
            description="Novidades dos candidatos acompanhados"
            value={notifications}
            onValueChange={setNotifications}
          />
          <SettingRow
            icon={CalendarDays}
            title="Lembretes eleitorais"
            description="Datas, prazos e dias de votação"
            value={reminders}
            onValueChange={setReminders}
            last
          />
        </PerfilCard>

        <AccessibilityCard />

        <CompareButton onPress={() => router.push("/comparar")} />

        {!email ? (<></>) : (<LogOutButton />)}
      </ScrollView>
    </>
  );
}

const createStyles = (t: Theme) =>
  StyleSheet.create({
    screen: { flex: 1, backgroundColor: t.background },
    content: { paddingHorizontal: 16, paddingTop: 24, paddingBottom: 32 },
  })