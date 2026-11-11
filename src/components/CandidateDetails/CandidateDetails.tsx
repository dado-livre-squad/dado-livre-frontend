import { DetailedCandidateModel } from "@/models/detailed-candidate.model"
import { ScrollView, StyleSheet, View } from "react-native"
import CandidateDetailsAbout from "./CandidateDetailsAbout"
import CandidateDetailsPersonalInfos from "./CandidateDetailsPersonalInfos"
import CandidateDetailsImage from "./Image/CandidateDetailsImage"
import CandidateDetailsSocialMediaList from "./SocialMedia/CandidateDetailsSocialMediaList"

type CandidateDetailsProps = {
  candidate: DetailedCandidateModel
}

export default function CandidateDetails({ candidate }: CandidateDetailsProps) {
  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
      <CandidateDetailsImage candidate={candidate} />
      <View style={styles.container}>

        <View style={styles.personalInfoContainer}>
          <CandidateDetailsPersonalInfos title="IDADE" data={`${candidate.age} anos`} />
          <CandidateDetailsPersonalInfos title="ESTADO" data={candidate.state} />
          <CandidateDetailsPersonalInfos title="CARGO" data={candidate.roleType} />
        </View>

        <CandidateDetailsAbout about={candidate.about} />

        <CandidateDetailsSocialMediaList socialMedias={candidate.socialMedia}/>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1, // Restringe a altura da ScrollView à tela
  },
  scrollContent: {
    flexGrow: 1, // Permite que o conteúdo cresça
    paddingBottom: 40, // Espaço extra no fim
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