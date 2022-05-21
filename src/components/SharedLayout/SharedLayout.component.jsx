import React from "react";
import Header from "../Header/Header.component";
import Footer from '../Footer/footer.component'
import { Outlet } from "react-router-dom";

const SharedLayout = (props) => {
    const { categories } = props
    return (
        <>
            <Header categories={categories} />
            <Outlet />
            <Footer />
        </>

    )
}

export default SharedLayout