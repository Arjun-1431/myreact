import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DetailsIcon from '@mui/icons-material/Details';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import FeedbackIcon from '@mui/icons-material/Feedback';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import LocalCarWashIcon from '@mui/icons-material/LocalCarWash';
import { useNavigate } from 'react-router-dom';


export default function Sidebar(){
  const nevigate = useNavigate();

  const handleBookingDetails=()=>{
      nevigate('/bookingDetails')
  }
  const handleTotalCost=()=>{
    nevigate('/totalcoast')
  }
  const handlefeedback=()=>{
    nevigate('/feedback')
  }
  const handlevewProfile =()=>{
    nevigate('/viewprofile')
  }
  const handleSeaftyFeatures=()=>{
    nevigate('/LiveCondition')
  }
  //feedback
    return(
        
  <React.Fragment>
    <ListItemButton onClick ={handleBookingDetails}>
      <ListItemIcon>
        <DetailsIcon />
      </ListItemIcon>
      <ListItemText primary="Booking details" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LocationOnIcon />
      </ListItemIcon>
      <ListItemText primary="locate car booking" />
    </ListItemButton>
    <ListItemButton onClick={handleTotalCost}>
      <ListItemIcon>
        <CreditScoreIcon />
      </ListItemIcon>
      <ListItemText primary="Total coast" />
    </ListItemButton>
    <ListItemButton onClick ={handlefeedback}>
      <ListItemIcon>
        <FeedbackIcon />
      </ListItemIcon>
      <ListItemText primary="Submit Feedback" />
    </ListItemButton>
    <ListItemButton onClick={handlevewProfile}>
      <ListItemIcon>
        <AccountBoxIcon />
      </ListItemIcon>
      <ListItemText primary="View Driver Profile" />
    </ListItemButton>

    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton onClick={handleSeaftyFeatures}>
      <ListItemIcon>
        <HealthAndSafetyIcon />
      </ListItemIcon>
      <ListItemText primary="LiveCondition & recept" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LocationOnIcon />
      </ListItemIcon>
      <ListItemText primary="Safety features " />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LocalCarWashIcon />
      </ListItemIcon>
      <ListItemText primary="locate Car on Local area" />
    </ListItemButton>
  </React.Fragment>
  
    )
}