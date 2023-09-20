import * as React from 'react';
import {Box, Rating, Typography} from '@muiDep/index.ts';

// @ts-ignore
const ControlRating = ({setValue}) => {
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
                onChange={(newValue) => {
                    setValue('Rating',newValue);
                }}
            />
        </Box>
    );
}

export default ControlRating