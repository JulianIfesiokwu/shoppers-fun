import React from "react";
import { MdSearch } from 'react-icons/md'
import Logo from '../../assets/logo.png'

import StyledHeader from "../Styled/Header.styled";
import Button from "../Styled/Button.styled";

const Header = () => {
    return (
        <StyledHeader>
            <div className="logo">
                <div className="logo-container">
                    <img src={Logo} alt='logo' />
                </div>
            <p className="company-name" to='/'>Shoppers-fun</p>
            </div>

            <form className="search-container">
                <div className="search-bar">
                    <MdSearch  className='icon' size='25'/>
                    <input type="text" className="search-box" placeholder="Search for anything..."/>
                    <select name="search-category" id="search-category">
                        <option value="">By category</option>
                    </select>
                </div>

                <Button>search</Button>
                {/* {Navlist} */}
            </form>

            {/* {Navigation} */}
            
        </StyledHeader>
    )

}

export default Header