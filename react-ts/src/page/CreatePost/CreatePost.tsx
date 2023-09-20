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

interface CloudinaryUploadResponse {
    data: {
        asset_id: string;
        public_id: string;
        version: number;
        version_id: string;
        signature: string;
        width: number;
        height: number;
        format: string;
        resource_type: string;
        created_at: string;
        tags: string[];
        bytes: number;
        type: string;
        etag: string;
        placeholder: boolean;
        url: string;
        secure_url: string;
        folder: string;
        access_mode: string;
        original_filename: string;
    };
    status: number;
    statusText: string;
    headers: {
        'cache-control': string;
        'content-type': string;
    };
    config: {
        transitional: {
            silentJSONParsing: boolean;
            forcedJSONParsing: boolean;
            clarifyTimeoutError: boolean;
        };
        adapter: string;
        transformRequest: null[];
        transformResponse: null[];
        timeout: number;
        xsrfCookieName: string;
        xsrfHeaderName: string;
        maxContentLength: number;
        maxBodyLength: number;
        env: Record<string, any>;
        headers: {
            Accept: string;
        };
        method: string;
        url: string;
        data: Record<string, any>;
    };
    request: Record<string, any>;
}
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

    const uploadImg = async () => {
        if (img) {
            const formData = new FormData();
            formData.append('file', img);
            formData.append('upload_preset', 'lmo3uadu');

            return await axios.post('https://api.cloudinary.com/v1_1/dxiyv9oni/image/upload', formData)
                .then((response: CloudinaryUploadResponse) => {
                    console.log(response)
                return response.data.secure_url;
            });
        } else {
            console.error('No image selected');
            return null;
        }
    };

    const onSubmit: SubmitHandler<IData> = async (data) => {
        const imgUrl = await uploadImg();
        if (imgUrl) {
            setValue('img', imgUrl);
            postNewReview(data)
                .then((resp) => {
                    console.log(resp, data);
                });
        }
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
