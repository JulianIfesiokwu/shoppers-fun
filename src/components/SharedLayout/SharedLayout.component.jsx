import React from "react";
import Header from "../Header/Header.component";
import Footer from '../Footer/footer.component'
import { Outlet } from "react-router-dom";

const SharedLayout = (props) => {
    const { categories, searchForItem, cartItems, favourites } = props
    return (
        <>
            <Header categories={categories} searchForItem={searchForItem} cartItems={cartItems} favourites={favourites} />
            <Outlet />
            <Footer />
        </>

    )
}

export default SharedLayout