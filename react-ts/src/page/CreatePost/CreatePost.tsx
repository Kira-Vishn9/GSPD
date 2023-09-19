import {
    Box,
    Typography,
    FormControl,
    Button,
    TextField, SelectChangeEvent
} from "@muiDep/index.ts";
import axios from "axios";
import React, {useState} from 'react'
import ButtonSelect from "@components/ButtonSelect/ButtonSelect.tsx";
import FileInput from "@components/FileInput/FileInput.tsx";
import ControlRating from "@components/ControllRaiting/ControlRating.tsx";
import { useForm } from "react-hook-form"
import {postNewReview} from "@/service";


const CreatePost = () => {
    const [img, setImg] = useState(null)
    const {
        register,
        handleSubmit,
        setValue,
    } = useForm()

    // const [type, setType] = React.useState('');
    const handleChangeType = (event: SelectChangeEvent) => {
        setValue('type', event.target.value as string)
    };

    const uploadImg = async () => {
        if (img) {
            const formData = new FormData();
            formData.append('file', img);
            formData.append('upload_preset', 'lmo3uadu');

            return await axios.post('https://api.cloudinary.com/v1_1/dxiyv9oni/image/upload', formData).then((response) => {
                return response.data.secure_url
            });
        } else {
            console.error('No image selected');
        }
    };

        const onSubmit = async (data): void => {
            await uploadImg()
                .then((url) => {
                setValue('img', url)})
                .then((resp) => {
                postNewReview(data)
                    console.log(resp ,data)
            })
        }

    return(
        <>
            <Box sx={{width: '70%'}}>
                <Typography variant={'h2'}>Create you review</Typography>
                <FormControl component={'form'} fullWidth onSubmit={handleSubmit(onSubmit)}>
                    <TextField {...register("titlePost")} label={"Name review"}/>
                    <TextField sx={{marginTop: 1}} {...register("title")} label={"Name post"}/>
                    <ButtonSelect {...register("type")} handleChangeType={handleChangeType}/>
                    <Box sx={{display: "flex", justifyContent: 'space-between', alignItems: 'center'}}>
                        <ControlRating setValue={setValue}/>
                        <TextField {...register("author")} label={'Author'}/>
                        <FileInput setValue={setImg} />
                    </Box>
                    <TextField {...register("text")} multiline maxRows={10} label={'Write your opinion about the product'}/>
                    <Button type="submit" sx={{m: 2}} variant="outlined">Submit</Button>
                </FormControl>
            </Box>
        </>
    )
}

export default CreatePost