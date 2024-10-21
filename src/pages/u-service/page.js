import React, { useEffect, useState } from 'react';


const Myservice = () => {

    return (
        <main className="main">
            <div className="section pt-60 pb-60 bg-primary">
                <div className="container-sub">
                    <h1 className="heading-44-medium color-white mb-5">Services</h1>
                    <div className="box-breadcrumb">
                        <ul>
                            <li>
                                {" "}
                                <a href="index.html">Home</a>
                            </li>
                            <li>
                                {" "}
                                <a href="service-grid.html">Services</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <section className="section pt-60">
                <div className="container-sub">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6 mb-30">
                            <div className="cardService wow fadeInUp">
                                <div className="cardInfo">
                                    <h3 className="cardTitle text-20-medium color-white mb-10">
                                        Business Class
                                    </h3>
                                    <div className="box-inner-info">
                                        <p className="cardDesc text-14 color-white mb-30">
                                            Mercedes-Benz E-Class, BMW 5 Series, Cadillac XTS or similar
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
                        <div className="col-lg-4 col-sm-6 mb-30">
                            <div className="cardService wow fadeInUp">
                                <div className="cardInfo">
                                    <h3 className="cardTitle text-20-medium color-white mb-10">
                                        Chauffeur Hailing
                                    </h3>
                                    <div className="box-inner-info">
                                        <p className="cardDesc text-14 color-white mb-30">
                                            Mercedes-Benz E-Class, BMW 5 Series, Cadillac XTS or similar
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
                        <div className="col-lg-4 col-sm-6 mb-30">
                            <div className="cardService wow fadeInUp">
                                <div className="cardInfo">
                                    <h3 className="cardTitle text-20-medium color-white mb-10">
                                        Airport Transfers
                                    </h3>
                                    <div className="box-inner-info">
                                        <p className="cardDesc text-14 color-white mb-30">
                                            Mercedes-Benz E-Class, BMW 5 Series, Cadillac XTS or similar
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
                        <div className="col-lg-4 col-sm-6 mb-30">
                            <div className="cardService wow fadeInUp">
                                <div className="cardInfo">
                                    <h3 className="cardTitle text-20-medium color-white mb-10">
                                        Sprinter Class
                                    </h3>
                                    <div className="box-inner-info">
                                        <p className="cardDesc text-14 color-white mb-30">
                                            Mercedes-Benz E-Class, BMW 5 Series, Cadillac XTS or similar
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
                        <div className="col-lg-4 col-sm-6 mb-30">
                            <div className="cardService wow fadeInUp">
                                <div className="cardInfo">
                                    <h3 className="cardTitle text-20-medium color-white mb-10">
                                        Wedding Class
                                    </h3>
                                    <div className="box-inner-info">
                                        <p className="cardDesc text-14 color-white mb-30">
                                            Mercedes-Benz E-Class, BMW 5 Series, Cadillac XTS or similar
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
                                        src="assets/imgs/page/services/wedding.png"
                                        alt="Luxride"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mb-30">
                            <div className="cardService wow fadeInUp">
                                <div className="cardInfo">
                                    <h3 className="cardTitle text-20-medium color-white mb-10">
                                        Travel Transfer
                                    </h3>
                                    <div className="box-inner-info">
                                        <p className="cardDesc text-14 color-white mb-30">
                                            Mercedes-Benz E-Class, BMW 5 Series, Cadillac XTS or similar
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
                                    <img src="assets/imgs/page/services/travel.png" alt="Luxride" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-40 mb-120 wow fadeInUp">
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
            </section>
        </main>
    );
}

export default Myservice;
