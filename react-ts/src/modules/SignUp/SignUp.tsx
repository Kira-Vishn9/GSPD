import styles from "../SignIn/style.module.css";
import {Box, Button, TextField} from "@muiDep/index.ts";
import * as Links from 'react-router-dom'
import { useForm, SubmitHandler } from "react-hook-form";
import React, {useContext} from "react";
import {handleRegistration} from "@/service";
import {authContext} from "@context/AuthContext.ts";
import {useNavigate} from 'react-router-dom'

type Inputs ={
    mail: string,
    password: string,
};
const SignUp = () => {
    const { setAuth} = useContext(authContext)
    const { register, handleSubmit } = useForm<Inputs>();
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
       const status = await handleRegistration(data)
        if(status === 200) {
            setAuth(true)
            navigate('/*', { replace: true });
        }
    }

    return(
            <div className={styles.wrap}>
                <h2>
                    Sign Up
                </h2>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch', mt: 3, display: 'flex' },
                    }}
                    noValidate
                    autoComplete="off"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <TextField id="standard-basic" label="Email" variant="standard" {...register("mail", { required: true, pattern: /^\S+@\S+$/i })} />
                    <TextField id="standard-basic" label="Password" variant="standard" {...register("password",{required: true, pattern: /\w+/})} />
                    <span className={styles.strSign}>
                        <pre>
                            If you have account_
                            <Links.Link to="/signin">
                                 Sign In
                            </Links.Link>
                        </pre>
                    </span>
                    <Button
                        type="submit"
                        variant="outlined" color='primary'>
                        Enter
                    </Button>
                </Box>
        </div>
    )
}

export default SignUp