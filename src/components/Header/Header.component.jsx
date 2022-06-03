import React from "react";
import { MdSearch } from 'react-icons/md'
import Logo from '../../assets/logo.png'
import { categories } from "../../data";
import { Link } from "react-router-dom";

import StyledHeader from "../Styled/Header.styled";
import Button from "../Styled/Button.styled";
import NavList from "../NavList/NavList.component";

const Header = () => {

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
                    <input type="text" className="search-box" placeholder="Search for anything..."/>
                    <select name="search-category" id="search-category">
                        <option value="" className="option">By category</option>
                        {categories.map((category, index) => {
                            const {name} = category
                            
                            return (
                                <option value={name} key={index} className='option'>{name}</option>
                            )
                        })}
                    </select>
                </div>

                <Button>search</Button>
                <NavList />
            </form>
            
        </StyledHeader>
    )

}

export default Header