import React from 'react'

import { Button, ModalBody, Modal, ModalHeader, ModalFooter } from 'reactstrap'

import { CartContext } from '../components/CartContext'
import { removeCartItem } from '../hooks/UseCart'
import Icon from './Icon'
import Link from 'next/link'

const SidebarCart = props => {
    const [cartItems, dispatch] = React.useContext(CartContext)

    const removeFromCart = product => {
        dispatch({type: 'remove', payload: product})
       removeCartItem(product)
    }
    const headerClose = <button className="close modal-close close-rotate" type="button" onClick={props.toggle}><Icon className="w-3rem h-3rem svg-icon-light align-middle" icon="close-1" /></button>

    return (
        <Modal modalClassName="modal-right" contentClassName="sidebar-cart-content" isOpen={props.isOpen} toggle={props.toggle}>
            <ModalHeader className="border-0" close={headerClose} />
            <ModalBody className="px-5 sidebar-cart-body">
                
                {cartItems.length > 0 ? <div className="sidebar-cart-product-wrapper custom-scrollbar">
                     {cartItems.map(item =>
                        <div key={item.slug} className="navbar-cart-product">
                            <div className="d-flex align-items-center">
                                <Link href={`/${item.category[1]}/${item.slug}`}>
                                    <a>
                                        <img className="img-fluid navbar-cart-product-image" src={item.img.category[0].img} alt={item.img.category[0].alt} />
                                    </a>
                                </Link>
                                <div className="w-100">
                                    <a className="close" onClick={() => removeFromCart(item)} href="#">
                                        <Icon className="sidebar-cart-icon" icon="close-1" />
                                    </a>
                                    <div className="pl-3">
                                        <Link href={`/${item.category[1]}/${item.slug}`}>
                                            <a className="navbar-cart-product-link text-dark link-animated">{item.name}</a>
                                        </Link>
                                        <small className="d-block text-muted">Quantity: {item.quantity ? item.quantity : 1}</small><strong className="d-block text-sm">${item.quantity ? item.price * item.quantity : item.price}</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                     }
                </div>
                :
                <div className="text-center mb-5">
                    <Icon className="w-3rem h-3rem svg-icon-light mb-4 text-muted" icon="retail-bag-1" />
                    <p>Your cart is empty </p>
                </div>
                }
            </ModalBody>
            <ModalFooter className="sidebar-cart-footer">
                <div className="w-100">
                    <h5 className="mb-4">Subtotal: <span className="float-right">$465.32</span></h5>
                    <Button color="outline-dark" block className="mb-3" href="/cart">View cart</Button>
                    <Button color="dark" block href="/checkout">Checkout</Button>
                </div>
            </ModalFooter>
        </Modal>
    )
};

export default SidebarCart;