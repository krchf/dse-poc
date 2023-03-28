import dynamic from 'next/dynamic'
import Head from 'next/head'

export default function Modeler() {
  const BpmnModeler = dynamic(() => import('./components/bpmn-modeler'), {
    ssr: false,
    loading: () => <p>Loading...</p>,
  })

  return (
    <>
      <Head>
        <title>PD-DSS Modeler</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>Hello World!</p>
        <BpmnModeler></BpmnModeler>
      </main>
    </>
  )
}
