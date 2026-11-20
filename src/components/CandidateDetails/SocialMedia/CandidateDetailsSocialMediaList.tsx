import type { Theme } from '@/constants/theme';
import { useThemedStyles } from '@/contexts/ThemeContext';
import { RedeSocialResponseDTO } from '@/dto/redesocial/rede-social-response.dto';
import { StyleSheet, Text, View } from 'react-native';
import InfoContainer from '../../InfoContainer/CandidateDetailsContainer';
import CandidateSocialMedia from './CandidateSocialMedia';

type CandidateDetailsSocialMediaListProps = {
  socialMedias?: RedeSocialResponseDTO[];
}

export default function CandidateDetailsSocialMediaList({ socialMedias = [] }: CandidateDetailsSocialMediaListProps) {
  const styles = useThemedStyles(createStyles)

  if (socialMedias.length === 0) return null;

  return (
    <InfoContainer>
      <Text style={styles.title}>REDES SOCIAIS</Text>
      <View style={styles.listContainer}>
        {socialMedias.map((social) => (
          <CandidateSocialMedia key={social.endereco} socialMedia={social} />
        ))}
      </View>
    </InfoContainer>
  )
}

const createStyles = (t: Theme) => StyleSheet.create({
  title: {
    fontFamily: 'Nunito-ExtraBold',
    color: t.text,
  },
  listContainer: {
    display: 'flex',
    flexDirection: 'column',
  }
})
