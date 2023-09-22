import {CardMedia, Box, ImageListItemBar, ImageListItem, ImageList, Pagination} from "@muiDep/index.ts";
import { Link } from 'react-router-dom';
import {useEffect, useState} from "react";
import {getSpecialPost} from "@/service";
import {Typography} from "@mui/material";

const FeedPosts = () => {
    const [data, setData] = useState(null)
    const  type = (window.location.pathname).split('/')[1];
    const [page, setPage] = useState(1)
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getSpecialPost(type, page);
                console.log(type)
                setData(res.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }}
        fetchData()
    }, [page])

    if(data === null) {
        return (
            <Typography>
                Loading....
            </Typography>
        )

    }
    // @ts-ignore
    // @ts-ignore
    return (
        <>
                <Box sx={{width: '100%', margin: '50px auto', textAlign: '-webkit-center'}}>
                    <ImageList sx={{ width: '60%', display: 'flex', flexDirection: 'column'  }}>
                        {data.res.map((item) => (
                            <Link to={`/info/${item._id}`}>
                                <ImageListItem key={item.img}>
                                    <CardMedia
                                        image={`${item.img}`}
                                        sx={{borderRadius: '20px', height: 400}}
                                    />
                                    <ImageListItemBar
                                        title={item.titlePost}
                                        subtitle={<span>by: {item.author}</span>}
                                        position="below"
                                    />
                                </ImageListItem>
                            </Link>
                        ))}
                        <Pagination count={data.totalPages} sx={{ alignSelf: "center"}} page={page} onChange={handleChange}/>
                    </ImageList>
                </Box>
        </>
    )
}

export default FeedPosts