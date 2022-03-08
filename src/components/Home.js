import React from "react";
import sport11 from "../assets/images/ufclog.jpeg";
import sport2 from "../assets/images/bikelo.jpeg";
import sport6 from "../assets/images/foot2.jpeg";
import bigHero from "../assets/images/bighero33.png";

const Home = () => {
  return (
    <div className="hero d-flex w-100 flex-column h-100">
      <div className="card bg-image h-100 w-100 text-white border-0 shadow-2-strong">
        <img src={bigHero} alt={"Hero home page"} />

        
          <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
              <h5 className="card-title display-1 fw-bolder mb-1">
                New Arrivals
              </h5>
              <p className="card-text lead fs-2">
                FREE DELIVERY
                <span className="d-none d-sm-inline">
                &nbsp;| FIND OUT MORE
                </span>
              </p>
            </div>
          </div>
       
      </div>

      <div className="home-features">
        <div className="mx-auto px-0 py-5" id="custom-cards">
          <div className="container-xl">
            <h2 className="mt-5 pb-2 display-5 border-bottom text-center">
              Featured
            </h2>

            <div className="row row-cols-1 row-cols-lg-3 align-items-stretch px-0 mb-5">
              <div className="col-12 sm-6 col-md-4">
                <div className="card w-100 card-cover h-60 mt-5 overflow-hidden text-white bg-dark rounded-5 shadow-lg">
                  <img className="bb-1" src={sport11} alt={"sport 11"} />
                  <div className="d-flex flex-column h-50 p-5 pb-3 text-white text-shadow-1">
                    <h2 className="pt-0 mt-0 mb-4 lh-3 fw-bold">
                      Londale
                      <br />
                      Boxing Gear
                    </h2>

                    <ul className="d-flex list-unstyled mt-auto">
                      <li className="me-auto">
                        <img
                          src={sport11}
                          alt="Bootstrap"
                          width="32"
                          height="32"
                          className="rounded-circle border border-white"
                        />
                      </li>
                      <li className="d-flex align-items-center me-3">
                        <small>Barcelona</small>
                      </li>
                      <li className="d-flex align-items-center">
                        <small>3d</small>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-12 sm-6 col-md-4">
                <div className="card card-cover h-60 mt-5 overflow-hidden text-white bg-dark rounded-5 shadow-lg">
                  <img src={sport6} alt={"sport 6"} />
                  <div className="d-flex flex-column h-50 p-5 pb-3 text-white text-shadow-1">
                    <h2 className="pt-0 mt-0 mb-4 lh-3 fw-bold">
                      Football
                      <br />
                      Nike League
                    </h2>
                    <ul className="d-flex list-unstyled mt-auto">
                      <li className="me-auto">
                        <img
                          src={sport6}
                          alt="Bootstrap"
                          width="32"
                          height="32"
                          className="rounded-circle border border-white"
                        />
                      </li>
                      <li className="d-flex align-items-center me-3">
                        <small>London</small>
                      </li>
                      <li className="d-flex align-items-center">
                        <small>4d</small>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-12 sm-6 col-md-4">
                <div className="card card-cover h-60 mt-5 overflow-hidden text-white bg-dark rounded-5 shadow-lg">
                  <img src={sport2} alt={"sport 3"} />
                  <div className="d-flex flex-column h-50 p-5 pb-3 text-shadow-1">
                    <h2 className="pt-0 mt-0 mb-4 lh-3 fw-bold">
                      Marin
                      <br /> Super Six Evo
                    </h2>

                    <ul className="d-flex list-unstyled mt-auto">
                      <li className="me-auto">
                        <img
                          src={sport2}
                          alt="Bootstrap"
                          width="32"
                          height="32"
                          className="rounded-circle border border-white"
                        />
                      </li>
                      <li className="d-flex align-items-center me-3">
                        <small>Paris</small>
                      </li>
                      <li className="d-flex align-items-center">
                        <small>5d</small>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
