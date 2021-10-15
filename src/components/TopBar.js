import React from 'react'
import { Col, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row } from 'reactstrap'
import Icon from './Icon';

const TopBar = ({ header }) => {
    const [dropdown, setDropdown] = React.useState({})

    const toggleDropdown = (name) => {
        // Set dropdown by name
        setDropdown({ ...dropdown, [name]: !dropdown[name] });
    };

    return (
        <div className={`top-bar text-sm ${header && header.transparentBar ? "bg-transparent" : ""}`}>
            <Container className="px-lg-5 py-3" fluid>
                <Row className="align-items-center">

                    {/* SOCIAL & PHONE BLOCK */}
                    <Col md="4" className="d-none d-md-block">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item mr-2">
                                <a className="text-reset text-hover-primary" href="#">
                                    <i className="fab fa-facebook-f" />
                                </a>
                            </li>
                            <li className="list-inline-item mr-4">
                                <a className="text-reset text-hover-primary" href="#">
                                    <i className="fab fa-twitter" />
                                </a>
                            </li>
                            <li className="list-inline-item mr-2">
                                <Icon icon="calls-1" className="mr-2" />
                                    020-800-456-747
                                </li>
                        </ul>
                    </Col>
                    {/* END SOCIAL & PHONE BLOCK */}

                    {/* ANNOUNCEMENT */}
                    <Col md="4" sm="6" className="text-left text-md-center">
                        <p className="mb-0">Free in-store delivery</p>
                    </Col>
                    {/* END ANNOUNCEMENT */}


                    <Col md="4" sm="6" className="d-none d-sm-flex justify-content-end">

                        {/* LANGUAGE SWITCHER */}
                        <Dropdown
                            isOpen={dropdown["langs"]}
                            toggle={() => toggleDropdown("langs")}
                            className="border-right px-3">
                            <DropdownToggle className="topbar-link dropdown-toggle" tag="a" href="#" id="langsDropdown">
                                English
                            </DropdownToggle>
                            <DropdownMenu right aria-labelledby="langsDropdown">
                                <DropdownItem href="#">German</DropdownItem>
                                <DropdownItem href="#">French</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        {/* END LANGUAGE SWITCHER */}

                        {/* CURRENCY SWITCHER */}
                        <Dropdown
                            isOpen={dropdown.currency}
                            toggle={() => toggleDropdown("currency")}
                            className="pl-3 ml-0">
                            <DropdownToggle className="topbar-link dropdown-toggle" tag="a" href="#" id="currencyDropdown">
                                USD
                                </DropdownToggle>
                            <DropdownMenu right aria-labelledby="currencyDropdown">
                                <DropdownItem href="#">EUR</DropdownItem>
                                <DropdownItem href="#"> GBP</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        {/* END CURRENCY SWITCHER */}

                    </Col>


                </Row>
            </Container>
        </div>
    )
};

export default TopBar;