import Head from "next/head"
import { useQuery } from "@tanstack/react-query"
import { Composition } from "../../types/composition"
import { useRouter } from "next/router"
import Link from "next/link"

// TODO hardcoded: Workbench URL
const WORKBENCH_URL = "http://localhost:5500?id="

// TODO hardcoded: Bucket URL
const BUCKET_URL = "http://localhost:8000/storage/v1/object/public/models/"

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
    enabled: Boolean(id),
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
      <main>
        <h1>{composition.name}</h1>

        <p style={{ fontStyle: "italic" }}>
          {composition.description || "(no description)"}
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "1em",
          }}
        >
          <h3>Preview:</h3>
          <Link href={WORKBENCH_URL + composition.id}>
            <button>Edit</button>
          </Link>
        </div>
        <img src={BUCKET_URL + id + ".svg"} />
      </main>
    </>
  )
}
