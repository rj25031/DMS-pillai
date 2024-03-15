import React from "react";
import Layout from "../components/Layout.js";
import "../css/home.css";
function HomePage() {
  return (
    <Layout>
      <div class="slider containr-fluid">
        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-bs-ride="false"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="assets/images/slider/slide-01"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none pb-5 mb-5 d-md-block">
                <h5 class="text-black fw-bold fs-1 bounceInDown">
                  {" "}
                  KEDARNATH, JUNE 2013 <span class="edu-re">FLOOD</span>
                </h5>
                <p class=" bounceInLeft mb-4">
                  The Kedarnath flood, occurring in June 2013, was triggered by
                  heavy rainfall and subsequent cloudbursts in the Uttarakhand
                  region of India. The deluge led to flash floods and
                  landslides, devastating the town of Kedarnath and surrounding
                  areas. Thousands lost their lives, with extensive damage to
                  infrastructure and pilgrimage sites. The disaster highlighted
                  the vulnerability of Himalayan regions to extreme weather
                  events and underscored the importance of robust disaster
                  preparedness and mitigation strategies. <br />
                  JUNE 2013
                </p>
                <div class="row text-center mt-3 vbh">
                  {/* <!-- <div class="btn mx-auto w-auto  px-5 py-3 btn-primary fs-5  bounceInUp"> Donate Now </div> --> */}
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="assets/images/slider/slide-02"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none pb-5 mb-5 d-md-block">
                <h5 class="text-white fw-bold fs-1 bounceInDown">
                  Kerala Aug 2018
                </h5>
                <p class=" bounceInLeft mb-4">
                  The Kerala flood of August 2018 was a catastrophic event
                  triggered by heavy monsoon rains, leading to widespread
                  flooding and landslides across the state of Kerala, India. The
                  deluge caused immense devastation, claiming hundreds of lives
                  and displacing millions of residents from their homes. The
                  disaster prompted massive rescue and relief efforts,
                  highlighting the importance of preparedness and infrastructure
                  resilience in mitigating the impacts of natural disasters in
                  vulnerable regions. <br />
                  Kerala Aug 2018{" "}
                </p>
                <div class="row text-center mt-3 vbh">
                  {/* <!-- <div class="btn mx-auto w-auto  px-5 py-3 btn-primary fs-5  bounceInUp"> Donate Now </div> --> */}
                </div>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div class="what-we-do big-padding container-fluid">
        <div class="container">
          <div class="section-title row">
            <h2>What we do?</h2>
            <p>
              A PLATFORM WHICH HELPS IN DISASTER MANAGEMENT OF THE PLACES
              AFFECTED BY THE DISASTER. IT IS A SOURCE AVAILABLE FOR NGO’S AS
              WELL AS INDIVIDUALS.
            </p>
          </div>
          <div class="row mt-4 whd">
            <div class="col-md-4 text-center mb-5">
              {/* <i class="bi text-primary fs-1 bi-egg-fried"></i> */}

              <h4 class="fs-6 fw-bold mt-3">Provide Voleenters </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
                consectetur adipiscing elit. Sed ac accumsan hic deserunt facere
                et animi
              </p>
            </div>
            <div class="col-md-4 text-center mb-5">
              {/* <i class="bi fs-1 text-primary bi-house-door"></i> */}
              <h4 class="fs-6 fw-bold mt-3">Review Disasters</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
                consectetur adipiscing elit. Sed ac accumsan hic deserunt facere
                et animi
              </p>
            </div>
            <div class="col-md-4 text-center mb-5">
              {/* <i class="bi fs-1 text-primary bi-book-half"></i> */}
              <h4 class="fs-6 fw-bold mt-3">
                Provides Exact location of disaster
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
                consectetur adipiscing elit. Sed ac accumsan hic deserunt facere
                et animi
              </p>
            </div>
            <div class="col-md-4 text-center mb-5">
              {/* <i class="bi fs-1 text-primary bi-currency-dollar"></i> */}
              <h4 class="fs-6 fw-bold mt-3">We Provide Collaboration with NGOS and research sharing </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, consectetur adipiscing
                elit. Sed ac accumsan adipisicing elit. Nulla hic deserunt
                facere et animi
              </p>
            </div>
            <div class="col-md-4 text-center mb-5">
              {/* <i class="bi fs-1 text-primary bi-building"></i> */}
              <h4 class="fs-6 fw-bold mt-3">Quick source of information</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
                consectetur adipiscing elit. Sed ac accumsan hic deserunt facere
                et animi
              </p>
            </div>
            <div class="col-md-4 text-center mb-5">
              {/* <i class="bi fs-1 text-primary bi-heart-pulse"></i> */}
              <h4 class="fs-6 fw-bold mt-3">Information of past disaster</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, consectetur adipiscing
                elit. Sed ac accumsan adipisicing elit. Nulla hic deserunt
                facere et animi
              </p>
            </div>
          </div>
        </div>
      </div>

      <section class="container-fluid causes bg-gray">
        <div class="container">
          <div class="section-title row">
            <p>Learn more about our</p>
            <h2>RECENT CAUSES</h2>
          </div>
          <div class="cuses-row row">
            <div class="col-md-4">
              <div class="causen-ccover">
                <div class="caus-img">
                  <img src="assets/images/causes/c1.jpg" alt="" />
                </div>
                <div class="caus-info row no-margin">
                  <span class="left-info col-6"></span>
                  <span class="rit-info text-right col-6"></span>
                </div>
                <div class="caus-detail">
                  <h4>Cyclone Tauktae struck the western coast of India</h4>
                  <p>
                    In June 2021, Cyclone Tauktae struck the western coast of
                    India, affecting the state of Gujarat. up to 185 kilometers
                    per hour (115 mph), the cyclone caused widespread damage to
                    infrastructure, including homes and power lines. Heavy
                    rainfall triggered flooding and landslides in several areas.
                    Despite extensive preparations and evacuation efforts, the
                    cyclone resulted in casualties and significant disruption to
                    daily life.
                  </p>
                </div>

                <div class="donat-btn">
                  {/* <!-- <button class="btn-btn-danger"><i class="fas fa-hand-holding-usd"></i> Donate</button> --> */}
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="causen-ccover">
                <div class="caus-img">
                  <img src="assets/images/causes/c2.jpg" alt="" />
                </div>
                <div class="caus-info row no-margin">
                  <span class="left-info col-6"></span>
                  <span class="rit-info text-right col-6"></span>
                </div>
                <div class="caus-detail">
                  <h4>Jammu and Kashmir July 2021 </h4>
                  <p>
                    In July 2021, Jammu and Kashmir experienced devastating
                    cloud bursts, particularly affecting the Kishtwar district.
                    Heavy rainfall in a short period led to flash floods and
                    landslides, causing significant damage to infrastructure,
                    including roads, bridges, and homes. The sudden onset of the
                    disaster resulted in casualties and displaced many
                    residents. Rescue and relief operations were promptly
                    initiated to assist those affected and restore normalcy in
                    the region{" "}
                  </p>
                </div>

                <div class="donat-btn">
                  {/* <button class="btn-btn-danger"><i class="fas fa-hand-holding-usd"></i> Donate</button>  */}
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="causen-ccover">
                <div class="caus-img">
                  <img src="assets/images/causes/c3.jpg" alt="" />
                </div>
                <div class="caus-info row no-margin">
                  <span class="left-info col-6"></span>
                  <span class="rit-info text-right col-6"></span>
                </div>
                <div class="caus-detail">
                  <h4>FLOOD IN KERALA</h4>
                  <p>
                    The Kerala flood of August 2018 was a catastrophic event
                    triggered by heavy monsoon rains, leading to widespread
                    flooding and landslides across the state of Kerala, India.
                    The deluge caused immense devastation, claiming hundreds of
                    lives and displacing millions of residents from their homes.
                    highlighting the importance of preparedness and
                    infrastructure resilience in mitigating the impacts of
                    natural disasters in vulnerable regions..
                  </p>
                </div>

                <div class="donat-btn">
                  {/* <!-- <button class="btn-btn-danger"><i class="fas fa-hand-holding-usd"></i> Donate</button> --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <div class="about-us">
        <div class="container">
          <div class="session-title">
            <p>Help us to Achieve our Goal</p>
            <h2>About Our Charity</h2>
          </div>
          <div class="about-row row">
            <div class="col-md-8">
              <div class="abut-detail">
                <h4>BUILDING SCHOOL IN AFRICAN COMMUNITIES.</h4>
                <p>
                  Integer vulputate vehicula dolor a eleifend. Duis aliquam
                  condimentum sapien, eget tempor justo. Aenean porttitor nibh
                  metus, sollicitudin egestas metus posuere et . Fusce egestas
                  volutpat metus, in sodales sem bibendum porta. Nunc hendrerit
                  nunc sit{" "}
                </p>{" "}
                <p>
                  {" "}
                  Amet tellus posuere, at malesuada sem gravida. Integer maximus
                  ultricies augue, at dapibus elit bibendum consequat. Cras
                  faucibus tellus eleifend, fermentum purus in, dapibus sapien.
                  Praesent nec ornare risus. Etiam iaculis, ligula vel gravida
                  vestibulum, urna justo posuere ante, id pretium massa arcu sed
                  mi. Nunc a sollicitudin sem. Duis tempus
                </p>
              </div>

              <div class="row diag-ro">
                <div class="about-diag">
                  <div class="icon">
                    <i class="fas fa-arrow-right"></i>
                  </div>
                  <div class="tex">
                    <h5>$500</h5>
                    <p>Raised by your help</p>
                  </div>
                </div>
                <div class="about-diag">
                  <div class="icon">
                    <i class="fas fa-arrow-right"></i>
                  </div>
                  <div class="tex">
                    <h5>$1000</h5>
                    <p>Immediate Need</p>
                  </div>
                </div>
                <div class="about-diag">
                  <div class="icon">
                    <i class="fas fa-arrow-right"></i>
                  </div>
                  <div class="tex">
                    <h5>$5000</h5>
                    <p>Our initial target</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <img src="assets/images/about_img.png" alt="" />
            </div>
          </div>
        </div>
      </div> */}

      <div id="testimonial" class="service bg-gray container-fluid px-4 py-5">
        <div class="container">
          <div class="section-title row mb-3">
            <h2 class="fw-bolder">NGOS WORKING FOR DISASTER MANAGEMENT </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              ipsum sit nibh amet egestas tellus.
            </p>
          </div>
          <div class="row mt-5">
            <div class="col-lg-4 col-md-6 mb-4">
              <div class="serv-cove shadow-md rounded bg-white p-3">
                <div class="prf row mb-3">
                  <div class="col-3"></div>
                  <div class="col-9 align-self-center">
                    <h6 class="mb-0 fw-bolder">Rapid Response</h6>
                    <span>Contact number: 9884802017</span>
                  </div>
                </div>
                <div class="det text-center">
                  <p class="fs-7 fst-italic">
                    Established by Mr. Farukh in 2013, Rapid Response is a
                    leading disaster relief NGO in India, dedicated to aiding
                    victims of calamities. It has rescued over 700,000
                    individuals from 26 disasters{" "}
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 mb-4">
              <div class="serv-cove shadow-md rounded bg-white p-3">
                <div class="prf row mb-3">
                  <div class="col-3"></div>
                  <div class="col-9 align-self-center">
                    <h6 class="mb-0 fw-bolder">Care India</h6>
                    <span>Phone: 011-69200000</span>
                  </div>
                </div>
                <div class="det text-center">
                  <p class="fs-7 fst-italic">
                    Established on October 22, 2018, in Uttar Pradesh, HindRise
                    aims to improve conditions for marginalized communities. It
                    provides relief to daily wage workers, aids COVID-affected
                    families, and conducts disaster management across India
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 mb-4">
              <div class="serv-cove shadow-md rounded bg-white p-3">
                <div class="prf row mb-3">
                  <div class="col-3"></div>
                  <div class="col-9 align-self-center">
                    <h6 class="mb-0 fw-bolder">HindRise</h6>
                    <span>Phone: +91-7303409010</span>
                  </div>
                </div>
                <div class="det text-center">
                  <p class="fs-7 fst-italic">
                    Established on October 22, 2018, in Uttar Pradesh, HindRise
                    aims to improve conditions for marginalized communities. It
                    provides relief to daily wage workers, aids COVID-affected
                    families, and conducts disaster management across India{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="blog" class="service container-fluid px-4 bg-white py-5">
        <div class="container">
          <div class="section-title row mb-3">
            <h2 class="fw-bolder">Disaster news</h2>
            <p>Latest news related to disaster </p>
          </div>
          <div class="row mt-5">
            <div class="col-lg-4 col-md-6 mb-4">
              <div class="serv-cove rounded bg-white p-2">
                <img src="assets/images/blog/c2.jpg" alt="" />
                <div class="p-2">
                  <h5 class="mt-3 fs-7 fw-bold">
                    Jammu and Kashmir cyclone caused lot of property as well as life damage.
                  </h5>
                  <span class="fs-8">22 May 2015</span>
                  <span class="float-end fs-8">
                    <i class=""></i> CYCLONE
                  </span>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-4">
              <div class="serv-cove rounded bg-white p-2">
                <img src="assets/images/blog/c1.jpg" alt="" />
                <div class="p-2">
                  <h5 class="mt-3 fs-7 fw-bold">
                   Loosening of ground in Uttrakhand resulting in personal as well as public loss
                  </h5>
                  <span class="fs-8"> June 2013</span>
                  <span class="float-end fs-8">
                    <i class=""></i> Landslide
                  </span>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-4">
              <div class="serv-cove rounded bg-white p-2">
                <img src="assets/images/blog/c3.jpg" alt="" />
                <div class="p-2">
                  <h5 class="mt-3 fs-7 fw-bold">
                   Heavy monsoon rains leading to widespread flooding
                  </h5>
                  <span class="fs-8">August 2018</span>
                  <span class="float-end fs-8">
                    <i class=""></i> Flood 
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default HomePage;
