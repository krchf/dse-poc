# Data Associations

for each service:

- output association: map ID of Data Object Reference (provided as `bpmn:targetRef`) to "source", i.e. (`bpmn:task[id]`, `dse.source`)
  - e.g. `store("DataObjectReference_0ejl8jw", "Activity_1bj7zo7", "i")`
- input association: lookup "source" based on ID of Data Object Reference (provided as ``)
  - e.g., `lookup("DataObjectReference_0ejl8jw")`

**FEEL-Changes**

> TODO FEEL-Expressions: Data Object vs. Service Output?

```
"processInput", ".", processInput
"activityId", ".",
```

---

**Alternative**

store service outputs as variable name specified as `name` of Data Object Reference -> no need to change FEEL conditions

Implications:

- "global store": no separation into `processInputs` and `[Service-ID]`
- TODO sub-process
- visual mark for data input/output necessary?

## Example XML

```xml
<!-- OUTPUT -->
<bpmn:task id="Activity_1bj7zo7" name="first">
  <bpmn:dataOutputAssociation id="DataOutputAssociation_03pr6ry">
    <bpmn:extensionElements>
      <dse:source>i</dse:source>
    </bpmn:extensionElements>
    <bpmn:targetRef>DataObjectReference_0ejl8jw</bpmn:targetRef>
  </bpmn:dataOutputAssociation>
</bpmn:task>

<!-- INPUT -->
<bpmn:serviceTask id="Activity_0wkhhns" name="second">
  <!-- ... -->
  <bpmn:dataInputAssociation id="DataInputAssociation_1s8y78k">
    <bpmn:extensionElements>
      <dse:target>o</dse:target>
    </bpmn:extensionElements>
    <bpmn:sourceRef>DataObjectReference_0ejl8jw</bpmn:sourceRef>
    <bpmn:targetRef>Property_1mvrw5o</bpmn:targetRef>
  </bpmn:dataInputAssociation>
  <!-- ... -->
</bpmn:serviceTask>

<bpmn:dataObjectReference id="DataObjectReference_0ejl8jw" name="data" dataObjectRef="DataObject_1sacfiu"/>
<bpmn:dataObject id="DataObject_1sacfiu"/>
```
