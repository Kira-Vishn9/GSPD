import Header from "@components/Header/Header.tsx";
import MyFooter from "@components/MyFooter/MyFooter.tsx";
import {IComponentChild} from "@/Interface/Interface.ts";


const Layout = ({children}: IComponentChild): JSX.Element => {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <MyFooter />
        </>
    )
}

export default Layout;