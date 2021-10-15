import React from 'react'
import Link from 'next/link'

import { Badge } from 'reactstrap'

import Stars from './Stars'
import Icon from './Icon'

import { CartContext } from './CartContext'
import { addCartItem } from '../hooks/UseCart'
import { addWishlistItem } from '../hooks/UseWishlist'
import { WishlistContext } from './WishlistContext'
import ModalQuickView from './ModalQuickView'

const CardProduct = ({ product, masonry }) => {
    const [cartItems, dispatch] = React.useContext(CartContext)
    const [wishlistItems, wishlistDispatch] = React.useContext(WishlistContext)
    const [quickView, setQuickView] = React.useState(false)
    const addToCart = (e,product) => {
        e.preventDefault()
        addCartItem(product, "1")
        dispatch({type: 'add', payload: product, quantity: "1"})
    }
    const addToWishlist = (e,product) => {
        e.preventDefault()
        addWishlistItem(product)
        wishlistDispatch({type: 'add', payload: product})
    }

    return (
        <div className="product" data-aos="zoom-in" data-aos-delay="0">
            <div className="product-image mb-md-3">
                {product.new && <Badge color="secondary" className="product-badge">Fresh</Badge>}
                {product.sale && <Badge color="primary" className="product-badge">Sale</Badge>}
                {product.soldout && <Badge color="dark" className="product-badge">Sold out</Badge>}
                <Link href={product.category ? `/${product.category[1]}/${product.slug}`: product.link}>
                    <a>
                        {product.img.category.length > 1 ?
                            masonry ?
                            <img className="img-fluid" src={product.img.masonry.img} alt={product.img.masonry.alt} />
                            :
                            <div className="product-swap-image">
                                <img className="img-fluid product-swap-image-front" src={product.img.category[0].img} alt={product.img.category[0].alt} />
                                <img className="img-fluid" src={product.img.category[1].img} alt={product.img.category[1].alt} />
                            </div>
                            :
                            <img className="img-fluid" src={product.img.category[0].img} alt="product" />
                        }
                    </a>
                </Link>
                <div className="product-hover-overlay">
                    <a className="text-dark text-sm" href="#" onClick={(e) => addToCart(e,product)}>
                        <Icon className="text-hover-primary svg-icon-heavy d-sm-none" icon="retail-bag-1" />
                        <span className="d-none d-sm-inline">Add to cart</span>
                    </a>
                    <div>
                        <a className="text-dark text-hover-primary mr-2" href="#" onClick={(e) => addToWishlist(e,product)}>
                            <Icon className="svg-icon-heavy" icon="heart-1" />
                        </a>
                        <a className="text-dark text-hover-primary text-decoration-none" style={{ cursor: "pointer" }} onClick={() => setQuickView(!quickView)}>
                            <Icon className="svg-icon-heavy" icon="expand-1" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="position-relative">
                <h3 className="text-base mb-1">
                    <Link href={product.category ? `/${product.category[1]}/${product.slug}` : product.link}>
                        <a className="text-dark" >{product.name}</a>
                    </Link>
                </h3>
                <span className="text-gray-500 text-sm">${product.price}.00</span>
                <Stars stars={product.stars} className="product-stars text-xs" />

            </div>
            <ModalQuickView isOpen={quickView} toggle={() => setQuickView()} product={product}/>
        </div>
    )
};

export default CardProduct;