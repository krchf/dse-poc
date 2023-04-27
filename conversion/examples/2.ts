export default `<bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:dse="http://dse.krchf.de" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" id="Definitions_1" targetNamespace="http://bpmn.io/schema/bpmn">
<bpmn:process id="Process_1" isExecutable="false">
<bpmn:startEvent id="StartEvent_1">
<bpmn:outgoing>Flow_1y0gu8r</bpmn:outgoing>
</bpmn:startEvent>
<bpmn:sequenceFlow id="Flow_1y0gu8r" sourceRef="StartEvent_1" targetRef="Activity_0785l4d"/>
<bpmn:serviceTask id="Activity_0785l4d" name="make request">
<bpmn:extensionElements>
<dse:service>postman-echo</dse:service>
</bpmn:extensionElements>
<bpmn:incoming>Flow_1y0gu8r</bpmn:incoming>
<bpmn:outgoing>Flow_0ky6km0</bpmn:outgoing>
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
<bpmn:endEvent id="Event_170zkcj">
<bpmn:incoming>Flow_0ky6km0</bpmn:incoming>
</bpmn:endEvent>
<bpmn:sequenceFlow id="Flow_0ky6km0" sourceRef="Activity_0785l4d" targetRef="Event_170zkcj"/>
<bpmn:dataObjectReference id="DataObjectReference_0fpa8g6" name="output" dataObjectRef="DataObject_1ihutwa"/>
<bpmn:dataObject id="DataObject_1ihutwa"/>
<bpmn:dataObjectReference id="DataObjectReference_0sl9h8b" name="someInput" dataObjectRef="DataObject_0ry33ot"/>
<bpmn:dataObject id="DataObject_0ry33ot"/>
</bpmn:process>
<bpmndi:BPMNDiagram id="BPMNDiagram_1">
<bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1">
<bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">
<dc:Bounds x="173" y="102" width="36" height="36"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape id="Activity_1mqt6qa_di" bpmnElement="Activity_0785l4d">
<dc:Bounds x="260" y="80" width="100" height="80"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape id="Event_170zkcj_di" bpmnElement="Event_170zkcj">
<dc:Bounds x="412" y="102" width="36" height="36"/>
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
<bpmndi:BPMNEdge id="Flow_1y0gu8r_di" bpmnElement="Flow_1y0gu8r">
<di:waypoint x="209" y="120"/>
<di:waypoint x="260" y="120"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge id="Flow_0ky6km0_di" bpmnElement="Flow_0ky6km0">
<di:waypoint x="360" y="120"/>
<di:waypoint x="412" y="120"/>
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
</bpmndi:BPMNPlane>
</bpmndi:BPMNDiagram>
</bpmn:definitions>`
