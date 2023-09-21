import {
    Box,
    Typography,
    FormControl,
    Button,
    TextField
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

    const handleChangeType = (event) => {
        setValue('type', event.target.value)
    };


    const onSubmit = async (data) => {
         await uploadImg()
            .then((res) => {
            setValue('img', res)}).then(()=>{
                postNewReview(data)
            })
    }

    const uploadImg = async () => {
        if(img){
            const formData = new FormData();
            formData.append('file', img);
            formData.append('upload_preset', 'lmo3uadu');
            return await axios.post('https://api.cloudinary.com/v1_1/dxiyv9oni/image/upload', formData)
                .then((response) => {
                return response.data.secure_url
            });
        }else{
            console.log('select img')
        }
    };

    return(
        <>
            <Box sx={{width: '70%'}}>
                <Typography variant={'h2'}>Create you review</Typography>
                <FormControl component={'form'} fullWidth onSubmit={handleSubmit(onSubmit)}>
                    <TextField {...register("reviewName")} label={"Name review"}/>
                    <ButtonSelect {...register("reviewType")} handleChangeType={handleChangeType}/>
                    <Box sx={{display: "flex", justifyContent: 'space-between', alignItems: 'center'}}>
                        <ControlRating setValue={setValue}/>
                        <TextField {...register("reviewAuthor")} label={'Author'}/>
                        <FileInput setValue={setImg} />
                    </Box>
                    <TextField {...register("reviewDescription")} multiline maxRows={10} label={'Write your opinion about the product'}/>
                    <Button type="submit" sx={{m: 2}} variant="outlined">Submit</Button>
                </FormControl>
            </Box>
        </>
    )
}

export default CreatePost