import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import FeedbackIcon from '@mui/icons-material/Feedback';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import { useNavigate } from 'react-router-dom';

export default function AdminSidebar(){
  const navigate = useNavigate()

  const handleAllUsers =()=>{
    navigate('/allusers')
  }
  const handleDrivers=()=>{
    navigate('/alldrivers')
  }
  const handleAllBookings=()=>{
    navigate('/allbookings')
  }
    return(
        <div>
  <React.Fragment>
    <ListItemButton onClick ={handleAllUsers}>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary=" Users" sx ={{flex: 0,marginLeft:'90px'}}/>
    </ListItemButton>
    <ListItemButton onClick ={handleDrivers}>
      <ListItemIcon>
        <AirlineSeatReclineNormalIcon />
      </ListItemIcon>
      <ListItemText primary=" Drivers" sx ={{flex: 0,marginLeft:'90px'}}/>
    </ListItemButton>
    <ListItemButton onClick={handleAllBookings}>
      <ListItemIcon>
        <FormatListBulletedIcon />
      </ListItemIcon>
      <ListItemText primary="Booking " sx ={{flex: 0,marginLeft:'90px'}}/>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <FeedbackIcon />
      </ListItemIcon>
      <ListItemText primary=" Feedbacks" sx ={{flex: 0,marginLeft:'90px'}}/>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <DisplaySettingsIcon />
      </ListItemIcon>
      <ListItemText primary="Booking " sx ={{flex: 0,marginLeft:'90px'}}/>
    </ListItemButton>
  </React.Fragment>



  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Booking Graph" sx ={{flex: 0,marginLeft:'120px'}}/>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <CurrencyRupeeIcon />
      </ListItemIcon>
      <ListItemText primary="Cost manage" sx ={{flex: 0,marginLeft:'120px'}}/>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AirportShuttleIcon />
      </ListItemIcon>
      <ListItemText primary="Insert cars" sx ={{flex: 0,marginLeft:'120px'}}/>
    </ListItemButton>
  </React.Fragment>
  </div>
    )
}