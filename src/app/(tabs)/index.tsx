import CandidateCardList from "@/components/CandidateCardList/CandidateCardList";
import NextElections from "@/components/NextElections/NextElections";

export default function Index() {

  return (
    <>
      <CandidateCardList footer={<NextElections/>}/>
    </>
  )
}