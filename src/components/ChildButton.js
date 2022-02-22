import { useState, useImperativeHandle, forwardRef } from "react";

const ChildButton = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);
  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle(!toggle);
    },
  }));
  return (
    <div>
      <button>Button from child</button>
      {toggle && <h1>UCSC</h1>}
    </div>
  );
});

export default ChildButton;
