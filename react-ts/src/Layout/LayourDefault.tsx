import React from 'react'
import Header from "@components/Header/Header.tsx";
import MyFooter from "@components/MyFooter/MyFooter.tsx";
import {IComponentChild} from "@/Interface/Interface.ts";
import {Box} from "@muiDep/index.ts";

export function LayoutDefault ({ children }: IComponentChild): JSX.Element {
    return (
        <>
            <Header />
            <main>
                <Box sx={{m: 2, textAlign: '-webkit-center'}}>
                    {children}
                </Box>
            </main>
            <MyFooter />
        </>
    )
}