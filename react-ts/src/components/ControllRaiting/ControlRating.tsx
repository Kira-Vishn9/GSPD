import * as React from 'react';
import {Box, Rating, Typography} from '@muiDep/index.ts';

const ControlRating = ({setValue}) => {


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
                onChange={(event, newValue) => {
                    setValue('Rating',newValue);
                }}
            />
        </Box>
    );
}

export default ControlRating