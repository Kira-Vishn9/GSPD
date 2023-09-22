import {
    Box,
    Typography,
    FormControl,
    Button,
    TextField,
    SelectChangeEvent
} from "@muiDep/index.ts";
import axios from "axios";
import React, { useState } from 'react';
import ButtonSelect from "@components/ButtonSelect/ButtonSelect.tsx";
import FileInput from "@components/FileInput/FileInput.tsx";
import ControlRating from "@components/ControllRaiting/ControlRating.tsx";
import { SubmitHandler, useForm } from "react-hook-form";
import { postNewReview } from "@/service";

interface IData {
    titlePost: string;
    title: string;
    type: string;
    author: string;
    text: string;
    img: string;
    ratingAuthor: number;
}

const CreatePost = () => {
    const [img, setImg] = useState<string | null>(null);
    const {
        register,
        handleSubmit,
        setValue,
    } = useForm<IData>();
    const handleChangeType = (event: SelectChangeEvent) => {
        setValue('type', event.target.value);};

    const onSubmit = async (data) => {
        await uploadImg()
            .then(()=>{
                postNewReview(data)
            })
    }
    const uploadImg = async (): Promise<void | string> => {
        const formData = new FormData();
        formData.append('file', img);
        formData.append('upload_preset', 'lmo3uadu');
        return await axios.post('https://api.cloudinary.com/v1_1/dxiyv9oni/image/upload', formData)
            .then((data) => {
                setValue('img', data.data.secure_url)
            })
    }

    return (
        <>
            <Box sx={{ width: '70%' }}>
                <Typography variant={'h2'}>Create you review</Typography>
                <FormControl component={'form'} fullWidth onSubmit={handleSubmit(onSubmit)}>
                    <TextField {...register("titlePost")} label={"Name review"} />
                    <TextField sx={{ marginTop: 1 }} {...register("title")} label={"Name post"} />
                    <ButtonSelect {...register("type")} handleChangeType={handleChangeType} />
                    <Box sx={{ display: "flex", justifyContent: 'space-between', alignItems: 'center' }}>
                        <ControlRating setValue={setValue} />
                        <TextField {...register("author")} label={'Author'} />
                        <FileInput setValue={setImg} />
                    </Box>
                    <TextField {...register("text")} multiline maxRows={10} label={'Write your opinion about the product'} />
                    <Button type="submit" sx={{ m: 2 }} variant="outlined">Submit</Button>
                </FormControl>
            </Box>
        </>
    )
}

export default CreatePost;
