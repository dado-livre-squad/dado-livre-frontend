import NextElections from "@/components/NextElections/NextElections";
import PreviusElections from "@/components/PreviousElections/PreviusElections";
import { electionResults } from "@/mocks/electionResults"; // Import da pasta mocks
import { ScrollView, StyleSheet, View } from "react-native";
import type { Theme } from "@/constants/theme";
import { useThemedStyles } from "@/contexts/ThemeContext";

export default function Eleicoes() {
  const styles = useThemedStyles(createStyles);

  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
      <View style={styles.container}>
        <NextElections />
        
        {/* Passando a constante com os dados de teste */}
        <PreviusElections results={electionResults} />
      </View>
    </ScrollView>
  );
}

const createStyles = (t: Theme) => StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: t.background,
  },
  scrollContent: {
    paddingBottom: 24,
  },
  container: {
    paddingHorizontal: 12,
  },
});