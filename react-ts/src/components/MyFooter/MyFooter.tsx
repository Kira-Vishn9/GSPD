import React from 'react';
import {
    styled,
    Stack,
    Typography,
    Box,
    TwitterIcon,
    FacebookIcon,
    InstagramIcon,
} from "@muiDep/index.ts";

// Определяем стили для Typography
const MyTypography = styled(Typography)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    m: '10px',
    border: "0",
    borderRadius: '0',
    boxShadow: '0 0 0 0',
}));

const MyFooter = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                m: '0 auto',
                width: '100%',
                justifyContent: 'space-around',
                marginTop: '40px',
                paddingBottom: '40px',
                borderTop: '1px solid black ',
                paddingTop: '30px'
                // boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.1)'
            }}
        >
            <Box sx={{ textAlign: '-webkit-center' }}>
                <Typography variant={'h2'}>4Ask</Typography>
                <Typography paragraph={true} sx={{ maxWidth: '300px' }}>
                    We always make our customers happy by providing as many choices as possible
                </Typography>
                <Box sx={{ display: 'flex', maxWidth: '100px', justifyContent: 'space-between' }}>
                    <TwitterIcon />
                    <FacebookIcon />
                    <InstagramIcon />
                </Box>
            </Box>
            <Box>
                <Typography variant={'h4'}>About</Typography>
                <Stack>
                    <MyTypography>About Us</MyTypography>
                    <MyTypography>Features</MyTypography>
                    <MyTypography>News</MyTypography>
                    <MyTypography>Menu</MyTypography>
                </Stack>
            </Box>
            <Box>
                <Typography variant={'h4'}>Company</Typography>
                <Stack>
                    <MyTypography>Why 4Ask</MyTypography>
                    <MyTypography>Partner With Us</MyTypography>
                    <MyTypography>FAQ</MyTypography>
                    <MyTypography>Blog</MyTypography>
                </Stack>
            </Box>
            <Box>
                <Typography variant={'h4'}>Support</Typography>
                <Stack>
                    <Typography>Account</Typography>
                    <MyTypography>Support Center</MyTypography>
                    <MyTypography>Feedback</MyTypography>
                    <MyTypography>Contact Us</MyTypography>
                </Stack>
            </Box>
        </Box>
    );
};

export default MyFooter;
