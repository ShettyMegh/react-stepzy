import { createPortal } from "react-dom";
import { cn } from "../utils/cn";

const Overlay = () => {
  return createPortal(<div className={cn("overlay")} />, document.body);
};

export default Overlay;
