import "./cssfiles/userhome.css"
import React from 'react';
import { useEffect } from "react";
import $ from 'jquery';
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import Navbar from "./Navbar";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Services from "./Services";
import Journey from "./Journey";
import Partners from "./partners";
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';



const UserHome = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };


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
    const handleGetCar = () => {
        neviagte('/getinfocar')
    }
    const handleblog= () => {
        neviagte('/blog')
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
        <>
            {/* NAV */}
            <Navbar/>


            {/* HEADER */}
            <header className="flex">
                <section className="flex_content">
                    <article className="padding_4x">
                        <h5 className="tag">Book Cars</h5>
                        <h1 className="title big">I am here to <em>Book.</em></h1>
                        <p>We connect you with top Cars to apply and secure bookings</p>
                        <a  className="btn btn_1">Get Details</a>
                    </article>
                </section>
                <section className="flex_content">
                    <article className="padding_4x">
                        <h5 className="tag">Blogs</h5>
                        <h1 className="title big">Iam here to <em>Show.</em></h1>
                        <p>We bridge to discover and showcase the right skills for event blogging.</p>
                        <a onClick={handleblog} className="btn btn_2">Find a Blogs</a>
                    </article>
                </section>
            </header>

            {/* MAIN */}
            <main>

                {/* DIVISION_1 */}
                <div className="division_1 padding_1x">
                    <section className="title_header t_center">
                        <h1 className="title medium"><em>Booking </em>made easy for your Cars</h1>
                    </section>
                    <ul className="flex padding_2x">
                        <li className="padding_1x">

                            <h3 className="title small">Top feedbacks from our  <em>Customers.</em></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                        </li>
                        <li className="active padding_1x">

                            <h3 className="title small">Top feedbacks from our <em>Customers.</em></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                        </li>
                        <li className="padding_1x">

                            <h3 className="title small">Top feedbacks from our <em>Customers.</em></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                        </li>
                    </ul>
                </div>

                {/* DIVISION_2 */}
                <div className="division_2 padding_1x">
                    <section className="title_header t_center">
                        <h1 className="title medium">We can Book <em>any Car</em>, regardless of the <em>management</em></h1>
                    </section>
                    <section className="content flex">
                        <ul className="flex_content padding_2x">
                            <li className="fixed_flex small padding_2x">Flexibility and Convenience</li>
                            <li className="fixed_flex small padding_2x">Customer Seafty</li>
                            <li className="fixed_flex small padding_2x">24/7 Availability</li>
                        </ul>
                        <figure className="flex_content">
                            <img src={require("../../User/Assets/car4.jpg")} alt="" loading="lazy" className="imagecenter" />
                        </figure>
                        <ul className="flex_content padding_2x">
                            <li className="fixed_flex small padding_2x">Cost Savings</li>
                            <li className="fixed_flex small padding_2x">Variety of Vehicles</li>
                            <li className="fixed_flex small padding_2x">Access to Newer Models</li>
                        </ul>
                    </section>
                </div>

                {/* DIVISION_3 */}
                <div className="division_3 flex">
                    <section className="fixed_flex flex_content padding_1x">
                      <figure><img src={require("../../User/Assets/car10.jpg")} alt="" /></figure>
                      <figure><img src={require("../../User/Assets/car11.jpg")} alt="" /></figure>
                      <figure><img src={require("../../User/Assets/car12.jpg")} alt="" /></figure>
                      <figure><img src={require("../../User/Assets/car14.jpg")} alt="" /></figure>
                      <figure><img src={require("../../User/Assets/car15.jpg")} alt="" /></figure>
                    </section>
                    <section className="flex_content padding_1x">
                        <article>
                            <h2 className="title medium">Find your Car Now</h2>
                            <p>Discover Your Next Event Now: Explore a wide range of events catering to every interest, from concerts and conferences to festivals and workshops, ensuring there's something for everyone!</p>
                        </article>
                    </section>
                </div>

                {/* DIVISION_4 */}
                <div className="division_4">
                    <section className="tab_transition flex flex_content padding_2x">
                        <aside className="flex_content">
                            <ul className="tab_btn fixed_flex padding_1x">


                                <div className="wrapper">
                                    <h1>Our Cars</h1>

                                    <div className="clear"></div>
                                    <div className="items">
                                        <div className="item">
                                            <img src={require("../../User/Assets/car1.jpg")} alt="item" className='imagesh'/>
                                            <h2>Suzuki Ciaz</h2>
                                            <p>Price: <em>$449</em></p>
                                            {/* <button className="add-to-cart" type="button">Book Now</button> */}
                                        </div>
                                        <div className="item">
                                        <img src={require("../../User/Assets/car2.jpg")} alt="item" className='imagesh'/>
                                            <h2>Maruti Suzuki Dzire</h2>
                                            <p>Price: <em>$449</em></p>
                                            {/* <button className="add-to-cart" type="button">Book Now</button> */}
                                        </div>
                                        <div className="item">
                                        <img src={require("../../User/Assets/car3.jpg")} alt="item" className='imagesh'/>
                                            <h2>Honda Amaze</h2>
                                            <p>Price: <em>$449</em></p>
                                            {/* <button className="add-to-cart" type="button">Book Now</button> */}
                                        </div>
                                        <div className="item">
                                        <img src={require("../../User/Assets/car4.jpg")} alt="item" className='imagesh'/>
                                            <h2>Honda City</h2>
                                            <p>Price: <em>$449</em></p>
                                            {/* <button className="add-to-cart" type="button">Book Now</button> */}
                                        </div>
                                        <div className="item">
                                        <img src={require("../../User/Assets/car5.jpg")} alt="item" className='imagesh'/>
                                            <h2 className="itemsall">Tata Tigor</h2>
                                            <p>Price: <em>$449</em></p>
                                            {/* <button className="add-to-cart" type="button">Book Now</button> */}
                                        </div>
                                        <div className="item">
                                        <img src={require("../../User/Assets/car6.jpg")} alt="item" className='imagesh'/>
                                            <h2>Volkswagen Virtus</h2>
                                            <p>Price: <em>$449</em></p>
                                            {/* <button className="add-to-cart" type="button">Book Now</button> */}
                                        </div>
                                        <div className="item">
                                        <img src={require("../../User/Assets/car7.jpg")} alt="item" className='imagesh'/>
                                            <h2>Hyundai Aura </h2>
                                            <p>Price: <em>$449</em></p>
                                            {/* <button className="add-to-cart" type="button">Book Now</button> */}
                                        </div>

                                    </div>

                                </div>


                            </ul><br/>
                           
                            <ul>
                                
                                <div className='buttogetcar'>
                                
                            <button onClick={handleGetCar} className="buttona" type="button">Get Cars</button> 
                            </div>
                            </ul> <br/>
                            <ul>
                            <h2>Frequently Asked Questions</h2>
                            </ul>
                            <ul className='accordian'>
                                 <div className='accordian'>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Jhon Smith
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>How Can i book a car</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You can Book a car online Throught  our website or you can visit our dealer and book the car there. We are open every day
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}> Arjun Singh</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
          What documents do i need to rent a car
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You will need a valid driving license and a cradit card . Additional documents may be required for certain types of car
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Garima Tomar
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Can i cancle my booking
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, you can cancle your booking Please refer to our cancellation policy for details
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Rishabh Rajput
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            What if i return the car late
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Late return will be subject to Additional charges . please refer to our terms and conditions.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
                            </ul>


                            <ul>

                            <section>
      <div className="container">
        <div className="row flex-center sm-no-flex">

          <div className="pull-right sm-no-float col-md-8">
            <ul className="team-members">
              {/* single member row starts */}
              <li className="clearfix">
                <div className="member-details">
                  <div>
                    <img src={require("../../User/Assets/p1.jpg")} alt="UI Designer" />
                    <div className="member-info">
                      <h3>Jennifer Tilly</h3>
                      <p>UI Designer</p>
                    </div>
                  </div>
                </div>

                <div className="member-details">
                  <div>
                  <img src={require("../../User/Assets/p2.jpg")} alt="UI Designer" />
                    <div className="member-info">
                      <h3>John Doe</h3>
                      <p>UI Designer</p>
                    </div>
                  </div>
                </div>

                <div className="member-details">
                  <div>
                    <img src={require("../../User/Assets/p3.jpg")} alt="UI Designer" />
                    <div className="member-info">
                      <h3>David Warner</h3>
                      <p>UI Designer</p>
                    </div>
                  </div>
                </div>
              </li>{/* /single member row ends */}

              {/* single member row starts */}
              <li className="clearfix">
                <div className="member-details">
                  <div>
                  <img src={require("../../User/Assets/p4.jpg")} alt="UI Designer" />
                    <div className="member-info">
                      <h3>John Doe</h3>
                      <p>UI Designer</p>
                    </div>
                  </div>
                </div>

                <div className="member-details">
                  <div>
                  <img src={require("../../User/Assets/p5.jpg")} alt="UI Designer" />
                    <div className="member-info">
                      <h3>John Doe</h3>
                      <p>UI Designer</p>
                    </div>
                  </div>
                </div>

                <div className="member-details">
                  <div>
                  <img src={require("../../User/Assets/p6.jpg")} alt="UI Designer" />
                    <div className="member-info">
                      <h3>John Doe</h3>
                      <p>UI Designer</p>
                    </div>
                  </div>
                </div>
              </li>{/* /single member row ends */}

              {/* single member row starts */}
              <li className="clearfix">
                <div className="member-details">
                  <div>
                  <img src={require("../../User/Assets/p5.jpg")} alt="UI Designer" />
                    <div className="member-info">
                      <h3>John Doe</h3>
                      <p>UI Designer</p>
                    </div>
                  </div>
                </div>

                <div className="member-details">
                  <div>
                  <img src={require("../../User/Assets/p4.jpg")} alt="UI Designer" />
                    <div className="member-info">
                      <h3>John Doe</h3>
                      <p>UI Designer</p>
                    </div>
                  </div>
                </div>

                <div className="member-details">
                  <div>
                    <img src={require("../../User/Assets/p3.jpg")} alt="UI Designer" />
                    <div className="member-info">
                      <h3>Sara Khan</h3>
                      <p>UI Designer</p>
                    </div>
                  </div>
                </div>
              </li>{/* /single member row ends */}
            </ul>{/* /end team-photos */}
          </div>{/* /end col-md-8 */}

          <div className="pull-left col-md-4 sm-text-center">
            <div className="team-overview">
              <h2>Meet Our Team?</h2>
              <a href="#">Meet the Entire Team</a>
              <p><div>We're here to make your journey smooth and enjoyable.</div></p>
            </div>
          </div>{/* /end col-md-4 */}
        </div>{/* /end row */}
      </div>{/* /end container */}
    </section>


                            </ul>
                            <br/>
                            <br/>

                            <ul>
                            <Services/>
                            </ul>
                            <ul>
                              <Journey/>
                            </ul>
                            <ul style ={{width:'100%'}}>
                            <Partners/>
                            </ul>

                        </aside>

                    </section>

                </div>

            </main>

            {/* Footer */}
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
                                    <li><a className="facebook" href="#"><FacebookIcon/></a></li>
                                    <li><a className="twitter" href="#"><GitHubIcon/></a></li>
                                    <li><a className="dribbble" href="#"><InstagramIcon/></a></li>
                                    <li><a className="linkedin" href="#"><LinkedInIcon/></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>

            </footer>
        </>
    );
};

export default UserHome;
