import { useEffect, useState } from "react";
import type { SpotlightProps } from "../types/types";
import { cn } from "../utils/cn";

const Spotlight = ({ target }: SpotlightProps) => {
	const [targetSize, setTargetSize] = useState<null | {
		height: number;
		width: number;
		top: number;
		left: number;
	}>(null);

	console.log({ target });

	useEffect(() => {
		if (!target) return;

		const rect = target.getBoundingClientRect();
		setTargetSize({
			height: rect.height,
			width: rect.width,
			top: rect.top,
			left: rect.left,
		});
	}, [target]);

	return (
		<div
			className={cn("spotlight")}
			style={{
				...targetSize,
			}}
		/>
	);
};

export default Spotlight;
