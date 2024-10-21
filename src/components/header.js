import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";


const Myheader = () => {

    return (
        <>
            <header className="header sticky-bar">
                <div className="container">
                    <div className="main-header">
                        <div className="header-left">
                            <div className="header-logo">
                                <Link className="d-flex" to="/">
                                    <img alt="luxride" src="/assets/imgs/template/logo.svg" />
                                </Link>
                            </div>
                            <div className="header-nav">
                                <nav className="nav-main-menu d-none d-xl-block">
                                    <ul className="main-menu">
                                        <li>
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li>
                                            <Link to="/our_fleet">Our Fleet</Link>
                                        </li>
                                        <li>
                                            <Link to="/services">Services</Link>
                                        </li>
                                        <li >
                                            <Link to="/about">About</Link>
                                        </li>
                                        <li>
                                            <Link to="/blogs">Blog</Link>
                                        </li>
                                        <li>
                                            <Link to="/contact">Contact</Link>
                                        </li>
                                    </ul>
                                </nav>
                                <div className="burger-icon burger-icon-white">
                                    <span className="burger-icon-mid" />
                                    <span className="burger-icon-bottom" />
                                </div>
                            </div>
                            <div className="header-right">
                                <div className="d-none d-xxl-inline-block align-middle mr-10">
                                    <a
                                        className="text-14-medium call-phone color-white hover-up"
                                        href="tel:+41227157000"
                                    >
                                        +41 22 715 7000
                                    </a>
                                </div>
                                <div className="d-none d-xxl-inline-block box-dropdown-cart align-middle mr-10">
                                    <span className="text-14-medium icon-list icon-account">
                                        <span className="text-14-medium color-white arrow-down">
                                            EN
                                        </span>
                                    </span>
                                    <div className="dropdown-account">
                                        <ul>
                                            <li>
                                                <a className="font-md" href="#">
                                                    <img
                                                        src="assets/imgs/template/icons/en.png"
                                                        alt="luxride"
                                                    />
                                                    English
                                                </a>
                                            </li>
                                            <li>
                                                <a className="font-md" href="#">
                                                    <img
                                                        src="assets/imgs/template/icons/fr.png"
                                                        alt="luxride"
                                                    />
                                                    French
                                                </a>
                                            </li>
                                            <li>
                                                <a className="font-md" href="#">
                                                    <img
                                                        src="assets/imgs/template/icons/cn.png"
                                                        alt="luxride"
                                                    />
                                                    Chiness
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="mobile-header-active mobile-header-wrapper-style perfect-scrollbar">
                <div className="mobile-header-wrapper-inner">
                    <div className="mobile-header-content-area">
                        <div className="perfect-scroll">
                            <div className="mobile-menu-wrap mobile-header-border">
                                <nav className="mt-15">
                                    <ul className="mobile-menu font-heading">
                                        <li className="has-children">
                                            <a className="active" href="index.html">
                                                Home
                                            </a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="index.html">Homepage - 1</a>
                                                </li>
                                                <li>
                                                    <a href="index-2.html">Homepage - 2</a>
                                                </li>
                                                <li>
                                                    <a href="index-3.html">Homepage - 3</a>
                                                </li>
                                                <li>
                                                    <a href="index-4.html">Homepage - 4</a>
                                                </li>
                                                <li>
                                                    <a href="index-5.html">Homepage - 5</a>
                                                </li>
                                                <li>
                                                    <a href="index-6.html">Homepage - 6</a>
                                                </li>
                                                <li>
                                                    <a href="index-7.html">Homepage - 7</a>
                                                </li>
                                                <li>
                                                    <a href="index-8.html">Homepage - 8</a>
                                                </li>
                                                <li>
                                                    <a href="index-9.html">Homepage - 9</a>
                                                </li>
                                                <li>
                                                    <a href="index-10.html">Homepage - 10</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="has-children">
                                            <a href="#">Pages</a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="about.html">About</a>
                                                </li>
                                                <li>
                                                    <a href="about-2.html">About 2</a>
                                                </li>
                                                <li>
                                                    <a href="our-team.html">Our team</a>
                                                </li>
                                                <li>
                                                    <a href="team-single.html">Team single</a>
                                                </li>
                                                <li>
                                                    <a href="login.html">Login</a>
                                                </li>
                                                <li>
                                                    <a href="register.html">Register</a>
                                                </li>
                                                <li>
                                                    <a href="pricing.html">Pricing</a>
                                                </li>
                                                <li>
                                                    <a href="coming-soon.html">Coming soon</a>
                                                </li>
                                                <li>
                                                    <a href="404.html">Error 404</a>
                                                </li>
                                                <li>
                                                    <a href="booking-vehicle.html">Booking vehicle</a>
                                                </li>
                                                <li>
                                                    <a href="booking-extra.html">Booking Extra</a>
                                                </li>
                                                <li>
                                                    <a href="booking-passenger.html">Booking Passenger</a>
                                                </li>
                                                <li>
                                                    <a href="booking-payment.html">Booking Payment</a>
                                                </li>
                                                <li>
                                                    <a href="booking-receved.html">Booking Receieved</a>
                                                </li>
                                                <li>
                                                    <a href="invoice.html">Invoice</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="has-children">
                                            <a href="fleet-list.html">Our Fleet</a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="fleet-list.html">Our Fleet 1</a>
                                                </li>
                                                <li>
                                                    <a href="fleet-list-2.html">Our Fleet 2</a>
                                                </li>
                                                <li>
                                                    <a href="fleet-list-3.html">Our Fleet 3</a>
                                                </li>
                                                <li>
                                                    <a href="fleet-list-4.html">Our Fleet 4</a>
                                                </li>
                                                <li>
                                                    <a href="fleet-single.html">Fleet single</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="has-children">
                                            <a href="service-grid.html">Services</a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="service-grid.html">Service Listing</a>
                                                </li>
                                                <li>
                                                    <a href="service-grid-2.html">Service Listing 2</a>
                                                </li>
                                                <li>
                                                    <a href="service-grid-3.html">Service Listing 3</a>
                                                </li>
                                                <li>
                                                    <a href="service-single.html">Service Single</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="has-children">
                                            <a href="blog.html">Blog</a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="blog-grid.html">Blog Grid</a>
                                                </li>
                                                <li>
                                                    <a href="blog-grid-2.html">Blog Grid 2</a>
                                                </li>
                                                <li>
                                                    <a href="blog-list.html">Blog List</a>
                                                </li>
                                                <li>
                                                    <a href="blog-single.html">Blog Details</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="contact.html">Contact</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Myheader;
