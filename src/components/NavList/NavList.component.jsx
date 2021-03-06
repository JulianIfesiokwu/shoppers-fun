import React from "react";
import { Link } from "react-router-dom";
import Button from "../Styled/Button.styled";
import { useState } from "react";
import { MdFavorite, MdShoppingCart } from "react-icons/md";
import StyledNavList from "../Styled/NavList.styled";

const NavList = ({searchForItem, menu, showMenu, cartItems, favourites}) => {
    const [searchValue, setSearchValue] = useState('')

    return (
        <StyledNavList className={menu ? 'active' : ''}>
            <form className="search-container">                  
                <input type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} className="search-box" placeholder="Search for anything..."/>
                <Link to={`/products`}>
                <Button className="search-button" onClick={(e) => {
                    searchForItem(searchValue)
                    setSearchValue('')
                    }}>GO!</Button>
            </Link>
            </form>
            <li onClick={() => showMenu()}><Link to='/Saved' className="favourite-logo"><MdFavorite className="icon" size='15'/> Saved<span className="favourite-pill">{favourites.length > 0 ? favourites.length : 0}</span></Link></li>
            <li onClick={() => showMenu()}>My Account</li>
            <li className="cart-logo" onClick={() => showMenu()}><Link to='/cart'><MdShoppingCart className="icon" size='15'/> Cart<span className="cart-pill">{cartItems.length > 0 ? cartItems.length : 0}</span>
            </Link></li>
        </StyledNavList>

    )
}

export default NavList