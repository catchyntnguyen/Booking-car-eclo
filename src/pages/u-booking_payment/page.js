import React, { useEffect, useState } from 'react';

const Mybookingpayment = () => {

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
                                <div className="box-tab-step active">
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
                                <div className="box-tab-step active">
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
                                <div className="box-tab-step active">
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
                                    Billing Address
                                </h3>
                                <div className="form-contact form-comment wow fadeInUp">
                                    <form action="#">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label className="form-label" htmlFor="fullname">
                                                        Name
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        id="fullname"
                                                        type="text"
                                                        defaultValue=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label className="form-label" htmlFor="lastname">
                                                        Last Name
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        id="lastname"
                                                        type="text"
                                                        defaultValue=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <label className="form-label" htmlFor="company">
                                                        Company
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        id="company"
                                                        type="text"
                                                        defaultValue=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <label className="form-label" htmlFor="address">
                                                        Address
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        id="address"
                                                        type="text"
                                                        defaultValue=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="form-group">
                                                    <label className="form-label" htmlFor="country">
                                                        Country
                                                    </label>
                                                    <select className="form-control" id="country">
                                                        <option value=""> </option>
                                                        <option value="UK" selected="selected">
                                                            UK
                                                        </option>
                                                        <option value="USA">USA</option>
                                                        <option value="VN">Vietnam</option>
                                                        <option value="JP">Japan</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="form-group">
                                                    <label className="form-label" htmlFor="city">
                                                        City
                                                    </label>
                                                    <select className="form-control" id="city">
                                                        <option value=""> </option>
                                                        <option value="London" selected="selected">
                                                            London
                                                        </option>
                                                        <option value="New York">New York</option>
                                                        <option value="Paris">Paris</option>
                                                        <option value="Berlin">Berlin</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="form-group">
                                                    <label className="form-label" htmlFor="zipcode">
                                                        ZIP / Postal code
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        id="zipcode"
                                                        type="text"
                                                        defaultValue={850}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="mt-30" />
                                    <h3 className="heading-24-medium color-text mb-30">
                                        Select Payment Method
                                    </h3>
                                    <div className="form-contact form-comment">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <select className="form-control">
                                                        <option value="Credit Card">Credit Card</option>
                                                        <option value="Paypal">Paypal</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-30" />
                                    <h3 className="heading-24-medium color-text mb-30">
                                        Credit Card Payment
                                    </h3>
                                    <div className="form-contact form-comment">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <label className="form-label" htmlFor="cardholdername">
                                                        Card Holder Name
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        id="cardholdername"
                                                        type="text"
                                                        defaultValue=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <label className="form-label" htmlFor="cardnumber">
                                                        Card Number
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        id="cardnumber"
                                                        type="text"
                                                        defaultValue=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-sm-12">
                                                <div className="form-group">
                                                    <label className="form-label" htmlFor="month">
                                                        Month
                                                    </label>
                                                    <select className="form-control" id="month">
                                                        <option value=""> </option>
                                                        <option value={1}>1</option>
                                                        <option value={2}>2</option>
                                                        <option value={3}>3</option>
                                                        <option value={4}>4</option>
                                                        <option value={4}>5</option>
                                                        <option value={4}>6</option>
                                                        <option value={4}>7</option>
                                                        <option value={4}>8</option>
                                                        <option value={4}>9</option>
                                                        <option value={4} selected="selected">
                                                            10
                                                        </option>
                                                        <option value={4}>11</option>
                                                        <option value={4}>12</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-sm-12">
                                                <div className="form-group">
                                                    <label className="form-label" htmlFor="year">
                                                        Year
                                                    </label>
                                                    <select className="form-control" id="year">
                                                        <option value=""> </option>
                                                        <option value={2023} selected="selected">
                                                            2023
                                                        </option>
                                                        <option value={2024}>2024</option>
                                                        <option value={2025}>2025</option>
                                                        <option value={2026}>2026</option>
                                                        <option value={2027}>2027</option>
                                                        <option value={2028}>2028</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-4 col-sm-12">
                                                <div className="form-group">
                                                    <label className="form-label" htmlFor="cvv">
                                                        CVV
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        id="cvv"
                                                        type="text"
                                                        defaultValue={850}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-0">
                                        <img
                                            src="assets/imgs/page/booking/payment-card.png"
                                            alt="luxride"
                                        />
                                    </div>
                                    <p className="text-14 mt-10 color-text">
                                        The credit card must be issued in the driver's name. Debit
                                        cards are accepted at some locations and for some car
                                        categories.
                                    </p>
                                    <div className="mt-30">
                                        <label className="mb-10 mb-15" htmlFor="agree-cb">
                                            <input className="cb-agree" id="agree-cb" type="checkbox" />
                                            I accept the Terms &amp; Conditions - Booking Conditions and
                                            Privacy Policy. *
                                        </label>
                                        <label htmlFor="subscriber">
                                            <input
                                                className="cb-subscriber"
                                                id="subscriber"
                                                type="checkbox"
                                            />
                                            I want to subscribe to Transfeero’s newsletter (Travel tips
                                            and special deals)
                                        </label>
                                    </div>
                                </div>
                                <div className="mt-30 mb-120 wow fadeInUp">
                                    {" "}
                                    <a
                                        className="btn btn-primary btn-primary-big w-100"
                                        href="booking-receved.html"
                                    >
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
                                    <div className="border-bottom mt-30 mb-25"> </div>
                                    <div className="mt-0">
                                        {" "}
                                        <span className="text-14 color-grey">Vehicle</span>
                                        <br />
                                        <span className="text-14-medium color-text">
                                            Mercedes-Benz E220
                                        </span>
                                    </div>
                                    <div className="border-bottom mt-30 mb-25"> </div>
                                    <div className="mt-0">
                                        {" "}
                                        <span className="text-14 color-grey">Extra Options</span>
                                        <br />
                                        <span className="text-14-medium color-text">
                                            1 x Child Seat - $5.00
                                        </span>
                                        <br />
                                        <span className="text-14-medium color-text">
                                            1 x Bouquet of Flowers - $75.00
                                        </span>
                                        <br />
                                        <span className="text-14-medium color-text">
                                            2 x Vodka Bottle - $78.00
                                        </span>
                                        <br />
                                        <span className="text-14-medium color-text">
                                            1 x Bodyguard Service - $750.00
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="sidebar wow fadeInUp">
                                <ul className="list-prices list-prices-2">
                                    <li>
                                        {" "}
                                        <span className="text">Selected vehicle</span>
                                        <span className="price">$174</span>
                                    </li>
                                    <li>
                                        {" "}
                                        <span className="text">Extra options</span>
                                        <span className="price">$90.25</span>
                                    </li>
                                </ul>
                                <div className="border-bottom mt-30 mb-15"> </div>
                                <ul className="list-prices">
                                    <li>
                                        {" "}
                                        <span className="text text-20-medium">Total</span>
                                        <span className="price text-20-medium">$909.47</span>
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

export default Mybookingpayment;
