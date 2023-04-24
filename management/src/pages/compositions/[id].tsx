import Head from "next/head"
import { useQuery } from "@tanstack/react-query"
import { Composition } from "../../../../shared/types/composition"
import { useRouter } from "next/router"

export default function Composition() {
  const router = useRouter()
  const { id } = router.query

  const {
    isLoading,
    isError,
    data: composition,
    error,
  } = useQuery<Composition>({
    queryKey: ["composition"],
    queryFn: () => fetch(`/api/compositions/${id}`).then((res) => res.json()),
  })

  if (isLoading) {
    return <span>Loading ...</span>
  }

  if (isError) {
    return <span>Error: {JSON.stringify(error)}</span>
  }

  return (
    <>
      <Head>
        <title>Composition</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>{composition.name}</h1>
      <main>{JSON.stringify(composition)}</main>
    </>
  )
}
