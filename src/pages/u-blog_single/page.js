import React, { useEffect, useState } from 'react';


const Myblogdetail = () => {

  return (
    <main className="main">
      <div className="section pt-60 pb-60 bg-primary">
        <div className="container-sub">
          <h1 className="heading-44-medium color-white mb-5">Blog Single</h1>
          <div className="box-breadcrumb">
            <ul>
              <li>
                {" "}
                <a href="index.html">Home</a>
              </li>
              <li>
                {" "}
                <a href="blog-single.html">Blog Single</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <section className="section pt-60 bg-white latest-new-white">
        <div className="container-sub">
          <div className="box-frature-image mb-60 wow fadeInUp">
            <div className="cardImage">
              <div className="datePost">
                <div className="heading-52-medium color-white">14.</div>
                <p className="text-14 color-white">Jun, 2022</p>
              </div>
              <img src="/assets/imgs/page/blog2/img-single.png" alt="luxride" />
            </div>
          </div>
          <h2 className="heading-44-medium mb-30 wow fadeInUp">
            6 of the best sustainable travel companies
          </h2>
          <div className="content-single wow fadeInUp">
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
              et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
              sadipscing elitr, sed diam nonumy. Eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
              accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
              no sea takimata sanctus est Lorem ipsum dolor sit amet.{" "}
            </p>
            <blockquote>
              “Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida.
              Diam phasellus <br className="d-nond d-lg-block" />
              vestibulum lorem sed risus ultricies. Magna sit amet purus gravida
              quis blandit. Arcu <br className="d-nond d-lg-block" />
              cursus vitae congue mauris.“
            </blockquote>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
              et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
              sadipscing elitr, sed diam nonumy. Eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
              accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
              no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
              dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
              tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.{" "}
            </p>
            <p>
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy. Eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
              justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
              takimata sanctus est Lorem ipsum dolor sit amet.{" "}
            </p>
            <p>
              {" "}
              <img src="/assets/imgs/page/blog2/img-single2.png" alt="luxride" />
            </p>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
              et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
              sadipscing elitr, sed diam nonumy. Eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
              accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
              no sea takimata sanctus est Lorem ipsum dolor sit amet.{" "}
            </p>
            <div className="row">
              <div className="col-lg-6 mb-30">
                {" "}
                <img src="/assets/imgs/page/blog2/img-single3.png" alt="luxride" />
              </div>
              <div className="col-lg-6 mb-30">
                <img src="/assets/imgs/page/blog2/img-single4.png" alt="luxride" />
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
              et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
              sadipscing elitr, sed diam nonumy. Eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
              accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
              no sea takimata sanctus est Lorem ipsum dolor sit amet.{" "}
            </p>
            <h2 className="heading-44-medium">Natural Habitat Adventures</h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
              et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
              sadipscing elitr, sed diam nonumy. Eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
              accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
              no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
              dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
              tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.{" "}
            </p>
            <p>
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy. Eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
              justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
              takimata sanctus est Lorem ipsum dolor sit amet.{" "}
            </p>
          </div>
          <div className="box-share-tags mt-50 wow fadeInUp">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-30 text-lg-start text-center">
                {" "}
                <span className="text-16-medium color-text mr-15">Share</span>
                <div className="d-inline-block social-single">
                  <a className="icon-socials icon-facebook" href="#" />
                  <a className="icon-socials icon-twitter" href="#" />
                  <a className="icon-socials icon-instagram" href="#" />
                  <a className="icon-socials icon-linkedin" href="#" />
                </div>
              </div>
              <div className="col-lg-6 text-lg-end mb-30 text-center">
                {" "}
                <a className="btn btn-tag mr-10 mb-10" href="#">
                  Chauffeur
                </a>
                <a className="btn btn-tag mr-10 mb-10" href="#">
                  Car
                </a>
                <a className="btn btn-tag mr-10 mb-10" href="#">
                  Rent
                </a>
                <a className="btn btn-tag mb-10" href="#">
                  Limousine
                </a>
              </div>
            </div>
          </div>
          <div className="border-bottom mb-30 mt-60" />
          <div className="author-box wow fadeInUp">
            <div className="item-author">
              <div className="item-author-image">
                {" "}
                <img src="/assets/imgs/page/blog2/author.png" alt="luxride" />
              </div>
              <div className="item-author-info">
                <h6 className="text-18-medium">Esther Howard</h6>
                <p className="text-14 color-grey">Marketing Coordinator</p>
                <p className="text-16 color-text">
                  Etiam vitae leo et diam pellentesque porta. Sed eleifend
                  ultricies risus, vel rutrum erat commodo ut. Praesent finibus
                  congue euismod. Nullam scelerisque massa vel augue placerat, a
                  tempor sem egestas. Curabitur placerat finibus lacus.
                </p>
              </div>
            </div>
          </div>
          <div className="border-bottom mb-30 mt-60" />
          <div className="box-pagination-single wow fadeInUp">
            <div className="row align-items-center">
              <div className="col-lg-5 col-sm-5 col-5">
                <div className="box-pager-inner">
                  {" "}
                  <a className="prev-page text-18-medium" href="#">
                    Prev
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
                  <p className="pl-40 text-16 color-text d-none d-sm-block">
                    The most efficient airlines and airports globally
                  </p>
                </div>
              </div>
              <div className="col-lg-2 text-center col-sm-2 col-2">
                <a href="#">
                  <img src="/assets/imgs/page/blog2/grid.png" alt="luxride" />
                </a>
              </div>
              <div className="col-lg-5 col-sm-5 col-5">
                <div className="box-pager-inner text-end">
                  {" "}
                  <a className="next-page text-18-medium" href="#">
                    Next
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
                  <p className="pr-40 text-16 color-text d-none d-sm-block">
                    The most efficient airlines and airports globally
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-bottom mb-50 mt-25" />
          <div className="box-reviews wow fadeInUp">
            <h5 className="text-20-medium color-text mb-30">Reviews</h5>
            <div className="item-reviews">
              <div className="item-author-info">
                <div className="item-avatar">A.T</div>
                <div className="item-info">
                  <h6 className="text-16-medium">Bessie Cooper</h6>
                  <p className="text-14 color-grey">March 2022</p>
                </div>
              </div>
              <div className="item-desc">
                <p className="color-text text-16">
                  Nice two level apartment in great London location. Located in
                  quiet small street, but just 50 meters from main street and bus
                  stop. Tube station is short walk, just like two grocery stores.{" "}
                </p>
              </div>
              <div className="buttons-like">
                {" "}
                <a className="btn btn-like mr-30" href="#">
                  Helpful
                </a>
                <a className="btn btn-dislike" href="#">
                  Not helpful
                </a>
              </div>
            </div>
            <div className="item-reviews">
              <div className="item-author-info">
                <div className="item-avatar">A.T</div>
                <div className="item-info">
                  <h6 className="text-16-medium">Wade Warren</h6>
                  <p className="text-14 color-grey">March 2022</p>
                </div>
              </div>
              <div className="item-desc">
                <p className="color-text text-16">
                  Nice two level apartment in great London location. Located in
                  quiet small street, but just 50 meters from main street and bus
                  stop. Tube station is short walk, just like two grocery stores.{" "}
                </p>
              </div>
              <div className="buttons-like">
                {" "}
                <a className="btn btn-like mr-30" href="#">
                  Helpful
                </a>
                <a className="btn btn-dislike" href="#">
                  Not helpful
                </a>
              </div>
            </div>
          </div>
          <div className="border-bottom mb-50 mt-60" />
          <div className="box-form-comment wow fadeInUp">
            <h5 className="text-20-medium mb-30">Leave a Comment</h5>
            <p className="text-14 color-text mb-30">
              Your email address will not be published.
            </p>
            <div className="form-comment">
              <form action="#">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="form-label" htmlFor="fullname">
                        Your Name
                      </label>
                      <input
                        className="form-control"
                        id="fullname"
                        type="text"
                        defaultValue="Test"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="form-label" htmlFor="email">
                        Email
                      </label>
                      <input
                        className="form-control"
                        id="email"
                        type="text"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label className="form-label" htmlFor="comment">
                        Write Your Comment
                      </label>
                      <textarea
                        className="form-control"
                        id="comment"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <button className="btn btn-primary" type="submit">
                      Post Review
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
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="section pt-120 bg-white latest-new-white mb-90">
        <div className="container-sub">
          <h2 className="heading-44-medium color-text mb-60 wow fadeInUp">
            Related Posts
          </h2>
          <div className="row">
            <div className="col-lg-4">
              <div className="cardNews wow fadeInUp">
                <a href="blog-single.html">
                  <div className="cardImage">
                    <div className="datePost">
                      <div className="heading-52-medium color-white">14.</div>
                      <p className="text-14 color-white">Jun, 2022</p>
                    </div>
                    <img
                      src="/assets/imgs/page/homepage1/news1.png"
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
                      src="/assets/imgs/page/homepage1/news2.png"
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
                      src="/assets/imgs/page/homepage1/news3.png"
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
    </main>
  );
}

export default Myblogdetail;
