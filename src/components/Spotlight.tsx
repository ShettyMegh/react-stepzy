import { useEffect, useState } from "react";
import type { SpotlightProps } from "../types/types";
import { cn } from "../utils/cn";

const Spotlight = ({ target }: SpotlightProps) => {
  const [targetSize, setTargetSize] = useState<null | {
    height: number;
    width: number;
    top: number;
    left: number;
    borderRadius: string;
  }>(null);

  useEffect(() => {
    if (!target) {
      console.error("Target Not Found", target);
      return;
    }

    const rect = target.getBoundingClientRect();

    const raidus = window
      .getComputedStyle(target)
      .getPropertyValue("border-radius");

    setTargetSize({
      height: rect.height,
      width: rect.width,
      top: rect.top,
      left: rect.left,
      borderRadius: raidus,
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
