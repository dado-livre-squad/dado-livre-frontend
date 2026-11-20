import { CandidateDetailsResponseDTO } from "@/dto/candidato/candidate-details-response.dto";
import { StyleSheet, View } from "react-native";
import CandidateName from "./CandidateName";
import CandidateNumber from "./CandidateNumber";
import CandidateDetailsParty from "./CandidateParty";
import Role from "./CandidateRole";

type CandidateDetailsInfosProps = {
  candidate: CandidateDetailsResponseDTO
}

export default function CandidateDetailsInfos({candidate}: CandidateDetailsInfosProps) {
  return (
    <>
      <View style={styles.bottomCandidateInfosContainer}>
        <View>
          <CandidateDetailsParty party={candidate.partido} state={candidate.estado}/>
          <CandidateName name={candidate.nomeSocial}/>
          <Role role={candidate.nomeCargo}/>
        </View>

        <CandidateNumber number={candidate.numeroPartido.toString()}/>
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
