import React, {useState} from 'react';


function Contact() {

    const [formData, setFormData]=useState({
    name:"",
    email:"",
    inquiry:"",
    message:"",
  });


  const handleInput = (e)=>{
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

    
  const handleSubmit = (e) => {
    console.log(
      console.log('Form Data:', {formData})

    ); 
    e.preventDefault(); 
  }



  return (
    <div className="Contact">
      <h1>Contact Me</h1>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text"  value={formData.name} name="name"  onChange={handleInput}/>
        <label htmlFor="email" >E-mail Address</label>
        <input type="email" value={formData.email} name="email" onChange={handleInput}/>
        <label htmlFor="inquirytype">Type of Inquiry</label>
        <select name="inquiry" value={formData.inquiry} onChange={handleInput}>
          <option value="General Inquiry">General Inquiry</option>
          <option value="Technical Support">Technical Support</option>
          <option value="Feedback">Feedback</option>
          <option value="Other">Other</option>
        </select>
        <label htmlFor="message">Your Message</label>
        <textarea name="message" value={formData.message} onChange={handleInput}></textarea>
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default Contact;



