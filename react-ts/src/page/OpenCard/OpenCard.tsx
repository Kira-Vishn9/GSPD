import {Box, CardMedia} from "@muiDep/index.ts";
import {Typography} from "@mui/material";
import Comments from "@components/Сomments/Comments.tsx";
import BasicRating from "@components/BasicRating/BasicRating.tsx";

const OpenCard = () => {
    return(
        <>
            <Box sx={{}}>
                <Typography variant="h2">
                    Dota2
                </Typography>
                <Box sx={{width: '80%'}}>
                    <CardMedia
                        sx={{width: 'auto',borderRadius: '40px', m: 2}}
                        component="img"
                        image={`https://picsum.photos/800/600?random=4`}
                        alt="green iguana"
                    />
                </Box>
                <Typography variant="h4">Type: Game</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-evenly'}}>
                    <Typography variant="h5">Autor: God</Typography>
                    <Typography variant="h5" sx={{display: 'flex', marginLeft: '20px'}}>Rating:
                        <BasicRating />
                    </Typography>
                </Box>
                <Typography variant="body2" sx={{width: '78%', textAlign: 'left',}}>value.disabled (bool): Indicate whether the component is being displayed in a disabled state, inherited from FormControl disabled prop.
                    value.error (bool): Indicate whether the component is being displayed in an error state, inherited from FormControl error prop
                    value.filled (bool): Indicate whether input is filled
                    value.focused (bool): Indicate whether the component and its children are being displayed in a focused state
                    value.fullWidth (bool): Indicate whether the component is taking up the full width of its container, inherited from FormControl fullWidth prop
                    value.hiddenLabel (bool): Indicate whether the label is being hidden, inherited from FormControl hiddenLabel prop
                    value.required (bool): Indicate whether the label is indicating that the input is required input, inherited from the FormControl required prop</Typography>
                <Box sx={{width: '80%', m: 3}}>
                    <Comments />
                </Box>
            </Box>
        </>
    )
}

export default OpenCard;