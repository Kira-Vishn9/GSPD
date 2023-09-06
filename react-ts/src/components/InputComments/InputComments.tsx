import {Box, Button, TextField} from "@muiDep/index.ts";

const InputComments = () => {
    return(
        <>
            <Box
                sx={{
                    maxWidth: '100%',
                    m: 2
                }}
            >
                <TextField fullWidth label="Comment" id="fullWidth" />
                <Button sx={{m: 1}}>Submit</Button>
            </Box>
        </>
    )
}

export default InputComments;