import React, { useContext } from "react";
import { ColorModeContext } from "@context/ColorModeContext.ts";
import { MuiFileInput } from "@muiDep/index.ts";


const FileInput = ({setValue}) => {
    const { mode } = useContext(ColorModeContext);
    const [value, setValues] = React.useState<File | null>(null)

    const handleChangeFile = (newValue: File | null) => {
        setValue('reviewFile', newValue)
        setValues(newValue)
    };

    const outlinedInputStyles = {
        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: '#757575',
        },
        "& .css-2ehmn7-MuiInputBase-root-MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: mode === 'dark' ? 'white' : 'black',
        },
        "& .css-ittuaa-MuiInputAdornment-root":{
            color: mode === 'dark' ? 'rgb(255 255 255 / 1)' : ''
        },
        'span': {
            color: '#ffffff'
        }

    };

    return (
        <>
            <MuiFileInput
                sx={{
                    ...outlinedInputStyles
                }}
                onChange={handleChangeFile}
                value={value}
            />
        </>
    );
};

export default FileInput;
