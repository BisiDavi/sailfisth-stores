import React from 'react'
import { Container, Button } from 'reactstrap'
import Icon from './Icon'

const SalesSummer2 = props => {

    return (
        <div className="text-center" style={{ marginTop: "-150px" }} data-aos="flip-up">
            <img className="img-fluid z-index-10" src="img/product/chair-transparent-shadow.png" alt="" style={{ position: "relative", maxWidth: "350px", top: "150px", marginLeft: "auto", marginRight: "auto" }} />
            <div className="position-relative" style={{ background: "#ebf7ff" }}>
                <Icon icon="blob-shape-4" className="svg-blob svg-blob-fill-current" style={{ width: "400px", height: "400px", maxWidth: "100%", left: "-200px", color: "#c4e0f3" }} />
                <Icon icon="blob-shape-2" className="svg-blob svg-blob-fill-current" style={{ width: "300px", height: "300px", maxWidth: "100%", top: 0, right: "-200px", color: "#c4e0f3" }} />
                <Container className="py-6">
                    <div className="position-relative z-index-10">
                        <h4 className="display-3 font-weight-bold mt-5 mb-3">#summer #sales</h4>
                        <h5 className="h2 font-weight-light mb-5">Our biggest sales this year &mdash; up to 60% off!</h5>
                        <Button color="outline-dark" href="#">Start shopping</Button>
                    </div>
                </Container>
            </div>
        </div>
    )
};

export default SalesSummer2;