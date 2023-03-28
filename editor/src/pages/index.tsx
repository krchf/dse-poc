import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { useQuery } from 'react-query'
import { ModelCollection } from './api/types'
import Link from 'next/link'

export default function Home() {
  const { isLoading, isError, data, error } = useQuery('models', () =>
    fetch('/models').then((res) => res.json())
  )
  const models: ModelCollection = data || {}
  const ids = Object.keys(models)

  return (
    <>
      <Head>
        <title>Model Repository</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Models</h1>
        <div>
          {ids.length === 0 ? (
            '(none)'
          ) : (
            <ul>
              {ids.map((id) => (
                <li key={id}>{id}</li>
              ))}
            </ul>
          )}
        </div>

        <br />
        <Link href="/modeler">
          <button>New</button>
        </Link>
      </main>
    </>
  )
}
