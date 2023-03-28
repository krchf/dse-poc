import { Model, modelRepository } from '@/data'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useEffect, useState } from 'react'

const BpmnModeler = dynamic(() => import('./components/bpmn-modeler'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
})

export default function Modeler() {
  const [model, setModel] = useState(emptyModel)

  useEffect(() => {
    console.log('useEffect')
    const storedModel = modelRepository.read('test')
    if (storedModel) {
      setModel(storedModel)
    }
  }, [])

  const saveModel = (xml: string) => {
    const model: Model = {
      name: 'test',
      xml,
    }
    modelRepository.write('test', model)
    setModel(model)
  }

  return (
    <>
      <Head>
        <title>PD-DSS Modeler</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ width: '100vw', height: '95vh' }}>
        <BpmnModeler xml={model.xml} onSave={saveModel}></BpmnModeler>
      </main>
    </>
  )
}

const emptyModel: Model = {
  name: 'test',
  xml: '<?xml version="1.0" encoding="UTF-8"?>\n<bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" id="Definitions_1" targetNamespace="http://bpmn.io/schema/bpmn"><bpmn:process id="Process_1" isExecutable="false"><bpmn:startEvent id="StartEvent_1" /></bpmn:process><bpmndi:BPMNDiagram id="BPMNDiagram_1"><bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1"><bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1"><dc:Bounds x="173" y="102" width="36" height="36" /></bpmndi:BPMNShape></bpmndi:BPMNPlane></bpmndi:BPMNDiagram></bpmn:definitions>',
}
