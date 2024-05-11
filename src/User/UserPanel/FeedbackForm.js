import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
import "./cssfiles/form.css"
import { useState } from 'react';
import axios from 'axios';


export default function Form() {

   

    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');



    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await axios.post('http://localhost:5001/feedback', { subject, message,firstname,lastname,email });
          Swal.fire({
            title: 'Success!',
            text: 'Feedback submit successful',
            icon: 'success',
            confirmButtonText: 'Ok'
        });
        
          
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
        <>
            <div className="container card message-container">
                <h1 className="message-title">Send A Feedback</h1>
                <form>
                    <label htmlFor="subject" className="subject">Subject</label>
                    <input type="text" name="subject" maxLength="45" onChange={(e) => setSubject(e.target.value)}/>

                    <label htmlFor="message" className="message">Message</label>
                    <textarea name="message" cols="30" rows="7" required maxLength="500" onChange={(e) => setMessage(e.target.value)}></textarea>

                    <label htmlFor="name" className="name">Name
                        <p id="break">(Optional)</p>
                    </label>
                    <input className="first-name" type="text" name="first-name" placeholder="First Name" maxLength="20" onChange={(e) => setFirstname(e.target.value)}/>
                    <input className="last-name" type="text" name="last-name" placeholder="Last Name" maxLength="20" onChange={(e) => setLastname(e.target.value)}/>

                    <label htmlFor="email" className="email">Email
                        <p id="break">(Optional)</p>
                    </label>
                    <input type="email" name="email" placeholder="example@email.com" onChange={(e) => setEmail(e.target.value)}/>


                    <p className="button-container">
                         <input className="button" type="submit" value="Send" onClick={handleSubmit}/>
                     </p>
                </form>
            </div>
        </>
    );
}
