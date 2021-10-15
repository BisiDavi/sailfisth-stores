import React from 'react'
import classnames from 'classnames'
import { Button, ModalBody, Modal, Nav, NavLink, Row, Col, Form, FormGroup, FormText, CustomInput, Label, Input, Tooltip, TabContent, TabPane } from 'reactstrap'

import Icon from './Icon'

const ModalLogin = props => {
    const [tab, setTab] = React.useState('1')
    const [tooltip, setTooltip] = React.useState({})
    const toggleTooltip = (name) => {
        setTooltip({ ...tooltip, [name]: !tooltip[name] })
    }
    return (
        <Modal isOpen={props.isOpen} toggle={props.toggle}>
            <button className="close close-absolute" onClick={props.toggle} type="button">
                <Icon className="w-3rem h-3rem svg-icon-light align-middle" icon="close-1" />
            </button>
            <ModalBody className="py-5">
                <Nav className="list-inline">
                    <li className="list-inline-item">
                        <NavLink href="#" className={`nav-link-lg ${classnames({ active: tab === '1' })}`} onClick={() => setTab('1')}>Login</NavLink>
                    </li>
                    <li className="list-inline-item">
                        <NavLink href="#" className={`nav-link-lg ${classnames({ active: tab === '2' })}`} onClick={() => setTab('2')}>Register</NavLink>
                    </li>
                </Nav>
                <hr className="mb-3" />
                <TabContent activeTab={tab}>
                    <TabPane className="px-3" tabId="1">
                        <Form>
                            <FormGroup>
                                <Label className="form-label" for="email">Email</Label>
                                <Input id="email" type="text" />
                            </FormGroup>
                            <FormGroup>
                                <Row>
                                    <Col>
                                        <Label className="form-label" for="loginPassword">Password</Label>
                                    </Col>
                                    <Col xs="auto">
                                        <FormText color="primary" className="small" href="#" tag="a">Forgot password?</FormText>
                                    </Col>
                                </Row>
                                <Input name="loginPassword" id="loginPassword" placeholder="Password" type="password" required />
                            </FormGroup>
                            <FormGroup>
                                <CustomInput type="checkbox" id="loginRemember" label={<span className="text-sm text-muted">Remember me for 30 days</span>} />
                            </FormGroup>
                            <FormGroup>
                                <Button block color="outline-dark"><i className="fa fa-sign-in-alt mr-2" /> Log in</Button>
                            </FormGroup>
                        </Form>
                        <hr className="my-3 hr-text letter-spacing-2" data-content="OR" />
                        <div className="text-center">
                            <Button color="outline-primary" className="letter-spacing-0 mr-1" id="facebookTooltip">
                                <i className="fa-fw fa-facebook-f fab" />
                            </Button>
                            <Tooltip placement="top" isOpen={tooltip["facebookTooltip"]} target="facebookTooltip" toggle={() => toggleTooltip("facebookTooltip")}>
                                Connect with Facebook
                                </Tooltip>
                            <Button color="outline-muted" className="letter-spacing-0" id="googleTooltip">
                                <i className="fa-fw fa-google fab" />
                            </Button>
                            <Tooltip placement="top" isOpen={tooltip["googleTooltip"]} target="googleTooltip" toggle={() => toggleTooltip("googleTooltip")}>
                                Connect with Google
                                </Tooltip>
                        </div>
                    </TabPane>
                    <TabPane className="px-3" tabId="2">
                        <p className="text-muted text-sm">The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pit. </p>
                        <Form>
                            <FormGroup>
                                <Label className="form-label" for="registerName">Name</Label>
                                <Input id="registerName" type="text" />
                            </FormGroup>
                            <FormGroup>
                                <Label className="form-label" for="registerEmail">Email</Label>
                                <Input id="registerEmail" type="text" />
                            </FormGroup>
                            <FormGroup>
                                <Label className="form-label" for="registerPassword">Password</Label>
                                <Input id="registerPassword" type="password" />
                            </FormGroup>
                            <FormGroup className="text-center">
                                <Button block color="outline-dark"><i className="far fa-user mr-2" />Register</Button>
                            </FormGroup>
                        </Form>
                        <hr className="my-3 hr-text letter-spacing-2" data-content="OR" />
                        <div className="text-center">
                            <Button color="outline-primary" className="letter-spacing-0 mr-1" id="facebookTooltipRegister">
                                <i className="fa-fw fa-facebook-f fab" />
                            </Button>
                            <Tooltip placement="top" isOpen={tooltip["facebookTooltipRegister"]} target="facebookTooltipRegister" toggle={() => toggleTooltip("facebookTooltipRegister")}>
                                Connect with Facebook
                                </Tooltip>
                            <Button color="outline-muted" className="letter-spacing-0" id="googleTooltipRegister">
                                <i className="fa-fw fa-google fab" />
                            </Button>
                            <Tooltip placement="top" isOpen={tooltip["googleTooltipRegister"]} target="googleTooltipRegister" toggle={() => toggleTooltip("googleTooltipRegister")}>
                                Connect with Google
                                </Tooltip>
                        </div>
                    </TabPane>
                </TabContent>
            </ModalBody>
        </Modal>
    )
};

export default ModalLogin;