import React from "react";
import { Link } from "react-router-dom";
import Button from "../Styled/Button.styled";
import CartPage from "../../pages/Cart/CartPage.component";
import { useState } from "react";
import { MdFavorite, MdShoppingCart } from "react-icons/md";
import StyledNavList from "../Styled/NavList.styled";

const NavList = ({searchForItem, menu}) => {
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
            <li><MdFavorite className="icon" size='20'/> Favourites</li>
            <li>My Account</li>
            <li><Link to='/cart'><MdShoppingCart className="icon" size='20'/> Cart
            </Link></li>
        </StyledNavList>

    )
}

export default NavList