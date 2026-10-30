import { CandidateModel } from "@/models/canidate-card.model";
import { StyleSheet, View } from "react-native";
import CandidateName from "./CandidateName";
import CandidateNumber from "./CandidateNumber";
import CandidateDetailsParty from "./CandidateParty";
import Role from "./CandidateRole";

type CandidateDetailsInfosProps = {
  candidate: CandidateModel
}

export default function CandidateDetailsInfos({candidate}: CandidateDetailsInfosProps) {
  return (
    <>
      <View style={styles.bottomCandidateInfosContainer}>
        <View>
          <CandidateDetailsParty party={candidate.party} state={candidate.state}/>
          <CandidateName name={candidate.candidateName}/>
          <Role role={candidate.role}/>
        </View>

        <CandidateNumber number={candidate.number}/>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  bottomCandidateInfosContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 26,
    zIndex: 2
  }
})
