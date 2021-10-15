import React from 'react'

import { ModalBody, Modal, ModalHeader, Nav, NavLink, Collapse, NavItem } from 'reactstrap'

import Icon from './Icon'

const SidebarRight = props => {
    const headerClose = <button className="close close-rotate" type="button" onClick={props.toggle}><Icon className="w-3rem h-3rem svg-icon-light align-middle" icon="close-1" /></button>

    const [dropdown, setDropdown] = React.useState(false)
    return (
        <Modal modalClassName="modal-right" isOpen={props.isOpen} toggle={props.toggle}>
            <ModalHeader className="border-0" close={headerClose} />
            <ModalBody className="px-5 pb-5">
                <div>
                    <h5 className="mb-5" data-aos="zoom-in" data-aos-delay="50">Varkala</h5>
                    <Nav className="flex-column mb-5">
                        <NavItem active>
                            <NavLink className="pl-0" href="#">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="pl-0" href="#">Link</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="pl-0" href="#" disabled>Disabled</NavLink>
                        </NavItem>
                        <NavItem className="drodpown" >
                            <NavLink className="pl-0 dropdown-toggle" onClick={() => setDropdown(!dropdown)} href="#" aria-expanded={dropdown}>
                                Dropdown link
                            </NavLink>
                            <Collapse isOpen={dropdown}  className="flex-column ml-3">
                                <Nav className="flex-column ml-3">
                                    <NavItem>
                                        <NavLink className="pl-0" href="#">Action</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="pl-0" href="#">Another action</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="pl-0" href="#">Something else here</NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </NavItem>
                    </Nav>
                    <ul className="list-inline mb-4">
                        <li className="list-inline-item mr-2"><i className="fab fa-facebook-f"/></li>
                        <li className="list-inline-item mr-2"><i className="fab fa-twitter"/></li>
                        <li className="list-inline-item mr-2"><Icon className="mr-2" icon="calls-1" />020-800-456-747</li>
                    </ul>
                    <p className="text-sm text-muted mb-0">Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.</p>
                </div>
            </ModalBody>
        </Modal>
    )
};

export default SidebarRight;