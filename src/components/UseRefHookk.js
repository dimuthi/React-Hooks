import { useRef } from "react";

const UseRefHookk = () => {
    const inputRef = useRef(null);
    return (
        <div>
            <input type="text" ref={inputRef}></input>
            <button onClick={() => inputRef.current.value = ""}>Clear</button>
        </div>
    )
}

export default UseRefHookk;