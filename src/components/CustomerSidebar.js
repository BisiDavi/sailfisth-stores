import Link from 'next/link'
import React from 'react'

import { Badge, ListGroup, ListGroupItem } from 'reactstrap'
import { WishlistContext } from '../components/WishlistContext'

import Icon from '../components/Icon'
import ActiveLink from './ActiveLink'

const CustomerSidebar = () => {
    const [wishlistItems, dispatch] = React.useContext(WishlistContext)
    return (
        <div className="customer-sidebar card border-0">
            <div className="customer-profile">
                <a className="d-inline-block" href="#">
                    <img className="img-fluid rounded-circle customer-image" src="img/avatar/avatar-0.jpg" alt="" />
                </a>
                <h5>Jane Doe</h5>
                <p className="text-muted text-sm mb-0">Los Angeles, CA</p>
            </div>
            <ListGroup className="customer-nav">
                <ActiveLink href="/customer-orders" activeClassName="active" passHref>
                    <ListGroupItem tag="a" className="d-flex justify-content-between align-items-center">
                        <span>
                            <Icon icon="paper-bag-1" className="svg-icon-heavy mr-2" />Orders
                                            </span>
                        <Badge color="light" pill className="font-weight-normal px-3">5</Badge>
                    </ListGroupItem>
                </ActiveLink>
                <ActiveLink href="/customer-account" activeClassName="active" passHref>
                    <ListGroupItem tag="a" className="d-flex justify-content-between align-items-center">
                        <span>
                            <Icon icon="male-user-1" className="svg-icon-heavy mr-2" />Profile
                                            </span>
                    </ListGroupItem>
                </ActiveLink>
                <ActiveLink href="/customer-addresses" activeClassName="active" passHref>
                    <ListGroupItem tag="a" className="d-flex justify-content-between align-items-center">
                        <span>
                            <Icon icon="real-estate-1" className="svg-icon-heavy mr-2" />Addresses
                                            </span>
                    </ListGroupItem>
                </ActiveLink>
                <ActiveLink href="/customer-wishlist" activeClassName="active" passHref>
                    <ListGroupItem tag="a" className="d-flex justify-content-between align-items-center">
                        <span>
                            <Icon icon="heart-1" className="svg-icon-heavy mr-2" />Wishlist
                                            </span>
                        <Badge color="light" pill className="font-weight-normal px-3">{wishlistItems.length}</Badge>
                    </ListGroupItem>
                </ActiveLink>
                <ActiveLink href="/customer-login" activeClassName="active" passHref>
                    <ListGroupItem tag="a" className="d-flex justify-content-between align-items-center">
                        <span>
                            <Icon icon="exit-1" className="svg-icon-heavy mr-2" />Log out
                                            </span>
                    </ListGroupItem>
                </ActiveLink>
            </ListGroup>
        </div>
    )
};

export default CustomerSidebar;