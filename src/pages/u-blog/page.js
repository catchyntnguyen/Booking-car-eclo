import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Myblog = () => {

    return (
        <main className="main">
            <div className="section pt-60 pb-60 bg-primary">
                <div className="container-sub">
                    <h1 className="heading-44-medium color-white mb-5">Blog</h1>
                    <div className="box-breadcrumb">
                        <ul>
                            <li>
                                <Link to="index.html">Home</Link>
                            </li>
                            <li>
                                <Link to="blog-grid.html">Blog</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <section className="section pt-60 bg-white latest-new-white">
                <div className="container-sub">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="row cardNewsList">
                                <div className="col-lg-12">
                                    <div className="cardNews wow fadeInUp">
                                        <Link to="/blog/1">
                                            <div className="cardImage">
                                                <div className="datePost">
                                                    <div className="heading-52-medium color-white">14.</div>
                                                    <p className="text-14 color-white">Jun, 2022</p>
                                                </div>
                                                <img
                                                    src="assets/imgs/page/blog2/news1.png"
                                                    alt="luxride"
                                                />
                                            </div>
                                        </Link>
                                        <div className="cardInfo">
                                            <div className="tags mb-10">
                                                <Link to="/blog/1">Travel</Link>
                                            </div>
                                            <Link className="color-white" to="/blog/1">
                                                <h3 className="text-20-medium color-white mb-20">
                                                    3 hidden-gem destinations for your wish list
                                                </h3>
                                            </Link>
                                            <p className="text-16 color-text mb-15">
                                                Have you spent the last few years wistfully daydreaming of
                                                places to visit?
                                            </p>
                                            <Link
                                                className="cardLink btn btn-arrow-up"
                                                to="/blog/1"
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
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="cardNews wow fadeInUp">
                                        <Link to="/blog/1">
                                            <div className="cardImage">
                                                <div className="datePost">
                                                    <div className="heading-52-medium color-white">18.</div>
                                                    <p className="text-14 color-white">Jun, 2022</p>
                                                </div>
                                                <img
                                                    src="assets/imgs/page/blog2/news2.png"
                                                    alt="luxride"
                                                />
                                            </div>
                                        </Link>
                                        <div className="cardInfo">
                                            <div className="tags mb-10">
                                                <Link to="/blog/1">Culture</Link>
                                            </div>
                                            <Link className="color-white" to="/blog/1">
                                                <h3 className="text-20-medium color-white mb-20">
                                                    Explore the big things happening in Dallas
                                                </h3>
                                            </Link>
                                            <p className="text-16 color-text mb-15">
                                                Have you spent the last few years wistfully daydreaming of
                                                places to visit?
                                            </p>
                                            <Link
                                                className="cardLink btn btn-arrow-up"
                                                to="/blog/1"
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
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="cardNews wow fadeInUp">
                                        <Link to="/blog/1">
                                            <div className="cardImage">
                                                <div className="datePost">
                                                    <div className="heading-52-medium color-white">20.</div>
                                                    <p className="text-14 color-white">Jun, 2022</p>
                                                </div>
                                                <img
                                                    src="assets/imgs/page/blog2/news3.png"
                                                    alt="luxride"
                                                />
                                            </div>
                                        </Link>
                                        <div className="cardInfo">
                                            <div className="tags mb-10">
                                                <Link to="/blog/1">News</Link>
                                            </div>
                                            <Link className="color-white" to="/blog/1">
                                                <h3 className="text-20-medium color-white mb-20">
                                                    LA’s worst traffic areas and how to avoid them
                                                </h3>
                                            </Link>
                                            <p className="text-16 color-text mb-15">
                                                Have you spent the last few years wistfully daydreaming of
                                                places to visit?
                                            </p>
                                            <Link
                                                className="cardLink btn btn-arrow-up"
                                                to="/blog/1"
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
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="cardNews wow fadeInUp">
                                        <Link to="/blog/1">
                                            <div className="cardImage">
                                                <div className="datePost">
                                                    <div className="heading-52-medium color-white">14.</div>
                                                    <p className="text-14 color-white">Jun, 2022</p>
                                                </div>
                                                <img
                                                    src="assets/imgs/page/blog2/news4.png"
                                                    alt="luxride"
                                                />
                                            </div>
                                        </Link>
                                        <div className="cardInfo">
                                            <div className="tags mb-10">
                                                <Link to="/blog/1">Travel</Link>
                                            </div>
                                            <Link className="color-white" to="/blog/1">
                                                <h3 className="text-20-medium color-white mb-20">
                                                    How to avoid the impact of rising gas prices around the
                                                    globe
                                                </h3>
                                            </Link>
                                            <p className="text-16 color-text mb-15">
                                                Have you spent the last few years wistfully daydreaming of
                                                places to visit?
                                            </p>
                                            <Link
                                                className="cardLink btn btn-arrow-up"
                                                to="/blog/1"
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
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-40 mb-120">
                                <nav className="box-pagination">
                                    <ul className="pagination">
                                        <li className="page-item">
                                            <Link className="page-link page-prev" to="/blog/1">
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
                                            <Link className="page-link" to="/blog/1">
                                                1
                                            </Link>
                                        </li>
                                        <li className="page-item">
                                            <Link className="page-link active" to="/blog/1">
                                                2
                                            </Link>
                                        </li>
                                        <li className="page-item">
                                            <Link className="page-link" to="/blog/1">
                                                3
                                            </Link>
                                        </li>
                                        <li className="page-item">
                                            <Link className="page-link" to="/blog/1">
                                                ...
                                            </Link>
                                        </li>
                                        <li className="page-item">
                                            <Link className="page-link" to="/blog/1">
                                                10
                                            </Link>
                                        </li>
                                        <li className="page-item">
                                            <Link className="page-link page-next" to="/blog/1">
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
                        <div className="col-lg-4 wow fadeInUp">
                            <div className="box-form-search">
                                <form action="#">
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Search"
                                    />
                                    <button className="btn btn-search-2" type="submit">
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
                                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                            />
                                        </svg>
                                    </button>
                                </form>
                            </div>
                            <div className="sidebar-radius">
                                <h5 className="text-20-medium sidebar-title">Categories</h5>
                                <div className="sidebar-content">
                                    <ul>
                                        <li>
                                            <Link to="/blog/1">Travel</Link>
                                        </li>
                                        <li>
                                            <Link to="/blog/1">Culture</Link>
                                        </li>
                                        <li>
                                            <Link to="/blog/1">News</Link>
                                        </li>
                                        <li>
                                            <Link to="/blog/1">Ride</Link>
                                        </li>
                                        <li>
                                            <Link to="/blog/1">Limousine</Link>
                                        </li>
                                        <li>
                                            <Link to="/blog/1">Car Rent</Link>
                                        </li>
                                        <li>
                                            <Link to="/blog/1">Chauffeur</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="sidebar-radius">
                                <h5 className="text-20-medium sidebar-title">Recent Posts</h5>
                                <div className="sidebar-content">
                                    <ul>
                                        <li>
                                            <div className="recent-post">
                                                <div className="image-post">
                                                    <Link to="/blog/1">
                                                        <img src="assets/imgs/page/blog2/post1.png" alt="" />
                                                    </Link>
                                                </div>
                                                <div className="info-post">
                                                    <div className="date-post">February 11, 2023</div>
                                                    <Link className="link-post" to="/blog/1">
                                                        3 hidden-gem destinations for your wish list
                                                    </Link>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="recent-post">
                                                <div className="image-post">
                                                    <Link to="/blog/1">
                                                        <img src="assets/imgs/page/blog2/post2.png" alt="" />
                                                    </Link>
                                                </div>
                                                <div className="info-post">
                                                    <div className="date-post">February 11, 2023</div>
                                                    <Link className="link-post" to="/blog/1">
                                                        3 hidden-gem destinations for your wish list
                                                    </Link>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="recent-post">
                                                <div className="image-post">
                                                    <Link to="/blog/1">
                                                        <img src="assets/imgs/page/blog2/post3.png" alt="" />
                                                    </Link>
                                                </div>
                                                <div className="info-post">
                                                    <div className="date-post">February 11, 2023</div>
                                                    <Link className="link-post" to="/blog/1">
                                                        3 hidden-gem destinations for your wish list
                                                    </Link>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="sidebar-radius">
                                <h5 className="text-20-medium sidebar-title">Tags</h5>
                                <div className="sidebar-content">
                                    <Link className="btn btn-tag mb-10 mr-10" to="/blog/1">
                                        Chauffeur
                                    </Link>
                                    <Link className="btn btn-tag mb-10 mr-10" to="/blog/1">
                                        Car
                                    </Link>
                                    <Link className="btn btn-tag mb-10 mr-10" to="/blog/1">
                                        Rent
                                    </Link>
                                    <Link className="btn btn-tag mb-10 mr-10" to="/blog/1">
                                        Limousine
                                    </Link>
                                    <Link className="btn btn-tag mb-10" to="/blog/1">
                                        Travel
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Myblog;
