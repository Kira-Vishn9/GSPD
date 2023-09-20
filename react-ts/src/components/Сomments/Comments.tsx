import { Box, Stack, styled, Avatar, Typography, Button} from "@muiDep/index.ts";
import InputComments from "@components/InputComments/InputComments.tsx";

interface Comment {
    _id: {
        $oid: string;
    };
    authorId: string;
    text: string;
}

const Comments = ({ data, setPage }: { data: Comment[] | null, setPage: () => void }) => {

    if (!data) {
        return <Typography variant="h2">Loading...</Typography>;
    }

    return (
        <>
            <Box sx={{ width: "100%", display: "flex",  boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
                border: "1px solid rgba(0, 0, 0, 0.1)", borderRadius: '20px',
                flexDirection: 'column', m: 1
                 }}>
                <Button sx={{m: 1, border: 1}} onClick={setPage}>Show more</Button>
                <Stack spacing={2} sx={{ width: "100%"}}>
                    {data.map((comment, index) => (
                        <Box key={index} sx={{ display: 'flex', alignItems: 'center', }}>
                            <Avatar sx={{ m: 1 }}>M</Avatar>
                            <Typography>{comment.text}</Typography>
                        </Box>
                    ))}
                </Stack>
                <InputComments />
            </Box>
        </>
    );
};

export default Comments;
