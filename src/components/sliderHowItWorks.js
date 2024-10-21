import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HowItWorks = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false,
    };

    const steps = [
        {
            title: "Create Your Route",
            description: "Enter your pickup & dropoff locations or the number of hours you wish to book a car and driver for",
            image: "assets/imgs/page/homepage1/laptop.png",
        },
        {
            title: "Choose Vehicle For You",
            description: "On the day of your ride, you will receive two email and SMS updates - one informing you that.",
            image: "assets/imgs/page/homepage1/desktop.png",
        },
        {
            title: "Enjoy The Journey",
            description: "After your ride has taken place, we would appreciate it if you could rate your car and driver.",
            image: "assets/imgs/page/homepage1/desktop2.png",
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef(null); // Create a ref for the slider

    const handleThumbnailClick = (index) => {
        setCurrentSlide(index);
        sliderRef.current.slickGoTo(index); // Use the ref to go to the clicked slide
    };

    return (
        <section className="section pt-120 pb-20 bg-primary bg-how-it-works">
            <div className="container-sub">
                <h2 className="heading-44-medium color-white mb-60 wow fadeInUp">
                    How It Works
                </h2>
                <div className="row">
                    <div className="col-lg-6 order-lg-first justify-content-between position-z3 wow fadeInUp">
                        <ul className="slider-nav-thumbnails list-how">
                            {steps.map((step, index) => (
                                <li key={index} onClick={() => handleThumbnailClick(index)}>
                                    <span className="line-white" />
                                    <h4 className="text-20-medium mb-20">{step.title}</h4>
                                    <p className="text-16">{step.description}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-lg-6 order-lg-last">
                        <Slider ref={sliderRef} {...settings} className="detail-gallery wow fadeInUp">
                            {steps.map((step, index) => (
                                <div key={index} className="main-image-slider">
                                    <figure>
                                        <img src={step.image} alt={`luxride-${index}`} />
                                    </figure>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
