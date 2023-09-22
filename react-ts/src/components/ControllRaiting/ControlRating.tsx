import * as React from 'react';
import {Box, Rating, Typography} from '@muiDep/index.ts';
import {useState} from 'react'

// @ts-ignore
const ControlRating = ({setValue}) => {
    const [newValue, setNewValue] = useState<number | null>(null)
    // @ts-ignore
    return (
        <Box
            sx={{
                '& > legend': { mt: 2 },
            }}
        >
            <Typography component="legend">Your mark</Typography>
            <Rating
                name="simple-controlled"
                defaultValue={0}
                max={10}
                value={newValue ? newValue : 0}
                onChange={(event, value) => {
                    setNewValue(value)
                    setValue('ratingAuthor',value);
                }}
            />
        </Box>
    );
}

export default ControlRating