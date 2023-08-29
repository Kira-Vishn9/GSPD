import {Box, Stack, styled, Paper} from "@muiDep/index.ts";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    width: '80%',
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    alignSelf: 'center',
    m: '0 auto'
}));

const SideBar = () => {
    return (
        <>
            <Box sx={{
                p: 2,
                border: 1,
                borderRadius: '20px',
                maxWidth: '150px',
                position: 'relative',
                left: 0,
                boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);'
            }}>
                <Stack
                    direction="column"
                    justifyContent="space-evenly"
                    alignItems="flex-start"
                    spacing={0.5}
                >
                    <Item>Item 1</Item>
                    <Item>Item 2</Item>
                    <Item>Item 1</Item>
                    <Item>Item 1</Item>
                    <Item>Item 1</Item>
                    <Item>Item 1</Item>
                    <Item>Item 1</Item>
                    <Item>Item 1</Item>
                    <Item>Item 1</Item>
                    <Item>Long content</Item>
                </Stack>
            </Box>
        </>
    )
}

export default SideBar;