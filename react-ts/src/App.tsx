import React from "react";
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline';
import './App.css'
import Main from "@/page/Main/Main.tsx";
import { Box, deepOrange, amber, grey, type PaletteMode, ThemeProvider, createTheme} from "@muiDep/index.ts";
import SignIn from "@/modules/SignIn/SignIn.tsx";
import SignUp from "@modules/SignUp/SignUp.tsx";
import {ColorModeContext} from "@context/ColorModeContext.ts";
import {authContext} from "@context/AuthContext.ts";
import Layout from "@/Layout/Layout.tsx";
import Profile from "@/page/Profile/Profile.tsx";
import OpenCard from "@/page/OpenCard/OpenCard.tsx";
import FeedPosts from '@/page/FeedPosts/FeedPosts.tsx'
import CreatePost from '@/page/CreatePost/CreatePost.tsx'
import { GoogleOAuthProvider } from '@react-oauth/google';
import {getToken} from "@/service/helper.ts";
import {Cloudinary} from "@cloudinary/url-gen";

const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                primary: {
                    main: "#1d1a1a",
                },
                divider: amber[200],
                background: {
                    default: '#ffffff',
                },
                text: {
                    primary: grey[900],
                    secondary: grey[900],
                },

            }
            : {
                primary: {
                    main: '#fff'
                },
                divider: deepOrange[700],
                background: {
                    default: '#000000',
                },
                text: {
                    primary: grey[100],
                    secondary: grey[100],
                },
            }),
    },
});

function App() {
    const [auth, setAuth] = React.useState(!!getToken());
    const cld = new Cloudinary({cloud: {cloudName: 'dxiyv9oni'}});
    const { postId } = useParams();
    
    return (
    <>
    <GoogleOAuthProvider clientId="<your_client_id>">
        <authContext.Provider value={{ auth, setAuth }}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path="*" element={<Main />} />
                        <Route path={'/signin'} element={<SignIn />} />
                        <Route path={'/signup'} element={<SignUp />} />
                        <Route path={'/profile'} element={<Profile />} />
                        <Route path={'/info/:postId'} element={<OpenCard />} />
                        <Route path={'/home'} element={<FeedPosts />} />
                        <Route path={'/create'} element={<CreatePost />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </authContext.Provider>
    </GoogleOAuthProvider>
    </>
  )
}

export default function ToggleColorMode() {
    const [mode, setMode] = React.useState<'light' | 'dark'>('light');
    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );

    const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

    const contextValue = {
        mode: mode,
        toggleColorMode: colorMode.toggleColorMode,
    };

    return (
        <ColorModeContext.Provider value={contextValue}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Box
                    sx={{
                        m: '0px auto',
                        bgcolor: 'background.default',
                        color: 'text.primary',
                        borderRadius: 1,
                        p: 0
                    }}
                >
                  <App />
                </Box>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}
