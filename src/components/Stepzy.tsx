import type { ReactStepzyProps } from "../types/types";
import Spotlight from "./Spotlight";
import Tooltip from "./Tooltip";

const ReatStepzy = ({
  steps,
  config = {
    enabled: true,
  },
}: ReactStepzyProps) => {
  if (!config.enabled) return null;
  return (
    <div>
      <Spotlight target={steps[0]?.target!} />
      <Tooltip
        target={steps[0]?.target!}
        tooltipConfig={config?.tooltipConfig || {}}
        content={steps[0]?.content}
      />
    </div>
  );
};

export default ReatStepzy;
