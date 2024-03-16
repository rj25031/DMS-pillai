import React from "react";
import Layout from "../components/Layout.js";
import { NavLink } from "react-router-dom";
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
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="assets/images/slider/r1.jpg"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none pb-5 mb-5 d-md-block">
                <h5 class="text-white fw-bold fs-1 bounceInDown">
                  {" "}
                  Strengthening <span class="edu-re">Disaster</span> Resilience
                  Together
                </h5>
                <h6 class="text-white fw-bold  bounceInDown">
                  Join Us in Making a Difference
                </h6>
                <p class=" bounceInLeft mb-4">
                  Our comprehensive disaster management system empowers NGOs,
                  agencies, and communities to work together seamlessly in
                  preparing for, responding to, and recovering from disasters.
                  From real-time alerts to collaborative planning tools,
                  together, we can build resilient communities and save lives.
                </p>
                <div class="row text-center mt-3 vbh">
                  <div class="btn mx-auto w-auto  px-3 py-3 btn-primary fs-5 h-auto  bounceInUp">
                    <NavLink className="text-white" to="/agency-login">Partner with Us</NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="assets/images/slider/r2.jpeg"
                class="d-block w-100"
                alt="Unable to Load"
              />
              <div class="carousel-caption d-none pb-5 mb-5 d-md-block">
                <h5 class="text-white fw-bold fs-1 bounceInDown">
                  Empowering Action, Ensuring Safety
                </h5>
                <h6 class="text-white fw-bold bounceInDown">
                  Cutting-Edge Tools for Effective Disaster Management
                </h6>
                <p class=" bounceInLeft mb-4">
                  Tour disaster management system offers a suite of
                  comprehensive solutions designed to meet the diverse needs of
                  NGOs, agencies, and communities. From early warning alerts to
                  interactive maps and volunteer coordination, our platform
                  provides everything you need to effectively prepare for,
                  respond to, and recover from disasters
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="assets/images/slider/r3.jpg"
                class="d-block w-100"
                alt="Unable to Load"
              />
              <div class="carousel-caption d-none pb-5 mb-5 d-md-block">
                <h5 class="text-white fw-bold fs-1 bounceInDown">
                  Real Results, Tangible Impact
                </h5>
                <h6 class="text-white fw-bold bounceInDown">
                  Stories of Resilience and Hope
                </h6>
                <p class=" bounceInLeft mb-4">
                  See how our disaster management system has made a difference
                  in communities around the world. From facilitating swift
                  response efforts during natural disasters to empowering local
                  volunteers and agencies, our platform is helping to build
                  resilience and save lives, one community at a time.
                </p>
                <div class="row text-center mt-3 vbh">
                  <div class="btn mx-auto w-auto  px-3 py-3 btn-primary fs-5 h-auto  bounceInUp">
                    <NavLink className="text-white" to="/login">  Volunteer Now</NavLink>
                  </div>
                </div>
              </div>
            </div>
            {/* Slide-4 */}
            <div class="carousel-item">
              <img
                src="assets/images/slider/r4.png"
                class="d-block w-100"
                alt="Unable to Load"
              />
              <div class="carousel-caption d-none pb-5 mb-5 d-md-block">
                <h5 class="text-white fw-bold fs-1 bounceInDown">
                  Together, We Are Stronger
                </h5>
                <h6 class="text-white fw-bold bounceInDown">
                  Get Involved, Make a Difference
                </h6>
                <p class=" bounceInLeft mb-4">
                  Your voice matters. Join our community-driven approach to
                  disaster management and become an active participant in
                  building resilience. From volunteering opportunities to
                  educational workshops and collaborative initiatives, there are
                  many ways you can contribute to making your community safer
                  and more prepared.
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
              Empowering Preparedness, Ensuring Safety: Building Resilient
              Communities Together
            </p>
          </div>
          <div class="row mt-4 whd">
            <div class="col-md-4 text-center mb-5">
              {/* <i class="bi text-primary fs-1 bi-egg-fried"></i> */}

              <h4 class="fs-6 fw-bold mt-3">Risk Assessment and Planning</h4>
              <p>
                We conduct thorough risk assessments to identify potential
                hazards and vulnerabilities faced by communities,
                infrastructure, and critical assets. By analyzing data and
                collaborating with stakeholders, we develop tailored
                preparedness plans and strategies to mitigate risks and enhance
                resilience.
              </p>
            </div>
            <div class="col-md-4 text-center mb-5">
              {/* <i class="bi fs-1 text-primary bi-house-door"></i> */}
              <h4 class="fs-6 fw-bold mt-3">Early Warning Systems</h4>
              <p>
                Our early warning systems leverage cutting-edge technology and
                real-time data to provide timely alerts and notifications about
                impending threats such as natural disasters, severe weather
                events, and public health emergencies. By empowering individuals
                and communities with actionable information, we help them make
                informed decisions and take proactive measures to stay safe.
              </p>
            </div>
            <div class="col-md-4 text-center mb-5">
              {/* <i class="bi fs-1 text-primary bi-book-half"></i> */}
              <h4 class="fs-6 fw-bold mt-3">Emergency Response Coordination</h4>
              <p>
                In times of crisis, effective coordination and collaboration are
                essential. We work closely with government agencies, non-profit
                organizations, and private sector partners to coordinate
                emergency response efforts, mobilize resources, and ensure a
                swift and efficient response to disasters and emergencies.
              </p>
            </div>
            <div class="col-md-4 text-center mb-5">
              {/* <i class="bi fs-1 text-primary bi-currency-dollar"></i> */}
              <h4 class="fs-6 fw-bold mt-3">
                Community Engagement and Education
              </h4>
              <p>
                We believe that community engagement and education are key
                pillars of effective disaster management. Through outreach
                programs, training workshops, and public awareness campaigns, we
                empower individuals and communities with the knowledge, skills,
                and resources they need to prepare for, respond to, and recover
                from disasters.
              </p>
            </div>
            <div class="col-md-4 text-center mb-5">
              {/* <i class="bi fs-1 text-primary bi-building"></i> */}
              <h4 class="fs-6 fw-bold mt-3">Technology and Innovation</h4>
              <p>
                We leverage technology and innovation to enhance the efficiency
                and effectiveness of disaster management efforts. From
                geographic information systems (GIS) and remote sensing
                technologies to mobile applications and data analytics, we
                harness the power of technology to improve situational
                awareness, decision-making, and communication during
                emergencies.
              </p>
            </div>
            <div class="col-md-4 text-center mb-5">
              {/* <i class="bi fs-1 text-primary bi-heart-pulse"></i> */}
              <h4 class="fs-6 fw-bold mt-3">
                Resilience Building and Recovery
              </h4>
              <p>
                Our work extends beyond the immediate response phase to support
                long-term recovery and resilience-building efforts. We
                collaborate with local stakeholders to develop and implement
                sustainable solutions for rebuilding infrastructure, restoring
                livelihoods, and strengthening community resilience in the
                aftermath of disasters.
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
                  <h4>Hyderabad floods</h4>
                  <p>
                    The 2020 Hyderabad floods were a series of floods associated
                    with Deep Depression BOB 02 that caused extensive damage and
                    loss of life as a result of flash flooding in Hyderabad,
                    India in October 2020. Among the most affected areas were
                    Balapur, L. B. Nagar, parts of Old City such as Hafiz Baba
                    Nagar, Al Jubail Colony, Omer colony, Osman Nagar, Nabeel
                    Colony, Falaknuma, Chaderghat etc.The fourth tropical
                    cyclone and third deep depression of the 2020 North Indian
                    Ocean cyclone season, BOB 02 formed on 11 October over the
                    west-central Bay of Bengal and slowly drifted towards the
                    east coast of India over the following three days.
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
                  <h4>Kerala floods</h4>
                  <p>
                    Severe floods struck Kerala on August 16, 2018, amid record
                    monsoon rains, marking the state's worst flood in nearly a
                    century. With over 483 deaths and 15 missing, about a
                    million people were evacuated from various districts,
                    including Chengannur, Pandanad, and Aluva. All 14 districts
                    were on red alert. Approximately one-sixth of Kerala's
                    population was directly affected. Declared a Level 3
                    Calamity by the Indian government, it surpassed the 1924
                    great flood as the most devastating in Kerala's recent
                    history.It is the worst flood in Kerala after the great
                    flood of 99 that took place in 1924.
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
                  <h4>Gujrat Floods</h4>
                  <p>
                    Extremely Severe Cyclonic Storm Tauktae, the strongest storm
                    of the 2021 North Indian Ocean cyclone season, hit Gujarat,
                    India, as the most potent cyclone since 1998. Originating
                    from an Arabian Sea low pressure area on May 13, it
                    intensified into a cyclonic storm named Tauktae by May 14.
                    Gradually strengthening, it reached severe cyclonic storm
                    status on May 15 and very severe cyclonic storm status on
                    May 16. By May 17, it became extremely severe before an
                    eyewall replacement cycle weakened it briefly.
                    Restrengthening near Gujarat, it made landfall, causing
                    significant damage and casualties.
                  </p>
                </div>

                <div class="donat-btn">
                  {/* <!-- <button class="btn-btn-danger"><i class="fas fa-hand-holding-usd"></i> Donate</button> --> */}
                </div>
              </div>
            </div>
          </div>

          {/* start */}
          <div class="cuses-row row">
            <div class="col-md-4">
              <div class="causen-ccover">
                <div class="caus-img">
                  <img src="assets/images/causes/r8.jpeg" alt="" />
                </div>
                <div class="caus-info row no-margin">
                  <span class="left-info col-6"></span>
                  <span class="rit-info text-right col-6"></span>
                </div>
                <div class="caus-detail">
                  <h4>Burevi Cyclone</h4>
                  <p>
                    Cyclonic Storm Burevi was a weak tropical cyclone which made
                    landfall in Sri Lanka, becoming the first to do so since a
                    depression in 2014, and brought minimal impact to Southern
                    India in December 2020. The ninth depression and fifth named
                    storm of the 2020 North Indian Ocean cyclone season, Burevi
                    originated from a low-pressure area which formed on November
                    28. The depression then was upgraded into Cyclone Burevi the
                    following day. Burevi slowly intensified reaching its peak
                    intensity on December 2, just before making landfall in Sri
                    Lanka. Burevi then weakened, entering the Gulf of Mannar the
                    next day. Burevi proceeded to dissipate after stalling on
                    December 5.
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
                  <img src="assets/images/causes/r9.jpg" alt="" />
                </div>
                <div class="caus-info row no-margin">
                  <span class="left-info col-6"></span>
                  <span class="rit-info text-right col-6"></span>
                </div>
                <div class="caus-detail">
                  <h4>Ludhiana Gas Leak</h4>
                  <p>
                    On April 30, 2023, in Ludhiana, Punjab, India, a tragic
                    incident occurred as 11 individuals lost their lives while
                    nine were hospitalized due to a gas leak stemming from a
                    factory. The exact source of the leak remains uncertain,
                    prompting a National Disaster Response Force team and
                    experts to investigate. Punjab Chief Minister Bhagwant Mann
                    attributed the leak to the factory, while The Tribune
                    reported high levels of hydrogen sulfide in the vicinity.
                    There's speculation that the gas may have dispersed from
                    manholes, possibly due to chemical reactions with methane.
                    Ludhiana's Deputy Commissioner, Surabhi Malik, stated that
                    samples are being collected from manholes for further
                    analysis.
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
                  <img src="assets/images/causes/r10.png" alt="" />
                </div>
                <div class="caus-info row no-margin">
                  <span class="left-info col-6"></span>
                  <span class="rit-info text-right col-6"></span>
                </div>
                <div class="caus-detail">
                  <h4>Amritsar Rail Accident </h4>
                  <p>
                    On 19 October 2018, two Indian Railways passenger trains hit
                    a crowd of people in the eastern outskirts of Amritsar,
                    Punjab, killing at least 59 people and inuring approximately
                    100 more. The crowd had gathered to watch celebrations for
                    the Hindu festival of Dussehra and were standing on the
                    tracks.At least 59 people were killed. By the evening of 19
                    October, 50 bodies had been discovered and at least 50
                    others had been admitted to a nearby hospital while an
                    additional nine bodies were found the next day. Due to the
                    force of the train's impact, many victims were dismembered
                    or mutilated beyond recognition, which delayed body
                    identification.
                  </p>
                </div>

                <div class="donat-btn">
                  {/* <!-- <button class="btn-btn-danger"><i class="fas fa-hand-holding-usd"></i> Donate</button> --> */}
                </div>
              </div>
            </div>
          </div>

          {/* end */}
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

            <div class="col-lg-4 col-md-6 mb-4">
              <div class="serv-cove shadow-md rounded bg-white p-3">
                <div class="prf row mb-3">
                  <div class="col-3"></div>
                  <div class="col-9 align-self-center">
                    <h6 class="mb-0 fw-bolder">Sphere India</h6>
                    <span>Phone: +91-120-4106184</span>
                  </div>
                </div>
                <div class="det text-center">
                  <p class="fs-7 fst-italic">
                    A coalition of humanitarian, development, and resilience
                    actors, comprises 155 full members, including UN agencies,
                    NGOs, academic institutions, and community volunteers. It
                    fosters coordination, capacity building, and advocacy for
                    accountability.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 mb-4">
              <div class="serv-cove shadow-md rounded bg-white p-3">
                <div class="prf row mb-3">
                  <div class="col-3"></div>
                  <div class="col-9 align-self-center">
                    <h6 class="mb-0 fw-bolder">Mukul Madhav Foundation</h6>
                    <span>Phone: 020-25528075</span>
                  </div>
                </div>
                <div class="det text-center">
                  <p class="fs-7 fst-italic">
                    Natural disasters entail numerous hardships, including
                    financial struggles, hunger, and disease, wiping out years
                    of community progress. Mukul Madhav Foundation responds
                    swiftly, collaborating with local organizations and
                    mobilizing resources for immediate relief efforts.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 mb-4">
              <div class="serv-cove shadow-md rounded bg-white p-3">
                <div class="prf row mb-3">
                  <div class="col-3"></div>
                  <div class="col-9 align-self-center">
                    <h6 class="mb-0 fw-bolder">Help Age India</h6>
                    <span>Phone: 011-41688955/56</span>
                  </div>
                </div>
                <div class="det text-center">
                  <p class="fs-7 fst-italic">
                    In disasters, the elderly often suffer most, prompting
                    HelpAge India to pioneer disaster interventions since 1980.
                    Their model offers swift relief and long-term
                    rehabilitation, evident in projects like Tamaraikulam Elders
                    Village.
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
                    Jammu and Kashmir cyclone caused lot of property as well as
                    life damage.
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
                    Loosening of ground in Uttrakhand resulting in personal as
                    well as public loss
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
