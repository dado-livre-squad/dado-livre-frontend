import { DetailedCandidateModel } from "@/models/detailed-candidate.model"
import { StyleSheet, View } from "react-native"
import CandidateDetailsPersonalInfos from "./CandidateDetailsPersonalInfos"
import CandidateDetailsImage from "./Image/CandidateDetailsImage"

type CandidateDetailsProps = {
  candidate: DetailedCandidateModel
}

export default function CandidateDetails({ candidate }: CandidateDetailsProps) {
  return (
    <>
      <CandidateDetailsImage candidate={candidate} />
      <View style={styles.container}>
        <View style={styles.personalInfoContainer}>
          <CandidateDetailsPersonalInfos title="IDADE" data={`${candidate.age} anos`}/>
          <CandidateDetailsPersonalInfos title="ESTADO" data={candidate.state}/>
          <CandidateDetailsPersonalInfos title="CARGO" data={candidate.roleType}/>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    paddingVertical: 20
  },
  personalInfoContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20
  }
})
