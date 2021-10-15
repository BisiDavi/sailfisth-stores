import React from 'react'
import { Container, Breadcrumb, BreadcrumbItem, Row, Col, Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import { Parallax } from 'react-parallax'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

import blogPosts from '../data/blog-posts.json'
import Link from 'next/link'
export async function getStaticProps() {
    return {
        props: {
            title: 'Blog Masonry'
        }
    }
}

const BlogMasonry = () => {
    return (
        <React.Fragment>
            <Container className="mt-5">
                <Parallax
                    className="hero hero-boxed py-lg-7"
                    bgImage="img/photo/chris-murray-YGzEX5yLKeA-unsplash.jpg"
                    strength={700}
                    bgImageStyle={{ top: "-35%" }}
                >
                    <div className="z-index-10">
                        <Breadcrumb className="pl-0">
                            <BreadcrumbItem><Link href="/index"><a>Home</a></Link></BreadcrumbItem>
                            <BreadcrumbItem active>Blog</BreadcrumbItem>
                        </Breadcrumb>
                        <h1 className="display-2 text-white">Blog</h1>
                    </div>
                </Parallax>
            </Container>
            <section className="pt-5 pb-6">
                <Container className="overflow-hidden">
                    <ResponsiveMasonry style={{ marginTop: "80px" }} columnsCountBreakPoints={{ 300: 1, 650: 2, 900: 3 }} >
                        <Masonry gutter="100px">
                            {blogPosts.map((post, index) =>
                                <div key={index} style={{ marginTop: "-60px" }} data-aos="zoom-in"><Link href={post.slug}><a className="d-block mb-4"><img className="img-fluid" src={post.masonry ? post.masonry : post.img} alt="" /></a></Link>
                                    <h5 className="mb-2"><Link href={post.slug}><a className="text-dark" >{post.name}</a></Link></h5>
                                    <p className="text-gray-500 text-sm"><Link href={`/${post.category[1]}`}><a className="text-uppercase text-xs mr-2" href="#">{post.category[0]}</a></Link>{post.date}</p>
                                </div>
                            )}
                        </Masonry>
                    </ResponsiveMasonry>
                    <Pagination listClassName="justify-content-between mb-5" aria-label="Blog pagination">
                        <PaginationItem>
                            <PaginationLink href="#"><i className="fa fa-chevron-left mr-1" />Older posts</PaginationLink>
                        </PaginationItem>
                        <PaginationItem disabled>
                            <PaginationLink href="#">Newer posts<i className="fa fa-chevron-right ml-1" /></PaginationLink>
                        </PaginationItem>
                    </Pagination>
                </Container>
            </section>
        </React.Fragment>
    )
};

export default BlogMasonry;