import {FavoriteIcon , Box} from '@muiDep//index.ts'
import { pink } from '@mui/material/colors';
import {useEffect, useState} from 'react'
import {checkLike, targetLike} from "@/service";
const ButtonLike = ({postId}) => {
    const [colorit, setColorit] = useState('')

    useEffect(()=>{
        const wrapF = async () =>{
            await checkLike(postId)
                .then((data) => {
                    if(data.data.userIndex !== 0){
                        setColorit(pink[500])
                    }else(setColorit(''))
                })
        }
        wrapF()
    },[])
    const handleLike = async () => {
        await targetLike(postId)
            .then((data) => {
                if(data.data.userIndex !== 0){
                    setColorit(pink[500])
                }else(setColorit(''))
            })

    }

    return(
        <>
            <Box sx={{display: 'flex', alignItems: 'center'}}>
                <FavoriteIcon onClick={handleLike} sx={{ fontSize: 50, color: colorit}}/>
            </Box>
        </>
    )
}

export default ButtonLike