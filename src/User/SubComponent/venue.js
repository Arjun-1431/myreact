import '../SubComponent/CSSFiles/venue.css'
export default function Venue() {
    return (
      <div>
        <div className="blog-card">
          <input type="radio" name="select" id="tap-1" defaultChecked />
          <input type="radio" name="select" id="tap-2" />
          <input type="radio" name="select" id="tap-3" />
          <input type="checkbox" id="imgTap" />
          <div className="sliders">
            <label htmlFor="tap-1" className="tap tap-1"></label>
            <label htmlFor="tap-2" className="tap tap-2"></label>
            <label htmlFor="tap-3" className="tap tap-3"></label>
          </div>
          <div className="inner-part">
            <label htmlFor="imgTap" className="img">
              <img
                className="img-1"
                // src={require('../Assets/carHd.jpg')}
                alt="Image 1"
              />
            </label>
            <div className="content content-1">
              <span>Popular Venue</span>
              <div className="title">Grand Hotel</div>
              <div className="text">
              Nestled in the heart of opulence and sophistication, the Grand Hotel stands as an epitome of luxury and refinement. You are enveloped in an aura of timeless elegance.
              </div>
              <button>Read more</button>
            </div>
          </div>
          <div className="inner-part">
            <label htmlFor="imgTap" className="img">
              <img
                className="img-2"
                // src={require('../Assets/carHd.jpg')}
                alt="Image 2"
              />
            </label>
            <div className="content content-2">
              <span>Popular Venue</span>
              <div className="title">The Udaipur Palace</div>
              <div className="text">
              The Udaipur Palace, is a captivating blend of Rajasthani and Mughal influences, showcasing delicate mirror work, and vibrant frescoes that narrate the tales of bygone royalty. 
              </div>
              <button>Read more</button>
            </div>
          </div>
          <div className="inner-part">
            <label htmlFor="imgTap" className="img">
              <img
                className="img-3"
                // src={require('../Assets/carHd.jpg')}
                alt="Image 3"
              />
            </label>
            <div className="content content-3">
              <span>Popular Venue</span>
              <div className="title">Hideway Heaven</div>
              <div className="text">
              Hideaway Heaven Hotel emerges as a tranquil haven, offering an escape into unparalleled serenity.This boutique hotel seamlessly blends luxury with the allure of untouched landscapes. 
              </div>
              <button>Read more</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  