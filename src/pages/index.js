import React from 'react'
import Link from 'next/link'

import { Container, Row, Col, Card, CardImg, CardImgOverlay } from 'reactstrap'

import NewArrivals from '../components/NewArrivals'
import Swiper from '../components/Swiper'

import data from '../data/index.json'
import products from '../data/products-clothes.json'

import Sale from '../components/Sale'
import OurHistory from '../components/OurHistory'
import Brands from '../components/Brands'

export async function getStaticProps() {
  return {
    props: {
      header: {
        absolute: true,
        transparentBar: true,
        transparentNavbar: true
      },
      title: 'Homepage'
    }
  }
}

const Index = () => {
  return (
    <React.Fragment>
      <Swiper
        data={data.swiper}
        autoplay
        delay={5000}
        loop
        slidesPerView={1}
        spaceBetween={0}
        centeredSlides
        speed={1500}
        parallax
        navigation
        style={{height: '95vh', minHeight: '600px'}}
        containerclass='px-lg-7'
      />
      {data.maincategories &&
        <div className="bg-gray-100 position-relative">
          <Container className="py-6">
            <Row>
              {data.maincategories.map(category =>
                <Col key={category.name} sm="6" className="mb-5 mb-sm-0">
                  <Card className="card-scale shadow-0 border-0 text-white text-hover-gray-900 overlay-hover-light text-center">
                    <CardImg className="img-scale" src={category.img} alt={category.name} />
                    <CardImgOverlay className="d-flex align-items-center">
                      <div className="w-100 py-3">
                        <h2 className="display-3 font-weight-bold mb-0">{category.name}</h2>
                        <Link href={category.link}>
                        <a className="stretched-link" >
                          <span className="sr-only">{category.button}</span>
                        </a>
                        </Link>
                      </div>
                    </CardImgOverlay>
                  </Card>
                </Col>
              )}
            </Row>
          </Container>
        </div>
      }
      <NewArrivals fluid headCenter products={products}/>
      <Sale className="py-6" backgroundImage='/img/photo/deal-plain.jpg'/>
      <OurHistory />
      <Brands className="pb-6"/>
    </React.Fragment>
  )
};

export default Index;
