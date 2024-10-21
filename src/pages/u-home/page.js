import React, { useEffect, useState, useRef } from 'react';
import SliderSlick from '../../components/sliderCar';
import SliderSlickService from '../../components/sliderService';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import Dropdown from '../../components/dropdown';
import HowItWorks from '../../components/sliderHowItWorks';



const slides = [
    {
        img: 'assets/imgs/page/homepage1/banner.png',
        text: 'Where Would You Like To Go?',
        heading: 'Your Personal Chauffeur Services'
    },
    {
        img: 'assets/imgs/page/homepage1/banner2.png',
        text: 'Where Would You Like To Go?',
        heading: 'Your Personal Chauffeur Services'
    },
    {
        img: 'assets/imgs/page/homepage1/banner3.png',
        text: 'Where Would You Like To Go?',
        heading: 'Your Personal Chauffeur Services'
    },
    {
        img: 'assets/imgs/page/homepage1/banner4.png',
        text: 'Where Would You Like To Go?',
        heading: 'Your Personal Chauffeur Services'
    },
    {
        img: 'assets/imgs/page/homepage1/banner5.png',
        text: 'Where Would You Like To Go?',
        heading: 'Your Personal Chauffeur Services'
    }
];

const locations = [
    {
        name: "London Heathrow Airport (LHR)",
        description: "London, United Kingdom",
        icon: "assets/imgs/page/homepage1/plane.png"
    },
    {
        name: "London Tower Hill",
        description: "London, United Kingdom",
        icon: "assets/imgs/page/homepage1/building.png"
    },
    {
        name: "Leyton Train Station",
        description: "London, United Kingdom",
        icon: "assets/imgs/page/homepage1/train.png"
    },
    {
        name: "London Luton Airport (LTN)",
        description: "London, United Kingdom",
        icon: "assets/imgs/page/homepage1/plane.png"
    }
];


