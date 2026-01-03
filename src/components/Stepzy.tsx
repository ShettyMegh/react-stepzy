import { useEffect, useRef } from "react";
import type { ReactStepzyProps } from "../types/types";
import Spotlight from "./Spotlight";

const ReatStepzy = ({ steps }: ReactStepzyProps) => {
	const ref = useRef<HTMLElement | null>(null);
	useEffect(() => {
		if (steps[0]?.target) {
			ref.current = steps[0]?.target;
		}
	}, [steps]);
	return (
		<div>
			<Spotlight target={ref.current!} />
		</div>
	);
};

export default ReatStepzy;
