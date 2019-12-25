import React, { useEffect, useRef, useState } from "react"
// import { Link } from "gatsby"

// Components
// import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import ContactForm from "../components/ContactForm.js"

// Plugins
import $ from 'jquery'
import smoothscroll from 'smoothscroll-polyfill'
import WOW from 'wowjs'

// Images
import AtlantaCityscape from "../images/Atlanta_Cityscape.jpg";  // Background style
import MarcusAvatar from "../images/Quettan_headshot.jpg";  // Can be lazy loaded with gatsby image
import QM3iMac from "../images/imac_qm3solutions.png";  // Can be lazy loaded with gatsby image
import QM3MultipleDevices from "../images/QM3SolutionsMultipleDevices.png";  // Can be lazy loaded with gatsby image
import OffKiMultipleDevices from "../images/OffKiMultipleDevices.png";  // Can be lazy loaded with gatsby image
import Semiconductor from "../images/Semiconductor.jpg";  // Background style
import AtlantaRoads from "../images/Shining_Clouds.jpg";  // Background style
import Image02 from "../images/full/02.jpg";  // Background style

// Styles
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/animate.css";
import "../styles/main.scss";

// Icons
import { Icon } from 'react-icons-kit';
import { bars, linkedin, instagram, quoteRight, externalLink, twitter } from 'react-icons-kit/fa';
import { basic_anchor, basic_alarm, basic_globe, basic_headset, basic_book_pencil, basic_picture_multiple, basic_gear, ecommerce_graph3, basic_anticlockwise } from 'react-icons-kit/linea';

// Loadable Components
import Loadable from '@loadable/component'
const OwlCarousel = Loadable(() => import('react-owl-carousel'));

global.jQuery = require('jquery');
require('bootstrap');

