import ErrorScreen from "@/components/ErrorScreen/ErrorScreen";

export default function NotFoundScreen() {
  return (
    <>
      <ErrorScreen
        title="Oops!"
        subTitle="Essa tela não existe ou foi removida"
      />
    </>
  )
}


