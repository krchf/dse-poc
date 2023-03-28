import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'

export default function Modeler() {
  console.log('Modeler')

  const containerRef = useRef<HTMLDivElement>(null)
  // const [modeler, setModeler] = useState(null)

  useEffect(() => {
    console.log('useEffect')
    console.log(containerRef.current)

    const modeler = new BpmnJS({
      container: containerRef.current,
      // keyboard: {
      //   bindTo: window,
      // },
    })
    modeler.on('import.done', console.log)

    return () => {
      console.log('destroy')
      modeler.destroy()

      // ;(modeler as any).destroy()
    }
  }, [])

  return (
    <>
      <Head>
        <title>PD-DSS Modeler</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* see: https://github.com/bpmn-io/bpmn-js-examples/tree/master/pre-packaged */}
        <link
          rel="stylesheet"
          href="https://unpkg.com/bpmn-js@11.5.0/dist/assets/diagram-js.css"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/bpmn-js@11.5.0/dist/assets/bpmn-js.css"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/bpmn-js@11.5.0/dist/assets/bpmn-font/css/bpmn.css"
        />
        <script src="https://unpkg.com/bpmn-js@11.5.0/dist/bpmn-modeler.development.js"></script>
      </Head>
      <main>
        <p>Hello World!</p>
        <div ref={containerRef} style={{ width: '500px', height: '500px' }} />
      </main>
    </>
  )
}
