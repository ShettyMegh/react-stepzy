import {
  arrow,
  FloatingArrow,
  offset,
  useFloating,
  type UseFloatingOptions,
} from "@floating-ui/react";
import { cn } from "../utils/cn";
import { useEffect, useRef, type ReactNode } from "react";

const Tooltip = ({
  target,
  tooltipConfig = {
    placement: "bottom",
  },
  content,
}: {
  target: HTMLElement | HTMLButtonElement;
  tooltipConfig?: {
    placement?: UseFloatingOptions["placement"];
  };
  content: ReactNode | string;
}) => {
  const controller = new AbortController();
  const arrowRef = useRef(null);
  const { refs, floatingStyles, context, update } = useFloating({
    middleware: [
      arrow({
        element: arrowRef,
      }),
      offset(7),
    ],
    placement: tooltipConfig.placement || "bottom",
  });

  useEffect(() => {
    if (!target) return;
    refs.setReference(target);
    update();

    const resizeFun = () => {
      update();
    };

    window.addEventListener("resize", resizeFun);

    return () => {
      controller.abort();
    };
  }, [target]);

  if (!target) return null;
  return (
    <div
      ref={refs.setFloating}
      className={cn("tooltip")}
      style={floatingStyles}
    >
      <FloatingArrow ref={arrowRef} context={context} />
      <div className={cn("tooltip-content")}>{content}</div>
    </div>
  );
};

export default Tooltip;
