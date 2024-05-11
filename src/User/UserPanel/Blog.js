import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import "./cssfiles/blog.css";
import Navbar from './Navbar';
export default function Blog() {
    return (
        <div>
            <Navbar/>
             <div className="wrapper">
      <div className="card1">
        <div className="card-banner">
          <p className="category-tag popular">Manali</p>
          <img className="banner-img" src={require('./../Assets/blog1.jpg')} alt='' />
        </div>
        <div className="card-body">
          <p className="blog-hashtag">#Food #Pizza</p>
          <h2 className="blog-title">What is the tastiest pizza in Pizza Hut?</h2>
          <p className="blog-description">My thoughts on the future of front end web development</p>
          <div className="card-profile">
            <img className="profile-img" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpYJQKSoM7S75P_KMRtQHqAAIPh133CSxByw&usqp=CAU' alt='' />
            <div className="card-profile-info">
              <h3 className="profile-name">Eleanor Pea</h3>
              <p className="profile-followers">5.2k followers</p>
            </div>
          </div>
        </div>
      </div>

      <div className="card1">
        <div className="card-banner">
          <p className="category-tag technology">Goa</p>
          <img className="banner-img" src={require('./../Assets/blog2.jpg')} alt='' />
        </div>
        <div className="card-body">
          <p className="blog-hashtag">#Biryani #Food</p>
          <h2 className="blog-title">Which city is famous for biryani in India?</h2>
          <p className="blog-description">Looking to upgrade your gear? Here is the list of the best photography tools for this year</p>
          <div className="card-profile">
            <img className="profile-img" src='https://1.bp.blogspot.com/-vhmWFWO2r8U/YLjr2A57toI/AAAAAAAACO4/0GBonlEZPmAiQW4uvkCTm5LvlJVd_-l_wCNcBGAsYHQ/s16000/team-1-2.jpg' alt='' />
            <div className="card-profile-info">
              <h3 className="profile-name">Darrell Steward</h3>
              <p className="profile-followers">15.7k followers</p>
            </div>
          </div>
        </div>
      </div>

      <div className="card1">
        <div className="card-banner">
          <p className="category-tag psychology">Ujjain</p>
          <img className="banner-img" src={require('./../Assets/blog3.jpg')} alt='' />
        </div>
        <div className="card-body">
          <p className="blog-hashtag">#Burger #Food</p>
          <h2 className="blog-title">What is the most popular burger?</h2>
          <p className="blog-description">Mediation has transformed my life. These are the best practices to get into the habit</p>
          <div className="card-profile">
            <img className="profile-img" src='https://1.bp.blogspot.com/-8c7QTLoyajs/YLjr2V6KYRI/AAAAAAAACO8/ViVPQpLWVM0jGh3RZhh-Ha1-1r3Oj62wQCNcBGAsYHQ/s16000/team-1-3.jpg' alt='' />
            <div className="card-profile-info">
              <h3 className="profile-name">Savannah Nguyen</h3>
              <p className="profile-followers">18K followers</p>
            </div>
          </div>
        </div>
      </div>

      <div className="card1">
        <div className="card-banner">
          <p className="category-tag psychology">Mathura</p>
          <img className="banner-img" src={require('./../Assets/blog4.jpg')} alt='' />
        </div>
        <div className="card-body">
          <p className="blog-hashtag">#Burger #Food</p>
          <h2 className="blog-title">What is the most popular burger?</h2>
          <p className="blog-description">Mediation has transformed my life. These are the best practices to get into the habit</p>
          <div className="card-profile">
            <img className="profile-img" src='https://1.bp.blogspot.com/-8c7QTLoyajs/YLjr2V6KYRI/AAAAAAAACO8/ViVPQpLWVM0jGh3RZhh-Ha1-1r3Oj62wQCNcBGAsYHQ/s16000/team-1-3.jpg' alt='' />
            <div className="card-profile-info">
              <h3 className="profile-name">Savannah Nguyen</h3>
              <p className="profile-followers">18K followers</p>
            </div>
          </div>
        </div>
      </div>

      <div className="card1">
        <div className="card-banner">
          <p className="category-tag psychology">Burger</p>
          <img className="banner-img" src={require('./../Assets/blog5.jpg')} alt='' />
        </div>
        <div className="card-body">
          <p className="blog-hashtag">#Burger #Food</p>
          <h2 className="blog-title">What is the most popular burger?</h2>
          <p className="blog-description">Mediation has transformed my life. These are the best practices to get into the habit</p>
          <div className="card-profile">
            <img className="profile-img" src='https://1.bp.blogspot.com/-8c7QTLoyajs/YLjr2V6KYRI/AAAAAAAACO8/ViVPQpLWVM0jGh3RZhh-Ha1-1r3Oj62wQCNcBGAsYHQ/s16000/team-1-3.jpg' alt='' />
            <div className="card-profile-info">
              <h3 className="profile-name">Savannah Nguyen</h3>
              <p className="profile-followers">18K followers</p>
            </div>
          </div>
        </div>
      </div>

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