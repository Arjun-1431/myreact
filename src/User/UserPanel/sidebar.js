import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import {useNavigate} from "react-router-dom"
export default function Sidebar() {
const navigate = useNavigate()

const handleHatchback =()=>{
  navigate('/hatchback')
}
const handleSedan =()=>{
  navigate('/sedan')
}
const handleSuv =()=>{
  navigate('/suv')
}

  return (
    <>
      <React.Fragment>
        <ListItemButton >
          <ListItemIcon>
            <AirportShuttleIcon />
          </ListItemIcon>
          <ListItemText primary="Hatchback" sx ={{flex: 0,marginLeft:'70px'}} onClick={handleHatchback}/>
        </ListItemButton>
        <ListItemButton >
          <ListItemIcon>
            <AirportShuttleIcon />
          </ListItemIcon>
          <ListItemText primary="Sedan" sx ={{flex: 0,marginLeft:'70px'}} onClick ={handleSedan}/>
        </ListItemButton>
        <ListItemButton >
          <ListItemIcon>
            <AirportShuttleIcon />
          </ListItemIcon>
          <ListItemText primary="SUV" sx ={{flex: 0,marginLeft:'70px'}} onClick ={handleSuv}/>
        </ListItemButton>
      </React.Fragment>
    </>
  );
}
