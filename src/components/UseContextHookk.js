import { createContext, useState } from "react";
import Login from "./Login";
import Name from "./Name";

export const AppContext = createContext(null);
const UseContextHookk = () => {

    const[username, setUserName] = useState("");
    return (
        <AppContext.Provider value={{username, setUserName}}>
            <Login />
            <Name/>
        </AppContext.Provider>
    )
};
export default UseContextHookk;
