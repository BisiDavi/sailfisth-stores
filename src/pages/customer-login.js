import React from 'react'
import { Container, Row, Col, Breadcrumb, BreadcrumbItem, Card, CardHeader, CardBody, CardText, Form, FormGroup, Label, Input, FormText, Button } from 'reactstrap'

import Link from 'next/link'
export async function getStaticProps() {
    return {
        props: {
            title: 'Customer login'
        }
    }
}

const CustomerLogin = () => {

    return (
        <React.Fragment>
            <section className="hero py-6">
                <Container>
                    <Breadcrumb className="pl-0">
                        <BreadcrumbItem><Link href="/index"><a>Home</a></Link></BreadcrumbItem>
                        <BreadcrumbItem active>Customer zone</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="hero-content">
                        <h1 className="hero-heading mb-3">Customer zone</h1>
                        <div>
                            <p className="text-muted">You can use the navbar-modal link or this page for customers' sign in.</p>
                        </div>
                    </div>
                </Container>
            </section>
            <section className="pb-5">
                <Container>
                    <Row>
                        <Col lg="5">
                            <Card>
                                <CardHeader className="py-4 px-5">
                                    <h5 className="mb-0">Login</h5>
                                </CardHeader>
                                <CardBody className="p-5">
                                    <p className="lead">Already our customer?</p>
                                    <p className="text-muted text-sm">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet.</p>
                                    <hr className="my-4"/>
                                    <Form action="/customer-orders">
                                        <FormGroup>
                                            <Label className="form-label" for="emailLogin">Email</Label>
                                            <Input id="emailLogin" type="text" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label className="form-label" for="passwordLogin">Password</Label>
                                            <Input id="passwordLogin" type="password" />
                                        </FormGroup>
                                        <Button color="dark" type="submit"><i className="fa fa-sign-in-alt mr-2" /> Log in</Button>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg={{ size: 5, offset: 1}}>
                            <Card>
                                <CardHeader className="py-4 px-5">
                                    <h5 className="mb-0">New account</h5>
                                </CardHeader>
                                <CardBody className="p-5">
                                    <p className="lead">Not our registered customer yet?</p>
                                    <p className="text-muted text-sm">With registration with us new world of fashion, fantastic discounts and much more opens to you! The whole process will not take you more than a minute!</p>
                                    <p className="text-muted text-sm">If you have any questions, please feel free to <Link href="contact.html"><a>contact us</a></Link>, our customer service center is working for you 24/7.</p>
                                    <hr className="my-4"/>
                                    <Form action="/customer-orders">
                                        <FormGroup>
                                            <Label className="form-label" for="name">Name</Label>
                                            <Input id="name" type="text" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label className="form-label" for="emailSignup">Email</Label>
                                            <Input id="emailSignup" type="text" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label className="form-label" for="passwordSignup">Password</Label>
                                            <Input id="passwordSignup" type="password" />
                                        </FormGroup>
                                        <Button color="dark" type="submit"><i className="far fa-user mr-2" /> Register</Button>
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

export default CustomerLogin;