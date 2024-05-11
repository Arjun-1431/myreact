import "./cssfiles/services.css"
import MonitorIcon from '@mui/icons-material/Monitor';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SystemSecurityUpdateIcon from '@mui/icons-material/SystemSecurityUpdate';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import GetAppIcon from '@mui/icons-material/GetApp';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
export default function Services(){
    return(
        <div>
            <section id="features" className="features-area item-full text-center cell-items default-padding">
      <div className="containers">
        <div className="row">
          <div className="col-md-12">
            <div className="site-heading text-center">
              <h2>Our <span className="span1">Features</span></h2>
              <h4>Checkout our latest features</h4>
            </div>
          </div>
        </div>
        <div className="row features-items">
          <div className="col-md-4 col-sm-6 equal-height">
            <div className="item">
              <div className="icon">
              <MonitorIcon/>
              </div>
              <div className="info">
                <h4>Monitoring</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 equal-height">
            <div className="item">
              <div className="icon">
              <DesignServicesIcon/>
              </div>
              <div className="info">
                <h4>Support Chat</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 equal-height">
            <div className="item">
              <div className="icon">
              <SupportAgentIcon/>
              </div>
              <div className="info">
                <h4>System Analysis</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 equal-height">
            <div className="item">
              <div className="icon">
              <SystemSecurityUpdateIcon/>
              </div>
              <div className="info">
                <h4>Basic Design</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 equal-height">
            <div className="item">
              <div className="icon">
              <GetAppIcon/>
              </div>
              <div className="info">
                <h4>First Run</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 equal-height">
            <div className="item">
              <div className="icon">
              <DirectionsWalkIcon/>
              </div>
              <div className="info">
                <h4>Get Better</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
        </div>
    )
}