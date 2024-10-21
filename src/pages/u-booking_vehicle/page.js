import React, { useEffect, useState } from 'react';

const Mybookingvehicle = () => {

    return (
        <main className="main">
            <section className="section">
                <div className="container-sub">
                    <div className="box-booking-tabs">
                        <div className="item-tab wow fadeInUp">
                            <a href="booking-vehicle.html">
                                <div className="box-tab-step active">
                                    <div className="icon-tab">
                                        {" "}
                                        <span className="icon-book icon-vehicle"> </span>
                                        <span className="text-tab">Vehicle </span>
                                    </div>
                                    <div className="number-tab">
                                        {" "}
                                        <span>01</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="item-tab wow fadeInUp">
                            <a href="booking-extra.html">
                                <div className="box-tab-step">
                                    <div className="icon-tab">
                                        {" "}
                                        <span className="icon-book icon-extra"> </span>
                                        <span className="text-tab">Extras</span>
                                    </div>
                                    <div className="number-tab">
                                        {" "}
                                        <span>02</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="item-tab wow fadeInUp">
                            <a href="booking-passenger.html">
                                <div className="box-tab-step">
                                    <div className="icon-tab">
                                        {" "}
                                        <span className="icon-book icon-pax"> </span>
                                        <span className="text-tab">Details</span>
                                    </div>
                                    <div className="number-tab">
                                        {" "}
                                        <span>03</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="item-tab wow fadeInUp">
                            <a href="booking-payment.html">
                                <div className="box-tab-step">
                                    <div className="icon-tab">
                                        {" "}
                                        <span className="icon-book icon-payment"> </span>
                                        <span className="text-tab">Payment</span>
                                    </div>
                                    <div className="number-tab">
                                        {" "}
                                        <span>04</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="box-row-tab mt-50">
                        <div className="box-tab-left">
                            <div className="box-content-detail">
                                <h3 className="heading-24-medium color-text mb-30 wow fadeInUp">
                                    Select Your Car
                                </h3>
                                <div className="list-vehicles wow fadeInUp">
                                    <div className="item-vehicle wow fadeInUp">
                                        <div className="vehicle-left">
                                            <div className="vehicle-image">
                                                <img
                                                    src="assets/imgs/page/booking/img-vehicle.png"
                                                    alt="luxride"
                                                />
                                            </div>
                                            <div className="vehicle-facilities">
                                                <div className="text-fact meet-greeting">
                                                    Meet &amp; Greet included
                                                </div>
                                                <div className="text-fact free-cancel">
                                                    Free cancellation
                                                </div>
                                                <div className="text-fact free-waiting">
                                                    Free Waiting time
                                                </div>
                                                <div className="text-fact safe-travel">
                                                    Safe and secure travel
                                                </div>
                                            </div>
                                            <div className="mt-10">
                                                <a
                                                    className="link text-14-medium"
                                                    href="booking-extra.html"
                                                >
                                                    Show more information
                                                </a>
                                            </div>
                                        </div>
                                        <div className="vehicle-right">
                                            <h5 className="text-20-medium color-text mb-10">
                                                Business Class
                                            </h5>
                                            <p className="text-14 color-text mb-20">
                                                Mercedes-Benz E-Class, BMW 5 Series, Cadillac XTS or
                                                similar
                                            </p>
                                            <div className="vehicle-passenger-luggage mb-10">
                                                <span className="passenger">Passengers 4</span>
                                                <span className="luggage">Luggage 2</span>
                                            </div>
                                            <div className="vehicle-price">
                                                <h4 className="heading-30-medium color-text">$125.25</h4>
                                            </div>
                                            <div className="price-desc mb-20">
                                                All prices include VAT, fees &amp; tip.
                                            </div>
                                            <a
                                                className="btn btn-primary w-100"
                                                href="booking-extra.html"
                                            >
                                                Select
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
                                    <div className="item-vehicle wow fadeInUp">
                                        <div className="vehicle-left">
                                            <div className="vehicle-image">
                                                <img
                                                    src="assets/imgs/page/booking/img-vehicle-2.png"
                                                    alt="luxride"
                                                />
                                            </div>
                                            <div className="vehicle-facilities">
                                                <div className="text-fact meet-greeting">
                                                    Meet &amp; Greet included
                                                </div>
                                                <div className="text-fact free-cancel">
                                                    Free cancellation
                                                </div>
                                                <div className="text-fact free-waiting">
                                                    Free Waiting time
                                                </div>
                                                <div className="text-fact safe-travel">
                                                    Safe and secure travel
                                                </div>
                                            </div>
                                            <div className="mt-10">
                                                <a
                                                    className="link text-14-medium"
                                                    href="booking-extra.html"
                                                >
                                                    Show more information
                                                </a>
                                            </div>
                                        </div>
                                        <div className="vehicle-right">
                                            <h5 className="text-20-medium color-text mb-10">
                                                First Class
                                            </h5>
                                            <p className="text-14 color-text mb-20">
                                                Mercedes-Benz E-Class, BMW 5 Series, Cadillac XTS or
                                                similar
                                            </p>
                                            <div className="vehicle-passenger-luggage mb-10">
                                                <span className="passenger">Passengers 4</span>
                                                <span className="luggage">Luggage 2</span>
                                            </div>
                                            <div className="vehicle-price">
                                                <h4 className="heading-30-medium color-text">$250.98</h4>
                                            </div>
                                            <div className="price-desc mb-20">
                                                All prices include VAT, fees &amp; tip.
                                            </div>
                                            <a
                                                className="btn btn-primary w-100"
                                                href="booking-extra.html"
                                            >
                                                Select
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
                                    <div className="item-vehicle wow fadeInUp">
                                        <div className="vehicle-left">
                                            <div className="vehicle-image">
                                                <img
                                                    src="assets/imgs/page/booking/img-vehicle-3.png"
                                                    alt="luxride"
                                                />
                                            </div>
                                            <div className="vehicle-facilities">
                                                <div className="text-fact meet-greeting">
                                                    Meet &amp; Greet included
                                                </div>
                                                <div className="text-fact free-cancel">
                                                    Free cancellation
                                                </div>
                                                <div className="text-fact free-waiting">
                                                    Free Waiting time
                                                </div>
                                                <div className="text-fact safe-travel">
                                                    Safe and secure travel
                                                </div>
                                            </div>
                                            <div className="mt-10">
                                                <a
                                                    className="link text-14-medium"
                                                    href="booking-extra.html"
                                                >
                                                    Show more information
                                                </a>
                                            </div>
                                        </div>
                                        <div className="vehicle-right">
                                            <h5 className="text-20-medium color-text mb-10">
                                                Business Van/SUV
                                            </h5>
                                            <p className="text-14 color-text mb-20">
                                                Mercedes-Benz E-Class, BMW 5 Series, Cadillac XTS or
                                                similar
                                            </p>
                                            <div className="vehicle-passenger-luggage mb-10">
                                                <span className="passenger">Passengers 4</span>
                                                <span className="luggage">Luggage 2</span>
                                            </div>
                                            <div className="vehicle-price">
                                                <h4 className="heading-30-medium color-text">$321.91</h4>
                                            </div>
                                            <div className="price-desc mb-20">
                                                All prices include VAT, fees &amp; tip.
                                            </div>
                                            <a
                                                className="btn btn-primary w-100"
                                                href="booking-extra.html"
                                            >
                                                Select
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
                                    <div className="item-vehicle wow fadeInUp">
                                        <div className="vehicle-left">
                                            <div className="vehicle-image">
                                                <img
                                                    src="assets/imgs/page/booking/img-vehicle-4.png"
                                                    alt="luxride"
                                                />
                                            </div>
                                            <div className="vehicle-facilities">
                                                <div className="text-fact meet-greeting">
                                                    Meet &amp; Greet included
                                                </div>
                                                <div className="text-fact free-cancel">
                                                    Free cancellation
                                                </div>
                                                <div className="text-fact free-waiting">
                                                    Free Waiting time
                                                </div>
                                                <div className="text-fact safe-travel">
                                                    Safe and secure travel
                                                </div>
                                            </div>
                                            <div className="mt-10">
                                                <a
                                                    className="link text-14-medium"
                                                    href="booking-extra.html"
                                                >
                                                    Show more information
                                                </a>
                                            </div>
                                        </div>
                                        <div className="vehicle-right">
                                            <h5 className="text-20-medium color-text mb-10">
                                                Electric Class
                                            </h5>
                                            <p className="text-14 color-text mb-20">
                                                Mercedes-Benz E-Class, BMW 5 Series, Cadillac XTS or
                                                similar
                                            </p>
                                            <div className="vehicle-passenger-luggage mb-10">
                                                <span className="passenger">Passengers 4</span>
                                                <span className="luggage">Luggage 2</span>
                                            </div>
                                            <div className="vehicle-price">
                                                <h4 className="heading-30-medium color-text">$546.23</h4>
                                            </div>
                                            <div className="price-desc mb-20">
                                                All prices include VAT, fees &amp; tip.
                                            </div>
                                            <a
                                                className="btn btn-primary w-100"
                                                href="booking-extra.html"
                                            >
                                                Select
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
                                    <div className="text-center mt-60 mb-100">
                                        <nav className="box-pagination">
                                            <ul className="pagination">
                                                <li className="page-item">
                                                    <a className="page-link page-prev" href="#">
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
                                                    </a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#">
                                                        1
                                                    </a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link active" href="#">
                                                        2
                                                    </a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#">
                                                        3
                                                    </a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#">
                                                        ...
                                                    </a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#">
                                                        10
                                                    </a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link page-next" href="#">
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
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box-tab-right">
                            <div className="sidebar">
                                <div className="d-flex align-items-center justify-content-between wow fadeInUp">
                                    <h6 className="text-20-medium color-text">Ride Summary</h6>
                                    <a
                                        className="text-14-medium color-text text-decoration-underline"
                                        href="#"
                                    >
                                        Edit
                                    </a>
                                </div>
                                <div className="mt-20 wow fadeInUp">
                                    <ul className="list-routes">
                                        <li>
                                            {" "}
                                            <span className="location-item">A </span>
                                            <span className="info-location text-14-medium">
                                                Manchester, UK{" "}
                                            </span>
                                        </li>
                                        <li>
                                            {" "}
                                            <span className="location-item">A </span>
                                            <span className="info-location text-14-medium">
                                                London, UK
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mt-20 wow fadeInUp">
                                    <ul className="list-icons">
                                        <li>
                                            {" "}
                                            <span className="icon-item icon-plan"> </span>
                                            <span className="info-location text-14-medium">
                                                Thu, Oct 06, 2022
                                            </span>
                                        </li>
                                        <li>
                                            {" "}
                                            <span className="icon-item icon-time" />
                                            <span className="info-location text-14-medium">
                                                6 PM : 15
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mt-20 wow fadeInUp">
                                    <div className="box-map-route">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2zVGjDoG5oIHBo4buRIE5ldyBZb3JrLCBUaeG7g3UgYmFuZyBOZXcgWW9yaywgSG9hIEvhu7M!5e0!3m2!1svi!2s!4v1679223612023!5m2!1svi!2s"
                                            style={{ border: 0 }}
                                            allowFullScreen=""
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                        />
                                    </div>
                                    <div className="box-info-route">
                                        <div className="info-route-left">
                                            {" "}
                                            <span className="text-14 color-grey">Total Distance</span>
                                            <span className="text-14-medium color-text">
                                                311 km/ 194 miles
                                            </span>
                                        </div>
                                        <div className="info-route-left">
                                            {" "}
                                            <span className="text-14 color-grey">Total Time</span>
                                            <span className="text-14-medium color-text">3h 43m</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sidebar wow fadeInUp">
                                <ul className="list-ticks list-ticks-small list-ticks-small-booking">
                                    <li className="text-14 mb-20">
                                        +100.000 passengers transported
                                    </li>
                                    <li className="text-14 mb-20">Instant confirmation</li>
                                    <li className="text-14 mb-20">All-inclusive pricing</li>
                                    <li className="text-14 mb-20">
                                        Secure Payment by credit card, debit card or Paypal
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Mybookingvehicle;
