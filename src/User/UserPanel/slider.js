import "./cssfiles/slider.css"

function Slider() {
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
            src={require('./../Assets/car10.jpg')}
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


      <div className="inner-part">
        <label htmlFor="imgTap" className="img">
          <img
            className="img-2"
            src={require('./../Assets/car11.jpg')}
            alt="Image 3"
          />
        </label>
        
      </div>

      <div className="inner-part">
        <label htmlFor="imgTap" className="img">
          <img
            className="img-3"
            src={require('./../Assets/car12.jpg')}
            alt="Image 3"
          />
        </label>
        
      </div>


    </div>
  </div>
  );
}

export default Slider;