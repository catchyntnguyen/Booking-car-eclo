import React, { useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderData = [
    { id: 1, imgSrc: 'e-class.png', Vehicle_Type: 'Business Class', Vehicle_Models: 'Mercedes-Benz E-Class, BMW 5 Series, Cadillac XTS or similar,', Seating_Capacity: 4, Luggage_Capacity: 2 },
    { id: 2, imgSrc: 'e-class.png', Vehicle_Type: 'Business Class', Vehicle_Models: 'Mercedes-Benz E-Class, BMW 5 Series, Cadillac XTS or similar,', Seating_Capacity: 4, Luggage_Capacity: 2 },
    { id: 3, imgSrc: 'e-class.png', Vehicle_Type: 'Business Class', Vehicle_Models: 'Mercedes-Benz E-Class, BMW 5 Series, Cadillac XTS or similar,', Seating_Capacity: 4, Luggage_Capacity: 2 },
    { id: 4, imgSrc: 'e-class.png', Vehicle_Type: 'Business Class', Vehicle_Models: 'Mercedes-Benz E-Class, BMW 5 Series, Cadillac XTS or similar,', Seating_Capacity: 4, Luggage_Capacity: 2 },
    { id: 5, imgSrc: 'e-class.png', Vehicle_Type: 'Business Class', Vehicle_Models: 'Mercedes-Benz E-Class, BMW 5 Series, Cadillac XTS or similar,', Seating_Capacity: 4, Luggage_Capacity: 2 },
];

const SliderSlick = () => {
    const sliderRef = useRef(null);
    
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        lazyLoad: 'ondemand',
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const prevSlide = () => {
        sliderRef.current.slickPrev();
    };

    const nextSlide = () => {
        sliderRef.current.slickNext();
    };

    const handleKeyPress = (event, callback) => {
        if (event.key === "Enter" || event.key === " ") {
            callback();
        }
    };

    return (
        <div className='sliderCar'>
            <div className="container-sub">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-7">
                        <h2 className="heading-44-medium title-fleet wow fadeInUp titleSlider">Our Fleet</h2>
                    </div>
                    <div className="col-lg-6 col-5 text-end">
                        <a className="text-16-medium color-primary wow fadeInUp" href="#">
                            More Fleet
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
            <div className="box-slide-fleet mt-50">
                <div className="box-swiper">
                    <Slider ref={sliderRef} {...settings}>
                        {sliderData.map((item) => (
                            <div key={item.id} className='itemSlider'>
                                <div className="cardFleet wow fadeInUp">
                                    <div className="cardInfo">
                                        <a href="fleet-single.html">
                                            <h3 className="text-20-medium color-text mb-10">{item.Vehicle_Type}</h3>
                                        </a>
                                        <p className="text-14 color-text mb-30">
                                            {item.Vehicle_Models}
                                        </p>
                                    </div>
                                    <div className="cardImage mb-30">
                                        <a href="fleet-single.html">
                                            <img src={`assets/imgs/page/homepage1/${item.imgSrc}`} alt="Luxride" />
                                        </a>
                                    </div>
                                    <div className="cardInfoBottom">
                                        <div className="passenger">
                                            <span className="icon-circle icon-passenger" />
                                            <span className="text-14">Passengers<span>{item.Seating_Capacity}</span></span>
                                        </div>
                                        <div className="luggage">
                                            <span className="icon-circle icon-luggage" />
                                            <span className="text-14">Luggage<span>{item.Luggage_Capacity}</span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>            
            <div className='CustomerArrowSlider'>
                <div
                    className='c-a-s-left'
                    onClick={prevSlide}
                    tabIndex={0}
                    onKeyPress={(e) => handleKeyPress(e, prevSlide)}>
                    {/* SVG icon cho slide trước */}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 19L10.41 17.59L5.83 13H22V11H5.83L10.42 6.41L9 5L2 12L9 19Z" fill="black" />
                    </svg>
                </div>
                <div
                    className='c-a-s-right'
                    onClick={nextSlide}
                    tabIndex={0}
                    onKeyPress={(e) => handleKeyPress(e, nextSlide)}>
                    {/* SVG icon cho slide tiếp theo */}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 5L13.59 6.41L18.17 11H2V13H18.17L13.58 17.59L15 19L22 12L15 5Z" fill="black" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default SliderSlick;
