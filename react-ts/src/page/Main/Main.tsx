import Header from "@components/Header/Header.tsx";
import CardPopular from "@components/CardPopular/CardPopular.tsx";
import {Grid, Typography} from "@muiDep/index.ts";

const Main = () => {
    return (
        <>
            <Header />
            <Typography variant="h4" sx={{textAlign: 'left', m: 2}}>
                Popular choice of users
            </Typography>
            <Grid container>
                {[1,2,3,4,5,6].map((value) => {
                  return  <CardPopular key={value} number={value} />
                })}
            </Grid>

        </>
    )
}

export default Main;