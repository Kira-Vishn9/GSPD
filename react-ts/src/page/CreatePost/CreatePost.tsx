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


const CreatePost = () => {
    const [img, setImg] = useState(null)
    const {
        register,
        handleSubmit,
        setValue,
    } = useForm()

    // const [type, setType] = React.useState('');
    const handleChangeType = (event: SelectChangeEvent) => {
        setValue('reviewType', event.target.value as string)
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
            const urlImg = await uploadImg()
            setValue('reviewFile', urlImg)

        }

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