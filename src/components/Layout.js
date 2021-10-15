import React from "react";
import Head from "next/head";
import NextNProgress from '../components/NextNProgress';

import Header from "./Header";
import Footer from "./Footer";
import Icons from "./Icons";

import { FormProvider } from "./FormContext";
import { CartProvider } from "./CartContext";
import { WishlistProvider } from "./WishlistContext";

const Layout = pageProps => {
    return (
        <React.Fragment>
            <Head>
                <link rel="icon" href="/favicon.png" />
                <link href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" rel="stylesheet" />
                <link href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/5.4.5/css/swiper.min.css" rel="stylesheet" />
                <title>{pageProps.title} - Directory React Theme</title>
            </Head>
            <NextNProgress color="#bcac76" options={{ showSpinner: false }} />

            <CartProvider>
                <WishlistProvider>
                    <Header header={pageProps.header} />
                    {pageProps.checkout ? (
                        <FormProvider>
                            <main>{pageProps.children}</main>
                        </FormProvider>
                    ) : (
                            <main>{pageProps.children}</main>
                        )}
                    <Footer />
                </WishlistProvider>
            </CartProvider>
            <Icons />
        </React.Fragment>
    );
};

export default Layout;
