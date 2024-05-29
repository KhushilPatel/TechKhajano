import React from 'react';
import { useState } from 'react';

import { toast } from 'react-toastify';
import { useAuth } from './store/auth';

const defaultContactForm={
  username:"",
  email:"",
  message:""

}
const Contact = () => {

  const [contact, setcontact] = useState(defaultContactForm)
  const {user}=useAuth()
 
  const [userData, setUserData] = useState(true)

  if(userData && user){
    setcontact({
      username:user?.username,
      email:user?.email,
      message:""
    })
    setUserData(false)
  }
  function handleInputChange(e) {
    let name=e.target.name
    let value=e.target.value
   setcontact((prev)=>({
      ...prev,
      [name]:value
   }))
  }

  const submitForm=async(e)=> {
    e.preventDefault()
   try {
     const response= await fetch("http://localhost:4000/api/form/contact",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(contact)
     })
     if(response.ok){
      setcontact(defaultContactForm)
      const data=await response.json();
      console.log(data);
      toast.success("Message sent succesfully")
     }
   } catch (error) {
    toast.error("Message not send")
   } 
   }
  return (
    <section className="bg-bubble-gum py-20">
      <div className="container mx-auto max-w-lg px-4">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={submitForm}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username</label>
            <input type="text" name="username" id="username" value={contact.username} onChange={handleInputChange} autoComplete='off' required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input type="email" name="email" id="email" value={contact.email} onChange={handleInputChange} autoComplete='off' required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
            <textarea name="message" id="message" value={contact.message} onChange={handleInputChange} cols={30} rows={10} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
          </div>
          <div className="flex justify-end">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
