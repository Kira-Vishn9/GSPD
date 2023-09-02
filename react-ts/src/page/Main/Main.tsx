import Header from "@components/Header/Header.tsx";
import CardPopular from "@components/CardPopular/CardPopular.tsx";
import {Grid, Typography} from "@muiDep/index.ts";
import CardGames from "@components/CardGames/CardGames.tsx";
import CardBooks from "@components/CardBooks/CardBooks.tsx";
import CardMovies from "@components/CardMovies/CardMovies.tsx";
import MyFooter from '@components/MyFooter/MyFooter.tsx'

const Main = () => {
    return (
        <>
            <Header />
            <Typography variant="h4" sx={{textAlign: 'left', m: 2}}>
                Popular choice of users
            </Typography>
            <Grid container>
                {[1,2,3,4,5,6].map((value: number) => {
                  return  <CardPopular key={value} />
                })}
            </Grid>
            <Typography variant="h4" sx={{textAlign: 'left', m: 2}}>
                Popular game
            </Typography>
            <Grid container>
                {[1,2,3,4].map((value: number) => {
                    return  <CardGames key={value} />
                })}
            </Grid>
            <Typography variant="h4" sx={{textAlign: 'left', m: 2}}>
                Popular Book
            </Typography>
            <Grid container>
                {[1,2].map((value: number) => {
                    return  <CardBooks key={value} />
                })}
            </Grid>
            <Typography variant="h4" sx={{textAlign: 'left', m: '50px 20px 20px 20px'}}>
                Popular Movies
            </Typography>
            <Grid container>
                {[1,2,3,4].map((value: number) => {
                    return  <CardMovies key={value} />
                })}
            </Grid>
            <MyFooter />
        </>
    )
}

export default Main;