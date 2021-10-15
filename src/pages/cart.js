import React from 'react'
import { Container, Row, Col, Breadcrumb, BreadcrumbItem, Button } from 'reactstrap'

import OrderSummary from '../components/OrderSummary'
import Link from 'next/link'
import CartItems from '../components/CartItems'

export async function getStaticProps() {
    return {
        props: {
            title: 'Shopping cart'
        }
    }
}
import { CartContext } from '../components/CartContext'

const Cart = () => {
    const [cartItems, dispatch] = React.useContext(CartContext)
    return (
        <React.Fragment>
            <section className="hero py-6">
                <Container>
                    <Breadcrumb className="pl-0">
                        <BreadcrumbItem><Link href="/index"><a>Home</a></Link></BreadcrumbItem>
                        <BreadcrumbItem active>Shopping cart</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="hero-content">
                        <h1 className="hero-heading">Shopping cart</h1>
                        <div>
                            <p className="lead text-muted">You have {cartItems.length} items in your cart.</p>
                            <p className="lead text-muted">For the checkout, you can use either a <Link href="/checkout1"><a>Multiple pages checkout</a></Link> or have everything on a <Link href="/checkout"><a>single page</a></Link>.</p>
                        </div>
                    </div>
                </Container>
            </section>
            <section>
                <Container>
                    <Row className="mb-5">
                        <Col lg="8" className="pr-xl-5">
                            <CartItems className="mb-5" />  
                            <div className="d-flex justify-content-between flex-column flex-lg-row mb-5 mb-lg-0">
                                <Button color="link" className="text-muted" href="/category-full">
                                    <i className="fa fa-chevron-left" />Continue Shopping</Button>
                                <Button color="link" className="text-primary" href="#"><i className="fa fa-sync"/> Update cart</Button>
                            </div>
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

export default Cart;