import React from "react";
import { MdFavorite,MdShoppingCart } from "react-icons/md";
import StyledNavList from "../Styled/NavList.styled";

const NavList = () => {
    return (
        <StyledNavList>
            <li>Deals</li>
            <li><MdFavorite /> Saved</li>
            <li>My Account</li>
            <li><MdShoppingCart /></li>
        </StyledNavList>

    )
}

export default NavList