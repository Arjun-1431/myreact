import "./cssfiles/Feedback.css"
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import Form from "./FeedbackForm";

export default function Feedback() {

    const neviagte = useNavigate()

    const handleHome = () => {
        neviagte('/userhome')
    }
    const handleexplore = () => {
        neviagte('/explorecar')
    }
    const handlefeedback = () => {
        neviagte('/feedback')
    }
    const handlecontect = () => {
        neviagte('/contectus')
    }
    useEffect(() => {

        const menu = document.getElementsByTagName("menu");
        const nav = document.getElementsByTagName("nav");

        const perform = (elem, type) => {
            menu[0].classList.add(type);
            // overlay(type, "ham");
        };

    })
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        // Your useEffect code here
    }, []);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div>
            <nav className="flex">
                <section className="head flex">
                    <p className="add">Smartest way to get Booking Event <iconify-icon icon="heroicons:arrow-up-right-16-solid"></iconify-icon></p>
                    <ul className="social_icons fixed_flex">
                        <li><a href="javascript:void(0)">SignUp/LogIn</a></li>
                    </ul>
                </section>
                <section className="body fixed_flex">
                <img src={require("../../User/Assets/logo.jpg")} alt="" className="logo" />
                <ul className={`links fixed_flex ${showMenu ? 'show' : ''}`}>
                        <li><a href="javascript:void(0)" className="active" onClick={handleHome}>Home</a></li>
                        <li><a onClick={handleexplore}>Explore Car</a></li>
                        <li><a onClick={handlefeedback}>Feedback</a></li>
                        <li><a onClick={handlecontect}>Contect us</a></li>
                        

                    </ul>
                </section>
            </nav>






            <div style={{ margin: "20px" }}>
            <Form/>
            </div>
























            <footer className="padding_3x">
                <footer className="site-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-6">
                                <h6>About</h6>
                                <p className="text-justify"> An event management system website serves as a comprehensive platform for planning, organizing, and executing various events seamlessly. With user-friendly interfaces and robust features, these platforms streamline the entire event management process, from initial planning stages to post-event analysis. They offer functionalities such as event scheduling, venue booking, attendee registration, ticketing, promotion, and communication tools. Additionally, they provide analytics and reporting capabilities to track event performance and gather valuable insights for future improvements. </p>
                            </div>

                            <div className="col-xs-6 col-md-3">
                                <h6>Categories</h6>
                                <ul className="footer-links">
                                    <li><a href="http://scanfcode.com/category/c-language/">C</a></li>
                                    <li><a href="http://scanfcode.com/category/front-end-development/">UI Design</a></li>
                                    <li><a href="http://scanfcode.com/category/back-end-development/">PHP</a></li>
                                    <li><a href="http://scanfcode.com/category/java-programming-language/">Java</a></li>
                                    <li><a href="http://scanfcode.com/category/android/">Android</a></li>
                                    <li><a href="http://scanfcode.com/category/templates/">Templates</a></li>
                                </ul>
                            </div>

                            <div className="col-xs-6 col-md-3">
                                <h6>Quick Links</h6>
                                <ul className="footer-links">
                                    <li><a href="http://scanfcode.com/about/">About Us</a></li>
                                    <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
                                    <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
                                    <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
                                    <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
                                </ul>
                            </div>
                        </div>
                        <hr />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <ul className="social-icons">
                                    <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                                    <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                                    <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
                                    <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>

            </footer>


        </div>
    )
}