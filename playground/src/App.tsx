//@ts-nocheck
import { useState } from "react";
import { MyButton, ReactStepzy } from "../../src";

export function App() {
  const [enabled, setEnabled] = useState(false);
  return (
    <>
      <MyButton type="primary" onRender={() => setEnabled(true)} />

      <ReactStepzy
        config={{
          enabled: enabled,
        }}
        steps={[
          {
            target: document.querySelector(".my-button"),
            content: "slakdm",
          },
        ]}
      />
    </>
  );
}
