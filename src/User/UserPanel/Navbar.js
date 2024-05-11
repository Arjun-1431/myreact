import "./cssfiles/Navbar.css"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

export default function Navbar(){
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
    return(
        <div>
             <nav className="flex">
                <section className="head flex">
                    <p className="add">Smartest way to get Booking Car <iconify-icon icon="heroicons:arrow-up-right-16-solid"></iconify-icon></p>
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
        </div>
    )
}