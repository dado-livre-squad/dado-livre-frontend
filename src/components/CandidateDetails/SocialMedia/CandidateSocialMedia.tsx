import { SocialMedia } from "@/models/social-media.model";
import { Linking, Pressable, StyleSheet, Text, View } from "react-native";

type CandidateSocialMediaProps = {
  socialMedia: SocialMedia
}

export default function CandidateSocialMedia({socialMedia}: CandidateSocialMediaProps) {
  return (
    <Pressable 
      onPress={() => Linking.openURL(socialMedia.link)} 
      style={{ width: '100%' }}
    >
      <View style={styles.socialMediaContainer}>
        <Text>{socialMedia.name}</Text>
        <Text style={styles.link}>{socialMedia.username}</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  socialMediaContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: '#f0f5f8',
    padding: 12,
    borderRadius: 8,
    width: '100%',
    height: 44
  },
  link: {
    color: '#2a9cf0',
    flex: 1,
    textAlign: 'right',
    marginLeft: 10
  }
})