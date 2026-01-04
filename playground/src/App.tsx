//@ts-nocheck
import { useEffect, useState } from "react";
import { MyButton, ReactStepzy } from "../../src";

export function App() {
  const [enabled, setEnabled] = useState(false);
  return (
    <>
      <MyButton type="primary" onRender={() => setEnabled(true)} />
      <ReactStepzy
        config={{
          enabled,
          tooltipConfig: {
            placement: "right",
          },
        }}
        steps={[
          {
            target: document.querySelector(".my-button"),
            content: (
              <div
                style={{
                  background: "white",
                  color: "black",
                  borderRadius: "3px",
                }}
              >
                This is tooltip content
              </div>
            ),
          },
        ]}
      />
    </>
  );
}
