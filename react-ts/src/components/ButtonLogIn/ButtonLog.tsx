import { Button } from "@muiDep/index.ts";
import { Link } from "react-router-dom";

const ButtonLog = () => {
    return(
        <>
            <Link to={'/signin'}>
                <Button variant="contained" >
                    LogIn
                </Button>
            </Link>
        </>
    )
}

export default ButtonLog;