import React from "react";
import { Link } from "react-router-dom";
import Button from "../Styled/Button.styled";
import { useState } from "react";
import { MdFavorite, MdShoppingCart } from "react-icons/md";
import StyledNavList from "../Styled/NavList.styled";

const NavList = (props) => {
    const [searchValue, setSearchValue] = useState('')
    const {searchForItem, menu} = props

    return (
        <StyledNavList className={menu ? 'active' : ''}>
            <form className="search-container">                  
                <input type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} className="search-box" placeholder="Search for anything..."/>
                <Link to={`/products`}>
                <Button className="search-button" onClick={(e) => {searchForItem(e, searchValue)}}>GO!</Button>
            </Link>
            </form>
            <li>Daily Deals</li>
            <li><MdFavorite className="icon" size='20'/> Saved</li>
            <li>My Account</li>
            <li><MdShoppingCart className="icon" size='20'/> Cart</li>
        </StyledNavList>

    )
}

export default NavList