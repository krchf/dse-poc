export default `<bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:dse="http://dse.krchf.de" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" id="Definitions_1" targetNamespace="http://bpmn.io/schema/bpmn">
<bpmn:process id="Process_1" isExecutable="false">
<bpmn:startEvent id="StartEvent_1">
<bpmn:outgoing>Flow_1y0gu8r</bpmn:outgoing>
</bpmn:startEvent>
<bpmn:sequenceFlow id="Flow_1y0gu8r" sourceRef="StartEvent_1" targetRef="Activity_0785l4d"/>
<bpmn:serviceTask id="Activity_0785l4d" name="make first request">
<bpmn:extensionElements>
<dse:service>postman-echo</dse:service>
</bpmn:extensionElements>
<bpmn:incoming>Flow_1y0gu8r</bpmn:incoming>
<bpmn:outgoing>Flow_10x42dl</bpmn:outgoing>
<bpmn:property id="Property_19f66xs" name="__targetRef_placeholder"/>
<bpmn:dataInputAssociation id="DataInputAssociation_02pyx3j">
<bpmn:extensionElements>
<dse:target>abc</dse:target>
</bpmn:extensionElements>
<bpmn:sourceRef>DataObjectReference_0sl9h8b</bpmn:sourceRef>
<bpmn:targetRef>Property_19f66xs</bpmn:targetRef>
</bpmn:dataInputAssociation>
<bpmn:dataOutputAssociation id="DataOutputAssociation_0ncv2c6">
<bpmn:extensionElements>
<dse:source>data</dse:source>
</bpmn:extensionElements>
<bpmn:targetRef>DataObjectReference_0fpa8g6</bpmn:targetRef>
</bpmn:dataOutputAssociation>
</bpmn:serviceTask>
<bpmn:dataObjectReference id="DataObjectReference_0fpa8g6" name="output" dataObjectRef="DataObject_1ihutwa"/>
<bpmn:dataObject id="DataObject_1ihutwa"/>
<bpmn:dataObjectReference id="DataObjectReference_0sl9h8b" name="someInput" dataObjectRef="DataObject_0ry33ot"/>
<bpmn:dataObject id="DataObject_0ry33ot"/>
<bpmn:sequenceFlow id="Flow_10x42dl" sourceRef="Activity_0785l4d" targetRef="Activity_12s00ir"/>
<bpmn:endEvent id="Event_0xaeqaw">
<bpmn:incoming>Flow_1297rp2</bpmn:incoming>
</bpmn:endEvent>
<bpmn:sequenceFlow id="Flow_1297rp2" sourceRef="Activity_12s00ir" targetRef="Event_0xaeqaw"/>
<bpmn:dataObjectReference id="DataObjectReference_1qpjokv" name="finalOutput" dataObjectRef="DataObject_0yp04z9"/>
<bpmn:dataObject id="DataObject_0yp04z9"/>
<bpmn:serviceTask id="Activity_12s00ir" name="make second request">
<bpmn:extensionElements>
<dse:service>postman-echo</dse:service>
</bpmn:extensionElements>
<bpmn:incoming>Flow_10x42dl</bpmn:incoming>
<bpmn:outgoing>Flow_1297rp2</bpmn:outgoing>
<bpmn:property id="Property_1xakldu" name="__targetRef_placeholder"/>
<bpmn:dataInputAssociation id="DataInputAssociation_0h7mnw3">
<bpmn:extensionElements>
<dse:target>whatever</dse:target>
</bpmn:extensionElements>
<bpmn:sourceRef>DataObjectReference_0fpa8g6</bpmn:sourceRef>
<bpmn:targetRef>Property_1xakldu</bpmn:targetRef>
</bpmn:dataInputAssociation>
<bpmn:dataOutputAssociation id="DataOutputAssociation_1y709b5">
<bpmn:extensionElements>
<dse:source>data</dse:source>
</bpmn:extensionElements>
<bpmn:targetRef>DataObjectReference_1qpjokv</bpmn:targetRef>
</bpmn:dataOutputAssociation>
</bpmn:serviceTask>
</bpmn:process>
<bpmndi:BPMNDiagram id="BPMNDiagram_1">
<bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1">
<bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">
<dc:Bounds x="173" y="102" width="36" height="36"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape id="Activity_1mqt6qa_di" bpmnElement="Activity_0785l4d">
<dc:Bounds x="260" y="80" width="100" height="80"/>
<bpmndi:BPMNLabel/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape id="DataObjectReference_0fpa8g6_di" bpmnElement="DataObjectReference_0fpa8g6">
<dc:Bounds x="382" y="5" width="36" height="50"/>
<bpmndi:BPMNLabel>
<dc:Bounds x="385" y="62" width="31" height="14"/>
</bpmndi:BPMNLabel>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape id="DataObjectReference_0sl9h8b_di" bpmnElement="DataObjectReference_0sl9h8b">
<dc:Bounds x="192" y="5" width="36" height="50"/>
<bpmndi:BPMNLabel>
<dc:Bounds x="184" y="62" width="52" height="14"/>
</bpmndi:BPMNLabel>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape id="Event_0xaeqaw_di" bpmnElement="Event_0xaeqaw">
<dc:Bounds x="582" y="102" width="36" height="36"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape id="DataObjectReference_1qpjokv_di" bpmnElement="DataObjectReference_1qpjokv">
<dc:Bounds x="532" y="5" width="36" height="50"/>
<bpmndi:BPMNLabel>
<dc:Bounds x="524" y="62" width="53" height="14"/>
</bpmndi:BPMNLabel>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape id="Activity_1ax1pxr_di" bpmnElement="Activity_12s00ir">
<dc:Bounds x="420" y="80" width="100" height="80"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNEdge id="Flow_1y0gu8r_di" bpmnElement="Flow_1y0gu8r">
<di:waypoint x="209" y="120"/>
<di:waypoint x="260" y="120"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge id="DataOutputAssociation_0ncv2c6_di" bpmnElement="DataOutputAssociation_0ncv2c6">
<di:waypoint x="310" y="80"/>
<di:waypoint x="310" y="25"/>
<di:waypoint x="382" y="25"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge id="DataInputAssociation_02pyx3j_di" bpmnElement="DataInputAssociation_02pyx3j">
<di:waypoint x="228" y="30"/>
<di:waypoint x="290" y="30"/>
<di:waypoint x="290" y="80"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge id="Flow_10x42dl_di" bpmnElement="Flow_10x42dl">
<di:waypoint x="360" y="120"/>
<di:waypoint x="420" y="120"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge id="Flow_1297rp2_di" bpmnElement="Flow_1297rp2">
<di:waypoint x="520" y="120"/>
<di:waypoint x="582" y="120"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge id="DataInputAssociation_0h7mnw3_di" bpmnElement="DataInputAssociation_0h7mnw3">
<di:waypoint x="418" y="30"/>
<di:waypoint x="460" y="30"/>
<di:waypoint x="460" y="80"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge id="DataOutputAssociation_1y709b5_di" bpmnElement="DataOutputAssociation_1y709b5">
<di:waypoint x="480" y="80"/>
<di:waypoint x="480" y="25"/>
<di:waypoint x="532" y="25"/>
</bpmndi:BPMNEdge>
</bpmndi:BPMNPlane>
</bpmndi:BPMNDiagram>
</bpmn:definitions>`
