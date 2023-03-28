import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";

import BpmnModeler from "bpmn-js/lib/Modeler";
import "bpmn-js/dist/assets/diagram-js.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css";
import { emptyBpmn } from "./empty-bpmn";

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const modelerRef = useRef(null);

  useEffect(() => {
    const modeler = (modelerRef.current = new BpmnModeler({
      container: containerRef.current,
    }));

    modeler.importXML(emptyBpmn).then(console.log).catch(console.error);

    return () => {
      modeler.destroy();
    };
  }, []);

  return <div ref={containerRef}></div>;
}

export default App;
