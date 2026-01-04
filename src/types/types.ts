import type { UseFloatingOptions } from "@floating-ui/react-dom";

export type StepType = {
  content: string;
  target: HTMLElement | null;
};

export type ReactStepzyProps = {
  steps: StepType[];
  config: {
    enabled: boolean;
    delay?: number;
    tooltipConfig?: {
      placement: UseFloatingOptions["placement"];
    };
  };
};

export type SpotlightProps = {
  target: HTMLElement;
};
