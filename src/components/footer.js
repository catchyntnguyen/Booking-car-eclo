import React, { useEffect, useState } from 'react';


const Myfooter = () => {

    return (
        <footer className="footer">
            <div className="footer-1">
                <div className="container-sub">
                    <div className="box-footer-top">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6 text-md-start text-center mb-15 wow fadeInUp">
                                <div className="d-flex align-items-center justify-content-md-start justify-content-center">
                                    <a className="mr-30" href="#">
                                        <img src="/assets/imgs/template/logo.svg" alt="Luxride" />
                                    </a>
                                    <a
                                        className="text-14-medium call-phone color-white hover-up"
                                        href="tel:+41227157000"
                                    >
                                        +41 22 715 7000
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 text-md-end text-center mb-15 wow fadeInUp">
                                <div className="d-flex align-items-center justify-content-md-end justify-content-center">
                                    <span className="text-18-medium color-white mr-10">
                                        Follow Us
                                    </span>
                                    <a className="icon-socials icon-facebook" href="#" />
                                    <a className="icon-socials icon-twitter" href="#" />
                                    <a className="icon-socials icon-instagram" href="#" />
                                    <a className="icon-socials icon-linkedin" href="#" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-40">
                        <div className="col-lg-3 width-20">
                            <h5 className="text-18-medium color-white mb-20 wow fadeInUp">
                                Company
                            </h5>
                            <ul className="menu-footer wow fadeInUp">
                                <li>
                                    <a href="#">About us</a>
                                </li>
                                <li>
                                    <a href="#">Our offerings</a>
                                </li>
                                <li>
                                    <a href="#">Newsroom</a>
                                </li>
                                <li>
                                    <a href="#">Investors</a>
                                </li>
                                <li>
                                    <a href="#">Blog</a>
                                </li>
                                <li>
                                    <a href="#">Careers</a>
                                </li>
                                <li>
                                    <a href="#">Gift cards</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 width-20 mb-30">
                            <h5 className="text-18-medium color-white mb-20 wow fadeInUp">
                                Top cities
                            </h5>
                            <ul className="menu-footer wow fadeInUp">
                                <li>
                                    <a href="about.html">New York</a>
                                </li>
                                <li>
                                    <a href="our-team.html">London</a>
                                </li>
                                <li>
                                    <a href="#">Berlin</a>
                                </li>
                                <li>
                                    <a href="#">Los Angeles</a>
                                </li>
                                <li>
                                    <a href="#">Paris</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 width-20 mb-30">
                            <h5 className="text-18-medium color-white mb-20 wow fadeInUp">
                                Explore
                            </h5>
                            <ul className="menu-footer wow fadeInUp">
                                <li>
                                    <a href="#">Intercity rides</a>
                                </li>
                                <li>
                                    <a href="#">Limousine service</a>
                                </li>
                                <li>
                                    <a href="#">Chauffeur service</a>
                                </li>
                                <li>
                                    <a href="#">Private car service</a>
                                </li>
                                <li>
                                    <a href="#">Ground transportation</a>
                                </li>
                                <li>
                                    <a href="#">Airport transfer</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 width-20 mb-30">
                            <h5 className="text-18-medium color-white mb-20 wow fadeInUp">
                                Classes
                            </h5>
                            <ul className="menu-footer wow fadeInUp">
                                <li>
                                    <a href="#">Business</a>
                                </li>
                                <li>
                                    <a href="#">First</a>
                                </li>
                                <li>
                                    <a href="#">XL</a>
                                </li>
                                <li>
                                    <a href="#">Assistant</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 width-20">
                            <h5 className="text-18-medium color-white mb-20 wow fadeInUp">
                                Download The App
                            </h5>
                            <div className="text-start wow fadeInUp">
                                <div className="box-button-download">
                                    <a className="btn btn-download hover-up wow fadeInUp" href="#">
                                        <div className="inner-download">
                                            <div className="icon-download">
                                                <img
                                                    src="/assets/imgs/template/icons/apple-icon.svg"
                                                    alt="luxride"
                                                />
                                            </div>
                                            <div className="info-download">
                                                <span className="text-download-top">Download on the</span>
                                                <span className="text-14-medium">Apple Store</span>
                                            </div>
                                        </div>
                                    </a>
                                    <a className="btn btn-download hover-up wow fadeInUp" href="#">
                                        <div className="inner-download">
                                            <div className="icon-download">
                                                <img
                                                    src="/assets/imgs/template/icons/google-icon.svg"
                                                    alt="luxride"
                                                />
                                            </div>
                                            <div className="info-download">
                                                <span className="text-download-top">Download on the</span>
                                                <span className="text-14-medium">Apple Store</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-2">
                <div className="container-sub">
                    <div className="footer-bottom">
                        <div className="row align-items-center">
                            <div className="col-lg-8 col-md-12 text-center text-lg-start">
                                <span className="text-14 color-white mr-50">© 2024 Luxride</span>
                                <ul className="menu-bottom">
                                    <li>
                                        <a href="term-conditions.html">Terms</a>
                                    </li>
                                    <li>
                                        <a href="term-conditions.html">Privacy policy</a>
                                    </li>
                                    <li>
                                        <a href="term-conditions.html">Legal notice</a>
                                    </li>
                                    <li>
                                        <a href="#">Accessibility</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-4 col-md-12 text-center text-lg-end">
                                <a className="btn btn-link-location" href="#">
                                    New York
                                </a>
                                <a className="btn btn-link-globe active" href="#">
                                    English
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Myfooter;
