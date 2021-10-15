import React from "react";
import Router from "next/router";
import Link from "next/link";
import {
    DropdownItem,
    DropdownMenu,
    Row,
    Container,
    Col,
    Dropdown,
    DropdownToggle,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Badge,
    Form,
    InputGroup,
    Input,
    Button,
    InputGroupAddon,
} from "reactstrap";

import UseWindowSize from "../hooks/UseWindowSize";

import menu from "../data/menu.json";

import Icon from "./Icon";
import ActiveLink from "./ActiveLink";
import MainIcons from "./MainIcons";

import initialProducts from "../data/products-clothes.json"; // Remove on production

import { CartContext } from "../components/CartContext";

import { addCartItem } from "../hooks/UseCart";
import { WishlistContext } from "./WishlistContext";
import { addWishlistItem } from "../hooks/UseWishlist";
import TopBar from "./TopBar";

const Header = ({ header }) => {
    const [dropdown, setDropdown] = React.useState({});
    const [collapse, setCollapse] = React.useState({});

    const [parentName, setParentName] = React.useState(false);
    const [viewportWidth, setViewportWidth] = React.useState(false)
    const [dropdownAnimate, setDropdownAnimate] = React.useState(false)


    const toggleDropdown = (name) => {
        // Set dropdown by name
        setDropdown({ ...dropdown, [name]: !dropdown[name] });
    };
    const toggleCollapse = (name) => {
        // Set collapse by name
        setCollapse({ ...collapse, [name]: !collapse[name] });
    };



    const [cartItems, dispatch] = React.useContext(CartContext); // Cart context
    const [wishlistItems, wishlistDispatch] = React.useContext(WishlistContext); // Wishlist context

    const widthHook = UseWindowSize().width // Viewport size hook

    const highlightDropdownParent = () => {
        // Highlight dropdown parent based on page load
        menu.map((item) => {
            item.links &&
                item.links.map((link) => {
                    link.link === Router.route && setParentName(item.name);
                });
            item.groups &&
                item.groups.map(
                    (group) =>
                        group.links && group.links.map((link) => link.link === Router.route && setParentName(item.name))
                );
            item.icons &&
                item.icons.map((link) => {
                    link.link === Router.route && setParentName(item.name);
                });

            item.columns &&
                item.columns.map((column) =>
                    column.lists.map((list) =>
                        list.links.map((link) => {
                            if (link.link === Router.route) {
                                link.parent ? setParentName(link.parent) : setParentName(item.name);
                            }
                        })
                    )
                );
        });
    };

    React.useEffect(() => {
        highlightDropdownParent();


        if (localStorage.getItem("cart")) {
            // If localStorage exists set cart items to cart context
            JSON.parse(localStorage.getItem("cart")).map((product) =>
                dispatch({ type: "add", payload: product })
            );
        }
        // Remove on production START -->
        else {
            // Set first six product items to cart on demo
            initialProducts.slice(0, 6).map((product) => {
                addCartItem(product, 1);
                dispatch({ type: "add", payload: product, quantity: 1 });
            });

        }
        // <-- END remove

        if (localStorage.getItem("wishlist")) {
            // If localStorage exists set wishlist items to wishlist context
            JSON.parse(localStorage.getItem("wishlist")).map((product) =>
                wishlistDispatch({ type: "add", payload: product })
            );
        }
        // Remove on production START -->
        else {
            // Set 6th, 7th & 8th product item to cart on demo
            initialProducts.slice(5, 8).map((product) => {
                addWishlistItem(product);
                wishlistDispatch({ type: "add", payload: product });
            });

        }
        // <-- END remove

    }, []);
    React.useEffect(() => {
        setViewportWidth(widthHook) // Set viewport width on load
        setCollapse(false) // Close collapse on viewport change
    }, [widthHook])

    const onLinkClick = (parent) => {
        viewportWidth < 991 && setCollapsed(!collapsed); // If viewport below 991px toggle collapse block
        setDropdown(false); // Close dropdown
        setParentName(parent); // Set parent name for item parent higlight
    };
    return (
        <header className={`header ${header && header.absolute ? "header-absolute" : ""}`}>

            {/* TOP BAR */}
            <TopBar header={header} />
            {/* END TOP BAR */}

            {/* NAV BAR */}
            <Navbar
                expand="lg"
                light
                style={{ zIndex: '2' }}
                color={header && header.transparentNavbar ? (collapse.navbar ? "white" : "transparent") : "white"}
                className={`border-0 ${header && header.transparentNavbar ? "shadow-0" : ""} px-lg-5 ${collapse.navbar ? "was-transparent was-navbar-light" : ""
                    }`}>

                {/* LOGO */}
                <Link href="/" passHref>
                    <NavbarBrand>Varkala</NavbarBrand>
                </Link>
                {/* END LOGO */}

                {/* TOP USER MOBILE ICONS */}
                <MainIcons className="d-block d-lg-none" />
                {/* TOP USER MOBILE ICONS */}

                {/* NAV MOBILE TOGGLER  */}
                <NavbarToggler
                    className="navbar-toggler-right text-hover-primary"
                    onClick={() => toggleCollapse("navbar")}
                    aria-label="Toggle navigation">
                    <Icon icon="menu-hamburger-1" className="navbar-icon" />
                </NavbarToggler>
                {/* END NAV MOBILE TOGGLER */}

                {/* MENU */}
                <Collapse navbar isOpen={collapse.navbar}>
                    <Nav className="mt-3 mt-lg-0" navbar tag="div">
                        {menu.map((item, index) => {// Mapping through menu items

                            const itemId = item.name.split(' ').join('').toLowerCase() + '_' + index;

                            return <Dropdown
                                key={item.name}
                                className={item.megamenu ? "position-static" : ""}
                                isOpen={dropdown[item.name]}
                                toggle={() => toggleDropdown(item.name)}
                                inNavbar>

                                {/* DROPDOWN TOGGLE */}
                                <DropdownToggle className={parentName === item.name ? "active" : ""} id={itemId} nav caret onClick={() => setDropdownAnimate({ ...dropdownAnimate, [item.name]: !dropdown[item.name] })}>
                                    {item.name}
                                </DropdownToggle>
                                {/* END DROPDOWN TOGGLE */}

                                {/* DROPDOWN MENU */}
                                <DropdownMenu
                                    className={`${item.groups ? "py-0" : ""} ${item.icons ? "py-lg-0" : ""} ${item.megamenu ? "megamenu px-4 px-lg-5 py-lg-5" : ""} ${dropdownAnimate[item.name] === false ? 'hide' : ''}`}
                                    aria-labelledby={itemId}>

                                    {/* SIMPLE MENU */}
                                    {item.links &&
                                        item.links.map((link, index) =>
                                            link.divider ? (
                                                // SIMPLE MENU DIVIDER
                                                link.name ? // If divider has name show header
                                                <DropdownItem key={index} header>{link.name}</DropdownItem>
                                                : // Else only line divider
                                                <DropdownItem key={index} divider />
                                                
                                            ) : (
                                                    // SIMPLE MENU LINK
                                                    <ActiveLink
                                                        key={link.name}
                                                        activeClassName="active"
                                                        href={link.link}
                                                        passHref>
                                                        <DropdownItem onClick={() => onLinkClick(item.name)}>
                                                            {link.name}
                                                            {link.new && (
                                                                // IF NEW ITEM ADD BADGE
                                                                <Badge color="primary-light" className="ml-1">
                                                                    New
                                                                </Badge>
                                                            )}
                                                        </DropdownItem>
                                                    </ActiveLink>
                                                )
                                        )}
                                    {/* END SIMPLE MENU */}

                                    {/* GROUP MENU */}
                                    {item.groups && (
                                        <Row
                                            style={{ minWidth: viewportWidth > 992 ? "750px" : "auto" }} // Set min-width if viewport over 992px
                                        >
                                            {item.groups.map((group) =>
                                                group.img ? (
                                                    // GROUP IMAGE
                                                    <Col key={group.img} lg="4" className="d-none d-lg-block">
                                                        <img className="bg-image" src={group.img} alt="" />
                                                    </Col>
                                                ) : (
                                                        // GROUP LINKS
                                                        <Col key={group.name} lg="4" sm="6" className="p-lg-5">
                                                            <DropdownItem className="h6 pl-lg-0" header>
                                                                {group.name}
                                                            </DropdownItem>
                                                            {group.links.map((link) => (

                                                                // GROUP LINK
                                                                <ActiveLink
                                                                    key={link.name}
                                                                    activeClassName="active"
                                                                    href={link.link}
                                                                    passHref>
                                                                    <DropdownItem
                                                                        className="pl-lg-0"
                                                                        onClick={() => onLinkClick(item.name)}>
                                                                        {link.name}
                                                                        {link.new && (
                                                                            // IF NEW ITEM ADD BADGE
                                                                            <Badge
                                                                                color="primary-light"
                                                                                className="ml-1">
                                                                                New
                                                                            </Badge>
                                                                        )}
                                                                    </DropdownItem>
                                                                </ActiveLink>
                                                            ))}
                                                        </Col>
                                                    )
                                            )}
                                        </Row>
                                    )}
                                    {/* END GROUP MENU */}

                                    {/* ICONS MENU */}
                                    {item.icons && (
                                        <React.Fragment>
                                            <Row
                                                className="pt-lg-5 px-4"
                                                style={{ minWidth: viewportWidth > 992 ? "750px" : "auto"  }} // Set min-width if viewport over 992px
                                            >
                                                {item.icons.map((link) => (
                                                    // ICONS MENU ITEM
                                                    <Col
                                                        xs="6"
                                                        sm="3"
                                                        md="2"
                                                        className="text-center mb-2 mb-lg-5"
                                                        key={link.name}>
                                                        <ActiveLink activeClassName="active" href={link.link}>
                                                            <a
                                                                className="text-reset"
                                                                onClick={() => onLinkClick(item.name)}>
                                                                <Icon
                                                                    icon={link.icon}
                                                                    className="w-3rem h-3rem mb-2 svg-icon-light"
                                                                />
                                                                <h6>{link.name}</h6>
                                                            </a>
                                                        </ActiveLink>
                                                    </Col>
                                                ))}
                                            </Row>
                                            {item.text && (
                                                // ICONS MENU BOTTOM TEXT
                                                <div className="p-3 bg-primary text-center text-sm d-none d-lg-block">
                                                    <p className="mb-0">{item.text}</p>
                                                </div>
                                            )}
                                        </React.Fragment>
                                    )}
                                    {/* END ICONS MENU */}

                                    {/* MEGA MENU */}
                                    {item.megamenu && ( // If megamenu
                                        <Row>
                                            {item.columns.map((column, index) => (
                                                // MEGA MENU COLUMN
                                                <Col key={index} lg="3" sm="6">
                                                    {column.img && (
                                                        // MEGA MENU IMAGE
                                                        <img
                                                            className="img-fluid mb-3 d-none d-lg-block"
                                                            src={column.img + "?include"}
                                                            alt=""
                                                        />
                                                    )}
                                                    {column.lists.map((list) => (
                                                        // MEGA MENU COLUMN BLOCK
                                                        <React.Fragment key={list.name}>
                                                            <h6>{list.name}</h6>
                                                            <ul className="megamenu-list list-unstyled">
                                                                {list.links.map((link) => (
                                                                    // MEGA MENU COLUMN BLOCK ITEM
                                                                    <li
                                                                        key={link.name}
                                                                        className="megamenu-list-item">
                                                                        <ActiveLink
                                                                            activeClassName="active"
                                                                            href={link.link}
                                                                            passHref>
                                                                            <a
                                                                                className="megamenu-list-link"
                                                                                onClick={() =>
                                                                                    onLinkClick(item.name)
                                                                                }>
                                                                                {link.name}{" "}
                                                                                {link.new && (
                                                                                    // IF NEW ITEM ADD BADGE
                                                                                    <Badge
                                                                                        color="primary-light"
                                                                                        className="ml-1">
                                                                                        New
                                                                                    </Badge>
                                                                                )}
                                                                            </a>
                                                                        </ActiveLink>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </React.Fragment>
                                                    ))}
                                                </Col>
                                            ))}
                                        </Row>
                                    )}
                                    {/* END MEGA MENU */}

                                </DropdownMenu>
                                {/* END DROPDOWN MENU */}

                            </Dropdown>

                        })}
                    </Nav>

                    {/* SEARCH BLOCK */}
                    <Form className="d-lg-flex ml-auto mr-lg-5 mr-xl-6 my-4 my-lg-0">
                        <InputGroup className="input-group-underlined">
                            <Input
                                type="text"
                                placeholder="Search"
                                aria-label="Search"
                                className="form-control-underlined pl-3"
                            />
                            <InputGroupAddon addonType="append" className="ml-0">
                                <Button color="underlined">
                                    <Icon className="navbar-icon" icon="search-1" />
                                </Button>
                            </InputGroupAddon>
                        </InputGroup>
                    </Form>
                    {/* END SEARCH BLOCK */}

                    {/* TOP USER ICONS */}
                    <MainIcons
                        className="d-none d-lg-block"
                        sidebarRight
                    />
                    {/* END TOP USER ICONS */}

                </Collapse>
                {/* END MENU */}

            </Navbar>
            {/* END NAV BAR */}

        </header>
    );
};

export default Header;