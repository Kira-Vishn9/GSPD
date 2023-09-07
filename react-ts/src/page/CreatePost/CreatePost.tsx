import {
    Box,
    Typography,
    FormControl,
    Button,
    TextField, SelectChangeEvent
} from "@muiDep/index.ts";
import React from 'react'
import ButtonSelect from "@components/ButtonSelect/ButtonSelect.tsx";
import FileInput from "@components/FileInput/FileInput.tsx";
import ControlRating from "@components/ControllRaiting/ControlRating.tsx";
import { useForm } from "react-hook-form"

const CreatePost = () => {
    const {
        register,
        handleSubmit,
        setValue,
    } = useForm()

    // const [type, setType] = React.useState('');
    const handleChangeType = (event: SelectChangeEvent) => {
        setValue('reviewType', event.target.value as string)
    };

    const onSubmit = (data): void => {
        console.log(data)
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
                        <FileInput setValue={setValue} />
                    </Box>
                    <TextField {...register("reviewDescription")} multiline maxRows={10} label={'Write your opinion about the product'}/>
                    <Button type="submit" sx={{m: 2}} variant="outlined">Submit</Button>
                </FormControl>
            </Box>
        </>
    )
}

export default CreatePost