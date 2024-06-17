import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Button } from './styles/Button';
import { useAuth } from './context/auth';

const defaultContactForm = {
  username: "",
  email: "",
  message: ""
};

const Contact = () => {
  const [contact, setContact] = useState(defaultContactForm);
  const { user } = useAuth();
  const [userData, setUserData] = useState(true);

  useEffect(() => {
    if (userData && user) {
      setContact({
        username: user?.username || "",
        email: user?.email || "",
        message: ""
      });
      setUserData(false);
    }
  }, [user, userData]);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setContact((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/api/form/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(contact)
      });
      if (response.ok) {
        setContact(defaultContactForm);
        const data = await response.json();
        console.log(data);
        toast.success("Message sent successfully");
      }
    } catch (error) {
      toast.error("Message not sent");
    }
  };

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto max-w-xl px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <form className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4" onSubmit={submitForm}>
          <div className="mb-6">
            <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              value={contact.username}
              onChange={handleInputChange}
              autoComplete="off"
              required
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={contact.email}
              onChange={handleInputChange}
              autoComplete="off"
              required
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
            <textarea
              name="message"
              id="message"
              value={contact.message}
              onChange={handleInputChange}
              cols={30}
              rows={6}
              required
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <Button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
