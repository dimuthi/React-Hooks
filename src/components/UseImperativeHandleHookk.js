import ChildButton from "./ChildButton";
import { useRef } from "react";
const UseImperativeHandleHookk = () => {
  const buttonRef = useRef(null);
  return (
    <div>
      <button
        onClick={() => {
          buttonRef.current.alterToggle();
        }}
      >
        Button from parent
      </button>
      <ChildButton ref={buttonRef} />
    </div>
  );
};

export default UseImperativeHandleHookk;
