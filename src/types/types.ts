import type { UseFloatingOptions } from "@floating-ui/react-dom";
import type { ReactNode, RefObject } from "react";

export type StepType = {
  content: string | ReactNode;
  target: HTMLElement | null;
};

export type StepzyObjRef = {
  activeIdx: number;
  controls: {
    next: () => void;
    prev: () => void;
    close: () => void;
    goTo: (idx: number) => void;
  };
};

export type StepzyConfig = {
  enabled: boolean;
  delay?: number;
  tooltipConfig?: {
    placement: UseFloatingOptions["placement"];
  };
};

export type ReactStepzyProps = {
  steps: StepType[];
  config: StepzyConfig;
  stepzyObjRef?: RefObject<StepzyObjRef | null>;
};

export type SpotlightProps = {
  target: HTMLElement;
};
