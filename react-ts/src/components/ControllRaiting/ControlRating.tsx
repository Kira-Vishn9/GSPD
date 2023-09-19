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
                max={10}
                name="simple-controlled"
                defaultValue={0}
                onChange={(event, newValue) => {
                    setValue('ratingAuthor',newValue);
                }}
            />
        </Box>
    );
}

export default ControlRating