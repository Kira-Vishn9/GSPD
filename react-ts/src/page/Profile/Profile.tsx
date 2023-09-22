import { CardMedia, Box, ImageListItemBar, ImageListItem, ImageList} from "@muiDep/index.ts";
import { Link } from 'react-router-dom';
import {useEffect, useState} from "react";
import {getProfilePost} from "@/service";
import {Typography} from "@mui/material";
import {justCard} from "@/Interface/Interface.ts";

const Profile = () => {
    const [data, setData] = useState<justCard[] | null>(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getProfilePost();
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
    return(
        <>
            <Link to={"/info"}>
                <Box sx={{width: '100%', margin: '50px auto', textAlign: '-webkit-center'}}>
                    <ImageList sx={{ width: '90%',  }}>
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
            </Link>
        </>
    )
}

export default Profile;