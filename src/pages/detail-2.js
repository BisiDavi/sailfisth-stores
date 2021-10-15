import React from 'react'
import { Container, Row, Col, Breadcrumb, BreadcrumbItem, Alert, Form, Label, Button, Input, InputGroup, InputGroupAddon } from 'reactstrap'

import Icon from '../components/Icon'

import dummyProduct from '../data/dummyproduct.json'
import Stars from '../components/Stars'
import ProductBottomTabs from '../components/ProductBottomTabs'
import ProductBottomProducts from '../components/ProductBottomProducts'
import SwiperGallery from '../components/SwiperGallery'
import Link from 'next/link'
import SelectBox from '../components/SelectBox'

export async function getStaticProps() {
    return {
        props: {
            header: {
                absolute: true,
                transparentNavbar: true,
            },
            title: 'Product with background'
        }
    }
}

const Detail2 = () => {
    const [alert, setAlert] = React.useState(true)
    return (
        <React.Fragment>
            <section className="bg-gray-300 detail-background">
                <Container>
                    <div className="d-block" id="addToCartAlert">
                        <Alert color="success" className="mb-4 mb-lg-5" role="alert" isOpen={alert}>
                            <div className="d-flex align-items-center pr-3">
                                <Icon icon="checked-circle-1" className="d-none d-sm-block w-3rem h-3rem svg-icon-light flex-shrink-0 mr-3" />
                                <p className="mb-0">Push-up jeans have been added to your cart.
                        <br className="d-inline-block d-lg-none" />
                                    <Link href="/cart"><a className="text-reset text-decoration-underline ml-lg-3">View Cart</a></Link>
                                </p>
                            </div>
                            <button onClick={() => setAlert(false)} className="close close-absolute close-centered opacity-10 text-inherit" type="button" aria-label="Close">
                                <Icon icon="close-1" className="w-2rem h-2rem" />
                            </button>
                        </Alert>
                    </div>

                    <Row>
                        <Col lg="7" className="order-2 order-lg-1">
                            <SwiperGallery data={dummyProduct.img.detail} />
                        </Col>
                        <Col lg="5" className="pl-lg-4 order-1 order-lg-2">
                            <Breadcrumb>
                                <BreadcrumbItem><Link href="/index"><a>Home</a></Link></BreadcrumbItem>
                                <BreadcrumbItem><Link href="/category-full"><a>Tops and Jackets</a></Link></BreadcrumbItem>
                                <BreadcrumbItem active>Modern Jacket</BreadcrumbItem>
                            </Breadcrumb>
                            <h1 className="h2 mb-4">{dummyProduct.name}</h1>
                            <div className="d-flex flex-column flex-sm-row align-items-sm-center justify-content-sm-between mb-4">
                                <ul className="list-inline mb-2 mb-sm-0">
                                    <li className="list-inline-item h4 font-weight-light mb-0">${dummyProduct.pricesale.toFixed(2)}</li>
                                    <li className="list-inline-item text-muted font-weight-light">
                                        <del>${dummyProduct.price.toFixed(2)}</del>
                                    </li>
                                </ul>
                                <div className="d-flex align-items-center text-sm">
                                    <Stars stars={4} secondColor="gray-300" starClass="mr-1" />
                                    <span className="text-muted text-uppercase">25 reviews</span>
                                </div>
                            </div>
                            <p className="mb-4 text-muted">{dummyProduct.description.short}</p>
                            <Form>
                                <Row>
                                    <Col sm="6" lg="12" className="detail-option mb-4">
                                        <h6 className="detail-option-heading">Size <span>(required)</span></h6>
                                        <SelectBox options={dummyProduct.sizes} />
                                    </Col>
                                    <Col sm="6" lg="12" className="detail-option mb-4">
                                        <h6 className="detail-option-heading">Type <span>(required)</span></h6>
                                        {dummyProduct.types.map(type =>
                                            <Label key={type.value} className="btn btn-sm btn-outline-primary detail-option-btn-label" tag="label" for={type.id}> {type.label}
                                                <Input className="input-invisible" type="radio" name="material" value={type.value} id={type.id} required />
                                            </Label>
                                        )}
                                    </Col>
                                </Row>
                                <InputGroup className="w-100 mb-4">
                                    <Input bsSize="lg" className="detail-quantity" defaultValue="1" name="items" type="number" />
                                    <InputGroupAddon addonType="append" className="flex-grow-1">
                                        <Button color="dark" block type="submit">
                                            <i className="fa fa-shopping-cart mr-2"></i>Add to Cart
                                    </Button>
                                    </InputGroupAddon>
                                </InputGroup>
                                <Row className="mb-4">
                                    <Col xs="6">
                                        <a href="#"><i className="far fa-heart mr-2" />Add to wishlist</a>
                                    </Col>
                                    <Col xs="6" className="text-right">
                                        <ul className="list-inline mb-0">
                                            <li className="list-inline-item mr-2">
                                                <a className="text-dark text-hover-primary" href="#"><i className="fab fa-facebook-f" /></a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a className="text-dark text-hover-primary" href="#"><i className="fab fa-twitter" /></a>
                                            </li>
                                        </ul>
                                    </Col>
                                </Row>
                                <ul className="list-unstyled">
                                    <li><strong>Category:&nbsp;</strong><a className="text-muted" href="#">{dummyProduct.category}</a></li>
                                    <li><strong>Tags:&nbsp;</strong>
                                        {dummyProduct.tags.map((tag, index) =>
                                            <React.Fragment key={tag.name}>
                                                <a className="text-muted" href={tag.link}>{tag.name}</a>{index < dummyProduct.tags.length - 1 ? ',\u00A0' : ''}
                                            </React.Fragment>
                                        )}
                                    </li>
                                </ul>
                            </Form>
                        </Col>
                    </Row>
                </Container >
            </section>
            <ProductBottomTabs product={dummyProduct} />
            <ProductBottomProducts className="bg-gray-100" />

        </React.Fragment>
    )
};

export default Detail2;