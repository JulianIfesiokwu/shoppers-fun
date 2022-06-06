import React from "react";
import Header from "../Header/Header.component";
import Footer from '../Footer/footer.component'
import { Outlet } from "react-router-dom";

const SharedLayout = (props) => {
    const { categories, searchForItem } = props
    return (
        <>
            <Header categories={categories} searchForItem={searchForItem}/>
            <Outlet />
            <Footer />
        </>

    )
}

export default SharedLayout