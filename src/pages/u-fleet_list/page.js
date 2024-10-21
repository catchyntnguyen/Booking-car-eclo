import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Myfleet = () => {

    return (
        <main className="main">
            <div className="section pt-60 pb-60 bg-primary">
                <div className="container-sub">
                    <h1 className="heading-44-medium color-white mb-5">Our Fleet</h1>
                    <div className="box-breadcrumb">
                        <ul>
                            <li>
                                {" "}
                                <Link href="index.html">Home</Link>
                            </li>
                            <li>
                                {" "}
                                <Link href="fleet-list.html">Our Fleet</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <section className="section pt-60 bg-white latest-new-white">
                <div className="container-sub">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 col-sm-6 text-center text-sm-start mb-30">
                            <h2 className="heading-24-medium wow fadeInUp">
                                Choose Your Fleet
                            </h2>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 text-center text-sm-end mb-30 wow fadeInUp">
                            <div className="dropdown dropdown-menu-box">
                                <Link
                                    className="dropdown-toggle"
                                    id="dropdownMenuButton1"
                                    to="/our_fleet/detail"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Vehicle Type
                                </Link>
                                <ul
                                    className="dropdown-menu"
                                    aria-labelledby="dropdownMenuButton1"
                                >
                                    <li>
                                        <Link className="dropdown-item" to="/our_fleet/detail">
                                            Hatchback
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/our_fleet/detail">
                                            Sedan
                                        </Link>
                                    </li>
                                    <li>
                                        {" "}
                                        <Link className="dropdown-item" to="/our_fleet/detail">
                                            SUV
                                        </Link>
                                    </li>
                                    <li>
                                        {" "}
                                        <Link className="dropdown-item" to="/our_fleet/detail">
                                            Crossover
                                        </Link>
                                    </li>
                                    <li>
                                        {" "}
                                        <Link className="dropdown-item" to="/our_fleet/detail">
                                            Sports Car
                                        </Link>
                                    </li>
                                    <li>
                                        {" "}
                                        <Link className="dropdown-item" to="/our_fleet/detail">
                                            Minivan
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="dropdown dropdown-menu-box">
                                <Link
                                    className="dropdown-toggle"
                                    id="dropdownMenuButton2"
                                    to="/our_fleet/detail"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Vehicle Make
                                </Link>
                                <ul
                                    className="dropdown-menu"
                                    aria-labelledby="dropdownMenuButton2"
                                >
                                    <li>
                                        <Link className="dropdown-item" to="/our_fleet/detail">
                                            Mercedes-Benz
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/our_fleet/detail">
                                            Audi
                                        </Link>
                                    </li>
                                    <li>
                                        {" "}
                                        <Link className="dropdown-item" to="/our_fleet/detail">
                                            Hyundai
                                        </Link>
                                    </li>
                                    <li>
                                        {" "}
                                        <Link className="dropdown-item" to="/our_fleet/detail">
                                            Honda
                                        </Link>
                                    </li>
                                    <li>
                                        {" "}
                                        <Link className="dropdown-item" to="/our_fleet/detail">
                                            Nissan
                                        </Link>
                                    </li>
                                    <li>
                                        {" "}
                                        <Link className="dropdown-item" to="/our_fleet/detail">
                                            Toyota
                                        </Link>
                                    </li>
                                    <li>
                                        {" "}
                                        <Link className="dropdown-item" to="/our_fleet/detail">
                                            Volkswagen
                                        </Link>
                                    </li>
                                    <li>
                                        {" "}
                                        <Link className="dropdown-item" to="/our_fleet/detail">
                                            Subaru
                                        </Link>
                                    </li>
                                    <li>
                                        {" "}
                                        <Link className="dropdown-item" to="/our_fleet/detail">
                                            Lamborghini
                                        </Link>
                                    </li>
                                    <li>
                                        {" "}
                                        <Link className="dropdown-item" to="/our_fleet/detail">
                                            Lincoln
                                        </Link>
                                    </li>
                                    <li>
                                        {" "}
                                        <Link className="dropdown-item" to="/our_fleet/detail">
                                            Bentley
                                        </Link>
                                    </li>
                                    <li>
                                        {" "}
                                        <Link className="dropdown-item" to="/our_fleet/detail">
                                            Chevrolet
                                        </Link>
                                    </li>
                                    <li>
                                        {" "}
                                        <Link className="dropdown-item" to="/our_fleet/detail">
                                            Ford
                                        </Link>
                                    </li>
                                    <li>
                                        {" "}
                                        <Link className="dropdown-item" to="/our_fleet/detail">
                                            Volvo
                                        </Link>
                                    </li>
                                    <li>
                                        {" "}
                                        <Link className="dropdown-item" to="/our_fleet/detail">
                                            GMC
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-30 our-fleet-2">
                        <div className="col-lg-3 col-md-6 mb-30">
                            <div className="cardFleet cardFleetStyle3 wow fadeInUp">
                                <div className="cardImage mb-30">
                                    <Link to="/our_fleet/detail">
                                        <img
                                            src="assets/imgs/page/homepage1/e-class.png"
                                            alt="Luxride"
                                        />
                                    </Link>
                                </div>
                                <div className="cardInfo">
                                    <Link to="/our_fleet/detail">
                                        <h3 className="text-20-medium color-text mb-10">
                                            Business Class
                                        </h3>
                                    </Link>
                                    <p className="text-14 color-text mb-30">
                                        Mercedes-Benz E-Class, BMW 5 Series, Cadillac XTS or similar
                                    </p>
                                </div>
                                <div className="cardInfoBottom">
                                    <div className="passenger">
                                        <span className="icon-circle icon-passenger" />
                                        <span className="text-14">4</span>
                                    </div>
                                    <div className="luggage">
                                        <span className="icon-circle icon-luggage" />
                                        <span className="text-14">2</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-30">
                            <div className="cardFleet cardFleetStyle3 wow fadeInUp">
                                <div className="cardImage mb-30">
                                    <Link to="/our_fleet/detail">
                                        <img src="assets/imgs/page/homepage1/eqs.png" alt="Luxride" />
                                    </Link>
                                </div>
                                <div className="cardInfo">
                                    <Link to="/our_fleet/detail">
                                        <h3 className="text-20-medium color-text mb-10">
                                            First Class
                                        </h3>
                                    </Link>
                                    <p className="text-14 color-text mb-30">
                                        Mercedes-Benz EQS, BMW 7 Series, Audi A8 or similar
                                    </p>
                                </div>
                                <div className="cardInfoBottom">
                                    <div className="passenger">
                                        <span className="icon-circle icon-passenger" />
                                        <span className="text-14">4</span>
                                    </div>
                                    <div className="luggage">
                                        <span className="icon-circle icon-luggage" />
                                        <span className="text-14">2</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-30">
                            <div className="cardFleet cardFleetStyle3 wow fadeInUp">
                                <div className="cardImage mb-30">
                                    <Link to="/our_fleet/detail">
                                        <img src="assets/imgs/page/homepage1/suv.png" alt="Luxride" />
                                    </Link>
                                </div>
                                <div className="cardInfo">
                                    <Link to="/our_fleet/detail">
                                        <h3 className="text-20-medium color-text mb-10">
                                            Business Van/SUV
                                        </h3>
                                    </Link>
                                    <p className="text-14 color-text mb-30">
                                        Mercedes-Benz V-Class, Chevrolet Suburban, Cadillac
                                    </p>
                                </div>
                                <div className="cardInfoBottom">
                                    <div className="passenger">
                                        <span className="icon-circle icon-passenger" />
                                        <span className="text-14">4</span>
                                    </div>
                                    <div className="luggage">
                                        <span className="icon-circle icon-luggage" />
                                        <span className="text-14">2</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-30">
                            <div className="cardFleet cardFleetStyle3 wow fadeInUp">
                                <div className="cardImage mb-30">
                                    <Link to="/our_fleet/detail">
                                        <img
                                            src="assets/imgs/page/homepage1/suv-class.png"
                                            alt="Luxride"
                                        />
                                    </Link>
                                </div>
                                <div className="cardInfo">
                                    <Link to="/our_fleet/detail">
                                        <h3 className="text-20-medium color-text mb-10">SUV Class</h3>
                                    </Link>
                                    <p className="text-14 color-text mb-30">
                                        Mercedes-Benz V-Class, Chevrolet Suburban, Cadillac
                                    </p>
                                </div>
                                <div className="cardInfoBottom">
                                    <div className="passenger">
                                        <span className="icon-circle icon-passenger" />
                                        <span className="text-14">4</span>
                                    </div>
                                    <div className="luggage">
                                        <span className="icon-circle icon-luggage" />
                                        <span className="text-14">2</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-30">
                            <div className="cardFleet cardFleetStyle3 wow fadeInUp">
                                <div className="cardImage mb-30">
                                    <Link to="/our_fleet/detail">
                                        <img
                                            src="assets/imgs/page/homepage1/e-class.png"
                                            alt="Luxride"
                                        />
                                    </Link>
                                </div>
                                <div className="cardInfo">
                                    <Link to="/our_fleet/detail">
                                        <h3 className="text-20-medium color-text mb-10">
                                            Luxury Class
                                        </h3>
                                    </Link>
                                    <p className="text-14 color-text mb-30">
                                        Mercedes-Benz E-Class, BMW 5 Series, Cadillac XTS or similar
                                    </p>
                                </div>
                                <div className="cardInfoBottom">
                                    <div className="passenger">
                                        <span className="icon-circle icon-passenger" />
                                        <span className="text-14">4</span>
                                    </div>
                                    <div className="luggage">
                                        <span className="icon-circle icon-luggage" />
                                        <span className="text-14">2</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-30">
                            <div className="cardFleet cardFleetStyle3 wow fadeInUp">
                                <div className="cardImage mb-30">
                                    <Link to="/our_fleet/detail">
                                        <img
                                            src="assets/imgs/page/homepage1/v-class.png"
                                            alt="Luxride"
                                        />
                                    </Link>
                                </div>
                                <div className="cardInfo">
                                    <Link to="/our_fleet/detail">
                                        <h3 className="text-20-medium color-text mb-10">
                                            Electric Class
                                        </h3>
                                    </Link>
                                    <p className="text-14 color-text mb-30">
                                        Mercedes-Benz EQS, BMW 7 Series, Audi A8 or similar
                                    </p>
                                </div>
                                <div className="cardInfoBottom">
                                    <div className="passenger">
                                        <span className="icon-circle icon-passenger" />
                                        <span className="text-14">4</span>
                                    </div>
                                    <div className="luggage">
                                        <span className="icon-circle icon-luggage" />
                                        <span className="text-14">2</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-30">
                            <div className="cardFleet cardFleetStyle3 wow fadeInUp">
                                <div className="cardImage mb-30">
                                    <Link to="/our_fleet/detail">
                                        <img
                                            src="assets/imgs/page/homepage1/e-class.png"
                                            alt="Luxride"
                                        />
                                    </Link>
                                </div>
                                <div className="cardInfo">
                                    <Link to="/our_fleet/detail">
                                        <h3 className="text-20-medium color-text mb-10">
                                            Business Class
                                        </h3>
                                    </Link>
                                    <p className="text-14 color-text mb-30">
                                        Mercedes-Benz V-Class, Chevrolet Suburban, Cadillac
                                    </p>
                                </div>
                                <div className="cardInfoBottom">
                                    <div className="passenger">
                                        <span className="icon-circle icon-passenger" />
                                        <span className="text-14">4</span>
                                    </div>
                                    <div className="luggage">
                                        <span className="icon-circle icon-luggage" />
                                        <span className="text-14">2</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-30">
                            <div className="cardFleet cardFleetStyle3 wow fadeInUp">
                                <div className="cardImage mb-30">
                                    <Link to="/our_fleet/detail">
                                        <img src="assets/imgs/page/homepage1/eqs.png" alt="Luxride" />
                                    </Link>
                                </div>
                                <div className="cardInfo">
                                    <Link to="/our_fleet/detail">
                                        <h3 className="text-20-medium color-text mb-10">
                                            First Class
                                        </h3>
                                    </Link>
                                    <p className="text-14 color-text mb-30">
                                        Mercedes-Benz V-Class, Chevrolet Suburban, Cadillac
                                    </p>
                                </div>
                                <div className="cardInfoBottom">
                                    <div className="passenger">
                                        <span className="icon-circle icon-passenger" />
                                        <span className="text-14">4</span>
                                    </div>
                                    <div className="luggage">
                                        <span className="icon-circle icon-luggage" />
                                        <span className="text-14">2</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-40 mb-120 wow fadeInUp">
                        <nav className="box-pagination">
                            <ul className="pagination">
                                <li className="page-item">
                                    <Link className="page-link page-prev" to="/our_fleet/detail">
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
                                    </Link>
                                </li>
                                <li className="page-item">
                                    <Link className="page-link" to="/our_fleet/detail">
                                        1
                                    </Link>
                                </li>
                                <li className="page-item">
                                    <Link className="page-link active" to="/our_fleet/detail">
                                        2
                                    </Link>
                                </li>
                                <li className="page-item">
                                    <Link className="page-link" to="/our_fleet/detail">
                                        3
                                    </Link>
                                </li>
                                <li className="page-item">
                                    <Link className="page-link" to="/our_fleet/detail">
                                        ...
                                    </Link>
                                </li>
                                <li className="page-item">
                                    <Link className="page-link" to="/our_fleet/detail">
                                        10
                                    </Link>
                                </li>
                                <li className="page-item">
                                    <Link className="page-link page-next" to="/our_fleet/detail">
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
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Myfleet;
