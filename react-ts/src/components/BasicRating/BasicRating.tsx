import { Rating, Box } from "@muiDep/index.ts";

const BasicRating = ({ value = 0, length = 5}) => {
    return (
        <Box
            sx={{
                '& > legend': { mt: 2 },
            }}
        >
            <Rating size={"small"} name="read-only" value={value} readOnly max={length}/>
        </Box>
    );
}

export default BasicRating;
