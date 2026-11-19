import { type Theme } from "@/constants/theme";
import { useTheme, useThemedStyles } from "@/contexts/ThemeContext";
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
import { useState, type ComponentType } from "react";
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
  const { theme, isDark, setDarkMode } = useTheme();
  const styles = useThemedStyles(createStyles);

  const [notifications, setNotifications] = useState(true);
  const [reminders, setReminders] = useState(true);

  return (
    <>
      <Stack.Screen
        options={{
          title: "Perfil",
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
            description={isDark ? "Ativado" : "Desativado"}
            value={isDark}
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