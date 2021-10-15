import React from 'react'
import Link from 'next/link'

import {
    Container,
    Row,
    Col,
    Breadcrumb,
    BreadcrumbItem,
    Card,
    CardBody
} from 'reactstrap'

import DocsNav from '../../components/Docs/DocsNav'

export async function getStaticProps() {
    return {
        props: {
            title: "Docs changelog"
        },
    }
}

const Changelog = () => {
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
                                <BreadcrumbItem active>Changelog</BreadcrumbItem>
                            </Breadcrumb>
                            <div className="hero-content">
                                <h1 className="hero-heading">Changelog</h1>
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
                        <div id="version1.0.0" className="docs-item">
                            <h5 className="text-uppercase mb-4">Version 1.0.0</h5>
                            <div className="docs-desc"><p className="text-muted">November 3, 2020</p></div>
                            <div className="mt-5">
                                <Card className="bg-gray-100 border-0">
                                    <CardBody className="py-4"> Initial Release</CardBody>
                                </Card>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
};

export default Changelog;