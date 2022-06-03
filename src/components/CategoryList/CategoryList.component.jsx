import React from "react";
import { Link } from "react-router-dom";
import Button from "../Styled/Button.styled";
import { MdArrowForward } from "react-icons/md";
import StyledCategoryList from "../Styled/CategoryList.styled";
import CategoryCard from "../CategoryCard/CategoryCard.component";
import { categories } from "../../data";
import ProductsPage from "../../pages/Products/Products.Page";


const CategoryList = () => {


    return (
        <StyledCategoryList>
            <div className="title-section">
                <h2>Explore Popular Catgeories</h2>
                <Link to='/products'><Button>See all <MdArrowForward className="icon" size='25'/></Button></Link>
            </div>
            <div className="all-categories">
                {categories.map((category, index) => {
                    const {name, img} = category
                    return (
                        <CategoryCard name={name} img={img} key={index}/>
                    )
                })}
            </div>
        </StyledCategoryList>
    )
}

export default CategoryList