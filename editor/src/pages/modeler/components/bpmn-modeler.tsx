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

import magicPropertiesProviderModule from './provider/magic'
import magicModdleDescriptor from './magic-properties/magic.json'

interface ModelerProps {
  xml: string
  onSave: (xml: string) => unknown
}

export default function Modeler(props: ModelerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const modelerRef = useRef<any>(null)

  console.log(
    'magicPropertiesProviderModule',
    typeof magicPropertiesProviderModule,
    magicPropertiesProviderModule.getGroups,
    magicPropertiesProviderModule
  )

  useEffect(() => {
    if (modelerRef.current === null) {
      console.log('Panel ID', panelRef.current?.id)

      modelerRef.current = new BpmnModeler({
        container: containerRef.current,
        // keyboard: {
        //   bindTo: window,
        // },
        propertiesPanel: {
          // parent: panelRef.current?.id,
          parent: '#panel',
        },
        additionalModules: [
          BpmnPropertiesPanelModule,
          BpmnPropertiesProviderModule,
          magicPropertiesProviderModule,
        ],
        // moddleExtensions: {
        //   magic: magicModdleDescriptor,
        // },
      })
    }

    const modeler = modelerRef.current

    if (props.xml) {
      modeler.importXML(props.xml)
    } else {
      modeler.createDiagram()
    }

    return () => {
      // modeler.destroy()
    }
  }, [])

  const triggerSave = () => {
    modelerRef.current.saveXML().then((res) => props.onSave(res.xml))
  }

  const undo = () => {
    modelerRef.current.get('commandStack').undo()
  }

  return (
    <>
      <button onClick={triggerSave}>Save</button>
      <button onClick={undo}>Undo</button>
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
        <div
          id="panel"
          ref={panelRef}
          style={{ width: '275px', height: '100%' }}
        />
      </div>
    </>
  )
}
