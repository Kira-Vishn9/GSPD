import { Rating, Box, } from "@muiDep/index.ts";

const BasicRating = () => {

    return (
        <Box
            sx={{
                '& > legend': { mt: 2},
            }}
        >
            <Rating size={"small"} name="read-only" value={2} readOnly />
        </Box>
    );
}

export default BasicRating;