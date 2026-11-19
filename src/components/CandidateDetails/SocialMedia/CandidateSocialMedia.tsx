import type { Theme } from "@/constants/theme";
import { useThemedStyles } from "@/contexts/ThemeContext";
import { SocialMedia } from "@/models/social-media.model";
import { Linking, Pressable, StyleSheet, Text, View } from "react-native";

type CandidateSocialMediaProps = {
  socialMedia: SocialMedia
}

export default function CandidateSocialMedia({socialMedia}: CandidateSocialMediaProps) {
  const styles = useThemedStyles(createStyles)

  return (
    <Pressable 
      onPress={() => Linking.openURL(socialMedia.link)} 
      style={{ width: '100%' }}
    >
      <View style={styles.socialMediaContainer}>
        <Text style={styles.name}>{socialMedia.name}</Text>
        <Text style={styles.link}>{socialMedia.username}</Text>
      </View>
    </Pressable>
  )
}

const createStyles = (t: Theme) => StyleSheet.create({
  socialMediaContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: t.surfaceAlt,
    padding: 12,
    borderRadius: 8,
    width: '100%',
    height: 44
  },
  name: {
    color: t.text
  },
  link: {
    color: t.link,
    flex: 1,
    textAlign: 'right',
    marginLeft: 10
  }
})
