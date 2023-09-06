import {Box, Typography, MuiFileInput, FormControl, OutlinedInput, InputLabel, MenuItem, Select} from "@muiDep/index.ts";
import React from 'react'

const typeReviews = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];

const CreatePost = () => {
    const [value, setValue] = React.useState<File | null>(null)

    const handleChange = (newValue: File | null) => {
        setValue(newValue)
    }
    return(
        <>
            <Box>
                <Typography variant={'h2'}>Create you review</Typography>
                <FormControl sx={{ m: 1, width: 300 }}>
                    <MuiFileInput value={value} onChange={handleChange} />
                    <InputLabel id="demo-multiple-name-label">typeReviews</InputLabel>
                    <Select
                        labelId="demo-multiple-name-label"
                        id="demo-multiple-name"
                        multiple
                        input={<OutlinedInput label="Name" />}
                    >
                        {typeReviews.map((name) => (
                            <MenuItem
                                key={name}
                                value={name}
                            >
                                {name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>
        </>
    )
}

export default CreatePost