const Myhome = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState("London City Airport (LCY)");
    const sliderRef = useRef(null);

    const handleSelectLocation = (location) => {
        setSelectedLocation(location.name);
        setIsOpen(false);
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        lazyLoad: 'ondemand',
        arrows: false,
        // responsive: [
        //     {
        //         breakpoint: 1024,
        //         settings: {
        //             slidesToShow: 3,
        //             slidesToScroll: 1,
        //             infinite: true,
        //         },
        //     },
        //     {
        //         breakpoint: 768,
        //         settings: {
        //             slidesToShow: 2,
        //             slidesToScroll: 1,
        //         },
        //     },
        //     {
        //         breakpoint: 480,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1,
        //         },
        //     },
        // ],
    };

    const prevSlide = () => {
        sliderRef.current.slickPrev();
    };

    const nextSlide = () => {
        sliderRef.current.slickNext();
    };

    return (
        <>
            <main className="main">
                <section className="section banner-home1">
                    <div className="box-swiper">
                        <div className="slider-container">
                            <Slider ref={sliderRef} {...settings}>
                                {slides.map((slide, index) => (
                                    <div key={index} className="swiper-slide">
                                        <div
                                            className="box-cover-image"
                                            style={{ backgroundImage: `url(${slide.img})` }}
                                        />
                                        <div className="box-banner-info">
                                            <p className="text-16 color-white wow fadeInUp">
                                                {slide.text}
                                            </p>
                                            <h2 className="heading-52-medium color-white wow fadeInUp">
                                                {slide.heading.split(" ")[0]} <br className="d-none d-lg-block" /> {slide.heading.split(" ").slice(1).join(" ")}
                                            </h2>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                            <div className="box-pagination-button">
                                <div className="swiper-button-prev swiper-button-prev-banner" onClick={() => sliderRef.current.slickPrev()} />
                                <div className="swiper-button-next swiper-button-next-banner" onClick={() => sliderRef.current.slickNext()} />
                            </div>
                        </div>
                    </div>

                    <div className="box-search-ride wow fadeInUp">
                        <div className="search-item search-date">
                            <div className="search-icon">
                                <span className="item-icon icon-date"> </span>
                            </div>
                            <div className="search-inputs">
                                <label className="text-14 color-grey">Date</label>
                                <input
                                    className="search-input datepicker"
                                    type="date"
                                    placeholder=""
                                    defaultValue="Thu, Oct 06, 2022"
                                />
                            </div>
                        </div>

                        <div className="search-item search-time">
                            <div className="search-icon">
                                <span className="item-icon icon-time"> </span>
                            </div>
                            <div className="search-inputs">
                                <label className="text-14 color-grey">Time</label>
                                <input
                                    className="search-input timepicker"
                                    type="time"
                                    placeholder=""
                                    defaultValue="6 PM  :  15"
                                />
                            </div>
                        </div>
                        <Dropdown dataDrop={locations} label={'From'} ></Dropdown>
                        <Dropdown dataDrop={locations} label={'To'} ></Dropdown>
                        <div className="search-item search-button">
                            <button className="btn btn-search" type="submit">
                                {" "}
                                <img src="assets/imgs/template/icons/search.svg" alt="luxride" />
                                Search
                            </button>
                        </div>
                    </div>
                </section>
                <section className="section pt-120 pb-120 bg-our-fleet float-end">
                    <SliderSlick></SliderSlick>
                </section>
                {/* Chổ hiệu ứng thứ 2 */}
                <HowItWorks></HowItWorks>
                {/* <section className="section pt-120 pb-20 bg-primary bg-how-it-works">
                    <div className="container-sub">
                        <h2 className="heading-44-medium color-white mb-60 wow fadeInUp">
                            How It Works
                        </h2>
                        <div className="row">
                            <div className="col-lg-6 order-lg-last">
                                <div className="box-main-slider">
                                    <div className="detail-gallery wow fadeInUp">
                                        <div className="main-image-slider">
                                            <figure>
                                                <img
                                                    src="assets/imgs/page/homepage1/laptop.png"
                                                    alt="luxride"
                                                />
                                            </figure>
                                            <figure>
                                                <img
                                                    src="assets/imgs/page/homepage1/desktop.png"
                                                    alt="luxride"
                                                />
                                            </figure>
                                            <figure>
                                                <img
                                                    src="assets/imgs/page/homepage1/desktop2.png"
                                                    alt="luxride"
                                                />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 order-lg-first justify-content-between position-z3 wow fadeInUp">
                                <ul className="slider-nav-thumbnails list-how">
                                    <li>
                                        {" "}
                                        <span className="line-white" />
                                        <h4 className="text-20-medium mb-20">Create Your Route</h4>
                                        <p className="text-16">
                                            Enter your pickup &amp; dropoff locations or the number of
                                            hours you wish to book a car and driver for
                                        </p>
                                    </li>
                                    <li>
                                        {" "}
                                        <span className="line-white" />
                                        <h4 className="text-20-medium mb-20">Choose Vehicle For You</h4>
                                        <p className="text-16">
                                            On the day of your ride, you will receive two email and SMS
                                            updates - one informing you that.
                                        </p>
                                    </li>
                                    <li>
                                        {" "}
                                        <span className="line-white" />
                                        <h4 className="text-20-medium mb-20">Enjoy The Journey</h4>
                                        <p className="text-16">
                                            After your ride has taken place, we would appreciate it if you
                                            could rate your car and driver.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>  */}

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
                <SliderSlickService></SliderSlickService>
                {/* <section className="section pt-90 pb-120 bg-our-service">
                    <div className="container-sub">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-sm-7 col-7">
                                <h2 className="heading-44-medium title-fleet wow fadeInUp">
                                    Our Services
                                </h2>
                            </div>
                            <div className="col-lg-6 col-sm-5 col-5 text-end">
                                <a
                                    className="text-16-medium color-primary d-flex align-items-center justify-content-end wow fadeInUp"
                                    href="#"
                                >
                                    More Services
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
                    <div className="box-slide-fleet mt-50">
                        <div className="box-swiper">
                            <div className="swiper-container swiper-group-4-service pb-0">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="cardService wow fadeInUp">
                                            <div className="cardInfo">
                                                <h3 className="cardTitle text-20-medium color-white mb-10">
                                                    Intercity Rides
                                                </h3>
                                                <div className="box-inner-info">
                                                    <p className="cardDesc text-14 color-white mb-30">
                                                        Mercedes-Benz E-Class, BMW 5 Series, Cadillac XTS or
                                                        similar
                                                    </p>
                                                    <a
                                                        className="cardLink btn btn-arrow-up"
                                                        href="service-single.html"
                                                    >
                                                        <svg
                                                            className="icon-16"
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
                                            <div className="cardImage">
                                                <img
                                                    src="assets/imgs/page/homepage1/service1.png"
                                                    alt="Luxride"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="cardService wow fadeInUp">
                                            <div className="cardInfo">
                                                <h3 className="cardTitle text-20-medium color-white mb-10">
                                                    Chauffeur Hailing
                                                </h3>
                                                <div className="box-inner-info">
                                                    <p className="cardDesc text-14 color-white mb-30">
                                                        Mercedes-Benz E-Class, BMW 5 Series, Cadillac XTS or
                                                        similar
                                                    </p>
                                                    <a
                                                        className="cardLink btn btn-arrow-up"
                                                        href="service-single.html"
                                                    >
                                                        <svg
                                                            className="icon-16"
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
                                            <div className="cardImage">
                                                <img
                                                    src="assets/imgs/page/homepage1/service2.png"
                                                    alt="Luxride"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="cardService wow fadeInUp">
                                            <div className="cardInfo">
                                                <h3 className="cardTitle text-20-medium color-white mb-10">
                                                    Airport Transfers
                                                </h3>
                                                <div className="box-inner-info">
                                                    <p className="cardDesc text-14 color-white mb-30">
                                                        Mercedes-Benz E-Class, BMW 5 Series, Cadillac XTS or
                                                        similar
                                                    </p>
                                                    <a
                                                        className="cardLink btn btn-arrow-up"
                                                        href="service-single.html"
                                                    >
                                                        <svg
                                                            className="icon-16"
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
                                            <div className="cardImage">
                                                <img
                                                    src="assets/imgs/page/homepage1/service3.png"
                                                    alt="Luxride"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="cardService wow fadeInUp">
                                            <div className="cardInfo">
                                                <h3 className="cardTitle text-20-medium color-white mb-10">
                                                    Sprinter Class
                                                </h3>
                                                <div className="box-inner-info">
                                                    <p className="cardDesc text-14 color-white mb-30">
                                                        Mercedes-Benz E-Class, BMW 5 Series, Cadillac XTS or
                                                        similar
                                                    </p>
                                                    <a
                                                        className="cardLink btn btn-arrow-up"
                                                        href="service-single.html"
                                                    >
                                                        <svg
                                                            className="icon-16"
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
                                            <div className="cardImage">
                                                <img
                                                    src="assets/imgs/page/homepage1/service5.png"
                                                    alt="Luxride"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="box-pagination-fleet">
                                    <div className="swiper-button-prev swiper-button-prev-fleet">
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
                                    <div className="swiper-button-next swiper-button-next-fleet">
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
                </section> */}
                <section className="section pt-130 pb-130 bg-primary box-testimonials">
                    <div className="container-sub">
                        <div className="row">
                            <div className="col-lg-5 col-md-6 mb-30">
                                <div className="box-swiper">
                                    <div className="swiper-container swiper-group-testimonials pb-50">
                                        <div className="swiper-wrapper">
                                            <div className="swiper-slide">
                                                <div className="cardQuote wow fadeInUp">
                                                    <div className="box-quote">
                                                        <div className="icon-quote"> </div>
                                                        <div className="info-quote">
                                                            <h5 className="color-white text-18-medium">
                                                                Jonathan Miller
                                                            </h5>
                                                            <p className="color-white text-14">Web Developer</p>
                                                        </div>
                                                    </div>
                                                    <div className="content-quote">
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
                                                            <h5 className="color-white text-18-medium">
                                                                Jonathan Miller
                                                            </h5>
                                                            <p className="color-white text-14">Web Developer</p>
                                                        </div>
                                                    </div>
                                                    <div className="content-quote">
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
                                                            <h5 className="color-white text-18-medium">
                                                                Jonathan Miller
                                                            </h5>
                                                            <p className="color-white text-14">Web Developer</p>
                                                        </div>
                                                    </div>
                                                    <div className="content-quote">
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
                                                            <h5 className="color-white text-18-medium">
                                                                Jonathan Miller
                                                            </h5>
                                                            <p className="color-white text-14">Web Developer</p>
                                                        </div>
                                                    </div>
                                                    <div className="content-quote">
                                                        I really can recommend this theme, because it’s coded
                                                        very well and it’s really easy to build your own
                                                        website!
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="box-pagination-testimonials mt-40 wow fadeInUp">
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
                                    <img
                                        src="assets/imgs/page/homepage1/img-video.png"
                                        alt="luxride"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section pt-120 pb-120 bg-region">
                    <div className="container-sub">
                        <div className="row align-items-center">
                            <div className="col-lg-6 mb-30">
                                <div className="box-gallery justify-content-center justify-content-lg-start">
                                    <div className="gallery-1 wow fadeInUp">
                                        <img src="assets/imgs/page/homepage1/img1.png" alt="luxride" />
                                    </div>
                                    <div className="gallery-2 wow fadeInUp">
                                        <img src="assets/imgs/page/homepage1/img2.png" alt="luxride" />
                                        <img src="assets/imgs/page/homepage1/img3.png" alt="luxride" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-30">
                                <div className="box-region-right wow fadeInUp">
                                    <h2 className="heading-44-medium color-text mb-30">
                                        From the region, for the region
                                    </h2>
                                    <p className="text-16 color-text mb-30">
                                        Superide operates in more than 120 cities in 18 countries from
                                        Morocco to Pakistan.
                                    </p>
                                    <a className="btn btn-primary">
                                        View All Cities
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
                </section>
                <section className="section pt-120 pb-90 bg-primary">
                    <div className="container-sub">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-7">
                                <h2 className="heading-44-medium color-white wow fadeInUp">
                                    Latest From News
                                </h2>
                            </div>
                            <div className="col-lg-6 col-5 text-end">
                                <a
                                    className="text-16-medium color-white hover-up d-inline-block wow fadeInUp"
                                    href="#"
                                >
                                    More News
                                    <svg
                                        className="icon-16 color-white"
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
                        <div className="row mt-50">
                            <div className="col-lg-4">
                                <div className="cardNews wow fadeInUp">
                                    <a href="blog-single.html">
                                        <div className="cardImage">
                                            <div className="datePost">
                                                <div className="heading-52-medium color-white">14.</div>
                                                <p className="text-14 color-white">Jun, 2022</p>
                                            </div>
                                            <img
                                                src="assets/imgs/page/homepage1/news1.png"
                                                alt="luxride"
                                            />
                                        </div>
                                    </a>
                                    <div className="cardInfo">
                                        <div className="tags mb-10">
                                            <a href="#">Travel</a>
                                        </div>
                                        <a className="color-white" href="blog-single.html">
                                            <h3 className="text-20-medium color-white mb-20">
                                                3 hidden-gem destinations for your wish list
                                            </h3>
                                        </a>
                                        <a
                                            className="cardLink btn btn-arrow-up"
                                            href="blog-single.html"
                                        >
                                            <svg
                                                className="icon-16"
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
                            <div className="col-lg-4">
                                <div className="cardNews wow fadeInUp">
                                    <a href="blog-single.html">
                                        <div className="cardImage">
                                            <div className="datePost">
                                                <div className="heading-52-medium color-white">18.</div>
                                                <p className="text-14 color-white">Jun, 2022</p>
                                            </div>
                                            <img
                                                src="assets/imgs/page/homepage1/news2.png"
                                                alt="luxride"
                                            />
                                        </div>
                                    </a>
                                    <div className="cardInfo">
                                        <div className="tags mb-10">
                                            <a href="#">Culture</a>
                                        </div>
                                        <a className="color-white" href="blog-single.html">
                                            <h3 className="text-20-medium color-white mb-20">
                                                Explore the big things happening in Dallas
                                            </h3>
                                        </a>
                                        <a
                                            className="cardLink btn btn-arrow-up"
                                            href="blog-single.html"
                                        >
                                            <svg
                                                className="icon-16"
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
                            <div className="col-lg-4">
                                <div className="cardNews wow fadeInUp">
                                    <a href="blog-single.html">
                                        <div className="cardImage">
                                            <div className="datePost">
                                                <div className="heading-52-medium color-white">20.</div>
                                                <p className="text-14 color-white">Jun, 2022</p>
                                            </div>
                                            <img
                                                src="assets/imgs/page/homepage1/news3.png"
                                                alt="luxride"
                                            />
                                        </div>
                                    </a>
                                    <div className="cardInfo">
                                        <div className="tags mb-10">
                                            <a href="#">News</a>
                                        </div>
                                        <a className="color-white" href="blog-single.html">
                                            <h3 className="text-20-medium color-white mb-20">
                                                LA’s worst traffic areas and how to avoid them
                                            </h3>
                                        </a>
                                        <a
                                            className="cardLink btn btn-arrow-up"
                                            href="blog-single.html"
                                        >
                                            <svg
                                                className="icon-16"
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
                    </div>
                </section>
                <section className="section pt-80 mb-30 bg-faqs">
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
                <section className="section mt-50 bg-download">
                    <div className="container-sub">
                        <h2 className="heading-44-medium color-text mb-20 wow fadeInUp">
                            Download the app
                        </h2>
                        <p className="color-text text-16 mb-60 wow fadeInUp">
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

            {/* Count down*/}
            {/* Count down*/}
        </>

    );
}

export default Myhome;
