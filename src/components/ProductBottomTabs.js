import React from 'react'

import { Container, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane, Media } from 'reactstrap'

import ReviewForm from '../components/ReviewForm'
import Stars from '../components/Stars'

const ProductBottomTabs = ({product}) => {
    const [activeTab, setActiveTab] = React.useState(1)
    const toggleTab = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
    const groupByN = (n, data) => {
        let result = [];
        for (let i = 0; i < data.length; i += n) result.push(data.slice(i, i + n));
        return result;
    }

    const groupedAdditionalInfo = groupByN(4, product.additionalinfo)
    return (
        <section className="mt-5">
            <Container>
                <Nav tabs className="flex-column flex-sm-row">
                    <NavItem>
                        <NavLink
                            className={`detail-nav-link ${activeTab === 1 ? 'active' : ''}`} onClick={() => toggleTab(1)} style={{ cursor: "pointer" }}>Description</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={`detail-nav-link ${activeTab === 2 ? 'active' : ''}`} onClick={() => toggleTab(2)} style={{ cursor: "pointer" }}>Additional Information</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={`detail-nav-link ${activeTab === 3 ? 'active' : ''}`} onClick={() => toggleTab(3)} style={{ cursor: "pointer" }}>Reviews</NavLink>
                    </NavItem>
                </Nav>
                <TabContent className="py-4" activeTab={activeTab}>
                    <TabPane className="px-3" tabId={1}>
                        <Row>
                            <Col md="7" dangerouslySetInnerHTML={{ __html: product.description.long }} />
                            <Col md="5">
                                <img className="img-fluid" src={product.description.image} alt={product.name} />
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId={2}>
                        <Row>
                            {groupedAdditionalInfo.map((infoBlock, index) =>
                                <Col key={index} md="6">
                                    <table className="table text-sm">
                                        <tbody>
                                            {infoBlock.map((info, index) =>
                                                <tr key={index}>
                                                    <th className="font-weight-normal border-0">{info.name}</th>
                                                    <td className="text-muted border-0">{info.text}</td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </Col>
                            )}
                        </Row>
                    </TabPane>
                    <TabPane tabId={3}>
                        <Row className="mb-5">
                            <Col lg="10" xl="9">
                                {product.reviews.map(review =>
                                    <Media key={review.author} className="review">
                                        <div className="text-center mr-4 mr-xl-5">
                                            <img className="review-image" src={review.avatar} alt={review.author} />
                                            <span className="text-uppercase text-muted">{review.date}</span></div>
                                        <Media body>
                                            <h5 className="mt-2 mb-1">{review.author}</h5>
                                            <div className="mb-2"><Stars stars={review.stars} color="warning" secondColor="gray-200" starClass="fa-xs" /></div>
                                            <p className="text-muted">{review.text}</p>
                                        </Media>
                                    </Media>
                                )}
                                <ReviewForm />
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </Container>
        </section>
    )
};

export default ProductBottomTabs;