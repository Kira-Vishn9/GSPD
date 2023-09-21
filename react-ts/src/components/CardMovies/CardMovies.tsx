import {Card, CardContent, CardMedia, Typography} from "@muiDep/index.ts";
import {Link} from 'react-router-dom'
import {CardProp} from "@/Interface/Interface.ts";

interface CardMoviesProps {
    cardData: CardProp;
}
const CardMovies = ({cardData}: CardMoviesProps) => {
    return(
        <>
            <Link to={`/info${cardData._id}`}>
                <Card sx={{ width: 318, borderRadius: '25px', m: 2 }}>
                    <CardMedia

                        sx={{ height: 380 }}
                        image={cardData.img}
                        title="green iguana"
                    />
                    <CardContent sx={{textAlignLast: 'left'}}>
                        <Typography variant="body1">
                            {cardData.author}
                        </Typography>
                    </CardContent>
                </Card>
            </Link>
        </>
    )
}

export default CardMovies;