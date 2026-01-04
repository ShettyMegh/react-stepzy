import type { StepType, StepzyConfig } from "../types/types";
import Spotlight from "./Spotlight";
import Tooltip from "./Tooltip";

const Step = ({
  step,
  isActive = false,
  config,
}: {
  step: StepType;
  config?: StepzyConfig;
  isActive: boolean;
}) => {
  if (!isActive) return;
  return (
    <>
      <Spotlight target={step.target!} />
      <Tooltip
        target={step.target!}
        tooltipConfig={config?.tooltipConfig || {}}
        content={step.content}
      />
    </>
  );
};

export default Step;
