import { api } from "@/api/client";
import CandidateCardList from "@/components/CandidateCardList/CandidateCardList";
import ErrorScreen from "@/components/ErrorScreen/ErrorScreen";
import SpinLoader from "@/components/SpinLoader/SpinLoader";
import { CandidatoListResponseDTO } from "@/dto/candidato/candidate-list-response.dto";
import { useEffect, useState } from "react";

export default function CandidatosList() {
  const [candidatos, setCandidatos] = useState<CandidatoListResponseDTO[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    api<CandidatoListResponseDTO[]>('/api/candidato')
      .then(setCandidatos)
      .catch(e => {
        setError('Não foi possível carregar os candidatos.')
      })
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <SpinLoader/>
  if (error) return <ErrorScreen title="Erro" subTitle={error}/>

  return (
    <CandidateCardList/>
  )
}