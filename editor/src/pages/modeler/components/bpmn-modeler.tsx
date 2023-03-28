import { useEffect, useRef } from 'react'
import BpmnModeler from 'bpmn-js/lib/Modeler'
import {
  BpmnPropertiesPanelModule,
  BpmnPropertiesProviderModule,
} from 'bpmn-js-properties-panel'

import 'bpmn-js/dist/assets/diagram-js.css'
import 'bpmn-js/dist/assets/bpmn-js.css'
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css'
import 'bpmn-js-properties-panel/dist/assets/properties-panel.css'
import 'bpmn-js-properties-panel/dist/assets/element-templates.css'

interface ModelerProps {
  onSave: (xml: string) => unknown
}

export default function Modeler(props: ModelerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const modelerRef = useRef(null)

  useEffect(() => {
    const modeler = new BpmnModeler({
      container: containerRef.current,
      // keyboard: {
      //   bindTo: window,
      // },
      propertiesPanel: {
        parent: panelRef.current,
      },
      additionalModules: [
        BpmnPropertiesPanelModule,
        BpmnPropertiesProviderModule,
      ],
    })
    modeler.createDiagram()
    modelerRef.current = modeler

    return () => {
      modeler.destroy()
    }
  }, [])

  const triggerSave = () => {
    modelerRef.current.saveXML().then((res) => props.onSave(res.xml))
    // props.onSave(xml)
  }

  return (
    <>
      <button onClick={triggerSave}>Save</button>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          height: '100%',
        }}
      >
        <div
          ref={containerRef}
          style={{
            width: '100%',
            height: '100%',
            borderRight: '0.1em solid lightgrey',
          }}
        />
        <div ref={panelRef} style={{ width: '275px', height: '100%' }} />
      </div>
    </>
  )
}
