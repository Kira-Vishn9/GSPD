import { CardActions, Card, Typography, CardMedia, CardContent} from '@muiDep/index.ts'
import BasicRating from "@components/BasicRating/BasicRating.tsx";
import {Link} from 'react-router-dom'
import {CardProp} from "@/Interface/Interface.ts";

interface CardGamesProps {
    cardData: CardProp;
}
const CardGames = ({cardData}: CardGamesProps) => {
    return (
        <>
            <Link to={`/info/${cardData._id}`}>
                <Card sx={{ width: 318, borderRadius: '25px', m: 2 }}>
                    <CardMedia
                        sx={{ height: 380 }}
                        image={cardData.img}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="body1" component="span">
                            cardData.title
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ display: 'flex', justifyContent: 'space-between', p: 2}}>
                        <Typography variant="body1">
                            cardData.author
                        </Typography>
                        <BasicRating value={cardData.totalRating} length={5}/>
                    </CardActions>
                </Card>
            </Link>
        </>
    )
}

export default CardGames;