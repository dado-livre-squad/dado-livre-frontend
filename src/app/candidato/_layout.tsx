import { useTheme } from '@/contexts/ThemeContext';
import { Stack } from 'expo-router';

export default function CandidatosLayout() {
  const { theme } = useTheme();

  return <Stack
    screenOptions={
      { headerShown: false, contentStyle: { backgroundColor: theme.background }, }

    }
  />;
}