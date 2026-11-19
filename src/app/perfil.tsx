import { Stack, router } from "expo-router";
import {
  Accessibility,
  ArrowUpDown,
  Bell,
  CalendarDays,
  ChevronRight,
  Moon,
  User,
} from "lucide-react-native";
import { useMemo, useState, type ComponentType } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  View,
} from "react-native";

// Para alterar a grossura das labels que usam fontes customizadas (carregadas em _layout.tsx),
// troque a variante da fonte (ex.: "RobotoSlab-Regular", "RobotoSlab-SemiBold", "RobotoSlab-Bold", "RobotoSlab-ExtraBold").
const FONT_TITLE = "RobotoSlab-Bold";
const FONT_BODY = "Nunito-Regular";
const FONT_BODY_BOLD = "Nunito-Bold";

const lightTheme = {
  background: "#F4F8FB",
  surface: "#FFFFFF",
  border: "#E6ECF0",
  iconBox: "#E3EDF3",
  text: "#062B3D",
  muted: "#7B8A96",
  trackOff: "#D5DDE3",
  trackOn: "#062B3D",
  thumb: "#FFFFFF",
  header: "#062B3D",
  headerTint: "#FFFFFF",
  cta: "#062B3D",
  ctaText: "#FFFFFF",
  ctaMuted: "#C9D6DF",
};

const darkTheme: typeof lightTheme = {
  background: "#0A1720",
  surface: "#112430",
  border: "#1E3645",
  iconBox: "#1B3443",
  text: "#E8F1F6",
  muted: "#8FA3B1",
  trackOff: "#3A4F5C",
  trackOn: "#4DA3D4",
  thumb: "#FFFFFF",
  header: "#04141D",
  headerTint: "#FFFFFF",
  cta: "#1C4A63",
  ctaText: "#FFFFFF",
  ctaMuted: "#B7CAD6",
};

type Theme = typeof lightTheme;
type Styles = ReturnType<typeof createStyles>;
type IconType = ComponentType<{ size?: number; color?: string }>;

function IconBox({
  icon: Icon,
  theme,
  styles,
}: {
  icon: IconType;
  theme: Theme;
  styles: Styles;
}) {
  return (
    <View style={styles.iconBox}>
      <Icon size={20} color={theme.text} />
    </View>
  );
}

function StatRow({
  label,
  value,
  last,
  onPress,
  theme,
  styles,
}: {
  label: string;
  value: number;
  last?: boolean;
  onPress?: () => void;
  theme: Theme;
  styles: Styles;
}) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      style={[styles.statRow, !last && styles.divider]}
    >
      <Text style={styles.statLabel}>{label}</Text>
      <View style={styles.statRight}>
        <Text style={styles.statValue}>{value}</Text>
        <ChevronRight size={18} color={theme.text} />
      </View>
    </Pressable>
  );
}

function SettingRow({
  icon,
  title,
  description,
  value,
  onValueChange,
  last,
  theme,
  styles,
}: {
  icon: IconType;
  title: string;
  description: string;
  value: boolean;
  onValueChange: (value: boolean) => void;
  last?: boolean;
  theme: Theme;
  styles: Styles;
}) {
  return (
    <View style={[styles.settingRow, !last && styles.divider]}>
      <IconBox icon={icon} theme={theme} styles={styles} />
      <View style={styles.settingText}>
        <Text style={styles.settingTitle}>{title}</Text>
        <Text style={styles.settingDescription} numberOfLines={1}>
          {description}
        </Text>
      </View>
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{ false: theme.trackOff, true: theme.trackOn }}
        thumbColor={theme.thumb}
        ios_backgroundColor={theme.trackOff}
        accessibilityLabel={title}
      />
    </View>
  );
}

