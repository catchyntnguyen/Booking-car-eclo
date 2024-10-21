import React, { useEffect, useState } from 'react';

const Mybookingextra = () => {

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
                                    Extra Options
                                </h3>
                                <div className="form-contact form-comment wow fadeInUp">
                                    <form action="#">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <label className="form-label" htmlFor="flight">
                                                        Flight/train number
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        id="flight"
                                                        type="text"
                                                        defaultValue="Example : LH83822"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="list-extras wow fadeInUp">
                                    <div className="item-extra">
                                        <div className="extra-info">
                                            <h5 className="text-20-medium color-text mb-5">
                                                Child Seat <span className="price">$12</span>
                                            </h5>
                                            <p className="text-14 color-grey">
                                                Suitable for toddlers weighing 0-18 kg (approx 0 to 4
                                                years).
                                            </p>
                                        </div>
                                        <div className="extra-quantity">
                                            {" "}
                                            <span className="minus"> </span>
                                            <input
                                                className="form-control"
                                                type="text"
                                                defaultValue={1}
                                            />
                                            <span className="plus" />
                                        </div>
                                    </div>
                                    <div className="item-extra">
                                        <div className="extra-info">
                                            <h5 className="text-20-medium color-text mb-5">
                                                Booster seat <span className="price">$12</span>
                                            </h5>
                                            <p className="text-14 color-grey">
                                                Suitable for children weighing 15-36 kg (approx 4 to 10
                                                years).
                                            </p>
                                        </div>
                                        <div className="extra-quantity">
                                            {" "}
                                            <span className="minus"> </span>
                                            <input
                                                className="form-control"
                                                type="text"
                                                defaultValue={1}
                                            />
                                            <span className="plus" />
                                        </div>
                                    </div>
                                    <div className="item-extra">
                                        <div className="extra-info">
                                            <h5 className="text-20-medium color-text mb-5">
                                                Vodka Bottle <span className="price">$12</span>
                                            </h5>
                                            <p className="text-14 color-grey">
                                                Absolut Vodka 0.7l Bottle
                                            </p>
                                        </div>
                                        <div className="extra-quantity">
                                            {" "}
                                            <span className="minus"> </span>
                                            <input
                                                className="form-control"
                                                type="text"
                                                defaultValue={1}
                                            />
                                            <span className="plus" />
                                        </div>
                                    </div>
                                    <div className="item-extra">
                                        <div className="extra-info">
                                            <h5 className="text-20-medium color-text mb-5">
                                                Bouquet of Flowers <span className="price">$12</span>
                                            </h5>
                                            <p className="text-14 color-grey">
                                                A bouquet of seasonal flowers prepared by a local florist
                                            </p>
                                        </div>
                                        <div className="extra-quantity">
                                            {" "}
                                            <span className="minus"> </span>
                                            <input
                                                className="form-control"
                                                type="text"
                                                defaultValue={1}
                                            />
                                            <span className="plus" />
                                        </div>
                                    </div>
                                    <div className="item-extra">
                                        <div className="extra-info">
                                            <h5 className="text-20-medium color-text mb-5">
                                                Alcohol Package <span className="price">$12</span>
                                            </h5>
                                            <p className="text-14 color-grey">
                                                A bouquet of seasonal flowers prepared by a local florist
                                            </p>
                                        </div>
                                        <div className="extra-quantity">
                                            {" "}
                                            <a className="btn btn-grey w-100" href="#">
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
                                    <div className="item-extra">
                                        <div className="extra-info">
                                            <h5 className="text-20-medium color-text mb-5">
                                                Airport Assistance and Hostess Service{" "}
                                                <span className="price">$12</span>
                                            </h5>
                                            <p className="text-14 color-grey">
                                                A bouquet of seasonal flowers prepared by a local florist
                                            </p>
                                        </div>
                                        <div className="extra-quantity">
                                            {" "}
                                            <a className="btn btn-grey w-100" href="#">
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
                                    <div className="item-extra">
                                        <div className="extra-info">
                                            <h5 className="text-20-medium color-text mb-5">
                                                Bodyguard Service <span className="price">$12</span>
                                            </h5>
                                            <p className="text-14 color-grey">
                                                A bouquet of seasonal flowers prepared by a local florist
                                            </p>
                                        </div>
                                        <div className="extra-quantity">
                                            {" "}
                                            <a className="btn btn-grey w-100" href="#">
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
                                </div>
                                <div className="mt-45 wow fadeInUp">
                                    <div className="form-contact form-comment">
                                        <form action="#">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <label className="form-label" htmlFor="notes">
                                                            Notes for the chauffeur
                                                        </label>
                                                        <textarea
                                                            className="form-control"
                                                            id="notes"
                                                            rows={5}
                                                            defaultValue={
                                                                "There are many variations of passages of Lorem Ipsum available."
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="mt-30 mb-120 wow fadeInUp">
                                    {" "}
                                    <a
                                        className="btn btn-primary btn-primary-big w-100"
                                        href="booking-passenger.html"
                                    >
                                        Continue
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

export default Mybookingextra;
