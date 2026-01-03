export type StepType = {
	content: string;
	target: HTMLElement | null;
};

export type ReactStepzyProps = {
	steps: StepType[];
};

export type SpotlightProps = {
	target: HTMLElement;
};
