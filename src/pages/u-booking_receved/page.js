import React, { useEffect, useState } from 'react';

const Mybookingreceved = () => {

    return (
        <main className="main">
            <section className="section">
                <div className="container-sub">
                    <div className="box-completed-booking">
                        <div className="text-center wow fadeInUp">
                            {" "}
                            <img
                                className="mb-20"
                                src="assets/imgs/page/booking/completed.png"
                                alt="luxride"
                            />
                            <h4 className="heading-24-medium color-text mb-10">
                                System, your order was submitted successfully!
                            </h4>
                            <p className="text-14 color-grey mb-40">
                                Booking details has been sent to: booking@luxride.com
                            </p>
                        </div>
                        <div className="box-info-book-border wow fadeInUp">
                            <div className="info-1">
                                {" "}
                                <span className="color-text text-14">Order Number</span>
                                <br />
                                <span className="color-text text-14-medium">#4039</span>
                            </div>
                            <div className="info-1">
                                {" "}
                                <span className="color-text text-14">Date</span>
                                <br />
                                <span className="color-text text-14-medium">
                                    Thu, Oct 06, 2022
                                </span>
                            </div>
                            <div className="info-1">
                                {" "}
                                <span className="color-text text-14">Total</span>
                                <br />
                                <span className="color-text text-14-medium">$40.10</span>
                            </div>
                            <div className="info-1">
                                {" "}
                                <span className="color-text text-14">Payment Method</span>
                                <br />
                                <span className="color-text text-14-medium">
                                    Direct Bank Transfer
                                </span>
                            </div>
                        </div>
                        <div className="box-booking-border wow fadeInUp">
                            <h6 className="heading-20-medium color-text">
                                Reservation Information
                            </h6>
                            <ul className="list-prices">
                                <li>
                                    {" "}
                                    <span className="text-top">Pick Up Address</span>
                                    <span className="text-bottom">London City Airport (LCY)</span>
                                </li>
                                <li>
                                    {" "}
                                    <span className="text-top">Drop Off Address</span>
                                    <span className="text-bottom">London City Airport (LCY)</span>
                                </li>
                                <li>
                                    {" "}
                                    <span className="text-top">Pick Up Date</span>
                                    <span className="text-bottom">Thu, Oct 06, 2022</span>
                                </li>
                                <li>
                                    {" "}
                                    <span className="text-top">Pick Up Time</span>
                                    <span className="text-bottom">6 PM : 15</span>
                                </li>
                                <li>
                                    {" "}
                                    <span className="text-top">Distance</span>
                                    <span className="text-bottom">311 km/ 194 miles</span>
                                </li>
                                <li>
                                    {" "}
                                    <span className="text-top">Time</span>
                                    <span className="text-bottom">3h 43m</span>
                                </li>
                            </ul>
                        </div>
                        <div className="box-booking-border wow fadeInUp">
                            <h6 className="heading-20-medium color-text">Selected Car</h6>
                            <div className="mt-20 mb-20 text-center">
                                {" "}
                                <img src="assets/imgs/page/homepage1/e-class.png" alt="luxride" />
                            </div>
                            <ul className="list-prices">
                                <li>
                                    {" "}
                                    <span className="text-top">Class</span>
                                    <span className="text-bottom">Business Class</span>
                                </li>
                                <li>
                                    {" "}
                                    <span className="text-top">Cars</span>
                                    <span className="text-bottom">Mercedes-Benz E-Class</span>
                                </li>
                            </ul>
                        </div>
                        <div className="box-booking-border wow fadeInUp">
                            <h6 className="heading-20-medium color-text">
                                Passenger Information
                            </h6>
                            <ul className="list-prices">
                                <li>
                                    {" "}
                                    <span className="text-top">First name</span>
                                    <span className="text-bottom">Ali</span>
                                </li>
                                <li>
                                    {" "}
                                    <span className="text-top">Last name</span>
                                    <span className="text-bottom">Tufan</span>
                                </li>
                                <li>
                                    {" "}
                                    <span className="text-top">Email</span>
                                    <span className="text-bottom">creativelayers088@gmail.com</span>
                                </li>
                                <li>
                                    {" "}
                                    <span className="text-top">Phone</span>
                                    <span className="text-bottom">+09 383 829 91</span>
                                </li>
                                <li>
                                    {" "}
                                    <span className="text-top">Address line 1</span>
                                    <span className="text-bottom"> </span>
                                </li>
                                <li>
                                    {" "}
                                    <span className="text-top">Address line 2</span>
                                    <span className="text-bottom"> </span>
                                </li>
                                <li>
                                    {" "}
                                    <span className="text-top">City</span>
                                    <span className="text-bottom">London</span>
                                </li>
                                <li>
                                    {" "}
                                    <span className="text-top">State/Province/Region</span>
                                    <span className="text-bottom"> </span>
                                </li>
                                <li>
                                    {" "}
                                    <span className="text-top">ZIP code/Postal code</span>
                                    <span className="text-bottom">95833</span>
                                </li>
                                <li>
                                    {" "}
                                    <span className="text-top">Country</span>
                                    <span className="text-bottom">UK</span>
                                </li>
                                <li>
                                    {" "}
                                    <span className="text-top">Special Requirements</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Mybookingreceved;
