import { useEffect, useState } from "react";

interface MyButtonProps {
  type?: "primary";
  onRender: () => void;
}

export const MyButton: React.FC<MyButtonProps> = ({ type, onRender }) => {
  const [count, setCount] = useState(0);
  const [mount, setMount] = useState(false);

  useEffect(() => {
    if (mount) return;
    setMount(true);
  }, []);

  useEffect(() => {
    if (mount) {
      onRender();
    }
  }, [mount]);

  return (
    <button className="my-button" onClick={() => setCount(count + 1)}>
      my button
      <br /> type: {type}
      <br /> count: {count}
    </button>
  );
};
