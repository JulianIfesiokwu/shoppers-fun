import React from "react";
import { Link } from "react-router-dom";
import Button from "../Styled/Button.styled";
import { MdArrowForward } from "react-icons/md";
import StyledCategoryList from "../Styled/CategoryList.styled";

const CategoryList = (props) => {

    return (
        <StyledCategoryList>
            <div className="title-section">
                <h2>Explore Popular {props.title}</h2>
                <Link to='/'><Button>See all <MdArrowForward className="icon" size='25'/></Button></Link>
            </div>
            <div className="all-categories">

            </div>
        </StyledCategoryList>
    )
}

export default CategoryList