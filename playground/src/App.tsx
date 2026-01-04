import { useEffect, useRef, useState } from "react";
import { MyButton, ReactStepzy, type StepzyObjRef } from "../../src";

const TooltipFooter = ({
  controls,
  isLast = false,
}: {
  controls?: StepzyObjRef["controls"];
  isLast?: boolean;
}) => {
  return (
    <div>
      <button
        onClick={() => {
          controls?.prev();
        }}
      >
        Prev
      </button>
      <button
        onClick={() => {
          if (isLast) {
            controls?.close();
            return;
          }
          controls?.next();
        }}
      >
        {isLast ? "Done" : "Next"}
      </button>
    </div>
  );
};

export function App() {
  const [enabled, setEnabled] = useState(false);
  const stepzyRefObj = useRef<StepzyObjRef>(null);
  const controls = stepzyRefObj.current?.controls;
  useEffect(() => {
    console.log(stepzyRefObj.current);
  }, [stepzyRefObj.current]);
  return (
    <>
      <div
        id="testing"
        style={{
          width: "80vw",
          height: "200px",
          background: "red",
          minWidth: "300px",
          marginBottom: "800px",
        }}
      >
        Hello
      </div>
      <MyButton type="primary" onRender={() => setEnabled(true)} />
      <ReactStepzy
        stepzyObjRef={stepzyRefObj}
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
                <TooltipFooter controls={controls} />
              </div>
            ),
          },
          {
            target: document.querySelector("#testing"),
            content: (
              <div
                style={{
                  background: "white",
                  color: "black",
                  borderRadius: "3px",
                }}
              >
                This is tooltip content
                <TooltipFooter controls={controls} isLast />
              </div>
            ),
          },
        ]}
      />
    </>
  );
}
