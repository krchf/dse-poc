import Head from "next/head"
import { useQuery } from "@tanstack/react-query"

import { CompositionCollection } from "../../types/composition"

import styles from "@/styles/Home.module.css"
import Link from "next/link"

export default function Home() {
  const {
    isLoading,
    isError,
    data: compositions,
    error,
  } = useQuery<CompositionCollection>({
    queryKey: ["compositions"],
    queryFn: () => fetch("/api/compositions").then((res) => res.json()),
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
        <title>Compositions</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Compositions</h1>
        <ul>
          {compositions.map((c) => (
            <li key={c.id}>
              <Link href={"/compositions/" + c.id}>{c.name}</Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}
