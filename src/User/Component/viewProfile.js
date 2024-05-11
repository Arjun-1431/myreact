import "./CssFiles/viewDriver.css";
import NavbarUser from "../SubComponent/Navbar";
import DriverProfileCard from "../SubComponent/DriverProfileCard";

export default function ViewDriverProfile() {
  return (
    <div className="body">
      <div className="card-container">
          <NavbarUser />
        </div>
      <div className="row">
      
        <div className="card-container">
          <DriverProfileCard />
        </div>
        <div className="card-container">
          <DriverProfileCard />
        </div>
        <div className="card-container">
          <DriverProfileCard />
        </div>
      </div>
    </div>
  );
}
