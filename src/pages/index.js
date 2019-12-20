import React, { useEffect, useRef, useState } from "react"
// import { Link } from "gatsby"

// Components
// import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

// Plugins
import $ from 'jquery'
import smoothscroll from 'smoothscroll-polyfill'
import WOW from 'wowjs'

// Images
import AtlantaCityscape from "../images/Atlanta_Cityscape.jpg";
import MarcusAvatar from "../images/Headshot.png";
import QM3iMac from "../images/imac_qm3solutions.png"
import Avatar01 from "../images/avatar01.jpg";
import LogoLight from "../images/logo-light.png";
import LogoDark from "../images/logo-dark.png";
import Image02 from "../images/full/02.jpg";
import Image06 from "../images/full/06.jpg";
import Image14 from "../images/full/14.jpg";
import Image34 from "../images/full/34.jpg";
import Image33 from "../images/full/33.jpg";
import LogoImage01 from "../images/logos/01.png";
import LogoImage02 from "../images/logos/02.png";
import LogoImage03 from "../images/logos/03.png";
import LogoImage04 from "../images/logos/04.png";
import LogoImage05 from "../images/logos/05.png";
import LogoImage06 from "../images/logos/06.png";
import LogoImage08 from "../images/logos/08.png";
import Mockup01 from "../images/mockup01.png";
import Mockup02 from "../images/mockup02.png";
import Mockup03 from "../images/mockup03.png";
import Signature from "../images/signature.png";

// Styles
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/animate.css";
import "../styles/main.scss";