export default function PerfilScreen() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [reminders, setReminders] = useState(true);

  const theme = darkMode ? darkTheme : lightTheme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <>
      <Stack.Screen
        options={{
          title: "Perfil", //Não esquecer de descomentar se eu quiser colocar o titulo 
          headerShown: true,
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: theme.header,

          },
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
        {/* Avatar + saudação */}
        <View style={styles.hero}>
          <View style={styles.avatar}>
            <User size={26} color={theme.text} />
          </View>
          <Text style={styles.greeting}>Olá, usuário</Text>
          <Text style={styles.subtitle}>
            Acompanhe candidatos e retome comparações que ajudam você a decidir.
          </Text>
        </View>

        {/* Atalhos */}
        <View style={styles.card}>
          <StatRow
            label="Candidatos acompanhados"
            value={3}
            theme={theme}
            styles={styles}
          />
          <StatRow
            label="Comparações salvas"
            value={3}
            last
            theme={theme}
            styles={styles}
          />
        </View>

        {/* Configurações */}
        <Text style={styles.sectionTitle}>Configurações</Text>
        <Text style={styles.sectionSubtitle}>
          Personalize sua experiência no Dado Livre.
        </Text>

        <View style={styles.card}>
          <SettingRow
            icon={Moon}
            title="Fundo escuro"
            description={darkMode ? "Ativado" : "Desativado"}
            value={darkMode}
            onValueChange={setDarkMode}
            theme={theme}
            styles={styles}
          />
          <SettingRow
            icon={Bell}
            title="Notificações"
            description="Novidades dos candidatos acompanhados"
            value={notifications}
            onValueChange={setNotifications}
            theme={theme}
            styles={styles}
          />
          <SettingRow
            icon={CalendarDays}
            title="Lembretes eleitorais"
            description="Datas, prazos e dias de votação"
            value={reminders}
            onValueChange={setReminders}
            last
            theme={theme}
            styles={styles}
          />
        </View>

        {/* Acessibilidade */}
        <Pressable
          style={[styles.card, styles.accessibilityCard]}
          accessibilityRole="button"
        >
          <IconBox icon={Accessibility} theme={theme} styles={styles} />
          <View style={styles.settingText}>
            <Text style={styles.settingTitle}>Acessibilidade</Text>
            <Text style={styles.settingDescription} numberOfLines={1}>
              Daltonismo, tamanho da fonte e leitura
            </Text>
          </View>
          <ChevronRight size={18} color={theme.text} />
        </Pressable>

        {/* CTA */}
        <Pressable
          style={styles.cta}
          accessibilityRole="button"
          onPress={() => router.push("/comparar")}
        >
          <View style={styles.ctaText}>
            <Text style={styles.ctaTitle}>Comparar candidatos</Text>
            <Text style={styles.ctaDescription}>
              Veja propostas e histórico lado a lado
            </Text>
          </View>
          <ArrowUpDown size={20} color={theme.ctaText} />
        </Pressable>
      </ScrollView>
    </>
  );
}

const createStyles = (t: Theme) =>
  StyleSheet.create({
    screen: { flex: 1, backgroundColor: t.background },
    content: { paddingHorizontal: 16, paddingTop: 24, paddingBottom: 32 },

    hero: { alignItems: "center", marginBottom: 24 },
    avatar: {
      width: 72,
      height: 72,
      borderRadius: 22,
      backgroundColor: t.iconBox,
      alignItems: "center",
      justifyContent: "center",
    },
    // AJUSTE AQUI (Header interno / Hero): Para mudar a grossura do título "Olá, usuário",
    // altere o fontFamily (ex.: "RobotoSlab-Regular", "RobotoSlab-SemiBold", "RobotoSlab-Bold") ou adicione fontWeight
    greeting: {
      fontFamily: FONT_TITLE,
      fontSize: 22,
      color: t.text,
      marginTop: 20,
    },
    subtitle: {
      fontFamily: FONT_BODY,
      fontSize: 14,
      lineHeight: 21,
      color: t.muted,
      textAlign: "center",
      marginTop: 10,
      paddingHorizontal: 12,
    },

    card: {
      backgroundColor: t.surface,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: t.border,
      overflow: "hidden",
    },
    divider: { borderBottomWidth: 1, borderBottomColor: t.border },

    statRow: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: 16,
      paddingVertical: 16,
    },
    statLabel: { fontFamily: FONT_BODY, fontSize: 14, color: t.text },
    statRight: { flexDirection: "row", alignItems: "center", gap: 12 },
    statValue: { fontFamily: FONT_BODY_BOLD, fontSize: 14, color: t.text },

    sectionTitle: {
      fontFamily: FONT_TITLE,
      fontSize: 14,
      color: t.text,
      marginTop: 24,
      paddingHorizontal: 4,
    },
    sectionSubtitle: {
      fontFamily: FONT_BODY,
      fontSize: 12,
      color: t.muted,
      marginTop: 4,
      marginBottom: 12,
      paddingHorizontal: 4,
    },

    settingRow: {
      flexDirection: "row",
      alignItems: "center",
      gap: 12,
      paddingHorizontal: 12,
      paddingVertical: 12,
    },
    iconBox: {
      width: 40,
      height: 40,
      borderRadius: 12,
      backgroundColor: t.iconBox,
      alignItems: "center",
      justifyContent: "center",
    },
    settingText: { flex: 1 },
    settingTitle: { fontFamily: FONT_BODY_BOLD, fontSize: 14, color: t.text },
    settingDescription: {
      fontFamily: FONT_BODY,
      fontSize: 12,
      color: t.muted,
      marginTop: 2,
    },

    accessibilityCard: {
      flexDirection: "row",
      alignItems: "center",
      gap: 12,
      paddingHorizontal: 12,
      paddingVertical: 12,
      marginTop: 16,
    },

    cta: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: t.cta,
      borderRadius: 16,
      paddingHorizontal: 16,
      paddingVertical: 18,
      marginTop: 16,
    },
    ctaText: { flex: 1, paddingRight: 12 },
    ctaTitle: { fontFamily: FONT_BODY_BOLD, fontSize: 14, color: t.ctaText },
    ctaDescription: {
      fontFamily: FONT_BODY,
      fontSize: 12,
      color: t.ctaMuted,
      marginTop: 4,
    },
  });