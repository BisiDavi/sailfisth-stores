import React from 'react'
import { Container, Row, Col, Breadcrumb, BreadcrumbItem, Button, Input, Nav, NavItem, NavLink, FormGroup, Label, Form, CustomInput, Collapse } from 'reactstrap'


import Icon from '../components/Icon'

import OrderSummary from '../components/OrderSummary'
import FormCheckout from '../components/FormCheckout'
import Link from 'next/link'
import { FormContext } from '../components/FormContext'
export async function getStaticProps() {
    return {
        props: {
            title: 'Checkout five steps',
            checkout: true
        }
    }
}

const Checkout2 = () => {
    const [formInputs, setFormInputs] = React.useContext(FormContext)
    React.useEffect(() => {
        !formInputs.shipping && setFormInputs({ ...formInputs, shipping: ["option0", "Usps next day",10] })
    }, [])
    return (
        <React.Fragment>
            <section className="hero py-6">
                <Container>
                    <Breadcrumb className="pl-0">
                        <BreadcrumbItem><Link href="/index"><a>Home</a></Link></BreadcrumbItem>
                        <BreadcrumbItem active>Checkout </BreadcrumbItem>
                    </Breadcrumb>
                    <div className="hero-content">
                        <h1 className="hero-heading">Checkout</h1>
                        <div>
                            <p className="lead text-muted">Choose your delivery method.</p>
                        </div>
                    </div>
                </Container>
            </section>
            <section>
                <Container>
                    <Row>
                        <Col lg="8">
                            <Nav pills className="custom-nav mb-5">
                                <NavItem className="w-25">
                                    <Link href="/checkout1" passHref>
                                        <NavLink className="text-sm" href="/checkout1">Address</NavLink>
                                    </Link>
                                </NavItem>
                                <NavItem className="w-25">
                                    <Link href="/checkout2" passHref>
                                        <NavLink className="text-sm" active>Delivery Method</NavLink>
                                    </Link>
                                </NavItem>
                                <NavItem className="w-25">
                                    <NavLink className="text-sm disabled" href="#">Payment Method</NavLink>
                                </NavItem>
                                <NavItem className="w-25">
                                    <NavLink className="text-sm disabled" href="#">Order Review</NavLink>
                                </NavItem>
                            </Nav>
                            <FormCheckout step={2} prev={['Back to the addresses', '/checkout1']} next={['Choose payment method', '/checkout3']} />
                        </Col>
                        <Col lg="4">
                            <OrderSummary />
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
};

export default Checkout2;