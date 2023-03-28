import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { useQuery } from 'react-query'
import { Model, ModelCollection, modelRepository } from '../data'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home() {
  // const { isLoading, isError, data, error } = useQuery('models', () =>
  //   fetch('/models').then((res) => res.json())
  // )
  // const models: ModelCollection = data || {}
  // const ids = Object.keys(models)

  const [models, setModels] = useState<Model[]>([])

  useEffect(() => {
    setModels(modelRepository.readAll())
  }, [])

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
          {models.length === 0 ? (
            '(none)'
          ) : (
            <ul>
              {models.map((model) => (
                <li key={model.name}>{model.name}</li>
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
