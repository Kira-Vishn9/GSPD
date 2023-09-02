import {Button} from "@muiDep/index.ts";
import { Link } from "react-router-dom";

const ButtonSignUp = () => {
    return(
        <>
            <Link to={'/signup'}>
                <Button variant="contained" sx={{marginLeft: '20px'}} >
                    Sign Up
                </Button>
            </Link>
        </>
    )
}

export default ButtonSignUp