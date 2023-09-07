import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    type SelectChangeEvent
} from "@muiDep/index.ts"
import React from "react";

interface PropsSelect {
    handleChangeType: (e: SelectChangeEvent) => void
}

const ButtonSelect = React.forwardRef( ({handleChangeType}: PropsSelect, ref) => {
    return(
        <>
            <FormControl sx={{marginTop: '10px', textAlign: 'left'}}>
                <InputLabel id="demo-simple-select-autowidth">Type</InputLabel>
                <Select
                    labelId="demo-simple-select-autowidth"
                    id="demo-simple-select"
                    onChange={handleChangeType}
                    fullWidth
                    label="Type"
                    ref={ref}
                    defaultValue={''}
                >
                    <MenuItem value={"Game"}>Game</MenuItem>
                    <MenuItem value={"Movie"}>Movie</MenuItem>
                    <MenuItem value={"Book"}>Book</MenuItem>
                </Select>
            </FormControl>
        </>
    )
})

export default ButtonSelect