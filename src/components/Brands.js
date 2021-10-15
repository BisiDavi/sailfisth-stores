import React from 'react'

import {
    Container
} from 'reactstrap'

import ReactIdSwiper from 'react-id-swiper'

import data from '../data/brands-logos.json'

const Brands = props => {
    const params = {
        containerClass: `swiper-container brands-slider pb-5`,
        slidesPerView: 4,
        spaceBetween: 15,
        loop: true,
        roundLengths: true,
        pagination: {
            el: `.swiper-pagination`,
            clickable: true,
            dynamicBullets: true
        },
        breakpoints: {
            1200: {
                slidesPerView: 5
            }
        }
    }
   
    return (
        <section className={props.className ? props.className : ''}>
            <Container>
                <ReactIdSwiper {...params}>
                    {data.map((brand, index) =>
                        <div key={index} className="h-auto d-flex align-items-center justify-content-center">
                            <img
                                src={brand.img}
                                alt={brand.title}
                                className="img-fluid w-6rem opacity-7"
                            />
                        </div>
                    )}
                </ReactIdSwiper>
            </Container>
        </section>
    )
};

export default Brands;