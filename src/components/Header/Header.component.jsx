import React from "react";
import { MdSearch } from 'react-icons/md'
import Logo from '../../assets/logo.png'
import { useState } from "react";
import { Link } from "react-router-dom";

import StyledHeader from "../Styled/Header.styled";
import Button from "../Styled/Button.styled";
import NavList from "../NavList/NavList.component";

const Header = (props) => {
    const [searchValue, setSearchValue] = useState('')
    const {searchForItem} = props

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

            <form className="search-container">
                <div className="search-bar">
                    <MdSearch  className='icon' size='25'/>
                    <input type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} className="search-box" placeholder="Search for anything..."/>
                </div>

                <Link to={`/products`}>
                    <Button onClick={(e) => {searchForItem(e, searchValue)}}>search</Button>
                </Link>
            </form>

            <NavList />            
            
        </StyledHeader>
    )

}

export default Header