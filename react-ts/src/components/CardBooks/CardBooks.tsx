import {Box, CardActions, CardContent, CardMedia, Typography} from "@muiDep/index.ts";
import BasicRating from "@components/BasicRating/BasicRating.tsx";
import {Link} from 'react-router-dom'
import {CardProp} from "@/Interface/Interface.ts";

interface CardBooksProps {
    cardData: CardProp;
}

const CardBooks = ({cardData}: CardBooksProps) => {
    return(
        <>
            <Link to={`/info/${cardData._id}`}>
            <Box sx={{display: "flex", height: 380}}>
                <CardMedia
                    component="img"
                    sx={{ height: 380, width: 316, m: 2, borderRadius: "25px" }}
                    image={cardData.img}
                    title="green iguana"
                />
                <Box sx={{maxWidth: 320, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}} >
                    <CardContent>
                            <Typography gutterBottom component="h2">
                                {cardData.title}
                            </Typography>
                        </CardContent>
                    <Typography sx={{overflow: 'hidden'}}>
                        {cardData.text}
                    </Typography>
                    <CardActions sx={{ display: 'flex', justifyContent: 'space-between', p: 2}}>
                        <Typography variant="body1">
                            {cardData.author}
                        </Typography>
                        <BasicRating value={cardData.totalRating} />
                    </CardActions>
                </Box>
            </Box>
            </Link>
        </>
    )
}

export default CardBooks;