import './CSSFiles/Slider.css'

export default function Slider(){
  return (
    // style="margin-top: 75%"
<div>
  

  
  <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel" style={{marginTop:"115%"}}>
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner sliderword">
    <div class="carousel-item active" >
      {/* <img src={require('./../Assets/Black.jpg')} class="d-block w-100" alt="..."/> */}
      <div class="carousel-caption d-none d-md-block text-black">
        <h1 className='heading'>EventFlow </h1>
        <p className='para'> Orchestrating Memorable Experiences.</p>
      </div>
    </div>
    <div class="carousel-item sliderword">
      {/* <img src={require('./../Assets/car1.jpg')} class="d-block w-100" alt="..."/> */}
      <div class="carousel-caption d-none d-md-block text-black">
        <h1>EventFlow</h1>
        <p>Orchestrating Memorable Experiences.</p>
      </div>
    </div>
    <div class="carousel-item sliderword">
      {/* <img src={require('./../Assets/car3.jpg')} class="d-block w-100" alt="..."/> */}
      <div class="carousel-caption d-none d-md-block ">
        <h1>EventFlow </h1>
        <p>Orchestrating Memorable Experiences.</p>
      </div>
    </div>
  </div>
  {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button> */}
</div>
</div>
    
  )
}