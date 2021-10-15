import React from 'react'
import Link from 'next/link'
import * as Scroll from 'react-scroll'

import {
    Container,
    Row,
    Col,
    Breadcrumb,
    BreadcrumbItem,
    Nav
} from 'reactstrap'

import DocsNav from '../../components/Docs/DocsNav'

import Accordion from '../../components/Docs/Theme/Accordion'
import IconsEcommerce from '../../components/Docs/Theme/IconsEcommerce'
import IconsFontAwesome from '../../components/Docs/Theme/IconsFontAwesome'
import ReactSelect from '../../components/Docs/Theme/ReactSelect'
import Swiper from '../../components/Docs/Theme/Swiper'
import ResponsiveBorders from '../../components/Docs/Theme/ResponsiveBorders'
import BackgroundImage from '../../components/Docs/Theme/BackgroundImage'
import ImageOverlay from '../../components/Docs/Theme/ImageOverlay'

import BlockUtilities from '../../components/Docs/Theme/BlockUtilities'
import TextUtilities from '../../components/Docs/Theme/TextUtilities'
import Blob from '../../components/Docs/Theme/Blob'
import Animations from '../../components/Docs/Theme/Animations'
import CartDocs from '../../components/Docs/Theme/CartDocs'
import WishlistDocs from '../../components/Docs/Theme/WishlistDocs'
import ReactMagnifier from '../../components/Docs/Theme/ReactMagnifier'
import CategoryTopBarDocs from '../../components/Docs/Theme/CategoryTopBarDocs'
import Cards from '../../components/Docs/Theme/Cards'
import ProductModal from '../../components/Docs/Theme/ProductModal'
import ServicesBlockDocs from '../../components/Docs/Theme/ServicesBlockDocs'
import ResponsiveCollapse from '../../components/Docs/Theme/ResponsiveCollapse'
import Icons from '../../components/Docs/Theme/Icons'
import TopBar from '../../components/Docs/Theme/TopBar'
import Filters from '../../components/Docs/Theme/Filters'

export async function getStaticProps() {
    return {
        props: {
            nav: {
                light: true,
                classes: "shadow",
                color: "white",
            },
            title: "Theme Components"
        },
    }
}

const ComponentsTheme = () => {
    const ScrollLink = Scroll.Link

    const scrollLinkProps = {
        offset: -100,
        spy: true,
        smooth: true,
        activeClass: "active",
        className: "nav-link",
        href: "#"
    }
    return (
        <React.Fragment>
            <section className="hero py-6">
                <Container className="position-relative">
                    <Row className="px-xl-5">
                        <Col lg={{ size: 10, offset: 2 }} xl="8">
                            <Breadcrumb listClassName="pl-0">
                                <BreadcrumbItem>
                                    <Link href="/">
                                        <a>Home</a>
                                    </Link>
                                </BreadcrumbItem>
                                <BreadcrumbItem>
                                    <Link href="/docs/introduction">
                                        <a>Documentation</a>
                                    </Link>
                                </BreadcrumbItem>
                                <BreadcrumbItem active>
                                    Theme Components
                        </BreadcrumbItem>
                            </Breadcrumb>
                            <div className="hero-content">
                                <h1 className="hero-heading">Theme Components</h1>
                                <div>
                                    <p className="lead text-muted">This is a quick showcase of some of the main custom components that come with this theme.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Container fluid>
                <Row className="px-xl-5">
                    <Col lg="2">
                        <DocsNav />
                    </Col>
                    <Col
                        lg="8"
                        className="position-relative"
                    >
                        <Accordion />
                        <Animations />
                        <Blob />
                        <CartDocs />
                        <Cards />
                        <CategoryTopBarDocs />
                        <Filters />
                        <Icons />
                        <ProductModal />
                        <ResponsiveCollapse />
                        <Swiper />
                        <ReactMagnifier />
                        <ReactSelect />
                        <ServicesBlockDocs />
                        <WishlistDocs />
                        <TopBar />

                        <BackgroundImage />
                        <ImageOverlay />
                        <ResponsiveBorders />
                        <BlockUtilities />
                        <TextUtilities />
                    </Col>
                    <Col xl="2">
                        <Nav tag="nav" pills className="flex-column sticky-top ml-1 p-3 mb-5 border-left">
                            <h6 className="sidebar-heading">React components</h6>
                            {sidebarMenu.map(item =>
                                item.divider ?
                                    <h6 key={item.label} className="sidebar-heading mt-3">{item.label}</h6>
                                    :
                                    <ScrollLink key={item.label} to={item.to} {...scrollLinkProps}>{item.label}</ScrollLink>
                            )}
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
};

export default ComponentsTheme;

const sidebarMenu = [
    {
        "label": "Accordion",
        "to": "accordion"
    },
    {
        "label": "Animations",
        "to": "animations"
    },
    {
        "label": "Blob",
        "to": "blob"
    },
    {
        "label": "Cart",
        "to": "cart"
    },
    {
        "label": "Cards",
        "to": "cards"
    },
    {
        "label": "Category Top Bar",
        "to": "categorytopbar"
    },
    {
        "label": "Filters",
        "to": "filters"
    },
    {
        "label": "Icons",
        "to": "icons"
    },
    {
        "label": "Product Modal",
        "to": "productmodal"
    },
    {
        "label": "Reasponsive Collapse",
        "to": "responsivecollapse"
    },
    {
        "label": "React ID Swiper",
        "to": "swiper"
    },
    {
        "label": "React Magnifier",
        "to": "reactmagnifier"
    },
    {
        "label": "React Select",
        "to": "react-select"
    },
    {
        "label": "Services Block",
        "to": "servicesblock"
    },
    {
        "label": "Wishlist",
        "to": "wishlist"
    },
    {
        "label": "Top bar",
        "to": "topbar"
    },
    {
        "label": "Utilities",
        "divider": true
    },
    {
        "label": "Background image",
        "to": "backgroundimage"
    },
    {
        "label": "Image overlay",
        "to": "imageoverlay"
    },
    {
        "label": "Responsive borders",
        "to": "responsiveborders"
    },
    {
        "label": "Block utilities",
        "to": "blockutilities"
    },
    {
        "label": "Text utilities",
        "to": "textutilities"
    }
]