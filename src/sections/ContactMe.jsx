import React,{useState} from 'react';
import { IoMdMail } from 'react-icons/io';
import { ABOUT_ME } from '../utils/data';
import ContactInfoCard from '../components/ContactInfoCard';
import { IoPhonePortraitOutline } from 'react-icons/io5';
import { FaLinkedin } from "react-icons/fa";
import axios from 'axios';


const ContactMe = () => {
  

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit =(e) =>{
    e.preventDefault();
    if (message.trim() === ''){
      alert("Enter the Input sections")
    } else{

      const data = {
        Name:name,
        Email: email,
        Message:message
      }
  
      axios.post('https://api.sheetbest.com/sheets/f1bf133f-9f86-410a-be02-2a8726c910aa',data).then(alert('Details sent to Jatin Pidugu !'))
      setName('');
      setEmail('');
      setMessage('');
    }
    //console.log(name, email,message);

    
  }

  return (
    <section id='contact' >
      <div className="container mx-auto p-10">
        <div className="w-full lg:w-[60vw] mx-auto">
          <h4 className="section-title">Contact Me</h4>
          <p className="text-xl text-center mt-4 leading-6">
            Lets Connect! Reach out for job opportunities, collaborations, or freelance work I am ready to collaborate with ideas !🚀
          </p>
        </div>
        <div className="p-20">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 max-w-full overflow-hidden">
        <div>
          <ContactInfoCard icon={<IoMdMail />} text={ABOUT_ME.email} />
          <ContactInfoCard icon={<IoPhonePortraitOutline />} text={ABOUT_ME.phone} />
          <ContactInfoCard icon={<FaLinkedin />} text={ABOUT_ME.LinkedIn} />
        </div>

        <div>
          <h5 className="md:hidden text-secondary text-lg font-medium mt-4 pb-5">Contact Form</h5>

        <form className="flex flex-col " autoComplete="off" onSubmit={handleSubmit}>
          <input
          type="text"
          onChange={(e)=>setName(e.target.value)} 
          value={name}
          placeholder="Full Name"
          id=""
          className="input-box"
          autoComplete="off"
          />

        <input
          type="email"
          onChange={(e)=>setEmail(e.target.value)} 
          value={email}
          placeholder="E-Mail"
          id=""
          className="input-box"
          autoComplete="off"
          />
          
        <textarea
          type="text"
          onChange={(e)=>setMessage(e.target.value)} 
          value={message}
          placeholder="Message"
          id=""
          rows={3}
          className="input-box"
          autoComplete="off"
          />
          <button className="action-btn btn-scale-anim">SUBMIT</button>
        </form>
        </div>
      </div>
      </div>
      </div>
    </section>
  )
}

export default ContactMe;