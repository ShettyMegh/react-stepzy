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

  const handleTargetSize = () => {
    const rect = target.getBoundingClientRect();

    const raidus = window
      .getComputedStyle(target)
      .getPropertyValue("border-radius");

    target.scrollIntoView({
      behavior: "smooth",
    });

    setTargetSize({
      height: rect.height,
      width: rect.width,
      top: rect.top,
      left: rect.left,
      borderRadius: raidus,
    });
  };

  useEffect(() => {
    if (!target) {
      console.error("Target Not Found", target);
      return;
    }
    document.body.style.overflow = "hidden";

    handleTargetSize();

    window.addEventListener("resize", handleTargetSize);
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("resize", handleTargetSize);
    };
  }, []);

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
