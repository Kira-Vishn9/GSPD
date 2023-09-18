import styles from './style.module.css'
import {Box, TextField, Button} from "@muiDep/index.ts";
import * as Links from 'react-router-dom'
import {SubmitHandler, useForm} from "react-hook-form";
import React, {useContext} from "react";
import GoogleAuth from '../GoogleAuth/GoogleAuth.tsx'
import {handleLogIn} from "@/service";
import {authContext} from "@context/AuthContext.ts";
import {useNavigate} from 'react-router-dom'


type Inputs ={
    mail: string,
    password: string,
};
const SignIn = () => {
    const { setAuth} = useContext(authContext)
    const navigate = useNavigate();
    const { register, handleSubmit} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
        const status = await handleLogIn(data)
        if(status === 200) {
            setAuth(true)
            navigate('/*', { replace: true })
        }
    }

    return(
        <div className={styles.wrap}>
            <GoogleAuth />
            <h2>
                Sign In
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
                <TextField id="standard-basic" label="Password" variant="standard" {...register("password")} />
                <span className={styles.strSign}>
                    <pre>
                        If you haven't account_
                        <Links.Link to="/signup">
                              Sign Up
                        </Links.Link>
                    </pre>
                </span>
                    <Button type="submit" variant="outlined" color='primary'>
                        Enter
                    </Button>
            </Box>
        </div>
    )
}

export default SignIn;