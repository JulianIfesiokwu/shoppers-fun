import React, { useState } from "react";
import { carouselImages } from "../../data";
import { MdChevronLeft, MdChevronRight, MdArrowForward } from "react-icons/md";
import Button from '../../components/Styled/Button.styled'
import StyledHomepage from "../../components/Styled/HomePage.styled";


const HomePage = () => {
    const [ current, setCurrent ] = useState(0)
    const length = carouselImages.length
    const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1)
    const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1)

    return (
        <StyledHomepage>
        <div className="carousel">
            <MdChevronLeft className="left-chevron" size='70' onClick={prevSlide}/>
            {
                carouselImages.map((image, index) => {
                    const { url, category} = image
                    return (
                        < div key={index} className={index === current ? 'slide active' : 'slide'}>
                            {index === current &&                             
                            <div>
                                <div className="img-container" >
                                    <img src={url} alt={category} />
                                </div>
                                <div className="section-info">
                                    <Button className="select-category">{category.toUpperCase()}<MdArrowForward className="icon"/></Button>
                                    <p className="about-image">Discover a world of affordable clothing, shop by category, seasons or check out our deals on offer.</p>
                                </div>
                            </div>}

                        </div>
                    )
                })
            }
            <MdChevronRight className="right-chevron" size='70' onClick={nextSlide}/>
        </div>
        {/* popular brands */}
        {/* popular categories */}
        {/* daily deals */}
        </StyledHomepage>
    )
}

export default HomePage