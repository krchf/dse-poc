import { useEffect, useRef } from 'react'
import BpmnModeler from 'bpmn-js/lib/Modeler'

import 'bpmn-js/dist/assets/diagram-js.css'
import 'bpmn-js/dist/assets/bpmn-js.css'
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css'

export default function Modeler() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const modeler = new BpmnModeler({
      container: containerRef.current,
      // keyboard: {
      //   bindTo: window,
      // },
    })
    modeler.createDiagram()

    return () => {
      modeler.destroy()
    }
  }, [])

  return <div ref={containerRef} style={{ width: '500px', height: '500px' }} />
}
