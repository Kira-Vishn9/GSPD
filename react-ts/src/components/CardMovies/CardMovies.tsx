import {Card, CardActions, CardContent, CardMedia, Typography} from "@muiDep/index.ts";
import BasicRating from "@components/BasicRating/BasicRating.tsx";

const CardMovies = () => {
    return(
        <>
            <Card sx={{ width: 318, borderRadius: '25px', m: 2 }}>
                <CardMedia
                    sx={{ height: 380 }}
                    image="https://picsum.photos/800/600?random=1"
                    title="green iguana"
                />
                <CardContent sx={{textAlignLast: 'left'}}>
                    <Typography variant="body1">
                        userName
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
}

export default CardMovies;