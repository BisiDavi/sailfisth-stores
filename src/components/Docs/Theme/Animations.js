import React from 'react'
import { Card, CardBody, CardImg, CardText } from 'reactstrap'

const Animations = () => {
    return (
        <div id="animations" className="docs-item element">
            <h5 className="text-uppercase mb-4">Animations</h5>
            <div className="docs-desc">
                <p className="lead">The theme uses a great plugin for on-scroll animations, <a href="https://michalsnik.github.io/aos/">AOS</a>.</p><p>To activate the animations on particular element, just choose from the available animations and paste it into element's data-aos attribute, e.g. <code>data-aos="flip-up"</code> or <code>data-aos="zoom-in"</code>.</p>
            </div>
            <div className="mt-5">
                <Card className="border-0 mb-4" style={{maxWidth: "300px"}} data-aos="zoom-in">
                    <CardImg top src="/img/product/chair3-3.jpg" />
                    <CardBody>
                        <CardText>Zoom-in animation.</CardText>
                    </CardBody>
                </Card>
                <Card className="border-0 mb-4" style={{maxWidth: "300px"}} data-aos="flip-up">
                    <CardImg top src="/img/product/clock.jpg" />
                    <CardBody>
                        <CardText>Flip-up animation.</CardText>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
};

export default Animations;