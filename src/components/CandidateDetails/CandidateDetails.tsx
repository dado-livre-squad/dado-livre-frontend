import { CandidateDetailsResponseDTO } from "@/dto/candidato/candidate-details-response.dto"
import { ScrollView, StyleSheet, View } from "react-native"
import CandidateDetailsAbout from "./CandidateDetailsAbout"
import CandidateDetailsPersonalInfos from "./CandidateDetailsPersonalInfos"
import CandidateDetailsImage from "./Image/CandidateDetailsImage"
import CandidateDetailsSocialMediaList from "./SocialMedia/CandidateDetailsSocialMediaList"

type CandidateDetailsProps = {
  candidate: CandidateDetailsResponseDTO
}

export default function CandidateDetails({ candidate }: CandidateDetailsProps) {
  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
      <CandidateDetailsImage candidate={candidate} />
      <View style={styles.container}>

        <View style={styles.personalInfoContainer}>
          <CandidateDetailsPersonalInfos title="IDADE" data={`${candidate.idade} anos`} />
          <CandidateDetailsPersonalInfos title="ESTADO" data={candidate.estado} />
          <CandidateDetailsPersonalInfos title="CARGO" data={candidate.tipoCargo} />
        </View>

        <CandidateDetailsAbout about={candidate.sobre} />

        <CandidateDetailsSocialMediaList socialMedias={candidate.redesSociais}/>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1, 
  },
  scrollContent: {
    flexGrow: 1, 
    paddingBottom: 40, 
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    paddingVertical: 20,
    gap: 20
  },
  personalInfoContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20
  }
})