import React from "react";
import StyledFooter from "../Styled/Footer.styled";
import { MdFacebook, } from "react-icons/md";
import { FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa'

const Footer = () => {
    return (
        <StyledFooter>
            <div className="all-links">
                <ul className="buy-list">
                    <li className="list-title">Buy</li>
                    <li>Registeration</li>
                    <li>Stores</li>
                </ul>
                <ul className="developer-list">
                    <li className="list-title">Tools & Apps</li>
                    <li>Developers</li>
                    <li>Site map</li>
                </ul>
                <ul className="connected-list">
                    <li className="list-title">Stay connected</li>
                    <li><a href='https://www.facebook.com' target='_blank'><MdFacebook className="icon" size='20' /> Facebook</a></li>
                    <li><a href='https://www.instagram.com' target='_blank'><FaInstagram className="icon" size='20' /> Instagram</a></li>
                    <li><a href='https://www.tiktok.com' target='_blank'><FaTiktok className="icon" size='20' /> TikTok</a></li>
                    <li><a href='https://www.twitter.com' target='_blank'><FaTwitter /> Twitter </a></li>
                </ul>
                <ul className="about-list">
                    <li className="list-title">About shoppers-fun</li>
                    <li>Company Info</li>
                    <li>News</li>
                    <li>Careers</li>
                    <li>Policies</li>
                    <li>Advertise with us</li>
                </ul>
                <ul className="help-and-contact">
                    <li className="list-title">Help and contact</li>
                    <li>Sellers information center</li>
                    <li>Contact us</li>
                </ul>
            </div>
            <div className="copyright">
                <p className="copyright-details">
                    Copyright ©2022 shoppers-fun Inc. All Rights Reserved. Accessibility, User Agreement, Privacy, Cookies, Do not sell my personal information and AdChoice.
                </p>
            </div>
        </StyledFooter>
    )
}

export default Footer