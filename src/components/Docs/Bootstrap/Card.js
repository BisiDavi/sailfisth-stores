import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism'

import {
    Row,
    Col,
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardText,
    CardImgOverlay,
    CardHeader,
    Button
} from 'reactstrap'

const CardComponent = () => {
    return (
        <div id="card" className="docs-item element">
            <h5 className="text-uppercase mb-4">Card</h5>
            <div className="docs-desc"><p className="lead">Bootstrap’s cards provide a flexible and extensible content container with multiple variants and options.. See the <a href="https://reactstrap.github.io/components/card/">ReactStrap documentation</a> for more details. </p></div>
            <div className="mt-5">
                <Row>
                    <Col md="6">
                        <Card className="border-0 shadow mb-3">
                            <CardImg top src="/img/blog/christopher-campbell-28571-unsplash.jpg" alt="Card image cap" />
                            <CardBody>
                                <CardTitle tag="h4">Card title</CardTitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText><Button href="#" color="outline-primary">Go somewhere</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="6">
                        <Card className="text-white border-0 shadow dark-overlay overflow-hidden">
                            <CardImg src="/img/blog/photo-1534126511673-b6899657816a.jpg" alt="Card image" />
                            <CardImgOverlay className="d-flex align-items-center">
                                <div className="overlay-content">
                                    <CardTitle className="text-uppercase font-weight-normal" tag="h3">
                                        Card title
                                     </CardTitle>
                                    <CardText>
                                        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                    </CardText>
                                    <CardText className="text-sm">
                                        Last updated 3 mins ago
                                    </CardText>
                                </div>
                            </CardImgOverlay>
                        </Card>
                    </Col>
                </Row>
            </div>
            <div className="mt-4">
                <SyntaxHighlighter language="javascript" style={tomorrow} className="rounded shadow p-4">
                    {highlightCode}
                </SyntaxHighlighter>
            </div>
        </div>
    )
};

export default CardComponent;

const highlightCode =
    `import { Card, CardBody, CardImg, Button } from 'reactstrap'

const Component = () => {
    return (
        <Card>
            <CardImg top src="/img/blog/christopher-campbell-28571-unsplash.jpg" alt="Card image cap" />
            <CardBody>
                <CardTitle tag="h4">Card title</CardTitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button href="#" color="outline-primary">Go somewhere</Button>
            </CardBody>
        </Card>
    )
}

export default Component
`