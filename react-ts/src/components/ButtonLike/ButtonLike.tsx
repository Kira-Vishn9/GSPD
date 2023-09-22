import {FavoriteIcon , Box} from '@muiDep//index.ts'
import { pink } from '@mui/material/colors';
import {useEffect, useState} from 'react'
import {checkLike, targetLike} from "@/service";
// @ts-ignore
const ButtonLike = ({postId}: IntrinsicAttributes & (string | number) ) => {
    const [colorit, setColorit] = useState('')

    useEffect(() => {
        const wrapF = async () => {
            try {
                const data = await checkLike(postId); // Передаем userId и postId
                data.data ?  setColorit('') : setColorit(pink[500])
            } catch (error) {
                console.error('Error checking like:', error);
            }
        }
        wrapF();
    }, []);

    const handleLike = async () => {
        try {
            const data = await targetLike(postId);
            console.log(data.data)
            data.data ? setColorit('') : setColorit(pink[500])
        } catch (error) {
            console.error('Error toggling like:', error);
        }
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