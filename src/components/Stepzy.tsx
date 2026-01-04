import Step from "./Step";
import type { ReactStepzyProps } from "../types/types";
import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";

   /**
    * Main component for creating guided tours
    * @param steps - Array of steps to display
    * @param config - Configuration options
    * @param stepzyObjRef - Optional ref to access controls programmatically
    */

const ReactStepzy = ({
	steps,
	config = {
		enabled: true,
	},
	stepzyObjRef,
}: ReactStepzyProps) => {
	const [stepIdx, setStepIdx] = useState(0);
	const [active, setActive] = useState(false);
	const controls = useMemo(
		() => ({
			next: () => {
				setStepIdx((prev) => Math.min(prev + 1, steps.length - 1));
			},
			prev: () => {
				setStepIdx((prev) => Math.max(prev - 1, 0));
			},
			close: () => {
				setActive(false);
			},
			goTo: (idx: number) => {
				setStepIdx(idx);
			},
		}),
		[steps.length],
	);

	useEffect(() => {
		if (!stepzyObjRef) return;
		stepzyObjRef.current = {
			controls,
			activeIdx: stepIdx,
		};
	}, [stepIdx, controls, stepzyObjRef]);

	useEffect(() => {
		setActive(config.enabled);
	}, [config.enabled]);

	if (!active) return null;

	return (
		<div>
			{createPortal(
				steps.map((step, idx) => (
					<Step
						key={`${step.target}-idx`}
						step={step}
						config={config}
						isActive={stepIdx === idx}
					/>
				)),
				document.body,
			)}
		</div>
	);
};

export default ReactStepzy;
