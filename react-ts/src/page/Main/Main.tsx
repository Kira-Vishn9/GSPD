
import CardPopular from "@components/CardPopular/CardPopular.tsx";
import {Grid, Typography} from "@muiDep/index.ts";
import CardGames from "@components/CardGames/CardGames.tsx";
import CardBooks from "@components/CardBooks/CardBooks.tsx";
import CardMovies from "@components/CardMovies/CardMovies.tsx";
import {useEffect, useState} from "react";
import {getPopularCards} from "@/service";

const Main = () => {
    const [popularCards, setPopularCards] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getPopularCards();
                console.log(response)
                setPopularCards(response)
            } catch (error) {
                console.error("Ошибка при получении данных с сервера", error);
            }
        };
        fetchData();
    }, []);
    return (
        <>
            <Typography variant="h4" sx={{textAlign: 'left', m: 2}}>
                Popular choice of users
            </Typography>
            <Grid container>
                {popularCards ? (
                    popularCards.map((cardData, index) => (
                        <CardPopular key={index} cardData={cardData} />
                    ))
                ) : (
                    <p>Loading...</p> // Отобразите загрузочное сообщение или что-то подобное
                )}
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
        </>
    )
}

export default Main;