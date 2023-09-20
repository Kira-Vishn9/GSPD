import { Card, Typography, CardActionArea, CardMedia, CardContent } from '@muiDep/index.ts'
import { Link } from 'react-router-dom'
import {CardProp} from "@/Interface/Interface.ts";
interface CardPopularProps {
    cardData: CardProp;
}
const CardPopular = ({ cardData }: CardPopularProps) => {

    return (
        <>
            <Link to={`/info/${cardData._id}`}>
                <Card sx={{ maxWidth: 200, borderRadius: '25px', m: 2 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="180"
                            image={cardData.img}
                            alt={cardData.title}
                        />
                        <CardContent sx={{ height: '70px', textAlignLast: 'left', boxSizing: "content-box"}}>
                            <Typography gutterBottom color="text.secondary" component="span">
                                {cardData.author}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" align={'left'}>
                                {cardData.title}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Link>
        </>
    );
}

export default CardPopular;
