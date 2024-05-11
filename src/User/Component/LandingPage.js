

import NavbarUser from "../SubComponent/Navbar";
import Slider from "../SubComponent/Slider";
import Blog from "../SubComponent/blog";
import Venue from "../SubComponent/venue.js";
// import Footer from "../SubComponent/Footer.js";

export default function Home() {
  return (  
    <div>
      <NavbarUser />
      <div>
        <Slider />
      </div>
      <div>
        <Blog />
      </div>
      <div>
        <Venue />
      </div>
      {/* <div>
        <Footer />
      </div> */}
    </div>
  );
}


