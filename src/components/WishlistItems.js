import React from 'react'
import Link from 'next/link'
import { Row, Col, Button, Badge } from 'reactstrap'

import { WishlistContext } from '../components/WishlistContext'
import Icon from '../components/Icon'
import { removeWishlistItem } from '../hooks/UseWishlist'

const WishlistItems = ({ customer, className }) => {
    const [wishlistItems, dispatch] = React.useContext(WishlistContext) // Wishlist context

    // Remove from wishlist
    const removeFromWishlist = (e, product) => {
        e.preventDefault()
        dispatch({ type: 'remove', payload: product })
        removeWishlistItem(product)
    }
    return (
        <div className="cart">
            <div className="cart-body">
                {wishlistItems.map((item, index) =>
                    <div key={item.name} className="cart-item">
                        <Row className="d-flex align-items-center text-left text-md-center">
                            <Col xs="12" md="5">

                                {/* MOBILE REMOVE BUTTON */}
                                <a className="cart-remove close mt-3 d-md-none" href="#" onClick={(e) => removeFromWishlist(e, item)}><i className="fa fa-times" /></a>
                                {/* END MOBILE REMOVE BUTTON */}

                                <div className="d-flex align-items-center">

                                    {/* PRODUCT IMAGE */}
                                    <Link href={`/${item.category[1]}/${item.slug}`}>
                                        <a>
                                            <img className="cart-item-img" src={item.img.category[0].img} alt={item.img.category[0].alt} />
                                        </a>
                                    </Link>
                                    {/* END PRODUCT IMAGE */}

                                    
                                    <div className="cart-title text-left">
                                        
                                        {/* PRODUCT TITLE */}
                                        <Link href={`/${item.category[1]}/${item.slug}`}><a className="text-dark link-animated"><strong>{item.name}</strong></a></Link><br />
                                        {/* END PRODUCT TITLE */}

                                        {/* PRODUCT ATTRIBUTES */}
                                        {/* Only demo data. Add real data on production! */}
                                        <span className="text-muted text-sm">Size: {index === 0 ? 'Large' : 'Medium'}</span>
                                        <br />
                                        {index === 0 && <span className="text-muted text-sm">Colour: Green</span>}
                                        {/* END PRODUCT ATTRIBUTES */}

                                    </div>
                                </div>
                            </Col>
                            <Col xs="12" md="7" className="mt-4 mt-md-0">
                                <Row className={`align-items-center`}>
                                    <Col md="2">
                                        <Row>

                                            {/* PRODUCT PRICE */}
                                            <Col xs="6" className="d-md-none text-muted">Price per item</Col>
                                            <Col xs="6" md="12" className="text-right text-md-center">${item.price}</Col>
                                            {/* END PRODUCT PRICE */}

                                        </Row>
                                    </Col>
                                    <Col md="3">
                                        <Row className="align-items-center">

                                            {/* PRODUCT STATUS */}
                                            {/* Only demo data. Add real data on production! */}
                                            <Col xs="6" className="text-muted d-md-none">Status</Col>
                                            <Col xs="6" md="12" className="text-right text-md-left">
                                                {index === 0 && <Badge color={customer ? "primary-light" : "primary"} className="p-lg-2">In stock</Badge>}
                                                {index === 1 && <Badge color={customer ? "danger-light" : "danger"} className="p-lg-2">Out of stock</Badge>}
                                                {index === 2 && <Badge color={customer ? "info-light" : "dark"} className="p-lg-2">Being restocked</Badge>}
                                            </Col>
                                            {/* END PRODUCT STATUS */}

                                        </Row>
                                    </Col>

                                    {/* ADD TO CART */}
                                    {/* For demo purposes, only first items show Add to cart button. Remove conditionals on production. */}
                                    <Col md="4" className={customer ? "d-none d-md-block text-center" : ""}>
                                        {index === 0 ? customer ?
                                        <a href="#" className="mt-4 mt-md-0 text-primary">
                                            <Icon icon="add-to-cart-1" className="w-2rem h-2rem" />
                                        </a>
                                        :
                                        <Button color="outline-dark" className="mt-4 mt-md-0">Add to cart</Button>
                                        :
                                        ''
                                    }
                                    </Col>
                                    {/* END ADD TO CART */}

                                    <Col xs="2" className="d-none d-md-block text-center">

                                        {/* REMOVE BUTTON */}
                                        <a className="cart-remove text-muted" href="#" onClick={(e) => removeFromWishlist(e, item)}>
                                            <Icon icon="close-1" className="w-3rem h-3rem svg-icon-light" />
                                        </a>
                                         {/* END REMOVE BUTTON */}

                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                )}

            </div>
        </div>
    )
};

export default WishlistItems;