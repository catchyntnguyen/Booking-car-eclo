import React, { useEffect, useState } from 'react';

const Mycontact = () => {

    return (
        <main className="main">
            <div className="section pt-60 pb-60 bg-primary">
                <div className="container-sub">
                    <h1 className="heading-44-medium color-white mb-5">Contact Us</h1>
                    <div className="box-breadcrumb">
                        <ul>
                            <li>
                                {" "}
                                <a href="index.html">Home</a>
                            </li>
                            <li>
                                {" "}
                                <a href="service-grid.html">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="section pt-60 pb-60">
                <div className="container-sub">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6 mb-30">
                            <div className="cardContact wow fadeInUp">
                                <div className="cardImage mb-30">
                                    <img
                                        src="assets/imgs/page/contact/new-york.svg"
                                        alt="luxride"
                                    />
                                </div>
                                <div className="cardInfo">
                                    <h6 className="heading-20-medium mb-10">New York Office</h6>
                                    <p className="text-16 mb-20">
                                        PO Box 16122 Collins Street West Victoria 8007 Australia
                                    </p>
                                    <p className="text-16 mb-20">+32 2 512 08 15</p>
                                    <p className="text-16">newyork@luxride.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 mb-30">
                            <div className="cardContact wow fadeInUp">
                                <div className="cardImage mb-30">
                                    <img src="assets/imgs/page/contact/istabul.svg" alt="luxride" />
                                </div>
                                <div className="cardInfo">
                                    <h6 className="heading-20-medium mb-10">Istanbul Office</h6>
                                    <p className="text-16 mb-20">
                                        PO Box 16122 Collins Street West Victoria 8007 Australia
                                    </p>
                                    <p className="text-16 mb-20">+32 2 512 08 15</p>
                                    <p className="text-16">istanbul@luxride.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 mb-30">
                            <div className="cardContact wow fadeInUp">
                                <div className="cardImage mb-30">
                                    <img src="assets/imgs/page/contact/paris.svg" alt="luxride" />
                                </div>
                                <div className="cardInfo">
                                    <h6 className="heading-20-medium mb-10">Paris Office</h6>
                                    <p className="text-16 mb-20">
                                        PO Box 16122 Collins Street West Victoria 8007 Australia
                                    </p>
                                    <p className="text-16 mb-20">+32 2 512 08 15</p>
                                    <p className="text-16">paris@luxride.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 mb-30">
                            <div className="cardContact wow fadeInUp">
                                <div className="cardImage mb-30">
                                    <img src="assets/imgs/page/contact/london.svg" alt="luxride" />
                                </div>
                                <div className="cardInfo">
                                    <h6 className="heading-20-medium mb-10">London Office</h6>
                                    <p className="text-16 mb-20">
                                        PO Box 16122 Collins Street West Victoria 8007 Australia
                                    </p>
                                    <p className="text-16 mb-20">+32 2 512 08 15</p>
                                    <p className="text-16">london@luxride.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section wow fadeInUp">
                <iframe
                    className="map-contact"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001155.6943615586!2d-78.01286281141591!3d42.728782799636924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2zVGnhu4N1IGJhbmcgTmV3IFlvcmssIEhvYSBL4buz!5e0!3m2!1svi!2s!4v1677510404076!5m2!1svi!2s"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
            <section className="section mt-120 mb-120">
                <div className="container-sub">
                    <div className="mw-770">
                        <h2 className="heading-44-medium mb-60 text-center wow fadeInUp">
                            Leave us your info
                        </h2>
                        <div className="form-contact form-comment wow fadeInUp">
                            <form action="#">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <div className="input-container">
                                                <input
                                                    className="form-control"
                                                    id="fullname"
                                                    type="text"
                                                    defaultValue="Full name"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <div className="input-container">
                                                <input
                                                    className="form-control"
                                                    id="email"
                                                    type="text"
                                                    placeholder="Email"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <div className="input-container">
                                                <input
                                                    className="form-control"
                                                    id="subject"
                                                    type="text"
                                                    placeholder="Subject"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <div className="input-container">
                                                <textarea
                                                    className="form-control"
                                                    id="message"
                                                    defaultValue={"Feedback something on here..."}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <button className="btn btn-primary" type="submit">
                                            Get In Touch
                                            <svg
                                                className="icon-16 ml-5"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Mycontact;
