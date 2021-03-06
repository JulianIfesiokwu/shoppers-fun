import React from "react";
import Logo from '../../assets/logo.png'
import { Link } from "react-router-dom";
import { useState } from "react";
import { MdOutlineMenu, MdClose } from "react-icons/md";
import StyledHeader from "../Styled/Header.styled";
import NavList from "../NavList/NavList.component";

const Header = ({ searchForItem, cartItems, favourites }) => {
    const [menu, setMenu] = useState(false)

    const showMenu = () => {
        setMenu(!menu)
    }

    return (
        <StyledHeader>
            <div className="logo">
                <Link to="/">
                    <div className="logo-container">
                        <img src={Logo} alt='logo' />
                    </div>
                    <p className="company-name" to='/'>Shoppers-fun</p>
                </Link>
            </div>

            {menu ? <MdClose className="mobile-menu icon" size='30' onClick={() => showMenu()}/> : <MdOutlineMenu className="mobile-menu icon" size='30' onClick={() => showMenu()}/> }
            <NavList searchForItem={searchForItem} menu={menu} showMenu={showMenu} cartItems={cartItems} favourites={favourites} />         
            
        </StyledHeader>
    )

}

export default Header