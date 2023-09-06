import { CardActions, Card, Typography, CardMedia, CardContent} from '@muiDep/index.ts'
import BasicRating from "@components/BasicRating/BasicRating.tsx";
import {Link} from 'react-router-dom'
const CardGames = () => {
    return (
        <>
            <Link to={'/info'}>
                <Card sx={{ width: 318, borderRadius: '25px', m: 2 }}>
                    <CardMedia
                        sx={{ height: 380 }}
                        image="https://picsum.photos/800/600?random"
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="body1" component="span">
                            Lizard
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ display: 'flex', justifyContent: 'space-between', p: 2}}>
                        <Typography variant="body1">
                            userName
                        </Typography>
                        <BasicRating />
                    </CardActions>
                </Card>
            </Link>
        </>
    )
}

export default CardGames;