import React, { useEffect } from 'react';
import 'jquery-ui/ui/widgets/datepicker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './cssfiles/getinfo.css';
import {useNavigate} from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'

export default function Getinfo() {

  const nevigate = useNavigate()

  const [location, setLocation] = useState('');
  const [persion, setPersion] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [request, setRequest] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5001/details', { location, persion,startDate,endDate,request });
      Swal.fire({
        title: 'Success!',
        text: 'Feedback submit successful',
        icon: 'success',
        confirmButtonText: 'Ok'
    });
    nevigate('/bookcar')
    
      
    } catch (error) {
      console.error('Error registering user:', error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        
      });
    }
  };







  return (
    <div>
       <div className='photo'>
        <h1 className='first'>Booking Online Now</h1>
        <p>Please fill out this form with the required information</p>
        <form >
         
           
            <label>
              Your location</label>
              <input type="text" id="location" name="location" required  onChange={(e) => setLocation(e.target.value)}/>
            
            
            <br />
            <label>
              No. of Person</label>
              <input type="number" id="guestnumber"  name="guestnumber" required onChange={(e) => setPersion(e.target.value)}/>
            
            <br />
            <label>
              Start Date</label>
              <input type="date" id="startdate"  name="startdate" required onChange={(e) => setStartDate(e.target.value)}/>
            
            <br />
            <label>
              End Date</label>
              <input type="date" id="enddate" name="enddate" required onChange={(e) => setEndDate(e.target.value)}/>
            
         
          
          <br/>
            <label>
              Additional Requests</label>
              <textarea className="textt" name="additional" rows="5" cols="30"  placeholder="Your message ..." onChange={(e) => setRequest(e.target.value)}></textarea>
            
         
          <input type="submit" value="Submit" onClick={handleSubmit} className="submit-button"/>
        </form>
      </div>
    </div>
  );
}
