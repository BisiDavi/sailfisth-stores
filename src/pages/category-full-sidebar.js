import React from 'react'
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import Link from 'next/link'
import products from '../data/products-clothes.json'
import CardProduct from '../components/CardProduct'

import CategoriesMenu from '../components/CategoriesMenu'

import Pagination from '../components/Pagination'
import CategoryTopBar from '../components/CategoryTopBar'


export async function getStaticProps() {
    return {
        props: {

            title: 'Category Full Sidebar'
        }
    }
}

const CategoryFullSidebar = () => {
    const productsFull = products.concat(products)
    return (
        <React.Fragment>
            <Container fluid className="container-fluid-px py-6">
                <Breadcrumb>
                    <BreadcrumbItem><Link href="/index"><a>Home</a></Link></BreadcrumbItem>
                    <BreadcrumbItem active>Shop</BreadcrumbItem>
                </Breadcrumb>
                <div className="hero-content pb-5">
                    <h1>Jackets and tops</h1>
                    <Row>
                        <Col xl="8">
                            <p className="lead text-muted">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
                                    </p>
                        </Col>
                    </Row>
                </div>
                <Row>
                    <Col xl="9" lg="8" className="products-grid order-lg-2">
                        <CategoryTopBar filter />
                        <Row>
                            {productsFull.slice(0, -2).map((product, index) =>
                                <Col key={index} sm="4" xl="3" xs="6">
                                    <CardProduct product={product} />
                                </Col>
                            )}
                        </Row>
                        <Pagination />
                    </Col>
                    <Col xl="3" lg="4" className="sidebar pr-xl-5 order-lg-1">
                        <CategoriesMenu long />
                    </Col>
                </Row >
            </Container >
        </React.Fragment >
    )
};

export default CategoryFullSidebar;