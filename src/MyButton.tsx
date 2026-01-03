import { useEffect, useRef, useState } from "react";

interface MyButtonProps {
  type?: "primary";
  onRender: () => void;
}

export const MyButton: React.FC<MyButtonProps> = ({ type, onRender }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLButtonElement | undefined>(undefined);
  useEffect(() => {
    if (!ref.current) return;
    onRender();
  }, [ref.current]);
  return (
    <button
      className="my-button"
      ref={ref as any}
      onClick={() => setCount(count + 1)}
    >
      my button
      <br /> type: {type}
      <br /> count: {count}
    </button>
  );
};
