import React from 'react'
import type { IComponentChild } from "@/Interface/Interface.ts";
import { authContext } from "@context/AuthContext.ts";
import Layout from "@/Layout/Layout.tsx";
import LayoutDefault from "@/Layout/Layout.tsx";

export const RootLayout = ({ children }: IComponentChild): JSX.Element => {
    const { auth } = React.useContext(authContext)

    return auth ? <LayoutDefault>{children}</LayoutDefault> : <Layout>{children}</Layout>
}