import React from "react";
import { carouselImages } from "../../data";
import { MdChevronLeft,MdChevronRight } from "react-icons/md";


const HomePage = () => {
    return (
        <>
        <div className="carousel">
            <MdChevronLeft />
            {
                carouselImages.map((image) => {
                    const { url, id, category} = image
                    return (
                        <div className="img-container">
                            <img src={url} alt={category} id={id} />
                        </div>
                    )
                })
            }
            <MdChevronRight />
        </div>
        {/* popular brands */}
        {/* popular categories */}
        {/* daily deals */}
        </>
    )
}

export default HomePage