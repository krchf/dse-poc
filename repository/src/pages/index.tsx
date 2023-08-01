import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { useQuery } from 'react-query'
import { Model, ModelCollection, modelRepository } from '../data'
import Link from 'next/link'
import { useEffect, useState } from 'react'

// TODO externalize
const MODELER_URL = 'http://localhost:5173/?id='

export default function Home() {
  const {
    isLoading,
    isError,
    data: models,
    error,
  } = useQuery<ModelCollection>('models', () =>
    fetch('/api/models').then((res) => res.json())
  )

  const [newId, setNewId] = useState('ID')

  return (
    <>
      <Head>
        <title>Model Repository</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Models</h1>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <div>
              <ul>
                {Object.entries(models as ModelCollection).map(
                  ([id, model]) => (
                    <li key={model.name}>
                      <a href={`${MODELER_URL}${id}`} target="_blank">
                        {model.name}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
            <br />
            <input
              type="text"
              placeholder="ID"
              onChange={(e) => setNewId(e.target.value)}
            />
            <a href={`${MODELER_URL}${newId}`} target="_blank">
              <button>New</button>
            </a>
          </>
        )}
      </main>
    </>
  )
}
