import {BrowserRouter as Router ,Routes, Route } from  'react-router-dom';
import HomeUserInterface from './User/Component/Home';
import './App.css';
import Getinfo from './User/UserPanel/Getinfo';
import Feedback from './User/UserPanel/Feedback';
import Hatchback from './User/Component/hatchback';
// import Login from './User/Component/Login';
// import RegistrationForm from './User/Component/Register';
// import Slider from './User/SubComponent/Slider';
// import BookingPage from './User/Component/BookingPage';
// // import LandingPage from './User/Component/LandingPage';
import AllCars from './User/UserPanel/AllCars';
// import TotalCostUser from './User/Component/TotalCostUser';
// import Feedback from './User/Component/Feedback';
// import ViewDriverProfile from './User/Component/viewProfile';
import LiveCondition from './User/Component/LiveCondition';
// import NavbarUser from './User/SubComponent/Navbar';
import AdminDashboard from './Administrator/Components/AdminDashboard';
import AllUserDetails from './Administrator/Components/AllUserDetails';
import AllDriverDetails from './Administrator/Components/AllDriversDetails';
// import DriverHome from './DriverPanel/DriverHome';
// import DriverRegister from './DriverPanel/Components/Driverregister';
// import DriverLogin from './DriverPanel/Components/DriverLogin';
// import CreateProfile from './DriverPanel/Components/createDriverProfile';
import AllBookings from './Administrator/Components/AdminAllBooking';
// import LandingReal from './User/Component/LandingPage';
import UserHome from "./User/UserPanel/userhome"
import ExploreEvent from "./User/UserPanel/explorevent"
import ContectUs from './User/UserPanel/ContectUs';
import Blog from './User/UserPanel/Blog';
import Sedan from './User/Component/sedan';
import Suv from './User/Component/Suv';

function App() {
  return (
    <div>
       <Router>
           <Routes>
            {/* <Route element ={<NavbarUser/>} path ="/navbar"/> */}
            {/* <Route element ={<HomeUserInterface/>} path ="/home"/>
            <Route element ={<Login/>} path ="/login"/>
            <Route element ={<RegistrationForm/>} path ="/register"/>
            <Route element ={<Slider/>} path ="/slider"/>
            <Route element ={<BookingPage/>} path ="/bookingDetails"/>
            <Route element ={<LandingReal/>} path ="/landingpage"/>
            <Route element ={<TotalCostUser/>} path ="/totalcoast"/>
            <Route element ={<BookCar/>} path ="/bookcar"/>
            <Route element ={<TotalCostUser/>} path ="/totalcoast"/>
            <Route element ={<Feedback/>} path ="/feedback"/>
            <Route element ={<ViewDriverProfile/>} path ="/viewprofile"/>
            <Route element ={<LiveCondition/>} path ="/LiveCondition"/> */}
            <Route element ={<UserHome/>} path ="/userhome"/>
            <Route element ={<ExploreEvent/>} path ="/explorecar"/>
            <Route element ={<Feedback/>} path ="/feedback"/>
            <Route element ={<AllCars/>} path ="/bookcar"/>
            <Route element ={<ContectUs/>} path ="/contectus"/>
            <Route element ={<Blog/>} path ="/blog"/>
            <Route element ={<Getinfo/>} path ="/getinfocar"/>
            <Route element ={<Hatchback/>} path ="/hatchback"/>
            <Route element ={<Sedan/>} path ="/sedan"/>
            <Route element ={<Suv/>} path ="/suv"/>
            {/* <Route element ={<Form/>} path ="/from"/> */}
            
            <Route element ={<LiveCondition/>} path ="/LiveCondition"/>


            <Route element ={<AllUserDetails/>} path ="/allusers"/>
            <Route element ={<AdminDashboard/>} path ="/admindashboard"/>
            <Route element ={<AllDriverDetails/>} path ="/alldrivers"/>
            <Route element ={<AllBookings/>} path ="/allbookings"/>

            {/* <Route element ={<DriverHome/>} path ="/DriverHome"/>
            <Route element ={<DriverRegister/>} path ="/driverregister"/>
            <Route element ={<DriverLogin/>} path ="/driverlogin"/>
            <Route element ={<CreateProfile/>} path ="/createprofile"/> */}
           </Routes>
        </Router>       
    </div>
  );
}

export default App;
