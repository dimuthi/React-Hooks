import { useState } from "react";

const UseStateHookk = () => {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("");
  const clickHndler = () => {
    setNumber(number + 1);
  };
  const changeHandler = (event) => {
    setName(event.target.value);
  };
  return (
    <div>
      <div>
        <h1>{number}</h1>
        <button onClick={clickHndler}> Increment </button>
      </div>
      <div>
        <input type="text" onChange={changeHandler}></input>
        <label>{name}</label>
      </div>
    </div>
  );
};

export default UseStateHookk;
