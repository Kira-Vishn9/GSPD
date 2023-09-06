import { Box, Stack, styled, Avatar } from "@muiDep/index.ts";
import InputComments from "@components/InputComments/InputComments.tsx";

const Item = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body1,
    textAlign: "center",
    color: theme.palette.text.secondary,
    display: "flex",
    alignItems: "center",
    justifyContent: "left",

}));

const Comments = () => {
    return (
        <>
            <Box sx={{ width: "100%", display: "flex",  boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
                border: "1px solid rgba(0, 0, 0, 0.1)", borderRadius: '20px',
                flexDirection: 'column', m: 1
                 }}>
                <Stack spacing={2} sx={{ width: "100%"}}>
                    <Item>
                        <Avatar sx={{m: 1}}>M</Avatar> helperhelperhelperhelper.)
                    </Item>
                    <Item>
                        <Avatar sx={{m: 1}}>M</Avatar> helper.)
                    </Item>
                    <Item>
                        <Avatar sx={{m: 1}}>M</Avatar> helperhelper.)
                    </Item>
                    <Item>
                        <Avatar sx={{m: 1}}>M</Avatar> helper.)
                    </Item>
                </Stack>
                <InputComments />
            </Box>
        </>
    );
};

export default Comments;
