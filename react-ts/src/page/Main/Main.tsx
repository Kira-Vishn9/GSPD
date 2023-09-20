
import CardPopular from "@components/CardPopular/CardPopular.tsx";
import {Grid, Typography} from "@muiDep/index.ts";
import CardGames from "@components/CardGames/CardGames.tsx";
import CardBooks from "@components/CardBooks/CardBooks.tsx";
import CardMovies from "@components/CardMovies/CardMovies.tsx";
import {useEffect, useState} from "react";
import {getPopular, getPopularCards} from "@/service";
import {CardProp} from "@/Interface/Interface.ts";

const Main = () => {
    const [popularCards, setPopularCards] = useState<CardProp[]>([]);
    const [popularGameCards, setPopularGameCards] = useState<CardProp[]>([]);
    const [popularBookCards, setPopularBookCards] = useState<CardProp[]>([]);
    const [popularMovieCards, setPopularMovieCards] = useState<CardProp[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getPopularCards();
                const gameData = await getPopular("Game", 4);
                const bookData = await getPopular("Book", 2);
                const movieData = await getPopular("Movie", 4);
                setPopularCards(response.data)
                setPopularGameCards(gameData.data)
                setPopularBookCards(bookData.data)
                setPopularMovieCards(movieData.data)
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
                {popularGameCards ? (
                    popularGameCards.map((cardData, index) => (
                        <CardGames key={index} cardData={cardData} />
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </Grid>
            <Typography variant="h4" sx={{textAlign: 'left', m: 2}}>
                Popular Book
            </Typography>
            <Grid container>
                {popularBookCards ? (
                    popularBookCards.map((cardData, index) => (
                        <CardBooks key={index} cardData={cardData} />
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </Grid>
            <Typography variant="h4" sx={{textAlign: 'left', m: '50px 20px 20px 20px'}}>
                Popular Movies
            </Typography>
            <Grid container>
                {popularMovieCards ? (
                    popularMovieCards.map((cardData, index) => (
                        <CardMovies key={index} cardData={cardData} />
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </Grid>
        </>
    )
}

export default Main;