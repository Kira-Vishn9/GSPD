import {Card, Typography, CardActionArea, CardMedia, CardContent} from '@muiDep/index.ts'
import {Link} from 'react-router-dom'
const CardPopular = () => {
    return (
        <>
            <Link to={'/info'}>
                <Card sx={{ maxWidth: 200, borderRadius: '25px', m: 2 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="180"
                            image={`https://picsum.photos/800/600?random=4`}
                            alt="green iguana"
                        />
                        <CardContent sx={{height: '70px', textAlignLast: 'left'}}>
                            <Typography gutterBottom color="text.secondary" component="span" >
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary" align={'left'}>
                               Type: Games
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Link>
        </>
    )
}

export default CardPopular;