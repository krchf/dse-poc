import {
  TextFieldEntry,
  isTextFieldEntryEdited,
} from "@bpmn-io/properties-panel";
import { useService } from "bpmn-js-properties-panel";

export default function (element) {
  return [
    {
      id: "spell",
      element,
      component: Spell,
      isEdited: isTextFieldEntryEdited,
    },
  ];
}

function getExtensionElement(element, type) {
  if (!element.extensionElements) {
    return;
  }

  return element.extensionElements.values.filter((extensionElement) => {
    return extensionElement.$instanceOf(type);
  })[0];
}

function Spell(props) {
  const { element, id } = props;

  const moddle = useService("moddle"); // bpmnModeler.get('moddle') ??
  const modeling = useService("modeling");
  const translate = useService("translate");
  const debounce = useService("debounceInput");

  const getValue = () => {
    // return element.businessObject.spell || "";
    const extensions = getExtensionElement(
      element.businessObject,
      "magic:BewitchedStartEvent"
    );
    return extensions ? extensions.spell : "";
  };

  const setValue = (value) => {
    // return modeling.updateProperties(element, {
    //   spell: value,
    // });

    const extensionElements =
      element.businessObject.extensionElements ||
      moddle.create("bpmn:ExtensionElements");

    let bewitched = getExtensionElement(
      element.businessObject,
      "magic:BewitchedStartEvent"
    );

    if (!bewitched) {
      bewitched = moddle.create("magic:BewitchedStartEvent");
    }
    bewitched.spell = value;
    extensionElements.get("values").push(bewitched);

    return modeling.updateProperties(element, {
      extensionElements,
    });
  };

  return (
    <TextFieldEntry
      id={id}
      element={element}
      description={translate("Apply a black magic spell")}
      label={translate("Spell")}
      getValue={getValue}
      setValue={setValue}
      debounce={debounce}
    />
  );
}
