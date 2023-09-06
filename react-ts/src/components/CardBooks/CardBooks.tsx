import {Box, CardActions, CardContent, CardMedia, Typography} from "@muiDep/index.ts";
import BasicRating from "@components/BasicRating/BasicRating.tsx";
import {Link} from 'react-router-dom'

const CardBooks = () => {
    return(
        <>
            <Link to={'/info'}>
            <Box sx={{display: "flex", height: 380}}>
                <CardMedia
                    component="img"
                    sx={{ height: 380, width: 316, m: 2, borderRadius: "25px" }}
                    image="https://picsum.photos/800/600?random"
                    title="green iguana"
                />
                <Box sx={{maxWidth: 320, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}} >
                    <CardContent>
                            <Typography gutterBottom component="h2">
                                Label
                            </Typography>
                        </CardContent>
                    <Typography>
                        We will stop at five different world-class ice cream shops on this 1.5 mile 1.5 hour tour. At each ice cream store we'll explore the story behind the business and see what makes the ice cream unique as you savor every…
                    </Typography>
                    <CardActions sx={{ display: 'flex', justifyContent: 'space-between', p: 2}}>
                        <Typography variant="body1">
                            userName
                        </Typography>
                        <BasicRating />
                    </CardActions>
                </Box>
            </Box>
            {/*<Card sx={{ width: 420, borderRadius: '25px', m: 2, }}>*/}
            {/*    <Box>*/}
            {/*        <CardMedia*/}
            {/*            component="img"*/}
            {/*            sx={{ height: 380 }}*/}
            {/*            image="https://picsum.photos/800/600?random"*/}
            {/*            title="green iguana"*/}
            {/*        />*/}
            {/*    </Box>*/}
            {/*    <Box>*/}
            {/*    <CardContent>*/}
            {/*        <Typography gutterBottom variant="body1" component="span">*/}
            {/*            Lizard*/}
            {/*        </Typography>*/}
            {/*    </CardContent>*/}
            {/*    <CardActions sx={{ display: 'flex', justifyContent: 'space-between', p: 2}}>*/}
            {/*        <Typography variant="body1">*/}
            {/*            userName*/}
            {/*        </Typography>*/}
            {/*        <BasicRating />*/}
            {/*    </CardActions>*/}
            {/*    </Box>*/}
            {/*</Card>*/}
            </Link>
        </>
    )
}

export default CardBooks;