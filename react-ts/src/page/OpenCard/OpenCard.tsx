import {Box, CardMedia, Rating} from "@muiDep/index.ts";
import {Typography} from "@mui/material";
import Comments from "@components/Сomments/Comments.tsx";
import BasicRating from "@components/BasicRating/BasicRating.tsx";
import React, {useEffect, useState} from "react";
import {addReviewFromUser, checkReviewFromUser, openCard} from "@/service";
import ButtonLike from "@components/ButtonLike/ButtonLike.tsx";
import {useParams} from "react-router-dom";


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
    const [page, setPage] = useState<number>(1);
    const [mark, setMark] = useState(0)
    const { postId } = useParams<{ postId: string | undefined }>();
    const getMoreComments = () => {
        if (page !== null) {
            setPage(page + 1);
        }
    }

    const reviewFromUser = (mark: number) => {
        addReviewFromUser(postId, {grade: mark})
    }

    useEffect(()=>{
        const fetchData = async () => {
            checkReviewFromUser(postId).then(res => setMark(res.data) )
            //     .then((res)=>{
            //     setMark(res.data)
            // })
            try {
                if(!postId) return
               return await openCard(postId, page)
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
                        sx={{maxWidth: '800px', maxHeight: '600px', borderRadius: '40px', m: 2}}
                        component="img"
                        image={`${data.post.img}`}
                        alt="green iguana"
                    />
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'space-evenly'}}>
                    <Typography variant="h4">Type: {data.post.type}</Typography>
                    <ButtonLike postId={postId}/>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-evenly'}}>
                    <Typography variant="h5">Autor: {data.post.author}</Typography>
                    <Typography variant="h5" sx={{display: 'flex', marginLeft: '20px'}}>Rating:
                        <BasicRating value={data.post.ratingAuthor} length={10}/>
                    </Typography>
                </Box>
                <Typography variant="body2" sx={{width: '78%', textAlign: 'center',}}>
                    {data.post.text}
                </Typography>
                <Typography component="legend">Your mark</Typography>
                <Rating
                    name="simple-controlled"
                    defaultValue={0}
                    max={5}
                    value={mark}
                    onChange={(event: React.SyntheticEvent<Element, Event>, value: number | null) => {
                        if (value !== null) {
                            setMark(value);
                            reviewFromUser(value);
                        }else{console.log(event)}
                    }}
                />
                <Box sx={{width: '80%', m: 3}}>
                    <Comments data={data.comments } setPage={getMoreComments}/>
                </Box>
            </Box>
        </>
    )
}

export default OpenCard;