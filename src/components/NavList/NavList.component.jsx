import React from "react";
import { Link } from "react-router-dom";
import Button from "../Styled/Button.styled";
import { useState } from "react";
import { MdFavorite, MdShoppingCart } from "react-icons/md";
import StyledNavList from "../Styled/NavList.styled";

const NavList = ({searchForItem, menu, cartItems}) => {
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
            <li>Daily Deals</li>
            <li><Link to='/Saved'><MdFavorite className="icon" size='15'/> Saved<span className="favourite-pill"></span></Link></li>
            <li>My Account</li>
            <li className="cart-logo"><Link to='/cart'><MdShoppingCart className="icon" size='15'/> Cart<span className="cart-pill">{cartItems.length > 0 ? cartItems.length : ''}</span>
            </Link></li>
        </StyledNavList>

    )
}

export default NavList