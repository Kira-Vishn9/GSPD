import React from "react";
import {Box, TextField} from "@muiDep/index.ts";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {ColorModeContext} from "@/App.tsx";


const InputSearch = () => {
    const { mode } = React.useContext(ColorModeContext)
    const theme = createTheme({
        components: {
            MuiOutlinedInput: {
                styleOverrides: {
                    root:  {
                        '& fieldset': {
                            borderColor: 'white',
                            fontColor: 'white',
                        },
                        '&:hover fieldset': { // - The <fieldset> inside the Input-root when the input is hovered
                            borderColor: 'white',
                        },
                        '&:focused fieldset': { // - The <fieldset> inside the Input-root when the input is hovered
                            borderColor: 'white',
                        }
                    },
                },
            },
            MuiFormLabel: {
                styleOverrides: {
                    root: {
                        color: 'white',
                        '&.Mui-focused': { // - The label when the input is focused
                            color: 'white',
                        },
                        '&:hover': { // - The label when the input is hovered
                            color: 'white',
                        }
                    }
                }
            },
            MuiInputBase: {
                styleOverrides: {
                    input: {
                        color: 'white',
                    }
                }
            }
        },
    })

    return(
        <>
                <Box
                    component="form"
                    sx={{
                        color: 'white',
                        position: 'absolute',
                        zIndex: 2,
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <ThemeProvider theme={theme}>
                        <TextField
                            label={'Search'}
                            variant="outlined"
                        />
                    </ThemeProvider>
                </Box>
        </>
    )
}

export default InputSearch;