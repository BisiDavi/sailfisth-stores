import React from 'react'
import { Container, Breadcrumb, BreadcrumbItem, Row, Col, Pagination, PaginationItem, PaginationLink } from 'reactstrap'

import Link from 'next/link'
import { Parallax } from 'react-parallax'

import blogPosts from '../data/blog-posts.json'
import CardPost from '../components/CardPost'

export async function getStaticProps() {
    return {
        props: {
            title: 'Blog',
            header: {
                transparentNavbar: true,
                absolute: true
            }
        }
    }
}

const Blog = () => {
    return (
        <React.Fragment>
            <Parallax
                className="hero hero-image"
                bgImage="/img/photo/blog-2.jpg"
                bgImageStyle={{ top: "-5%", height: "calc(100% + 130px)", objectFit: "cover", width: "100%" }}
                strength={700}
            >
                <Container>
                    <Breadcrumb className="pl-0">
                        <BreadcrumbItem><Link href="/index"><a>Home</a></Link></BreadcrumbItem>
                        <BreadcrumbItem active>Blog</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="hero-content">
                        <h1 className="hero-heading">Blog</h1>
                        <div>
                            <p className="lead ">As am hastily invited settled at limited civilly fortune me. Really spring in extent an by. Judge but built party world. Of so am he remember although required. Bachelor unpacked be advanced at. Confined in declared marianne is vicinity.</p>
                        </div>
                    </div>
                </Container>
            </Parallax>

            <section className="py-6">
                <Container className="overflow-hidden">
                    <Row className="mx-lg-n5">
                        {blogPosts.map((post, index) =>
                            <CardPost key={index} post={post} category />
                        )}
                    </Row>
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

export default Blog;
