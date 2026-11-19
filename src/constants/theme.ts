import { mainColor } from "./color";

// Paleta de cores usada em todo o app. Para adicionar uma nova cor,
// inclua a chave em `lightTheme` e o equivalente em `darkTheme`.
export const lightTheme = {
  // Fundos
  background: "#F4F8FB",
  surface: "#FFFFFF",
  surfaceAlt: "#F0F5F8",
  border: "#E6ECF0",
  iconBox: "#E3EDF3",
  imagePlaceholder: "#E5E5E5",

  // Textos
  text: "#062B3D",
  title: mainColor,
  muted: "#7B8A96",
  subtle: "#9993A5",

  // Marca
  primary: mainColor,
  onPrimary: "#FFFFFF",
  primaryMuted: "#74A09D",
  accent: "#1B6A8A",
  link: "#2A9CF0",
  danger: "#B91C1C",

  // Chips / badges
  chip: "#DCE7EC",
  chipText: "#092B3B",

  // Barra de progresso
  progressTrack: "#E3E8EE",

  // Switch
  trackOff: "#D5DDE3",
  trackOn: "#062B3D",
  thumb: "#FFFFFF",

  // Header
  header: mainColor,
  headerTint: "#FFFFFF",

  // CTA
  cta: "#062B3D",
  ctaText: "#FFFFFF",
  ctaMuted: "#C9D6DF",

  // Tab bar
  tabBar: "#FFFFFF",
  tabBarBorder: "#E6ECF0",
  tabActive: mainColor,
  tabInactive: "#94A3B8",
  tabFocusedBg: "#DEE6E8",

  // Sombra
  shadow: "#000000",
};

export type Theme = typeof lightTheme;

export const darkTheme: Theme = {
  background: "#0A1720",
  surface: "#112430",
  surfaceAlt: "#1B3443",
  border: "#1E3645",
  iconBox: "#1B3443",
  imagePlaceholder: "#1B3443",

  text: "#E8F1F6",
  title: "#E8F1F6",
  muted: "#8FA3B1",
  subtle: "#8FA3B1",

  primary: "#1C4A63",
  onPrimary: "#FFFFFF",
  primaryMuted: "#8FB8C9",
  accent: "#4DA3D4",
  link: "#4DA3D4",
  danger: "#F87171",

  chip: "#1B3443",
  chipText: "#E8F1F6",

  progressTrack: "#1E3645",

  trackOff: "#3A4F5C",
  trackOn: "#4DA3D4",
  thumb: "#FFFFFF",

  header: "#04141D",
  headerTint: "#FFFFFF",

  cta: "#1C4A63",
  ctaText: "#FFFFFF",
  ctaMuted: "#B7CAD6",

  tabBar: "#04141D",
  tabBarBorder: "#1E3645",
  tabActive: "#E8F1F6",
  tabInactive: "#5E7381",
  tabFocusedBg: "#1B3443",

  shadow: "#000000",
};
