import React from "react";
import { MdFavorite,MdShoppingCart } from "react-icons/md";
import StyledNavList from "../Styled/NavList.styled";

const NavList = () => {
    return (
        <StyledNavList>
            <li>Deals</li>
            <li><MdFavorite className="icon" size='15'/> Saved</li>
            <li>My Account</li>
            <li><MdShoppingCart className="icon" size='15'/></li>
        </StyledNavList>

    )
}

export default NavList