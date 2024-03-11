import home_image from "./Images/home_image copy.png";
import "./Home.css";
import React,{ useState, useEffect } from "react";
// import Cards from "../Cards/Cards";
import {BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { FaTwitter, FaFacebook, FaInstagram ,FaLinkedinIn} from 'react-icons/fa';

function Home () {
    
    return (
        <div className="home">
            <div className="up">
                <div className="home-main-text">
                    <h1>College Path Finder</h1>
                    <p className="welcome">Connect To Success</p>
                    <p className="home-tag-line">Empowering Students to Find Their Perfect Path</p>
                </div>
                <div className="image-container">
                    <img src={home_image} className="home_img" alt="" />
                </div>
            </div>
            <News/>
            <TopColleges/>
            <Footer/>
        </div>
    );
}

function News(){
    return(
    <div className="news-container">
        <div class="news-summaries">
            <div class="tab-header">
                <h2>Latest News</h2>
            </div>
            <div class="tab-content">
                <div class="news-item">
                    <h3><a href="https://www.india.com/education/jee-main-2024-session-2-registration-closes-today-at-1030-pm-top-50-engineering-colleges-list-here-6762323/">JEE Main 2024 Session 2 Registration Closes Today At 10:30 PM; List Of Top 50 Engineering Colleges Here</a></h3>
                    <p>JEE Main 2024 Session 2 registration window will close today, March 4 at 10:30 PM. The candidates are allowed to make the corrections, latest by 7 March 2024 (up to 11:50 PM.)</p>
                </div>
                <div class="news-item">
                    <h3><a href="https://www.hindustantimes.com/education/competitive-exams/jee-main-2024-results-23-students-scored-100-nta-score-in-session-1-101707803882984.html">JEE Main 2024 Results: 23 students scored 100 NTA score in session 1</a></h3>
                    <p>The first exam session was conducted between January 24 and February 1. The second is scheduled between April 4 and April 15.</p>
                </div>
                <div class="news-item">
                    <h3><a href="https://news.careers360.com/iit-delhi-indian-institute-of-technology-abu-dhabi-admission-jee-main-advanced-jhajjar-director-new-courses">IIT Delhi Abu Dhabi admission for India students likely through JEE: Director</a></h3>
                    <p>IIT Delhi Abu Dhabi campus is set to open in 2024. In an interview, director Rangan Banerjee said the JEE Board is yet to approve the proposal.</p>
                </div>
                <div class="news-item">
                    <h3><a href="https://www.indiatoday.in/education-today/news/story/delhis-madhav-bansal-gets-perfect-100-percentile-in-jee-main-2024-aspires-to-join-iit-bombay-2510390-2024-03-05">Delhi’s Madhav Bansal achieves 100 percentile in JEE Main, targets IIT Bombay</a></h3>
                    <p>Meet Madhav Bansal from Delhi, who has achieved 100 percentile in the JEE Main. With his sights set on IIT Bombay, his exceptional achievement showcases his dedication and academic prowess.</p>
                </div>
            </div>
        </div>
    </div>
    );
}

function TopColleges() {
    const [slidesToShow, setSlidesToShow] = useState(3); 
    
    const data = {
        "slides": [
          {
            "src": "https://picsum.photos/seed/img1/400/300",
            "alt": "Image 1 for carousel",
            "text": "Text for Image 1"
          },
          {
            "src": "https://picsum.photos/seed/img2/400/300",
            "alt": "Image 2 for carousel",
            "text": "Text for Image 2"
          },
          {
            "src": "https://picsum.photos/seed/img3/400/300",
            "alt": "Image 3 for carousel",
            "text": "Text for Image 3"
          },
          {
            "src": "https://picsum.photos/seed/img4/400/300",
            "alt": "Image 4 for carousel",
            "text": "Text for Image 4"
          },
          {
            "src": "https://picsum.photos/seed/img5/400/300",
            "alt": "Image 5 for carousel",
            "text": "Text for Image 5"
          },
          {
            "src": "https://picsum.photos/seed/img6/400/300",
            "alt": "Image 6 for carousel",
            "text": "Text for Image 6"
          },
          {
            "src": "https://picsum.photos/seed/img7/400/300",
            "alt": "Image 7 for carousel",
            "text": "Text for Image 7"
          }
        ]
    };

    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        let nextIndex = (slide + 1) % data.slides.length;
        setSlide(nextIndex);
    };
    
    const prevSlide = () => {
        let prevIndex = (slide - 1 + data.slides.length) % data.slides.length;
        setSlide(prevIndex);
    };
    
    const getSlideIndex = (index) => {
        return (index + data.slides.length) % data.slides.length;
    };
    
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 820) {
                setSlidesToShow(1);
            } else if (window.innerWidth < 1250) {
                setSlidesToShow(2); 
            } else {
                setSlidesToShow(3);
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
        <div className="top-colleges">
            <div >
                <p className="top-colleges-text">TO <span>P COLL</span>EGES</p>
            </div>
            <div className="top-colleges-carousel">
                <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
                {Array.from({ length: slidesToShow }).map((_, idx) => {
                    const slideIndex = getSlideIndex(slide + idx);
                    return (
                        <div key={idx} className="slide-wrapper">
                            <img
                                src={data.slides[slideIndex].src}
                                alt={data.slides[slideIndex].alt}
                                className="slide"
                                style={{ width: '400px', height: '300px' }}
                            />
                            <div className="text-overlay">{data.slides[slideIndex].text}</div>
                        </div>
                    );
                })}
                <BsArrowRightCircleFill onClick={nextSlide} className="arrow arrow-right" />
            </div>
        </div>
        </>
    );
}


function Footer(){
    return (
        <div class="container">
            <div class="row">
                <div class="footer-col">
                    <h4>COLLEGE</h4>
                    <ul>
                        <li><a href="#">IITs</a></li>
                        <li><a href="#">NITs</a></li>
                        <li><a href="#">Other Colleges</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>EXAMS</h4>
                    <ul>
                        <li><a href="#">JEE Mains</a></li>
                        <li><a href="#">JEE Advanced</a></li>
                        <li><a href="#">BITSAT</a></li>
                        <li><a href="#">Others</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>TOOLS</h4>
                    <ul>
                    <li><a href="./Profile">Profile</a></li>
                        <li><a href="./Search">College Search</a></li>
                    <li><a href="./Compare">College Compare</a></li>
                        <li><a href="./CollegePredictor">College Predictor</a></li>
                    <li><a href="./Forum">Forums</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>follow us</h4>
                    <div class="social-links">
                        <a href="#" className="fab fa-facebook-f"><FaFacebook /></a>
                        <a href="#" className="fab fa-twitter"><FaTwitter /></a>
                        <a href="#" className="fab fa-instagram"><FaInstagram /></a>
                        <a href="#" className="fab fa-linkedin-in"><FaLinkedinIn /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Home;