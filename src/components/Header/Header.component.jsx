import React from "react";
import Logo from '../../assets/logo.png'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img src={Logo} alt='logo' />
            </div>
            <Link className="company-name" to='/'>Shoppers-fun</Link>
            {/* {Navigation} */}
            
        </div>
    )

}

export default Header