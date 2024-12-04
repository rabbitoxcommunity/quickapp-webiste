import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';

export default function Home() {
  return (
    <main className="main">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <section id="banner" className="quick__banner section">
            <div className="container text-center">
              <div className="content" data-aos="fade-up" data-aos-duration="1000">
                <img data-aos="fade-up" data-aos-duration="1200" src="/assets/img/banner1.svg" alt="" />
                <div className="title">
                  <h1 data-aos="fade-up" data-aos-duration="1400">Turn Your Skills into Income: Kerala's #1 Service Marketplace</h1>
                  <p data-aos="fade-up" data-aos-duration="1600">Join thousands of Keralites earning through their skills. Start your success story today. <br />Download
                    QuickApp and turn your expertise into a thriving business.</p>
                </div>
                <a href="#howWorks">
                  <div className="arrow__down">
                    <span className="material-symbols-outlined">
                      keyboard_arrow_down
                    </span>
                  </div>
                </a>
              </div>
            </div>

          </section>


          <section id="howWorks" className="app__howItWorks">

            <div className="main__banner">
              <div className="container">
                <div className="title">
                  <h6 data-aos="fade-up" data-aos-duration="1000">How It Works</h6>
                  <h2 data-aos="fade-up" data-aos-duration="1200">List Services, Connect Directly, Grow Fast.</h2>
                </div>
                <div className="row justify-content-center">
                  <div className="col-md-4 col-tab-6">
                    <div className="glass" data-aos="zoom-in" data-aos-duration="1000">
                      <div className="workGrid">
                        <div className="title">
                          <h3>List Your Service</h3>
                          <img src="./assets/img/screw.png" alt="" />
                        </div>
                        <ul>
                          <li>Add your service/bid instantly - no registration needed</li>
                          <li>Share what you offer and set your bid rate</li>
                          <li>Include your contact details</li>
                          <li>Start receiving calls or whatsapp message from interested clients</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-between">
                  <div className="col-md-4 col-tab-6">
                    <div className="glass" data-aos="zoom-in" data-aos-duration="1200">
                      <div className="workGrid">
                        <div className="title">
                          <h3>Benefits of Creating an Account</h3>
                          <img src="./assets/img/screw.png" alt="" />
                        </div>

                        <ul>
                          <li>Keep track of all your listed services</li>
                          <li>Save interesting services to your wishlist</li>
                          <li>Easily manage your service listings</li>
                          <li>Update or remove services anytime</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-tab-6">
                    <div className="glass w-80" data-aos="fade-up" data-aos-duration="1400">
                      <div className="workGrid">
                        <div className="title">
                          <h3>For Service Providers</h3>
                          <img src="./assets/img/screw.png" alt="" />
                        </div>

                        <ul>
                          <li>Quick Listing: Add your service in minutes</li>
                          <li>Direct Connections: Receive calls & WhatsApp messages</li>
                          <li>Flexible Options: Set your own rates and availability</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-between">
                  <div className="col-md-4 col-tab-6">
                    <div className="glass w-80" data-aos="fade-up" data-aos-duration="1600">
                      <div className="workGrid">
                        <div className="title">
                          <h3>For Customers</h3>
                          <img src="./assets/img/screw.png" alt="" />
                        </div>

                        <ul>
                          <li>Easy Search: Find services you need</li>
                          <li>Direct Contact: Call or WhatsApp providers directly</li>
                          <li>No Middleman: Connect and deal directly with service providers</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-tab-6">
                    <div className="glass" data-aos="zoom-in" data-aos-duration="1800">
                      <div className="workGrid">
                        <div className="title">
                          <h3>Popular Categories</h3>
                          <img src="./assets/img/screw.png" alt="" />
                        </div>

                        <ul className="categories">
                          <li>IT</li>
                          <li>Mechanical</li>
                          <li>Education</li>
                          <li>Electrical</li>
                          <li>Healthcare</li>
                          <li>Design</li>
                          <li>Finance</li>
                          <li>Marketing</li>
                          <li>Construction</li>
                          <li>Legal</li>
                          <li>Customer Support</li>
                          <li>Photography</li>
                          <li>Writing</li>
                          <li>Automotive</li>
                          <li>Plumbing</li>
                          <li>Consulting</li>
                          <li>Home Repair</li>
                          <li>Arts & Crafts</li>
                          <li>Fitness</li>
                          <li>Real Estate</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </section>


          <section id="features" className="pt-0 quick__featured section light-background">

            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-8 col-tab-10">
                  <div className="contents">
                    <h2 data-aos="fade-up" data-aos-duration="1000">Earn money from online by using <span>QuickApp</span> to showcase your skills and connect with
                      clients. </h2>
                    <div className="grid__items">
                      <div className="items dark" data-aos="fade-up" data-aos-duration="1200">
                        <h4>Quick & Easy Listing</h4>
                        <img src="/assets/img/icon1.svg" alt="" />
                      </div>
                      <div className="items primary" data-aos="fade-up" data-aos-duration="1400">
                        <h4>100% Free Platform</h4>
                        <img src="/assets/img/icon2.svg" alt="" />
                      </div>
                      <div className="items grey" data-aos="fade-up" data-aos-duration="1600">
                        <h4>Direct Communication</h4>
                        <img src="/assets/img/icon3.png" alt="" />
                      </div>
                      <div className="items border" data-aos="fade-up" data-aos-duration="1800">
                        <h4>Multiple Categories</h4>
                        <img src="/assets/img/icon4.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </section>

          <section className="app__layout" id="WhyQuick">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="app__content" data-aos="fade-up" data-aos-duration="1000">
                    <h3>Start Your Success Journey Today</h3>
                    <h5>Transform Your Skills Into Opportunities</h5>
                    {/* <p>List your services or find skilled professionals - all in one app. Start connecting with potential
                clients today.</p> */}
                    <h5>Why Download Now?</h5>
                    <ul>
                      <li>Start listing your services in minutes</li>
                      <li>Connect directly with customers</li>
                      <li>Browse thousands of services</li>
                      <li>100% Free to use</li>
                    </ul>
                    <div className="download">
                      <img src="/assets/img/playstore.png" alt="" />
                      <img src="/assets/img/appstore.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  {/* <div className="swiper mySwiper" data-aos="fade-up" data-aos-duration="1800">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <img src="/assets/img/app1.webp" className="w-100" alt=""/>
                </div>
                <div className="swiper-slide"> <img src="/assets/img/app2.webp" className="w-100" alt=""/></div>
                <div className="swiper-slide"> <img src="/assets/img/app5.webp" className="w-100" alt=""/></div>
              </div>
            </div> */}

                  <Swiper
                    spaceBetween={30}
                    effect={'fade'}
                    autoplay={{
                      delay: 1000,
                    }}
                    loop={true}
                    modules={[EffectFade,Autoplay]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                    <img src="/assets/img/app1.webp" className="w-100" alt=""/>
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src="/assets/img/app2.webp" className="w-100" alt=""/>
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src="/assets/img/app5.webp" className="w-100" alt=""/>
                    </SwiperSlide>
                  </Swiper>

                </div>
              </div>
            </div>
          </section>

          <section id="contact" className="quick__contact">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <div className="contents">
                    <div className="text-center">
                      <h6 data-aos="fade-up" data-aos-duration="1000">Get In Touch</h6>
                      <h2 data-aos="fade-up" data-aos-duration="1200">Have questions about QuickApp? We're always ready to assist you.</h2>
                    </div>
                    <div className="row align-items-center">
                      <div className="col-md-6" data-aos="fade-up" data-aos-duration="1400">
                        <img src="/assets/img/support.svg" alt="" />
                      </div>
                      <div className="col-md-6">
                        <div className="grid" data-aos="fade-up" data-aos-duration="1600">
                          <h4>Email</h4>
                          <p>info@thequickapp.com</p>
                        </div>
                        <div className="grid" data-aos="fade-up" data-aos-duration="1800">
                          <h4>Phone Support</h4>
                          <p>+91 7034 32 72 44</p>
                        </div>
                        <div className="grid" data-aos="fade-up" data-aos-duration="2000">
                          <h4>Follow Us</h4>
                          <ul>
                            <li><a href="https://www.instagram.com/thequick.app/" target="_blank"><img src="/assets/img/instagram.svg" alt="" /></a></li>
                            <li><a href="#"><img src="/assets/img/linkedin.svg" alt="" /></a></li>
                            <li><a href="#"><img src="/assets/img/facebook.svg" alt="" /></a></li>
                            <li><a href="https://wa.me/919656327244?text=Hello, we're reaching out from Quick app website regarding your services." target="_blank"><img src="/assets/img/whatsapp.svg" alt="" /></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>



        </div>
      </div>
    </main>
  )
}
