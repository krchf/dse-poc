import Head from 'next/head'
import { useEffect, useRef } from 'react'
import BpmnModeler from 'bpmn-js/lib/Modeler'

import 'bpmn-js/dist/assets/diagram-js.css'
import 'bpmn-js/dist/assets/bpmn-js.css'
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css'

export default function Modeler() {
  const canvasRef = useRef(null)
  const modelerRef = useRef(null)

  useEffect(() => {
    modelerRef.current = new BpmnModeler({
      container: canvasRef.current,
    })

    modelerRef.current.createDiagram()

    return () => {
      modelerRef.current.destroy()
    }
  }, [])

  return (
    <>
      <Head>
        <title>PD-DSS Modeler</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>Hello World!</p>
        <div ref={canvasRef} style={{ width: '100%', height: '100%' }} />
      </main>
    </>
  )
}
