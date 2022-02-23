import { useContext } from "react"
import { AppContext } from "./UseContextHookk"

const Name = () => {
    const{username} = useContext(AppContext);
    return(
        <h1>{username}</h1>
    )
}
export default Name;