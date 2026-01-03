export type StepType = {
  content: string;
  target: HTMLElement | null;
};

export type ReactStepzyProps = {
  steps: StepType[];
  config: {
    enabled: boolean;
  };
};

export type SpotlightProps = {
  target: HTMLElement;
};
