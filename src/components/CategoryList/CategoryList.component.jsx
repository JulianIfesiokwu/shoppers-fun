import React from "react";
import { Link } from "react-router-dom";
import Button from "../Styled/Button.styled";
import { MdArrowForward } from "react-icons/md";
import StyledCategoryList from "../Styled/CategoryList.styled";
import CategoryCard from "../CategoryCard/CategoryCard.component";
import StyledCategoryCard from "../Styled/CategoryCard.styled";


const CategoryList = (props) => {

    const { names } = props

    return (
        <StyledCategoryList>
            <div className="title-section">
                <h2>Explore Popular Catgeories</h2>
                <Link to='/'><Button>See all <MdArrowForward className="icon" size='25'/></Button></Link>
            </div>
            <div className="all-categories">
                {names?.map((name) => {
                    return (
                        <StyledCategoryCard name={name} />
                    )
                })}
            </div>
        </StyledCategoryList>
    )
}

export default CategoryList