// Icons
import { basic_webpage_multiple } from "react-icons-kit/linea";
import { music_play_button } from "react-icons-kit/linea";
import { Icon } from 'react-icons-kit';
import { angleLeft, angleRight, bars, user, check, exclamationCircle, facebookF, linkedin, googlePlus, quoteRight, angleDown, externalLink, twitter } from 'react-icons-kit/fa';
import { basic_anchor, basic_alarm, basic_globe, basic_headset, basic_book_pencil, basic_picture_multiple, basic_gear, ecommerce_graph3, basic_anticlockwise, basic_display, basic_eye, basic_cards_diamonds, basic_sheet, basic_cup, basic_heart, basic_case, basic_lightbulb } from 'react-icons-kit/linea';

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

    // Client Carousel
    const clientCarouselOptions = {
        autoplay: true,
        loop: false,
        rewind: true,
        center: false,
        autoplayHoverPause: true,
        autoplayTimeout: 3000,
        items: 6,
        dots: false,  // Hide pagination buttons
        nav: false,   // Show next and prev buttons
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
                        <a href="#intro">
                            {/* <img src={LogoLight} alt="logo"/> */}
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
                            <li><a href="#service" onClick={handleNavMenuItemClick}>Service</a></li>
                            <li><a href="#pricing" onClick={handleNavMenuItemClick}>Pricing</a></li>
                            <li><a href="#client" onClick={handleNavMenuItemClick}>Client</a></li>
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
                            <h5 className="features-title">We’re Creative</h5>
                            <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem eum fugiat quo.</p>
                        </div>
                        <div className="col-md-4 col-sm-6 content-box mb-sm-30 wow fadeIn" data-wow-delay="0.4s" data-wow-duration="2s">
                            <div className="icon-top icon-black"><Icon size={32} icon={basic_alarm}></Icon></div>
                            <h5 className="features-title">TWe have magic</h5>
                            <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem eum fugiat quo.</p>
                        </div>
                        <div className="col-md-4 col-sm-6 content-box mb-sm-30 wow fadeIn" data-wow-delay="0.6s" data-wow-duration="2s">
                            <div className="icon-top icon-black"><Icon size={32} icon={basic_globe}></Icon></div>
                            <h5 className="features-title">Why we do it</h5>
                            <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem eum fugiat quo.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="Statement1" className="section-padding bg-image overlay-dark dark-bg text-center" data-stellar-background-ratio="0.5" style={{backgroundImage: "url(" + Image33 + ")"}}>
                <div className="container">
                    <p className="max-width-700 lead">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam aperiam.</p>
                    <a className="btn btn-md btn-color" href="#intro">Download</a>
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
                                <h6>Interview</h6>
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

            <section id="testimonials" className="section-padding bg-image overlay-dark dark-bg text-center" data-stellar-background-ratio="0.5" style={{backgroundImage: "url(" + Image06 + ")"}}>
                <div className="container">
                    <OwlCarousel
                        className="owl-theme"
                        {...testimonialCarouselOptions}
                    >
                        <div className="item">
                            <div className="testimonial text-center max-width-700">
                                <div className="page-icon-sm"><Icon size={30} icon={quoteRight}></Icon></div>
                                <p className="lead">I got a dummy for Christmas and started teaching myself. I got books and records and sat in front of the practising.</p>
                                <h6 className="quote-author">Jeff Dunham <span className="text-regular">( Appel Studio )</span></h6>
                            </div>
                        </div>
                        <div className="item">
                            <div className="testimonial text-center max-width-700">
                                <div className="page-icon-sm"><Icon size={30} icon={quoteRight}></Icon></div>
                                <p className="lead">you can never eat a pet you name. And anyway, I did my first show in the third grade it would be like a ventriloquist.</p>
                                <h6 className="quote-author">Alexander Theroux <span className="text-regular">( USA )</span></h6>
                            </div>
                        </div>
                        <div className="item">
                            <div className="testimonial text-center max-width-700">
                                <div className="page-icon-sm"><Icon size={30} icon={quoteRight}></Icon></div>
                                <p className="lead">We're not leaving here without Buster, man. Leave no crash-test dummy behind!</p>
                                <h6 className="quote-author">Adam Savage <span className="text-regular">( Artist )</span></h6>
                            </div>
                        </div>
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
                                        <img src={Mockup01} alt="" />
                                    </div>
                                    <div className="col-md-5 offset-md-1">
                                        <h4 className="content-title">Project name & Title</h4>
                                        <p>Cras dapibus Vivamus elementum semper nisi Aenean vulputate eleifend tellus Aenean leo ligula, porttitor eu consequat vitae Phasellus viverra nulla ut metus varius laoreet.</p>
                                        <ul className="list-inside">
                                            <li>Branding Design</li>
                                            <li>Web Design</li>
                                        </ul>
                                        <a href="http://google.com/" className="btn btn-md btn-black">Visit Site <Icon className="right" icon={externalLink}></Icon></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-5 mb-sm-30">
                                        <h4 className="content-title">Project name & Title</h4>
                                        <p>Cras dapibus Vivamus elementum semper nisi Aenean vulputate eleifend tellus Aenean leo ligula, porttitor eu consequat vitae Phasellus viverra nulla ut metus varius laoreet.</p>
                                        <ul className="list-inside">
                                            <li>Fully Responsive</li>
                                            <li>Web Design</li>
                                        </ul>
                                        <a href="http://google.com/" className="btn btn-md btn-black">Visit Site <Icon className="right" icon={externalLink}></Icon></a>
                                    </div>
                                    <div className="col-md-6 offset-md-1">
                                        <img src={Mockup01} alt="" />
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6 mb-sm-30">
                                        <img src={Mockup01} alt="" />
                                    </div>
                                    <div className="col-md-5 offset-md-1">
                                        <h4 className="content-title">Fully Responsive</h4>
                                        <p>Cras dapibus Vivamus elementum semper nisi Aenean vulputate eleifend tellus Aenean leo ligula, porttitor eu consequat vitae Phasellus viverra nulla ut metus varius laoreet.</p>
                                        <p>porttitor eu consequat vitae Phasellus viverra nulla ut metus varius laoreet</p>
                                        <div className="spacer-15"></div>
                                        <a href="http://google.com/" className="btn btn-md btn-black">Visit Site <Icon className="right" icon={externalLink}></Icon></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
            </section>

            <section id="action-box2" className="action-box action-black">
                <div className="container">
                    <div className="row action-box-left">
                        <h4 className="action-box-title">Powerfull Onepage Multipurpose Responsive Template ?</h4>
                    </div>
                    <div className="action-box-right">
                        <button className="btn btn-md btn-color" href="http://google.com/">See More</button>
                    </div>
                </div>
            </section>

            <section id="service" className="section-padding">
                <div className="container mb-60 text-center">
                    <h2>Our <span className="text-light">Service</span></h2>
                    <p className="max-width-700 large">Excepturi Sint Occaecati Cupiditate non Provident voluptate.</p>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12 pt-30 pt-sm-0">
                            <div className="content-box right wow fadeIn" data-wow-delay="0.2s" data-wow-duration="2s">
                                <div className="icon-right"><Icon size={32} icon={basic_display}></Icon></div>
                                <h5 className="features-title">Bootstrap 4</h5>
                                <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae vel illum.</p>
                            </div>
                            <div className="content-box right wow fadeIn" data-wow-delay="0.2s" data-wow-duration="4s">
                                <div className="icon-right"><Icon size={32} icon={music_play_button}></Icon></div>
                                <h5 className="features-title">html5 & Youtube video</h5>
                                <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae vel illum.</p>
                            </div>
                            <div className="content-box right wow fadeIn" data-wow-delay="0.2s" data-wow-duration="6s">
                                <div className="icon-right"><Icon size={32} icon={basic_eye}></Icon></div>
                                <h5 className="features-title">Clean code & design</h5>
                                <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae vel illum.</p>
                            </div>
                            <div className="content-box right wow fadeIn" data-wow-delay="0.2s" data-wow-duration="8s">
                                <div className="icon-right"><Icon size={32} icon={basic_webpage_multiple}></Icon></div>
                                <h5 className="features-title">Unlimited layouts</h5>
                                <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae vel illum.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 d-lg-block d-sm-none .d-md-none text-center">
                            <img src={Mockup02} alt="" />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 pt-30 pt-sm-0">
                            <div className="content-box left wow fadeIn" data-wow-delay="0.2s" data-wow-duration="2s">
                                <div className="icon-left"><Icon size={32} icon={basic_gear}></Icon></div>
                                <h5 className="features-title">Flexible & Customizable</h5>
                                <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae vel illum.</p>
                            </div>
                            <div className="content-box left wow fadeIn" data-wow-delay="0.4s" data-wow-duration="2s">
                                <div className="icon-left"><Icon size={32} icon={basic_cards_diamonds}></Icon></div>
                                <h5 className="features-title">Multi Concept & Mutli prapose Theme</h5>
                                <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae vel illum.</p>
                            </div>
                            <div className="content-box left wow size={32} fadeIn" data-wow-delay="0.6s" data-wow-duration="2s">
                                <div className="icon-left"><Icon size={32} icon={basic_sheet}></Icon></div>
                                <h5 className="features-title">Well Documented</h5>
                                <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae vel illum.</p>
                            </div>
                            <div className="content-box left wow size={32} fadeIn" data-wow-delay="0.8s" data-wow-duration="2s">
                                <div className="icon-left"><Icon size={32} icon={basic_headset}></Icon></div>
                                <h5 className="features-title">Friendly Support</h5>
                                <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae vel illum.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="counter" className="section-padding bg-image overlay-dark dark-bg" data-stellar-background-ratio="0.5" style={{backgroundImage: "url(" + Image14 + ")"}}>
                <div className="container text-center">
                    <div className="row">
                        <div className="col-md-3 col-sm-6 mb-sm-30">
                            <div className="alt-icon-top counter-icon"><Icon size={40} icon={basic_cup}></Icon></div>
                            <h1 className="counter-title counter-num">103</h1>
                            <h5 className="counter-sub-title">Awwards</h5>
                        </div>
                        <div className="col-md-3 col-sm-6 mb-sm-30">
                            <div className="alt-icon-top counter-icon"><Icon size={40} icon={basic_heart}></Icon></div>
                            <h1 className="counter-title counter-num">256</h1>
                            <h5 className="counter-sub-title">client</h5>
                        </div>
                        <div className="col-md-3 col-sm-6 mb-sm-30">
                            <div className="alt-icon-top counter-icon"><Icon size={40} icon={basic_case}></Icon></div>
                            <h1 className="counter-title counter-num">148</h1>
                            <h5 className="counter-sub-title">Project</h5>
                        </div>
                        <div className="col-md-3 col-sm-6 mb-sm-30">
                            <div className="alt-icon-top counter-icon"><Icon size={40} icon={basic_lightbulb}></Icon></div>
                            <h1 className="counter-title counter-num">23</h1>
                            <h5 className="counter-sub-title">Team</h5>
                        </div>
                    </div>
                </div>
            </section>

            <section id="pricing" className="section-padding">
                <div className="container text-center">
                    <h2 className="page-title">Pricing <span className="text-light">Table</span></h2>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 mb-sm-30 wow fadeIn" data-wow-delay="0.2s" data-wow-duration="2s">
                            <div className="pricing-box">
                                <div className="pricing-title pricing-padding-t">
                                    <h4>Regular</h4>
                                </div>
                                <div className="pricing-price pricing-padding">
                                    <p><span className="dollar">$</span><span className="pricing-price-lg">49</span><span className="pricing-price-sm">/ month</span></p>
                                </div>
                                <div className="pricing-features">
                                    <ul>
                                        <li>Full Access</li>
                                        <li>1 Domain <strong>Free</strong></li>
                                        <li>Source Files</li>
                                        <li><strong>50 User Accounts</strong></li>
                                        <li>6 Month License</li>
                                        <li>Premium Support</li>
                                    </ul>
                                </div>
                                <div className="pricing-button pricing-padding">
                                    <a className="btn btn-md btn-black" href="http://google.com/"><Icon className="left" icon={user}></Icon>Sign Up</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-sm-30 wow fadeIn" data-wow-delay="0.4s" data-wow-duration="2s">
                            <div className="pricing-box highlight">
                                <div className="pricing-title pricing-padding-t">
                                    <h4>Standard</h4>
                                </div>
                                <div className="pricing-price pricing-padding">
                                    <p><span className="dollar">$</span><span className="pricing-price-lg color">99</span><span className="pricing-price-sm">/ month</span></p>
                                </div>
                                <div className="pricing-features">
                                    <ul>
                                        <li>Full Access</li>
                                        <li>10 Domain <strong>Free</strong></li>
                                        <li>Source Files</li>
                                        <li><strong>500 User Accounts</strong></li>
                                        <li>6 Month License</li>
                                        <li>Premium Support</li>
                                    </ul>
                                </div>
                                <div className="pricing-button pricing-padding">
                                    <a className="btn btn-md btn-color" href="http://google.com/"><Icon className="left" icon={user}></Icon>Sign Up</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-sm-30 wow fadeIn" data-wow-delay="0.6s" data-wow-duration="2s">
                            <div className="pricing-box">
                                <div className="pricing-title pricing-padding-t">
                                    <h4>Advanced</h4>
                                </div>
                                <div className="pricing-price pricing-padding">
                                    <p><span className="dollar">$</span><span className="pricing-price-lg">199</span><span className="pricing-price-sm">/ month</span></p>
                                </div>
                                <div className="pricing-features">
                                    <ul>
                                        <li>Full Access</li>
                                        <li>100 Domain <strong>Free</strong></li>
                                        <li>Source Files</li>
                                        <li><strong>5000 User Accounts</strong></li>
                                        <li>6 Month License</li>
                                        <li>Free Support</li>
                                    </ul>
                                </div>
                                <div className="pricing-button pricing-padding">
                                    <a className="btn btn-md btn-black" href="http://google.com/"><Icon icon={user} className="left"></Icon>Sign Up</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="video-action" className="section-padding bg-image overlay-dark dark-bg" data-stellar-background-ratio="0.5"  style={{backgroundImage: "url(" + Image02 + ")"}}>
                <div className="container text-center">
                    <div className="page-icon">
                        <a className="video-popup white" href="https://www.youtube.com/watch?v=bMZ3ysoCgEU"><Icon size={40} icon={music_play_button}></Icon></a>
                    </div>
                    <p className="max-width-700 lead">
                        We’re developing a number of special projects if interested,<br />
                        see the promo video
                    </p>
                    <h6 className="page-title-alt color mb-0">See Watch Video</h6>
                </div>
            </section>

            <section id="client" className="section-padding">
                <div className="container text-center">
                    <h2 className="page-title">Happy <span className="text-light">Clients</span></h2>
                </div>
                <div className="container">
                    <OwlCarousel
                        className="owl-theme client-carousel"
                        {...clientCarouselOptions}
                    >
                        <div className="item">
                            <div className="client-logo">
                                <button href="#intro">
                                    <img src={LogoImage01} alt="" /></button>
                            </div>
                        </div>
                        <div className="item">
                            <div className="client-logo">
                                <button href="#intro">
                                    <img src={LogoImage02} alt="" /></button>
                            </div>
                        </div>
                        <div className="item">
                            <div className="client-logo">
                                <button href="#intro">
                                    <img src={LogoImage03} alt="" /></button>
                            </div>
                        </div>
                        <div className="item">
                            <div className="client-logo">
                                <button href="#intro">
                                    <img src={LogoImage04} alt="" /></button>
                            </div>
                        </div>
                        <div className="item">
                            <div className="client-logo">
                                <button href="#intro">
                                    <img src={LogoImage05} alt="" /></button>
                            </div>
                        </div>
                        <div className="item">
                            <div className="client-logo">
                                <button href="#intro">
                                    <img src={LogoImage06} alt="" /></button>
                            </div>
                        </div>
                        <div className="item">
                            <div className="client-logo">
                                <button href="#intro">
                                    <img src={LogoImage08} alt="" /></button>
                            </div>
                        </div>
                        <div className="item">
                            <div className="client-logo">
                                <button href="#intro">
                                    <img src={LogoImage01} alt="" /></button>
                            </div>
                        </div>
                        <div className="item">
                            <div className="client-logo">
                                <button href="#intro">
                                    <img src={LogoImage02} alt="" /></button>
                            </div>
                        </div>
                        <div className="item">
                            <div className="client-logo">
                                <button href="#intro">
                                    <img src={LogoImage03} alt="" /></button>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </section>

            <hr />

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

                            <form id="contact" className="row contact-form">
                                <div className="col-md-12 text-center">
                                    <h5 className="successContent">
                                        <Icon className="left" icon={check} style={{color: "#5cb45d"}}></Icon>Your message has been sent successfully.
                                    </h5>
                                    <h5 className="errorContent" style={{color: "#e1534f"}}>
                                        <Icon className="left" icon={exclamationCircle}></Icon>There was a problem validating the form please check!
                                    </h5>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-field-wrapper">
                                        <input className="input-md form-full" id="form-name" type="text" name="form-name" placeholder="Your Name" required />
                                    </div>
                                    <div className="form-field-wrapper">
                                        <input className="input-md form-full" id="form-email" type="email" name="form-email" placeholder="Email" required />
                                    </div>
                                    <div className="form-field-wrapper">
                                        <input className="input-md form-full" id="form-subject" type="text" name="form-subject" placeholder="Subject" />
                                    </div>
                                </div>
                                <div className="col-md-6 mb-0">
                                    <div className="form-field-wrapper">
                                        <textarea className="input-md form-full" id="form-message" rows="7" name="form-message" placeholder="Your Message" required></textarea>
                                    </div>
                                </div>
                                <div className="col-md-12 text-center">
                                    <button className="btn-contact-submit btn btn-md btn-color" type="submit" id="form-submit" name="submit">Submit</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </section>

            <footer id="footer" className="footer section-padding gray-bg">
                <div className="container text-center">

                    <div className="footer-logo mb-25 wow fadeInUp" data-wow-duration="1.5s">
                        <a className="scroll-top" href="#intro">
                            <img src={LogoDark} alt="mazel" />
                        </a>
                    </div>

                    <p className="copyright mb-25">
                        &copy; 2015 <button><b>Mazel Template</b></button>. All Rights Reserved.<br />
                        Template by <a href="http://nileforest.com/"><b>nileforest</b></a>
                    </p>
                    <ul className="social">
                        <li>
                            <a href="https://www.facebook.com/"><Icon icon={facebookF}></Icon></a>
                        </li>
                        <li>
                            <a href="https://www.twitter.com/"><Icon icon={twitter}></Icon></a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/"><Icon icon={linkedin}></Icon></a>
                        </li>
                        <li>
                            <a href="https://plus.google.com/"><Icon icon={googlePlus}></Icon></a>
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
        element.addEventListener(eventName, eventListener);
        
        // Remove event listener on cleanup
        return () => {
          element.removeEventListener(eventName, eventListener);
        };
      },
      [eventName, element] // Re-run if eventName or element changes
    );
  };

export default IndexPage
