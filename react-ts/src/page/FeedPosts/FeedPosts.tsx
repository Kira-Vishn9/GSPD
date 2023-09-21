import { CardMedia, Box, ImageListItemBar, ImageListItem, ImageList} from "@muiDep/index.ts";
import { Link } from 'react-router-dom';
import {useEffect, useState} from "react";
import {getSpecialPost} from "@/service";
import {Typography} from "@mui/material";

const FeedPosts = () => {
    const [data, setData] = useState(null)
    const  type = (window.location.pathname).split('/')[1];
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getSpecialPost(type);
                setData(res.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }}
        fetchData()
    }, [data])

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
                        {data.map((item) => (
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
                    </ImageList>
                </Box>
        </>
    )
}

export default FeedPosts