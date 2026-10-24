import CandidateCardList from "@/components/CandidateCardList/CandidateCardList";
import Carroussel from "@/components/Carroussel/Carroussel";
import NextElections from "@/components/NextElections/NextElections";

export default function Index() {

  return (
    <>
      <CandidateCardList footer={<NextElections/>} header={<Carroussel/>}/>
    </>
  )
}