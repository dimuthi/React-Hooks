import { useContext } from "react";
import { AppContext } from "./UseContextHookk";

const Login = () => {
  const { setUserName } = useContext(AppContext);
  return (<input onChange={(event) => setUserName(event.target.value)} />);
};

export default Login;
