import {Box, CardMedia} from "@muiDep/index.ts";
import {Typography} from "@mui/material";
import Comments from "@components/Сomments/Comments.tsx";
import BasicRating from "@components/BasicRating/BasicRating.tsx";
import {useEffect, useState} from "react";
import {openCard} from "@/service";


interface PostData {
    _id: string;
    title: string;
    titlePost: string;
    img: string;
    type: string;
    author: string;
    ratingAuthor: number;
    totalRating: number;
    rating: any;
    like: any[];
    comments: any[];
    text: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}
interface Commentss {
    _id: {
        $oid: string;
    };
    authorId: string;
    text: string;
}
const OpenCard = () => {
    const [data, setData] = useState<{ post: PostData | null,   comments: Commentss[] | null }>({ post: null, comments: null });
    const [page, setPage] = useState(1)

     const getMoreComments = () => {
        console.log(data)
         setPage(page + 1 )
     }

    useEffect(()=>{
        const id = (window.location.pathname).split('/')[2];
        const fetchData = async () => {
            try {
               return await openCard(id, page)
                   .then((res) => {
                       setData(res.data)
                   })
            } catch (error) {
                console.error("Ошибка при получении данных с сервера", error);
            }
        };
        fetchData();
    },[page])

    if (!data || !data.post) {
        return <Typography variant="h2">Loading...</Typography>;
    }

    return(
        <>
            <Box sx={{}}>
                <Typography variant="h2">
                    {data.post.titlePost}
                </Typography>
                <Typography variant="h4">
                    {data.post.title}
                </Typography>
                <Box sx={{width: '80%'}}>
                    <CardMedia
                        sx={{width: 'auto',borderRadius: '40px', m: 2}}
                        component="img"
                        image={`${data.post.img}`}
                        alt="green iguana"
                    />
                </Box>
                <Typography variant="h4">Type: {data.post.type}</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-evenly'}}>
                    <Typography variant="h5">Autor: {data.post.author}</Typography>
                    <Typography variant="h5" sx={{display: 'flex', marginLeft: '20px'}}>Rating:
                        <BasicRating value={data.post.ratingAuthor} length={10}/>
                    </Typography>
                </Box>
                <Typography variant="body2" sx={{width: '78%', textAlign: 'left',}}>
                    {data.post.text}
                </Typography>
                <Box sx={{width: '80%', m: 3}}>
                    <Comments data={data.comments } setPage={getMoreComments}/>
                </Box>
            </Box>
        </>
    )
}

export default OpenCard;