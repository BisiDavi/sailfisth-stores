import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import Icon from './Icon'

const Sale = props => {
    const [date, setDate] = React.useState(new Date())
    const [timeLeft, setTimeLeft] = React.useState({})

    React.useEffect(() => {
        setDate(date.setTime(date.getTime() + 15 * 86400000))
    }, [])


    const calculateTimeLeft = () => {
        const difference = +date - +new Date();
        difference > 0 &&
            setTimeLeft({
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            })
    }
    React.useEffect(() => {
        const timeout = setTimeout(() => {
            calculateTimeLeft()
        }, 1000)
        return () => {
            clearTimeout(timeout);
        }
    }, [timeLeft])

    return (
        <div className={`overflow-hidden ${props.className} ${props.backgroundImage ? 'bg-cover bg-cover-right' : ''}`} style={{ backgroundImage: props.backgroundImage && `url(${ props.backgroundImage})`, backgroundColor: props.backgroundColor && props.backgroundColor}}>
            {props.blobColor && <Icon icon="blob-shape-4" className="svg-blob" style={{ left: "-200px", top: 0, color: props.blobColor }} />}
            <Container>
                <Row>
                    <Col lg={props.image ? 6 : 10} xl="6" className={props.image ? 'd-flex align-items-center' : ''}>
                        <div>
                            <p className="subtitle mb-3 text-danger">Deal of the week</p>
                            <h3 className="h1">Oversized denim jacket</h3>
                            <p className="text-muted">
                                <del className="mr-3">$129.00</del><span>$79.00</span>
                            </p>
                            <p className="mb-4"><span className="badge badge-danger p-3">$50 off</span></p>
                            <div className="bg-white px-5 py-4 shadow mb-4" id="countdown">
                                <div className="row justify-content-between">
                                    {Object.keys(timeLeft).map(interval =>
                                        <div key={interval} className="col-6 col-sm-3 text-center mb-4 mb-sm-0">
                                            <h6 className="h4 mb-2 days">{timeLeft[interval]}&nbsp;</h6><span className="text-muted">{interval}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <p><Button color="outline-dark">Shop now</Button></p>
                        </div>
                    </Col>
                    {props.image &&
                        <Col lg="6" className="text-center">
                            <img className="img-fluid" src={props.image} alt="" style={{ maxHeight: "450px" }} />
                        </Col>
                    }
                </Row>
            </Container>
        </div>
    )
};

export default Sale;
