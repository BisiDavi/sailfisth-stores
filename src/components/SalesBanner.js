import React from 'react'
import { Container, Button } from 'reactstrap'
import Icon from './Icon'

const SalesBanner = props => {

    return (
        <div className={`position-relative py-6 overflow-hidden`} style={{ backgroundColor: "#fdf7e5" }} data-aos="flip-up">
            <Icon icon="blob-shape-4" className="svg-blob svg-blob-fill-current" style={{ right: "0", top: "0", color: "#ded3ae" }} />
            <Container>
                <img className="position-absolute d-none d-sm-block" style={{ right: "5%", top: 0, maxWidth: "500px", zIndex: 5 }} src="/img/product/lamps-transparent.png" alt="" />
                <div className="position-relative z-index-10">
                    <p className="subtitle mb-3" style={{ color: "#846707" }}>Widest choice </p>
                    <h4 className="h1 mb-3">Lights on sale</h4>
                    <h5 className="h2 font-weight-light mb-5">Our biggest sales this year &mdash; up to 60% off!</h5>
                    <Button color="outline-dark" href="#">Start shopping</Button>
                </div>
            </Container>
        </div>
    )
};

export default SalesBanner;