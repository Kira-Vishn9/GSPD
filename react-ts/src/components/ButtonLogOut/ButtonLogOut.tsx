import {Button} from "@muiDep/index.ts";
import {useContext} from "react";
import {authContext} from "@context/AuthContext.ts";

const ButtonLogOut = () => {
    const {  setAuth } = useContext(authContext);

    const logout = () => {
        setAuth(false)
    }

    return(
        <>
            <Button
                onClick={logout}
                variant="contained" >
                Log Out
            </Button>
        </>
    )
}

export default ButtonLogOut