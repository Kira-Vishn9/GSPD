import DarkAndWhite from "@components/DarkAndWhite/DarkAndWhite.tsx";
import ButtonLog from "@components/ButtonLog/ButtonLog.tsx";
import {Box} from "@muiDep/index.ts";
import {Link} from "@muiDep/index.ts"
import {Typography} from "@mui/material";
import img from '../../assets/bg-image.png';
import imgLight from '../../assets/planet.jpg';
import styles from './style.module.css';
import InputSearch from "@components/InputSearch/InputSearch.tsx";
import {ColorModeContext} from "@/App.tsx";
import {useContext} from "react";
import React from 'react'



const Header = () => {
    const { mode } = useContext(ColorModeContext);
    const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();
    console.log(mode)
    return(
        <>
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', m: '0px 120px', typography: 'body1'}}>
                <Typography variant="h2">4Ask</Typography>
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

                        <Link underline="hover">home</Link>
                        <Link underline="hover">games</Link>
                        <Link underline="hover">moves</Link>
                        <Link underline="hover">books</Link>
                        <Link underline="hover">about us</Link>
                    </Box   >
                </nav>
                <div><DarkAndWhite /></div>
                <div><ButtonLog /></div>
            </Box>
            <div className={styles.wrap}>
                <InputSearch />
                <img className={styles.bgImage} src={img}/>
            </div>
        </>
    )
}

export default Header;