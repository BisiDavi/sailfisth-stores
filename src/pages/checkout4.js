import React from 'react'
import { Container, Row, Col, Breadcrumb, BreadcrumbItem, Nav, NavItem, NavLink } from 'reactstrap'


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

const Checkout4 = () => {
    const [formInputs, setFormInputs] = React.useContext(FormContext)

    React.useEffect(() => {
        setFormInputs({ ...formInputs, cart: JSON.parse(localStorage.getItem('cart')) })
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
                            <p className="lead text-muted">Please review your order.</p>
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
                                        <NavLink className="text-sm" >Delivery Method</NavLink>
                                    </Link>
                                </NavItem>
                                <NavItem className="w-25">
                                    <Link href="/checkout3" passHref>
                                        <NavLink className="text-sm">Payment Method</NavLink>
                                    </Link>
                                </NavItem>
                                <NavItem className="w-25">
                                    <Link href="/checkout4" passHref>
                                        <NavLink className="text-sm" active>Order Review</NavLink>
                                    </Link>
                                </NavItem>
                            </Nav>
                            <FormCheckout step={4} prev={['Back to the payment method', '/checkout3']} next={['Place an order', '/checkout-confirmed']} />
                        </Col>
                        <Col lg="4">
                            <OrderSummary />
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment >
    )
};

export default Checkout4;