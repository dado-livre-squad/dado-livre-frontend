import { SocialMedia } from '@/models/social-media.model';
import { StyleSheet, Text, View } from 'react-native';
import InfoContainer from '../../InfoContainer/CandidateDetailsContainer';
import CandidateSocialMedia from './CandidateSocialMedia';

type CandidateDetailsSocialMediaListProps = {
  socialMedias?: SocialMedia[];
}

export default function CandidateDetailsSocialMediaList({ socialMedias = [] }: CandidateDetailsSocialMediaListProps) {
  if (socialMedias.length === 0) return null;

  return (
    <InfoContainer>
      <Text style={styles.title}>REDES SOCIAIS</Text>
      <View style={styles.listContainer}>
        {socialMedias.map((social) => (
          <CandidateSocialMedia key={social.link} socialMedia={social} />
        ))}
      </View>
    </InfoContainer>
  )
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Nunito-ExtraBold',
  },
  listContainer: {
    display: 'flex',
    flexDirection: 'column',
  }
})