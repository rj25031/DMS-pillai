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
                {/* <p>Help us to Achieve our Goal</p> */}
                {/* <h2>About Our Charity</h2> */}
            </div>
            <div className="about-row row">
                <div className="col-md-8">
                    <div className="abut-detail">
                        <h4>Our Commitment</h4>
                        <p>At SafeHarbor our commitment to saving lives and protecting communities drives everything we do. We understand the importance of preparedness and resilience in the face of disasters, and we are dedicated to providing the tools, resources, and support needed to ensure the safety and well-being of individuals and communities worldwide.</p>

                        <h4>Our Approach</h4>
                        <p>Our approach to disaster management is rooted in collaboration, innovation, and inclusivity. We believe that effective disaster management requires the collective efforts of governments, organizations, communities, and individuals working together towards a common goal. By fostering partnerships, embracing innovation, and promoting inclusivity, we strive to create a more resilient and prepared world for future generations.</p>

                        <h4>Our Impact</h4>
                        <p>Since our inception, we have made a tangible impact in communities around the globe. From providing early warning alerts that have saved countless lives to supporting long-term recovery efforts in the aftermath of disasters, our work has touched the lives of millions. We measure our success not only by the number of lives saved but also by the strength and resilience of the communities we serve.</p>

                        <h4>Our Team</h4>
                        <p>Behind SafeHar is a dedicated team of professionals committed to making a difference. Our team brings together expertise from various fields, including disaster management, technology, public health, and community development. Together, we are united in our mission to build a safer, more resilient world for all.</p>

                        <h4>Our Future</h4>
                        <p>As we look to the future, we remain steadfast in our commitment to innovation, collaboration, and impact. We will continue to adapt and evolve in response to emerging challenges and opportunities, always striving to push the boundaries of what is possible in disaster management. Together with our partners and stakeholders, we will build a future where disasters no longer have the power to destroy lives and livelihoods, but instead, serve as catalysts for positive change and resilience.</p>



                    </div>
                   

                    {/* <div className="row diag-ro">
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
                    </div> */}
                </div>
                <div className="col-md-4">
                    <img src="assets/images/about_img.png" alt=""/>
                </div>
            </div>
        </div>
    </div>
      
    {/* <div id="testimonial" className="service bg-gray container-fluid px-4 py-5">
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
        */}
    </Layout>
  )
}

export default AboutPage