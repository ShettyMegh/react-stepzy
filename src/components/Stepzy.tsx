import { useEffect, useState } from "react";
import type { ReactStepzyProps } from "../types/types";
import Step from "./Step";
import { createPortal } from "react-dom";

const ReatStepzy = ({
  steps,
  config = {
    enabled: true,
  },
  stepzyObjRef,
}: ReactStepzyProps) => {
  const [stepIdx, setStepIdx] = useState(0);
  const [active, setActive] = useState(false);
  const controls = {
    next: () => {
      setStepIdx((prev) => Math.min(prev + 1, steps.length - 1));
    },
    prev: () => {
      setStepIdx((prev) => Math.max(prev - 1, 0));
    },
    close: () => {
      setActive(false);
    },
  };

  useEffect(() => {
    if (!stepzyObjRef) return;
    console.log("running");

    stepzyObjRef.current = {
      controls,
      activeIdx: stepIdx,
    };
  }, [stepIdx]);

  useEffect(() => {
    setActive(config.enabled);
  }, [config.enabled]);

  if (!active) return null;

  return (
    <div>
      {createPortal(
        <>
          {steps.map((step, idx) => (
            <Step
              key={`${step.target}-idx`}
              step={step}
              config={config}
              isActive={stepIdx === idx}
            />
          ))}
        </>,
        document.body
      )}
    </div>
  );
};

export default ReatStepzy;
