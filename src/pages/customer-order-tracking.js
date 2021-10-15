import React from 'react'
import { Container, Row, Col, Breadcrumb, BreadcrumbItem, Card, CardHeader, CardBody, CardText, Form, FormGroup, Label, Input, FormText, Button } from 'reactstrap'



import Link from 'next/link'
export async function getStaticProps() {
    return {
        props: {
            title: 'Checkout order tracking',
        }
    }
}

const CustomerOrderTracking = () => {

    return (
        <React.Fragment>
            <section className="hero py-6">
                <Container>
                    <Breadcrumb className="pl-0">
                        <BreadcrumbItem><Link href="/index"><a>Home</a></Link></BreadcrumbItem>
                        <BreadcrumbItem active>Customer zone</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="hero-content">
                        <h1 className="hero-heading mb-3">Track your order</h1>
                        <div>
                            <p className="text-muted mb-0">To track your order please enter your Order ID in the box below and press the "Track" button. This was given to you on your receipt and in the confirmation email you should have received.</p>
                        </div>
                    </div>
                </Container>
            </section>
            <section className="pb-6">
                <Container>
                    <Row>
                        <Col lg="5">
                            <Card>
                                <CardBody className="p-5">
                                    <Form>
                                        <FormGroup>
                                            <Label className="form-label" for="orderId">Order ID</Label>
                                            <Input id="orderId" type="text" aria-describedby="orderIdHelp" />
                                            <FormText id="orderIdHelp" className="text-muted">Found in your order confirmation email.</FormText>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label className="form-label" for="email">Billing email</Label>
                                            <Input id="email" type="email" aria-describedby="emailHelp" />
                                            <FormText id="emailHelp" className="text-muted">Found in your order confirmation email.</FormText>
                                        </FormGroup>
                                        <Button color="dark" type="submit"><i className="fa fa-map-marked mr-2"/> Track</Button>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
};

export default CustomerOrderTracking;