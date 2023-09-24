import DarkAndWhite from "@components/DarkAndWhite/DarkAndWhite.tsx";
import ButtonLog from "@components/ButtonLogIn/ButtonLog.tsx";
import {Typography, Box} from "@muiDep/index.ts"
import img from '../../assets/bg-image.png';
import styles from './style.module.css';
import InputSearch from "@components/InputSearch/InputSearch.tsx";
import {ColorModeContext} from "@context/ColorModeContext.ts";
import {useContext} from "react";
import React from 'react'
import ButtonSignUp from "@components/ButtonSignUp/ButtonSignUp.tsx";
import {authContext} from "@context/AuthContext.ts";
import AccountMenu from "@components/AccoutMenu/AccountMenu.tsx";
import { Link as RouterLink } from 'react-router-dom';



const Header = () => {
    const { mode } = useContext(ColorModeContext);
    const { auth } = useContext(authContext);
    const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();
    return(
        <>
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', m: '0px 120px', typography: 'body1', contain: 'content', p: "0 20px"}}>
                <RouterLink to={'/main'} >
                    <Typography variant="h2">4Ask</Typography>
                </RouterLink>
                <nav>
                    <Box
                        sx={{
                            typography: 'body1',
                            '& > :not(style) ~ :not(style)': {
                                ml: 2,
                            },
                        }}
                        onClick={preventDefault}
                    >
                        <RouterLink to="/home">Home</RouterLink>
                        <RouterLink to="/Game">Games</RouterLink>
                        <RouterLink to="/Movie">Movies</RouterLink>
                        <RouterLink to="/Book">Books</RouterLink>
                        <RouterLink to="#/about">About us</RouterLink>
                    </Box   >
                </nav>
                <div><DarkAndWhite /></div>
                <Box sx={{display: 'flex'}}>
                    {auth ? (
                        <AccountMenu />
                    ) : (
                        <div>
                            <ButtonLog />
                            <ButtonSignUp />
                        </div>
                    )}
                </Box>
            </Box>
            <div className={styles.wrap}>
                <InputSearch />
                <img className={styles.bgImage} src={img}/>
            </div>
        </>
    )
}

export default Header;