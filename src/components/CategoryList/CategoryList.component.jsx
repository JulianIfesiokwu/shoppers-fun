import React from "react";
import { Link } from "react-router-dom";
import Button from "../Styled/Button.styled";
import { MdArrowForward } from "react-icons/md";
import StyledCategoryList from "../Styled/CategoryList.styled";
import CategoryCard from "../CategoryCard/CategoryCard.component";

const CategoryList = (props) => {

    const { categories, title } = props
    console.log(categories)

    return (
        <StyledCategoryList>
            <div className="title-section">
                <h2>Explore Popular {title}</h2>
                <Link to='/'><Button>See all <MdArrowForward className="icon" size='25'/></Button></Link>
            </div>
            <div className="all-categories">
                {/* {popularBrands?.map((item, index) => {
                    return (
                        <CategoryCard item={item} key={index} className='card' />
                    )
                })} */}
            </div>
        </StyledCategoryList>
    )
}

export default CategoryList