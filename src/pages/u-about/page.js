import React, { useEffect, useState } from 'react';
import HowItWorks from '../../components/sliderHowItWorks';


const Myabout = () => {

    return (
        <main className="main">
            <div className="section pt-60 pb-60 bg-primary">
                <div className="container-sub">
                    <h1 className="heading-44-medium color-white mb-5">About Us</h1>
                    <div className="box-breadcrumb">
                        <ul>
                            <li>
                                {" "}
                                <a href="index.html">Home</a>
                            </li>
                            <li>
                                {" "}
                                <a href="service-grid.html">About</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="section wow fadeInUp">
                <img src="assets/imgs/page/about/banner.png" alt="luxride" />
            </div>
            <section className="section">
                <div className="container-sub">
                    <div className="mt-60">
                        <h2 className="heading-44-medium mb-30 color-text title-fleet wow fadeInUp">
                            We reimagine the way the world moves for the better
                        </h2>
                        <div className="content-single wow fadeInUp">
                            <p>
                                We offer luxury chauffeur driven airport transfers and pickups to
                                London. Exceptional Safe, Meet and Greet. One hour of
                                complimentary wait time and flight tracking. Professional Drivers
                                &amp; Vehicles. Fixed prices on airport transfers. VIP service,
                                get your quote today!
                            </p>
                            <p>
                                Et, morbi at sagittis vehicula rutrum. Lacus tortor, quam arcu mi
                                et, at lectus leo nunc. Mattis cras auctor vel pharetra tempor.
                                Rhoncus pellentesque habitant ac tempor. At aliquam euismod est in
                                praesent ornare etiam id. Faucibus libero sit vehicula sed
                                condimentum. Vitae in nam porttitor rutrum sed aliquam donec sed.
                                Sapien facilisi lectus.
                            </p>
                            <ul className="list-ticks list-ticks-small">
                                <li className="text-16 mb-20">100% Luxurious Fleet</li>
                                <li className="text-16 mb-20">
                                    All Our Fleet Are Fully Valeted &amp; Serviced
                                </li>
                                <li className="text-16 mb-20">A Safe &amp; Secure Journey</li>
                                <li className="text-16 mb-20">Comfortable And Enjoyable</li>
                                <li className="text-16 mb-20">
                                    Clean, Polite &amp; Knowledgeable
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section mb-30 mt-80 box-showcase">
                <div className="bg-showcase pt-100 pb-70">
                    <div className="container-sub">
                        <div className="row align-items-center">
                            <div className="col-lg-6 mb-30">
                                <h2 className="heading-44-medium color-white wow fadeInUp">
                                    Showcase some impressive numbers.
                                </h2>
                            </div>
                            <div className="col-lg-6">
                                <div className="row align-items-center">
                                    <div className="col-4 mb-30 wow fadeInUp">
                                        <div className="box-number">
                                            <h2 className="heading-44-medium color-white">285</h2>
                                            <p className="text-20 color-white">Vehicles</p>
                                        </div>
                                    </div>
                                    <div className="col-4 mb-30 wow fadeInUp">
                                        <div className="box-number">
                                            <h2 className="heading-44-medium color-white">97</h2>
                                            <p className="text-20 color-white">Awards</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 col-12 mb-30 wow fadeInUp">
                                        <div className="box-number">
                                            <h2 className="heading-44-medium color-white">13K</h2>
                                            <p className="text-20 color-white">Happy Customer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section mt-110">
                <div className="container-sub">
                    <div className="text-center">
                        <h2 className="heading-44-medium color-text wow fadeInUp">
                            Make Your Trip Your Way With Us
                        </h2>
                    </div>
                    <div className="row mt-50 cardIconStyleCircle">
                        <div className="col-lg-4">
                            <div className="cardIconTitleDesc wow fadeInUp">
                                <div className="cardIcon">
                                    <img src="assets/imgs/page/homepage1/safe.svg" alt="luxride" />
                                </div>
                                <div className="cardTitle">
                                    <h5 className="text-20-medium color-text">Safety First</h5>
                                </div>
                                <div className="cardDesc">
                                    <p className="text-16 color-text">
                                        Both you and your shipments will travel with professional
                                        drivers. Always with the highest quality standards.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="cardIconTitleDesc wow fadeInUp">
                                <div className="cardIcon">
                                    <img src="assets/imgs/page/homepage1/price.svg" alt="luxride" />
                                </div>
                                <div className="cardTitle">
                                    <h5 className="text-20-medium color-text">
                                        Prices With No Surprises
                                    </h5>
                                </div>
                                <div className="cardDesc">
                                    <p className="text-16 color-text">
                                        Both you and your shipments will travel with professional
                                        drivers. Always with the highest quality standards.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="cardIconTitleDesc wow fadeInUp">
                                <div className="cardIcon">
                                    <img
                                        src="assets/imgs/page/homepage1/vehicle.svg"
                                        alt="luxride"
                                    />
                                </div>
                                <div className="cardTitle">
                                    <h5 className="text-20-medium color-text">
                                        Private Travel Solutions
                                    </h5>
                                </div>
                                <div className="cardDesc">
                                    <p className="text-16 color-text">
                                        Both you and your shipments will travel with professional
                                        drivers. Always with the highest quality standards.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="mb-90" />
            <HowItWorks></HowItWorks>
            <section className="section pt-130 pb-100 bg-2 box-testimonials">
                <div className="container-sub">
                    <div className="row">
                        <div className="col-lg-5 col-md-6 mb-30">
                            <div className="box-swiper">
                                <div className="swiper-container swiper-group-testimonials pb-50">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div className="cardQuote wow fadeInUp">
                                                <div className="box-quote">
                                                    <div className="icon-quote bg-secondary"> </div>
                                                    <div className="info-quote">
                                                        <h5 className="color-text text-18-medium">
                                                            Jonathan Miller
                                                        </h5>
                                                        <p className="color-text text-14">Web Developer</p>
                                                    </div>
                                                </div>
                                                <div className="content-quote color-text">
                                                    I really can recommend this theme, because it’s coded
                                                    very well and it’s really easy to build your own
                                                    website!
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="cardQuote wow fadeInUp">
                                                <div className="box-quote">
                                                    <div className="icon-quote bg-secondary"> </div>
                                                    <div className="info-quote">
                                                        <h5 className="color-text text-18-medium">
                                                            Jonathan Miller
                                                        </h5>
                                                        <p className="color-text text-14">Web Developer</p>
                                                    </div>
                                                </div>
                                                <div className="content-quote color-text">
                                                    I really can recommend this theme, because it’s coded
                                                    very well and it’s really easy to build your own
                                                    website!
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="cardQuote wow fadeInUp">
                                                <div className="box-quote">
                                                    <div className="icon-quote bg-secondary"> </div>
                                                    <div className="info-quote">
                                                        <h5 className="color-text text-18-medium">
                                                            Jonathan Miller
                                                        </h5>
                                                        <p className="color-text text-14">Web Developer</p>
                                                    </div>
                                                </div>
                                                <div className="content-quote color-text">
                                                    I really can recommend this theme, because it’s coded
                                                    very well and it’s really easy to build your own
                                                    website!
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="cardQuote wow fadeInUp">
                                                <div className="box-quote">
                                                    <div className="icon-quote"> </div>
                                                    <div className="info-quote">
                                                        <h5 className="color-text text-18-medium">
                                                            Jonathan Miller
                                                        </h5>
                                                        <p className="color-text text-14">Web Developer</p>
                                                    </div>
                                                </div>
                                                <div className="content-quote color-text">
                                                    I really can recommend this theme, because it’s coded
                                                    very well and it’s really easy to build your own
                                                    website!
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box-pagination-testimonials mt-40 swiper-pagination-grey">
                                        {" "}
                                        <span className="firstNumber" />
                                        <span className="lastNumber" />
                                        <div className="swiper-pagination swiper-pagination-testimonials" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-6 mb-30 text-lg-end text-center d-none d-md-block">
                            <div className="box-video wow fadeInUp">
                                {" "}
                                <a
                                    className="btn btn-play popup-youtube hover-up"
                                    href="https://www.youtube.com/watch?v=sVPYIRF9RCQ"
                                />
                                <img src="assets/imgs/page/about/img1.png" alt="luxride" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section pt-65 pb-35 border-bottom">
                <div className="container-sub">
                    <div className="row align-items-center">
                        <div className="col-xl-3 col-lg-4 mb-30">
                            <h3 className="color-primary wow fadeInUp">
                                The partners who sell
                                <br className="d-none d-lg-block" />
                                our products
                            </h3>
                        </div>
                        <div className="col-xl-9 col-lg-8 mb-30">
                            <ul className="list-logos d-flex align-item-center wow fadeInUp">
                                <li>
                                    <img src="assets/imgs/slider/logo/air.svg" alt="luxride" />
                                </li>
                                <li>
                                    <img src="assets/imgs/slider/logo/eb.svg" alt="luxride" />
                                </li>
                                <li>
                                    <img src="assets/imgs/slider/logo/nba.svg" alt="luxride" />
                                </li>
                                <li>
                                    <img src="assets/imgs/slider/logo/nla.svg" alt="luxride" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section pt-80 mb-30">
                <div className="container-sub">
                    <div className="box-faqs">
                        <div className="text-center">
                            <h2 className="color-brand-1 mb-20 wow fadeInUp">
                                Frequently Asked Questions
                            </h2>
                        </div>
                        <div className="mt-60 mb-40">
                            <div className="accordion wow fadeInUp" id="accordionFAQ">
                                <div className="accordion-item">
                                    <h5 className="accordion-header" id="headingOne">
                                        <button
                                            className="accordion-button text-heading-5"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne"
                                            aria-expanded="true"
                                            aria-controls="collapseOne"
                                        >
                                            How do I create an account?
                                        </button>
                                    </h5>
                                    <div
                                        className="accordion-collapse collapse show"
                                        id="collapseOne"
                                        aria-labelledby="headingOne"
                                        data-bs-parent="#accordionFAQ"
                                    >
                                        <div className="accordion-body">
                                            Sad ipscing elitrsed diamnonu myeir mod, sadipscing elitrsed
                                            dia morem ipsum dolor situamet consetetur loutrytru hury.
                                            Lorem ipsum dolor sitametco nsetetur sa cingelitrse diamonu
                                            eirmoid, sad ipscing elitrstrud diamtre ute riyutroui tout.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h5 className="accordion-header" id="headingTwo">
                                        <button
                                            className="accordion-button text-heading-5 collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseTwo"
                                            aria-expanded="false"
                                            aria-controls="collapseTwo"
                                        >
                                            How do I earn Easy Ride Rewards points?
                                        </button>
                                    </h5>
                                    <div
                                        className="accordion-collapse collapse"
                                        id="collapseTwo"
                                        aria-labelledby="headingTwo"
                                        data-bs-parent="#accordionFAQ"
                                    >
                                        <div className="accordion-body">
                                            Sad ipscing elitrsed diamnonu myeir mod, sadipscing elitrsed
                                            dia morem ipsum dolor situamet consetetur loutrytru hury.
                                            Lorem ipsum dolor sitametco nsetetur sa cingelitrse diamonu
                                            eirmoid, sad ipscing elitrstrud diamtre ute riyutroui tout.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h5 className="accordion-header" id="headingThree">
                                        <button
                                            className="accordion-button text-heading-5 collapsed text-heading-5 type="
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseThree"
                                            aria-expanded="false"
                                            aria-controls="collapseThree"
                                        >
                                            How can I add my credit card on the app for payments?
                                        </button>
                                    </h5>
                                    <div
                                        className="accordion-collapse collapse"
                                        id="collapseThree"
                                        aria-labelledby="headingThree"
                                        data-bs-parent="#accordionFAQ"
                                    >
                                        <div className="accordion-body">
                                            Sad ipscing elitrsed diamnonu myeir mod, sadipscing elitrsed
                                            dia morem ipsum dolor situamet consetetur loutrytru hury.
                                            Lorem ipsum dolor sitametco nsetetur sa cingelitrse diamonu
                                            eirmoid, sad ipscing elitrstrud diamtre ute riyutroui tout.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h5 className="accordion-header" id="headingFour">
                                        <button
                                            className="accordion-button text-heading-5 collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseFour"
                                            aria-expanded="false"
                                            aria-controls="collapseFour"
                                        >
                                            How do I become a Captain?
                                        </button>
                                    </h5>
                                    <div
                                        className="accordion-collapse collapse"
                                        id="collapseFour"
                                        aria-labelledby="headingFour"
                                        data-bs-parent="#accordionFAQ"
                                    >
                                        <div className="accordion-body">
                                            Sad ipscing elitrsed diamnonu myeir mod, sadipscing elitrsed
                                            dia morem ipsum dolor situamet consetetur loutrytru hury.
                                            Lorem ipsum dolor sitametco nsetetur sa cingelitrse diamonu
                                            eirmoid, sad ipscing elitrstrud diamtre ute riyutroui tout.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h5 className="accordion-header" id="headingFive">
                                        <button
                                            className="accordion-button text-heading-5 collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseFive"
                                            aria-expanded="false"
                                            aria-controls="collapseFive"
                                        >
                                            Where can I get more information, support or make a claim?{" "}
                                        </button>
                                    </h5>
                                    <div
                                        className="accordion-collapse collapse"
                                        id="collapseFive"
                                        aria-labelledby="headingFive"
                                        data-bs-parent="#accordionFAQ"
                                    >
                                        <div className="accordion-body">
                                            Sad ipscing elitrsed diamnonu myeir mod, sadipscing elitrsed
                                            dia morem ipsum dolor situamet consetetur loutrytru hury.
                                            Lorem ipsum dolor sitametco nsetetur sa cingelitrse diamonu
                                            eirmoid, sad ipscing elitrstrud diamtre ute riyutroui tout.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section mt-50 bg-download-3 bg-secondary">
                <div className="container-sub">
                    <h2 className="heading-44-medium color-white mb-20 wow fadeInUp">
                        Download the app
                    </h2>
                    <p className="color-white text-16 mb-60 wow fadeInUp">
                        Have a personal driver at your fingertips no matter where you{" "}
                        <br className="d-none d-md-block" />
                        are with our easy-to-use smartphone app.
                    </p>
                    <div className="box-button-download">
                        {" "}
                        <a className="btn btn-download mr-15 hover-up wow fadeInUp" href="#">
                            <div className="inner-download">
                                <div className="icon-download">
                                    {" "}
                                    <img
                                        src="assets/imgs/template/icons/apple-icon.svg"
                                        alt="luxride"
                                    />
                                </div>
                                <div className="info-download">
                                    {" "}
                                    <span className="text-download-top">Download on the</span>
                                    <span className="text-14-medium">Apple Store</span>
                                </div>
                            </div>
                        </a>
                        <a className="btn btn-download hover-up wow fadeInUp" href="#">
                            <div className="inner-download">
                                <div className="icon-download">
                                    {" "}
                                    <img
                                        src="assets/imgs/template/icons/google-icon.svg"
                                        alt="luxride"
                                    />
                                </div>
                                <div className="info-download">
                                    {" "}
                                    <span className="text-download-top">Download on the</span>
                                    <span className="text-14-medium">Apple Store</span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Myabout;
