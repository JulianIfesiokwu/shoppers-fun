import React from "react";
import Header from "../Header/Header.component";
import Footer from '../Footer/footer.component'
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>

    )
}

export default SharedLayout