const IndexPage = () => {
  useEffect(() => {
    smoothscroll.polyfill();
    const wow = new WOW.WOW();
    wow.init()

    // ----------------------------------------------------------------
    // Navigation Menu panel
    // ----------------------------------------------------------------

    // Mobile menu max height
    if($(window).width() <= 1024) {
        setMobile(true);
        $(".nav-menu").css("max-height", $(window).height() - 65 + "px")
    } else {
        setMobile(false);
    }

  }, []);

  const [isPrepareHeader, setPrepareHeader] = useState(false);
  const [isFixHeader, setFixHeader] = useState(false);
  const [isMobile, setMobile] = useState(false);
  const [isNavMenuActive, setNavMenuActive] = useState(false);

  const handleScroll = (e) => {
    if(e.currentTarget.scrollY > 100) {
        setPrepareHeader(true);
    } else {
        setPrepareHeader(false);
    }

    if(e.currentTarget.scrollY > 1) {
        setFixHeader(true);
    } else {
        setFixHeader(false);
    }
  }

  const handleResize = (e) => {
    // Mobile menu max height
    if($(window).width() <= 1024) {
        setMobile(true);
        $(".nav-menu").css("max-height", $(window).height() - 65 + "px")
    } else {
        setMobile(false);
    }
  }

  const handleNavMenuItemClick = (e) => {
    if(e.currentTarget.hash) {
      e.preventDefault();
      let hash = e.currentTarget.hash
      window.scroll({ top: document.querySelector(hash).offsetTop - 65, left: 0, behavior: 'smooth' });

      if(isMobile) {
        setNavMenuActive(!isNavMenuActive);
      }
    }
  }

  const handleNavMenuIconClick = (e) => {
    setNavMenuActive(!isNavMenuActive);
  }

  useEventListener("scroll", handleScroll);
  useEventListener("resize", handleResize);


    // Testimonial Carousel
    const testimonialCarouselOptions = {
        autoplay: true,
        loop: true,
        center: true,
        autoplayHoverPause: true,
        autoplayTimeout: 5000,
        items: 1,
        dots: true,  // Show pagination buttons
        nav: false,  // Hide next and prev buttons
        navText: ["<i fill=\"currentColor\" style=\"display: inline-block;\"><svg fill=\"currentColor\" height=\"25\" width=\"10\" viewBox=\"0 0 640 1792\" style=\"display: inline-block; vertical-align: middle;\"><path d=\"M627 544q0 13-10 23l-393 393 393 393q10 10 10 23t-10 23l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23z\"></path></svg></i>", "<i fill=\"currentColor\" style=\"display: inline-block;\"><svg fill=\"currentColor\" height=\"25\" width=\"10\" viewBox=\"0 0 640 1792\" style=\"display: inline-block; vertical-align: middle;\"><path d=\"M595 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z\"></path></svg></i>"]
    };

    // Content Carousel
    const contentCarouselOptions = {
        autoplay: true,
        loop: false,
        rewind: true,
        center: true,
        autoplayHoverPause: true,
        autoplayTimeout: 5000,
        items: 1,
        dots: true,  // Hide pagination buttons
        nav: true,   // Show next and prev buttons
        navText: ["<i fill=\"currentColor\" style=\"display: inline-block;\"><svg fill=\"currentColor\" height=\"25\" width=\"10\" viewBox=\"0 0 640 1792\" style=\"display: inline-block; vertical-align: middle;\"><path d=\"M627 544q0 13-10 23l-393 393 393 393q10 10 10 23t-10 23l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23z\"></path></svg></i>", "<i fill=\"currentColor\" style=\"display: inline-block;\"><svg fill=\"currentColor\" height=\"25\" width=\"10\" viewBox=\"0 0 640 1792\" style=\"display: inline-block; vertical-align: middle;\"><path d=\"M595 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z\"></path></svg></i>"]
    };

  return (
  <>
    <SEO title="Home" />
    {/* <section id="preloader">
        <div className="site-spinner"></div>
    </section> */}

    <div id="page-wraper">
        <div className="wrapper">

            <div id="header" className={"header " + (isFixHeader ? "header-fixed " : "") + (isPrepareHeader ? "header-prepare " : "") + (isMobile ? "mobile-device " : "")}>
                <div className="header-inner">
                    <div className="logo">
                        <a href="#intro" onClick={handleNavMenuItemClick}>
                            <span className="quettan-logo">Quettan</span>
                        </a>
                    </div>

                    <div className="nav-menu-icon" onClick={handleNavMenuIconClick}>
                        <span><Icon size={30} icon={bars}></Icon></span>
                    </div>

                    <div className={"nav-menu singlepage-nav " + (isNavMenuActive ? "active " : "") }>
                        <ul className="nav-menu-inner">
                            <li><a href="#intro" onClick={handleNavMenuItemClick}>Home</a></li>
                            <li><a href="#about" onClick={handleNavMenuItemClick}>About</a></li>
                            <li><a href="#process" onClick={handleNavMenuItemClick}>Process</a></li>
                            <li><a href="#latest-work" onClick={handleNavMenuItemClick}>Work</a></li>
                            <li><a href="#contact-us" onClick={handleNavMenuItemClick}>Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <section id="intro" className="intro-fullscreen">
                <div className="intro-media bg-image overlay-dark20" style={{backgroundImage: "url(" + AtlantaCityscape + ")"}}></div>
                <div className="intro-caption-waper dark-bg">
                    <div className="intro-full-height container">
                        <div className="intro-content">
                            <div className="intro-content-inner">
                                <div className="intro-img-circle">
                                    <img src={MarcusAvatar} alt="avatar01" />
                                </div>
                                <h1 className="intro-title mb-10"><span className="text-light">Hi!, I am</span> Marcus Quettan</h1>
                                <h6 className="page-title-alt color mb-45">Web Designer & Developer</h6>
                                <a className="btn btn-lg btn-white scroll-down" href="#latest-work">View my Latest Work</a>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section id="about" className="section-padding text-center">
                <div className="container mb-60">
                    <div className="row text-center">
                        <div className="col-md-6 wow slideInUp" data-wow-delay="0.2s" data-wow-duration="1s">
                            <img src={QM3iMac} style={{maxWidth: 457 + "px", width: "100%"}} alt="mockup" />
                        </div>
                        <div className="col-md-6 wow fadeIn" data-wow-delay="0.4s" data-wow-duration="2s">
                            <div className="spacer-15"></div>
                            <h6 className="page-title-alt color mb-10">Creative Deveopment</h6>
                            <h2 className="page-title mb-25">About <span className="text-light">Me</span></h2>
                            <p className="mb-20">Simply put, I build websites!  The long story is that I'm a professional software developer interested in partnering with individuals and small businesses to enable them to take advantage of all that modern technology has to offer.  I can provide the custom software solutions you need!  However, this whole operatioin is just me.  If you're willing to be patient, let's work together to bring your vision into reality!</p>
                            <p className="mb-35">Every website I build is completely bespoke.  If you can imagine it, I can create it!</p>
                            <span className="signature">Marcus Quettan</span>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about2" className="section-padding text-center gray-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-6 content-box mb-sm-30 wow fadeIn" data-wow-delay="0.2s" data-wow-duration="2s">
                            <div className="icon-top icon-black"><Icon size={32} icon={basic_anchor}></Icon></div>
                            <h5 className="features-title">Creative</h5>
                            <p>I strive with every client to ensure that their vision for their business is presented as creatively and professionally as possible.  Each new website tells the unique story of the individuals and the businesses which they represent.</p>
                        </div>
                        <div className="col-md-4 col-sm-6 content-box mb-sm-30 wow fadeIn" data-wow-delay="0.4s" data-wow-duration="2s">
                            <div className="icon-top icon-black"><Icon size={32} icon={basic_alarm}></Icon></div>
                            <h5 className="features-title">Professional</h5>
                            <p>My professional experience as a software developer and head of the Visualization Branch of the Georgia Tech Research Institute has taught me to always be supportive, communicative, and timely with all business relationships.</p>
                        </div>
                        <div className="col-md-4 col-sm-6 content-box mb-sm-30 wow fadeIn" data-wow-delay="0.6s" data-wow-duration="2s">
                            <div className="icon-top icon-black"><Icon size={32} icon={basic_globe}></Icon></div>
                            <h5 className="features-title">Robust</h5>
                            <p>We want the world to experience your website!  All of my websites deploy with modern Search Engine Optimization (SEO) practices and are designed to provide a responsive user experience regardless of device your website is viewed on.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="Statement1" className="section-padding bg-image overlay-dark dark-bg text-center" data-stellar-background-ratio="0.5" style={{backgroundImage: "url(" + Semiconductor + ")"}}>
                <div className="container">
                    <p className="max-width-700 lead">Let's work together!  Contact me and provide details of the project you would like for us to build together!</p>
                    <a className="btn btn-md btn-color" href="#contact-us">Contact Me</a>
                </div>
            </section>

            <hr />

            <section id="process" className="section-padding">
                <div className="container text-center">
                    <h2 className="page-title">Work <span className="text-light">Process</span></h2>
                </div>
                <div className="container text-center">
                    <div className="row">
                        <div className="process-box col-lg-2 col-md-4 col-sm-6 col-12 wow fadeIn" data-wow-delay="0.2s" data-wow-duration="2s">
                            <div className="tipped" data-title="Step1 - Skype Interview" data-tipper-options='{"direction":"top"}'>
                                <div className="process-icon alt-icon-top"><Icon size={45} icon={basic_headset}></Icon></div>
                                <h6>Discuss</h6>
                            </div>
                        </div>
                        <div className="process-box col-lg-2 col-md-4 col-sm-6 col-12 wow fadeIn" data-wow-delay="0.4s" data-wow-duration="2s">
                            <div className="tipped" data-title="Step2 - Project Plan" data-tipper-options='{"direction":"top"}'>
                                <div className="process-icon alt-icon-top"><Icon size={45} icon={basic_book_pencil}></Icon></div>
                                <h6>Plan</h6>
                            </div>
                        </div>
                        <div className="process-box col-lg-2 col-md-4 col-sm-6 col-12 wow fadeIn" data-wow-delay="0.6s" data-wow-duration="2s">
                            <div className="tipped" data-title="Step3 - Design" data-tipper-options='{"direction":"top"}'>
                                <div className="process-icon alt-icon-top"><Icon size={45} icon={basic_picture_multiple}></Icon></div>
                                <h6>Design</h6>
                            </div>
                        </div>
                        <div className="process-box col-lg-2 col-md-4 col-sm-6 col-12 wow fadeIn" data-wow-delay="0.8s" data-wow-duration="2s">
                            <div className="tipped" data-title="Step4 - Development" data-tipper-options='{"direction":"top"}'>
                                <div className="process-icon alt-icon-top"><Icon size={45} icon={basic_gear}></Icon></div>
                                <h6>Development</h6>
                            </div>
                        </div>
                        <div className="process-box col-lg-2 col-md-4 col-sm-6 col-12 wow fadeIn" data-wow-delay="1s" data-wow-duration="2s">
                            <div className="tipped" data-title="Step5 - Testing" data-tipper-options='{"direction":"top"}'>
                                <div className="process-icon alt-icon-top"><Icon size={45} icon={ecommerce_graph3}></Icon></div>
                                <h6>Testing</h6>
                            </div>
                        </div>
                        <div className="process-box col-lg-2 col-md-4 col-sm-6 col-12 wow fadeIn" data-wow-delay="1.2s" data-wow-duration="2s">
                            <div className="tipped" data-title="Step6 - Delivery" data-tipper-options='{"direction":"top"}'>
                                <div className="process-icon alt-icon-top"><Icon size={45} icon={basic_anticlockwise}></Icon></div>
                                <h6>Delivery</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="testimonials" className="section-padding bg-image overlay-dark dark-bg text-center" data-stellar-background-ratio="0.5" style={{backgroundImage: "url(" + AtlantaRoads + ")"}}>
                <div className="container">
                    <OwlCarousel
                        className="owl-theme"
                        {...testimonialCarouselOptions}
                    >
                        <div className="item">
                            <div className="testimonial text-center max-width-700">
                                <div className="page-icon-sm"><Icon size={30} icon={quoteRight}></Icon></div>
                                <p className="lead">Starting a brand new and business is a lot of work, but Marcus was there to make creating our website easy!</p>
                                <h6 className="quote-author">Josh Stevenson <span className="text-regular">( Music Producer )</span></h6>
                            </div>
                        </div>
                        <div className="item">
                            <div className="testimonial text-center max-width-700">
                                <div className="page-icon-sm"><Icon size={30} icon={quoteRight}></Icon></div>
                                <p className="lead">We're just a small business, but after working with Marcus our web presence makes us look gigantic!</p>
                                <h6 className="quote-author">Susan Quettan <span className="text-regular">( CEO )</span></h6>
                            </div>
                        </div>
                        {/* <div className="item">
                            <div className="testimonial text-center max-width-700">
                                <div className="page-icon-sm"><Icon size={30} icon={quoteRight}></Icon></div>
                                <p className="lead"></p>
                                <h6 className="quote-author">Deshon Battle <span className="text-regular">( Music Producer )</span></h6>
                            </div>
                        </div> */}
                    </OwlCarousel>
                </div>
            </section>

            <hr />

            <section id="latest-work" className="section-padding">
                <div className="container text-center">
                    <h2 className="page-title">Latest <span className="text-light">Work</span></h2>
                </div>
                    <OwlCarousel
                        className="content-carousel content-slider"
                        {...contentCarouselOptions}
                    >
                        <div className="item">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6 mb-sm-30">
                                        <img src={QM3MultipleDevices} alt="" />
                                    </div>
                                    <div className="col-md-5 offset-md-1">
                                        <h4 className="content-title">QM3 Solutions</h4>
                                        <p>A staffing company with integrity.  QM3 Solutions would love to help you find a job or fill one of your open positions!  They strive to give individuals a new view and a new way to see life through with every placement they facilitate.</p>
                                        <ul className="list-inside">
                                            <li>Responsive Web Design & Development</li>
                                            <li>Employee Resume Application Form</li>
                                            <li>Content Consulting</li>
                                        </ul>
                                        <a href="https://www.qm3solutions.com/" className="btn btn-md btn-black">Visit Site <Icon className="right" icon={externalLink}></Icon></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-5 mb-sm-30">
                                        <h4 className="content-title">Off Ki Productions</h4>
                                        <p>Cras dapibus Vivamus elementum semper nisi Aenean vulputate eleifend tellus Aenean leo ligula, porttitor eu consequat vitae Phasellus viverra nulla ut metus varius laoreet.</p>
                                        <ul className="list-inside">
                                            <li>Responsive Web Design & Development</li>
                                            <li>Payment Processing</li>
                                            <li>Automated Digital Product Delivery</li>
                                        </ul>
                                        <a href="http://www.offkiproductions.com/" className="btn btn-md btn-black">Visit Site <Icon className="right" icon={externalLink}></Icon></a>
                                    </div>
                                    <div className="col-md-6 offset-md-1">
                                        <img src={OffKiMultipleDevices} alt="" />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
            </section>

            <section id="contact-us" className="section-padding dark-bg bg-image overlay-dark60" style={{backgroundImage: "url(" + Image02 + ")"}} data-stellar-background-ratio="0.5">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-12">
                            <h6 className="page-title-alt color mb-15">Wanna say hello? </h6>
                            <h2 className="page-title">Get In <span className="text-light">Touch</span></h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>

            <footer id="footer" className="footer section-padding gray-bg">
                <div className="container text-center">

                    <div className="footer-logo mb-25 wow fadeInUp" data-wow-duration="1.5s">
                        <a className="scroll-top" href="#intro" onClick={handleNavMenuItemClick}>
                            <span className="quettan-logo-dark">Quettan</span>
                        </a>
                    </div>

                    <p className="copyright mb-25">
                        &copy; 2019. All Rights Reserved.<br />
                        Development by <a href="https://www.marcusquettan.com/" onClick={handleNavMenuItemClick}><b>Marcus Quettan</b></a>
                    </p>
                    <ul className="social">
                        <li>
                            <a href="https://www.instagram.com/mqdarkblue/"><Icon icon={instagram}></Icon></a>
                        </li>
                        <li>
                            <a href="https://twitter.com/mqdarkblue"><Icon icon={twitter}></Icon></a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/marcus-quettan-b2b71550/"><Icon icon={linkedin}></Icon></a>
                        </li>
                    </ul>

                </div>
            </footer>

        </div>
    </div>
  </>
)
}

// custom Hook
function useEventListener(eventName, handler, element = null){
    // Create a ref that stores handler
    const savedHandler = useRef();
    
    // Update ref.current value if handler changes.
    // This allows our effect below to always get latest handler ...
    // ... without us needing to pass it in effect deps array ...
    // ... and potentially cause effect to re-run every render.
    useEffect(() => {
      savedHandler.current = handler;
    }, [handler]);
  
    useEffect(
      () => {
        if (element === null) {
            if (typeof window !== 'undefined') {
                element = window;
            } else {
                return;
            }
        }
        // Make sure element supports addEventListener
        // On 
        const isSupported = element && element.addEventListener;
        if (!isSupported) return;
        
        // Create event listener that calls handler function stored in ref
        const eventListener = event => savedHandler.current(event);
        
        // Add event listener
        if (eventName === "scroll") {
            element.addEventListener(eventName, eventListener, {passive: true});

        } else {
            element.addEventListener(eventName, eventListener);
        }
        
        // Remove event listener on cleanup
        return () => {
          element.removeEventListener(eventName, eventListener);
        };
      },
      [eventName, element] // Re-run if eventName or element changes
    );
  };

export default IndexPage
