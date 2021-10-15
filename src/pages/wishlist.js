import React from 'react'
import { Container, Breadcrumb, BreadcrumbItem } from 'reactstrap'

import Link from 'next/link'
import WishlistItems from '../components/WishlistItems'
import { WishlistContext } from '../components/WishlistContext'
export async function getStaticProps() {
    return {
        props: {
            title: 'Wishlist',
        }
    }
}

const Wishlist = () => {
    const [wishlistItemsState] = React.useContext(WishlistContext)
    return (
        <React.Fragment>
            <section className="hero py-6">
                <Container>
                    <Breadcrumb className="pl-0">
                        <BreadcrumbItem><Link href="/index"><a>Home</a></Link></BreadcrumbItem>
                        <BreadcrumbItem active>Wishlist</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="hero-content">
                        <h1 className="hero-heading mb-3">Wishlist</h1>
                        <div>
                            <p className="lead text-muted">You have {wishlistItemsState.length} item{wishlistItemsState.length !== 1 && 's'} in your wishlist. See a version of this template for <Link href="/customer-wishlist"><a>signed-in customer</a></Link>.</p>
                        </div>
                    </div>
                </Container>
            </section>
            <Container className="pb-6">
                <WishlistItems />
            </Container>
        </React.Fragment>
    )
};

export default Wishlist;