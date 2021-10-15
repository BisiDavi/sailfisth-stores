import React from 'react'
import { Container, Row, Col, Breadcrumb, BreadcrumbItem, Button, Badge, Table } from 'reactstrap'


import Link from 'next/link'
import CustomerSidebar from '../components/CustomerSidebar'
export async function getStaticProps() {
    return {
        props: {
            title: 'Customer orders'
        }
    }
}

const CustomerOrders = () => {
    return (
        <React.Fragment>
            <section className="hero py-6">
                <Container>
                    <Breadcrumb className="pl-0">
                        <BreadcrumbItem><Link href="/index"><a>Home</a></Link></BreadcrumbItem>
                        <BreadcrumbItem active>Orders</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="hero-content">
                        <h1 className="hero-heading">Your orders</h1>
                        <div><p className="text-muted">Your orders in one place.</p></div>
                    </div>
                </Container>
            </section>
            <section className="pb-6">
                <Container>
                    <Row>
                        <Col lg="8" xl="9">
                            <Table hover className="table-responsive-md">
                                <thead className="bg-light">
                                    <tr>
                                        <th className="py-4 pl-4 text-sm border-0">Order #</th>
                                        <th className="py-4 text-sm border-0">Date</th>
                                        <th className="py-4 text-sm border-0">Total</th>
                                        <th className="py-4 text-sm border-0">Status</th>
                                        <th className="py-4 text-sm border-0">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th className="pl-4 py-5 align-middle"># 1735</th>
                                        <td className="py-5 align-middle">22/6/2017</td>
                                        <td className="py-5 align-middle">$150.00</td>
                                        <td className="py-5 align-middle">
                                            <Badge color="info-light">Being prepared</Badge>
                                        </td>
                                        <td className="py-5 align-middle">
                                            <Link href="/customer-order" passHref>
                                                <Button color="outline-dark" size="sm">View</Button>
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="pl-4 py-5 align-middle"># 1734</th>
                                        <td className="py-5 align-middle">7/5/2017</td>
                                        <td className="py-5 align-middle">$150.00</td>
                                        <td className="py-5 align-middle">
                                            <Badge color="warning-light">Action needed</Badge>
                                        </td>
                                        <td className="py-5 align-middle">
                                            <Link href="/customer-order" passHref>
                                                <Button color="outline-dark" size="sm">View</Button>
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="pl-4 py-5 align-middle"># 1730</th>
                                        <td className="py-5 align-middle">30/9/2016</td>
                                        <td className="py-5 align-middle">$150.00</td>
                                        <td className="py-5 align-middle">
                                            <Badge color="success-light">Received</Badge>
                                        </td>
                                        <td className="py-5 align-middle">
                                            <Link href="/customer-order" passHref>
                                                <Button color="outline-dark" size="sm">View</Button>
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="pl-4 py-5 align-middle"># 1705</th>
                                        <td className="py-5 align-middle">22/6/2016</td>
                                        <td className="py-5 align-middle">$150.00</td>
                                        <td className="py-5 align-middle">
                                            <Badge color="danger-light">Cancelled</Badge>
                                        </td>
                                        <td className="py-5 align-middle">
                                            <Link href="/customer-order" passHref>
                                                <Button color="outline-dark" size="sm">View</Button>
                                            </Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                        <Col xl="3" lg="4" className="mb-5">
                            <CustomerSidebar />
                        </Col>
                    </Row >
                </Container >
            </section >
        </React.Fragment >
    )
};

export default CustomerOrders;