import  axios from "axios";
import { useEffect, useState } from "react";

const UseEffectHookk = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments").then((response) => {
      setData(response.data[0].email);
    });
    console.log("API calling");
  },[]);

  return (
    <div>
      <h1>{data}</h1>
    </div>
  );
};

export default UseEffectHookk;
