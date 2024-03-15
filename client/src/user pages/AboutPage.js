import React from 'react';
import { NavLink } from 'react-router-dom';
import Layout from '../components/Layout'

function AboutPage() {
  return (
    <Layout>
          <div className="page-nav no-margin row">
            <div className="container">
                <div className="row">
                    <h2 className="text-start">About Us</h2>
                    <ul>
                        <li> <NavLink to="#"><i className="bi bi-house-door"></i> Home</NavLink></li>
                        <li><i className="bi bi-chevron-double-right pe-2"></i> About Us</li>
                    </ul>
                </div>
            </div>
        </div>
        
        

    <div className="about-us">
        <div className="container">
            <div className="session-title">
                <p>Help us to Achieve our Goal</p>
                <h2>About Our Charity</h2>
            </div>
            <div className="about-row row">
                <div className="col-md-8">
                    <div className="abut-detail">
                         <h4>BUILDING SCHOOL IN AFRICAN COMMUNITIES.</h4>
                        <p>Integer vulputate vehicula dolor a eleifend. Duis aliquam condimentum sapien, eget tempor justo. Aenean porttitor nibh metus, sollicitudin egestas metus posuere et . Fusce egestas volutpat metus, in sodales sem bibendum porta. Nunc hendrerit nunc sit </p> <p> Amet tellus posuere, at malesuada sem gravida. Integer maximus ultricies augue, at dapibus elit bibendum consequat. Cras faucibus tellus eleifend, fermentum purus in, dapibus sapien. Praesent nec ornare risus. Etiam iaculis, ligula vel gravida vestibulum, urna justo posuere ante, id pretium massa arcu sed mi. Nunc a sollicitudin sem. Duis tempus</p>
                    </div>
                   

                    <div className="row diag-ro">
                        <div className="about-diag">
                            <div className="icon"><i className="fas fa-arrow-right"></i></div>
                            <div className="tex">
                                <h5>$500</h5>
                                <p>Raised by your help</p>
                            </div>
                        </div>
                        <div className="about-diag">
                            <div className="icon"><i className="fas fa-arrow-right"></i></div>
                            <div className="tex">
                                <h5>$1000</h5>
                                <p>Immediate Need</p>
                            </div>
                        </div>
                        <div className="about-diag">
                            <div className="icon"><i className="fas fa-arrow-right"></i></div>
                            <div className="tex">
                                <h5>$5000</h5>
                                <p>Our initial target</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <img src="assets/images/about_img.png" alt=""/>
                </div>
            </div>
        </div>
    </div>
      
      <div id="testimonial" className="service bg-gray container-fluid px-4 py-5">
                <div className="container">
                    
               
                 <div className="section-title row mb-3">
                    <h2 className="fw-bolder">Testimonial</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum sit nibh amet egestas tellus.</p>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-4 col-md-6 mb-4">
                       <div className="serv-cove shadow-md rounded bg-white p-3">
                            <div className="prf row mb-3">
                                <div className="col-3">
                                    <img className="rounded-pill" src="assets/images/testimonial/member-01.jpg" alt=""/>
                                </div>
                                <div className="col-9 align-self-center">
                                    <h6 className="mb-0 fw-bolder">Vinoth Parkash</h6>
                                    <span>CEO Fabric Nation</span>
                                </div>
                            </div>
                            <div className="det text-center">
                                <p className="fs-7 fst-italic">Sed lectus ante, pharetra in lacus sed, efficitur luctus elit. Suspendisse commodo felis dictum, tempor tortor a, dapibus tellus. Nam ornare felis ut arcu tristique luctus. Curabitur </p>
                            </div>
                       </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 mb-4">
                       <div className="serv-cove shadow-md rounded bg-white p-3">
                            <div className="prf row mb-3">
                                <div className="col-3">
                                    <img className="rounded-pill" src="assets/images/testimonial/member-03.jpg" alt=""/>
                                </div>
                                <div className="col-9 align-self-center">
                                    <h6 className="mb-0 fw-bolder">Jackson Daniel</h6>
                                    <span>CEO Notitech</span>
                                </div>
                            </div>
                            <div className="det text-center">
                                <p className="fs-7 fst-italic">Sed lectus ante, pharetra in lacus sed, efficitur luctus elit. Suspendisse commodo felis dictum, tempor tortor a, dapibus tellus. Nam ornare felis ut arcu tristique luctus. Curabitur </p>
                            </div>
                       </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 mb-4">
                       <div className="serv-cove shadow-md rounded bg-white p-3">
                            <div className="prf row mb-3">
                                <div className="col-3">
                                    <img className="rounded-pill" src="assets/images/testimonial/member-02.jpg" alt=""/>
                                </div>
                                <div className="col-9 align-self-center">
                                    <h6 className="mb-0 fw-bolder">Praveen Thaney</h6>
                                    <span>Admin Vintech</span>
                                </div>
                            </div>
                            <div className="det text-center">
                                <p className="fs-7 fst-italic">Sed lectus ante, pharetra in lacus sed, efficitur luctus elit. Suspendisse commodo felis dictum, tempor tortor a, dapibus tellus. Nam ornare felis ut arcu tristique luctus. Curabitur </p>
                            </div>
                       </div>
                    </div>
                     
                </div>
                 </div>
            </div>
       
    </Layout>
  )
}

export default AboutPage