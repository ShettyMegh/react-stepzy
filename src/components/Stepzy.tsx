import type { ReactStepzyProps } from "../types/types";
import Spotlight from "./Spotlight";

const ReatStepzy = ({ steps, config }: ReactStepzyProps) => {
  if (!config.enabled) return null;
  return (
    <div>
      <Spotlight target={steps[0]?.target!} />
    </div>
  );
};

export default ReatStepzy;
