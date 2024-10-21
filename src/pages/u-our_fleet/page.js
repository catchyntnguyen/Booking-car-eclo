import React, { useEffect, useState, useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Myourfleet = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false,
        responsive: [

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    const sliderRef = useRef(null);

    const prevSlide = () => {
        sliderRef.current.slickPrev();
    };

    const nextSlide = () => {
        sliderRef.current.slickNext();
    };
    return (
        <main className="main">
            <div className="section pt-60 pb-60 bg-primary">
                <div className="container-sub">
                    <h1 className="heading-44-medium color-white mb-5">Our Fleet</h1>
                    <div className="box-breadcrumb">
                        <ul>
                            <li>
                                {" "}
                                <a href="index.html">Home</a>
                            </li>
                            <li>
                                {" "}
                                <a href="fleet-list.html">Our Fleet</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <section className="section">
                <img className="" src="/assets/imgs/page/fleet/banner.png" alt="luxride" />
                <div className="container-sub">
                    <div className="mt-120">
                        <h2 className="heading-44-medium mb-30 color-text title-fleet wow fadeInUp">
                            Mercedes - Benz E-Class
                        </h2>
                        <div className="content-single wow fadeInUp">
                            <p>
                                The Mercedes S-Class is in a class of it’s own. It sets the
                                standard in first-class chauffeur-driven luxury and prestige. This
                                latest incarnation exceeds all expectations. Settle back and enjoy
                                the sumptuous ride for working or relaxing. A truly luxurious and
                                stylish limousine for comfortable chauffeur journeys.
                            </p>
                            <p>
                                Et, morbi at sagittis vehicula rutrum. Lacus tortor, quam arcu mi
                                et, at lectus leo nunc. Mattis cras auctor vel pharetra tempor.
                                Rhoncus pellentesque habitant ac tempor. At aliquam euismod est in
                                praesent ornare etiam id. Faucibus libero sit vehicula sed
                                condimentum. Vitae in nam porttitor rutrum sed aliquam donec sed.
                                Sapien facilisi lectus.
                            </p>
                            <h6 className="heading-24-medium color-text mb-30">We offer</h6>
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
                            <div className="mt-30">
                                <a className="btn btn-primary btn-book">
                                    Book Now
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
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box-slide-fleet mt-120 wow fadeInUp">
                    <div className="box-swiper">
                        <div className="swiper-container swiper-group-2-single-fleet pb-0 sliderFleetList">
                            <Slider ref={sliderRef} {...settings}>
                                <div className='sliderFleet'>
                                    <div className="swiper-slide">
                                        <img src="/assets/imgs/page/fleet/slide1.png" alt="luxride" />
                                    </div>
                                </div>
                                <div className='sliderFleet'>
                                    <div className="swiper-slide">
                                        <img src="/assets/imgs/page/fleet/slide2.png" alt="luxride" />
                                    </div>
                                </div>
                                {/* <div className='sliderFleet'>
                                    <div className="swiper-slide">
                                        <img src="/assets/imgs/page/fleet/slide1.png" alt="luxride" />
                                    </div>
                                </div> */}
                                {/* Thêm các slide khác nếu cần */}
                            </Slider>
                            <div className="box-pagination-fleet">
                                <div className="swiper-button-prev swiper-button-prev-fleet" onClick={prevSlide}>
                                    <svg
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
                                            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                                        />
                                    </svg>
                                </div>
                                <div className="swiper-button-next swiper-button-next-fleet" onClick={nextSlide}>
                                    <svg
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
                                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section mt-120">
                <div className="container-sub">
                    <h2 className="heading-44-medium wow fadeInUp">
                        Features Of Our Mercedes-Benz E-Class Vehicles
                    </h2>
                    <div className="row mt-50 cardIconTitleDescLeft">
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-30">
                            <div className="cardIconTitleDesc wow fadeInUp">
                                <div className="cardIcon">
                                    <img src="/assets/imgs/page/fleet/camera.svg" alt="luxride" />
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
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-30">
                            <div className="cardIconTitleDesc wow fadeInUp">
                                <div className="cardIcon">
                                    <img src="/assets/imgs/page/fleet/water.svg" alt="luxride" />
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
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-30">
                            <div className="cardIconTitleDesc wow fadeInUp">
                                <div className="cardIcon">
                                    <img src="/assets/imgs/page/fleet/coffee.svg" alt="luxride" />
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
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-30">
                            <div className="cardIconTitleDesc wow fadeInUp">
                                <div className="cardIcon">
                                    <img src="/assets/imgs/page/fleet/newspaper.svg" alt="luxride" />
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
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-30">
                            <div className="cardIconTitleDesc wow fadeInUp">
                                <div className="cardIcon">
                                    <img
                                        src="/assets/imgs/page/fleet/cooperation.svg"
                                        alt="luxride"
                                    />
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
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-30">
                            <div className="cardIconTitleDesc wow fadeInUp">
                                <div className="cardIcon">
                                    <img src="/assets/imgs/page/fleet/rim.svg" alt="luxride" />
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
            <section className="section mt-90">
                <div className="container-sub">
                    <h2 className="heading-44-medium wow fadeInUp">
                        Book Your Business Class
                    </h2>
                    <div className="row mt-50">
                        <div className="col-xl-8 col-lg-7 mb-30">
                            <h5 className="text-20-medium color-text mb-10 wow fadeInUp">
                                Business Class
                            </h5>
                            <p className="text-14 color-text mb-15 wow fadeInUp">
                                Mercedes-Benz E-Class, BMW 5 Series, Cadillac XTS or similar
                            </p>
                            <div className="mt-5 wow fadeInUp">
                                {" "}
                                <span className="passengers-info mr-20 color-text">
                                    Passengers 4
                                </span>
                                <span className="luggages-info color-text">Luggage 2</span>
                            </div>
                            <div className="mt-20 text-center wow fadeInUp">
                                {" "}
                                <img
                                    className="d-block"
                                    src="/assets/imgs/page/fleet/vehicle.png"
                                    alt="luxride"
                                />
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-5 mb-30">
                            <div className="box-vehicle-price wow fadeInUp">
                                <ul className="list-prices">
                                    <li>
                                        {" "}
                                        <span className="text">Hourly rate (minimum 3 hours)</span>
                                        <span className="price">$29</span>
                                    </li>
                                    <li>
                                        {" "}
                                        <span className="text">Day rate (8 hours)</span>
                                        <span className="price">$136</span>
                                    </li>
                                    <li>
                                        {" "}
                                        <span className="text">Heathrow to Central London</span>
                                        <span className="price">$780</span>
                                    </li>
                                </ul>
                                <div className="mt-30 wow fadeInUp">
                                    <a className="btn btn-primary btn-book mw-100">
                                        Book Now
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
                                    </a>
                                </div>
                            </div>
                            <div className="row mt-30">
                                <div className="col-lg-6 col-md-3 col-sm-6 mb-20 wow fadeInUp">
                                    {" "}
                                    <span className="text-conditions icon-meet">
                                        Meet &amp; Greet included
                                    </span>
                                </div>
                                <div className="col-lg-6 col-md-3 col-sm-6 mb-20 wow fadeInUp">
                                    {" "}
                                    <span className="text-conditions icon-free-cancel">
                                        Free cancellation
                                    </span>
                                </div>
                                <div className="col-lg-6 col-md-3 col-sm-6 mb-20 wow fadeInUp">
                                    {" "}
                                    <span className="text-conditions icon-free-wait">
                                        Free Waiting time
                                    </span>
                                </div>
                                <div className="col-lg-6 col-md-3 col-sm-6 mb-20 wow fadeInUp">
                                    {" "}
                                    <span className="text-conditions icon-safe">
                                        Safe and secure travel
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section mt-50 mb-50">
                <div className="container-sub">
                    <h2 className="heading-44-medium wow fadeInUp">
                        Book Your Business Class
                    </h2>
                    <div className="row mt-50">
                        <div className="col-lg-4 col-md-6 mb-30">
                            <div className="cardFleet wow fadeInUp">
                                <div className="cardInfo">
                                    <a href="fleet-single.html">
                                        <h3 className="text-20-medium color-text mb-10">
                                            Business Class
                                        </h3>
                                    </a>
                                    <p className="text-14 color-text mb-30">
                                        Mercedes-Benz E-Class, BMW 5 Series, Cadillac XTS or similar
                                    </p>
                                </div>
                                <div className="cardImage mb-30">
                                    <a href="fleet-single.html">
                                        <img
                                            src="/assets/imgs/page/homepage1/e-class.png"
                                            alt="Luxride"
                                        />
                                    </a>
                                </div>
                                <div className="cardInfoBottom">
                                    <div className="passenger">
                                        <span className="icon-circle icon-passenger" />
                                        <span className="text-14">
                                            Passengers<span>4</span>
                                        </span>
                                    </div>
                                    <div className="luggage">
                                        <span className="icon-circle icon-luggage" />
                                        <span className="text-14">
                                            Luggage<span>2</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-30">
                            <div className="cardFleet wow fadeInUp">
                                <div className="cardInfo">
                                    <a href="fleet-single.html">
                                        <h3 className="text-20-medium color-text mb-10">
                                            Business Class
                                        </h3>
                                    </a>
                                    <p className="text-14 color-text mb-30">
                                        Mercedes-Benz E-Class, BMW 5 Series, Cadillac XTS or similar
                                    </p>
                                </div>
                                <div className="cardImage mb-30">
                                    <a href="fleet-single.html">
                                        <img
                                            src="/assets/imgs/page/homepage1/e-class.png"
                                            alt="Luxride"
                                        />
                                    </a>
                                </div>
                                <div className="cardInfoBottom">
                                    <div className="passenger">
                                        <span className="icon-circle icon-passenger" />
                                        <span className="text-14">
                                            Passengers<span>4</span>
                                        </span>
                                    </div>
                                    <div className="luggage">
                                        <span className="icon-circle icon-luggage" />
                                        <span className="text-14">
                                            Luggage<span>2</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-30">
                            <div className="cardFleet wow fadeInUp">
                                <div className="cardInfo">
                                    <a href="fleet-single.html">
                                        <h3 className="text-20-medium color-text mb-10">
                                            Business Class
                                        </h3>
                                    </a>
                                    <p className="text-14 color-text mb-30">
                                        Mercedes-Benz E-Class, BMW 5 Series, Cadillac XTS or similar
                                    </p>
                                </div>
                                <div className="cardImage mb-30">
                                    <a href="fleet-single.html">
                                        <img
                                            src="/assets/imgs/page/homepage1/e-class.png"
                                            alt="Luxride"
                                        />
                                    </a>
                                </div>
                                <div className="cardInfoBottom">
                                    <div className="passenger">
                                        <span className="icon-circle icon-passenger" />
                                        <span className="text-14">
                                            Passengers<span>4</span>
                                        </span>
                                    </div>
                                    <div className="luggage">
                                        <span className="icon-circle icon-luggage" />
                                        <span className="text-14">
                                            Luggage<span>2</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Myourfleet;
