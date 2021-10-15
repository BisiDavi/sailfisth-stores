import React from 'react'
import Link from 'next/link'

import {
    Container,
    Row,
    Col,
    Breadcrumb,
    BreadcrumbItem
} from 'reactstrap'

import DocsNav from '../../components/Docs/DocsNav'

export async function getStaticProps() {
    return {
        props: {
            title: "Docs introduction"
        },
    }
}

const Introduction = () => {
    return (
        <React.Fragment>
            <section className="hero py-6">
                <Container fluid>
                    <Row className="px-xl-5">
                        <Col lg={{ size: 10, offset: 2 }} xl="8">
                            <Breadcrumb>
                                <BreadcrumbItem>
                                    <Link href="/">
                                        <a>Home</a>
                                    </Link>
                                </BreadcrumbItem>
                                <BreadcrumbItem>
                                    <Link href="/docs/introduction">
                                        <a>Documentation</a>
                                    </Link>
                                </BreadcrumbItem>
                                <BreadcrumbItem active>
                                    Introduction
                        </BreadcrumbItem>
                            </Breadcrumb>
                            <div className="hero-content">
                                <h1 className="hero-heading">Docs - Introduction</h1>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Container fluid>
                <Row className="px-xl-5">
                    <Col lg="2">
                        <DocsNav />
                    </Col>
                    <Col lg="10" xl="8" className="docs-content">
                        <div className="text-lg">
                            <p>Hey, welcome to the <strong>Varkala Theme official documentation</strong>. </p>
                            <p>If you own a theme’s license already, thank you very much for purchasing! If not yet, you can <a href="https://themes.getbootstrap.com/product/varkala-e-commerce-theme/">buy the theme’s license here</a>.</p>
                            <p>This documentation is to help you with template’s customization. Basic HTML and CSS knowledge is required to customize this template. </p>
                            <hr className="my-5" />
                        </div>
                        <h5 className="text-uppercase mb-5">Theme info</h5>
                        <p><span className="text-uppercase text-muted">Item Name:</span> Varkala</p>
                        <p><span className="text-uppercase text-muted">Author:</span> Bootstrapious</p>
                        <p><span className="text-uppercase text-muted">Contact email for support &amp; pre-sale questions: </span><a href="mailto:hello@bootstrapious.com" className="text-dark">hello@bootstrapious.com</a></p>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
};

export default Introduction;