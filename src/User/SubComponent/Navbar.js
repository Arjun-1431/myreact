
import './CSSFiles/Navbar.css'
import { useNavigate } from 'react-router-dom'


export default function NavbarUser(){

     const navigate = useNavigate()
     const handleevent=()=>{
      navigate('/bookevent')
     }
     const handlegallery=()=>{
      navigate('/gallery')
     }
    
   

    
    return <div>
   <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand me-auto" href="#">
          <img src={require('./../../User/Component/Assets/1.png')} style={{width:'150px', height:'82px'}} alt="..."/>
          </a>
         
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Event Management
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
              <li className="nav-item">
                  <a className="nav-link mx-lg-2" href="/home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a onClick={handlegallery} className="nav-link mx-lg-2">
                    View Gallery
                  </a>
                </li>

                <li className="nav-item">
                  <a onClick={handleevent} className="nav-link mx-lg-2" href="#">
                    Book Event
                  </a>
                </li>


                <li className="nav-item">
                  <a className="nav-link mx-lg-2" href="/feedback">
                    Feedback
                  </a>
                </li>


              </ul>
            </div>
          </div>
          <a href='/login' class="login-button">Log-out</a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
      <div>
     </div>



    </div>
}