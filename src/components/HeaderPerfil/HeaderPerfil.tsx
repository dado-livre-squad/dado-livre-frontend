import { type Theme } from "@/constants/theme";
import { useTheme, useThemedStyles } from "@/contexts/ThemeContext";
import { User } from "lucide-react-native";
import { StyleSheet, Text, View } from "react-native";
import { FONT_BODY, FONT_TITLE } from '../../constants/fonts';

type HeaderPerfilProps = {
  nome: string
}

export function HeaderPerfil({nome}: HeaderPerfilProps) {
  const { theme } = useTheme();
  const styles = useThemedStyles(createStyles);

  return (
    <View style={styles.hero}>
      <View style={styles.avatar}>
        <User size={26} color={theme.text} />
      </View>
      <Text style={styles.greeting}>Olá, {nome}</Text>
      <Text style={styles.subtitle}>
        Acompanhe candidatos e retome comparações que ajudam você a decidir.
      </Text>
    </View>
  );
}

const createStyles = (t: Theme) =>
  StyleSheet.create({
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
  });