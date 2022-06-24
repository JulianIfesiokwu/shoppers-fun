import React from "react";
import Header from "../Header/Header.component";
import Footer from '../Footer/footer.component'
import { Outlet } from "react-router-dom";

const SharedLayout = (props) => {
    const { categories, searchForItem, cartItems, favourites } = props
    return (
        <div className="shared-layout">
            <Header categories={categories} searchForItem={searchForItem} cartItems={cartItems} favourites={favourites} />
            <Outlet />
            <Footer />
        </div>

    )
}

export default SharedLayout