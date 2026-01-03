import { useEffect, useRef } from "react";
import type { ReactStepzyProps } from "../types/types";
import Spotlight from "./Spotlight";

const ReatStepzy = ({ steps, config }: ReactStepzyProps) => {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    if (ref.current) return;
    setTimeout(() => {
      if (steps[0]?.target) {
        ref.current = steps[0]?.target;
      }
    }, 1000);
  }, [steps, config.enabled]);
  return (
    <div>
      <Spotlight target={ref.current!} />
    </div>
  );
};

export default ReatStepzy;
