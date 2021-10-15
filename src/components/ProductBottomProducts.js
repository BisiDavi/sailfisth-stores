import React from 'react'

import { Container, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane, Media } from 'reactstrap'

import ReactIdSwiper from 'react-id-swiper'

import products from '../data/products-clothes.json'
import CardProduct from './CardProduct'

const ProductBottomProducts = ({ className }) => {
    const params = {
        spaceBetween: 15,
        slidesPerView: 2,
        breakpoints: {
            992: {
                slidesPerView: 3
            },
            1150: {
                slidesPerView: 4
            }
        },
        loop: true,
        pagination: {
            el: `.swiper-pagination`,
            clickable: true,
            dynamicBullets: true
        }
    }
    return (
        <section className={`py-5 ${className ? className : ''}`}>
            <Container>
                <h5 className="mb-4">You might also like these</h5>
                <div className="position-relative">
                    <ReactIdSwiper {...params} >
                        {products.map((product, index) =>
                            <div key={index} className="pb-5">
                                <CardProduct product={product} />
                            </div>
                        )}
                    </ReactIdSwiper>
                </div>
            </Container>
        </section>
    )
};

export default ProductBottomProducts;