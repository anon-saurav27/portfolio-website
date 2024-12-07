import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Facebook, Instagram } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-100 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-purple-800 mb-8 text-center">Contact Me</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-purple-600 mb-4">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                ></textarea>
              </div>
              <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition duration-300">
                Send Message
              </button>
            </form>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-purple-600 mb-4">Contact Information</h2>
            <div className="space-y-4">
              <p className="flex items-center text-gray-700">
                <Mail className="mr-2 text-purple-600" /> saurav130giri@gmail.com
              </p>
              <p className="flex items-center text-gray-700">
                <Phone className="mr-2 text-purple-600" /> +977 9741759097
              </p>
              <p className="flex items-center text-gray-700">
                <MapPin className="mr-2 text-purple-600" /> Kathmandu, Nepal
              </p>
            </div>
            
            <h2 className="text-2xl font-bold text-purple-600 mt-8 mb-4">Connect with me</h2>
            <div className="flex space-x-4">
              <a target='blank' href="https://www.linkedin.com/in/saurav-giri-3b3a62288/" className="text-purple-600 hover:text-purple-800">
                <Linkedin size={24} />
              </a>
              <a target='blank' href="https://github.com/anon-saurav27" className="text-purple-600 hover:text-purple-800">
                <Github size={24} />
              </a>
              <a target='blank' href="https://www.facebook.com/saurav.130.giri" className="text-purple-600 hover:text-purple-800">
                <Facebook size={24} />
              </a>
              <a target='blank' href="https://www.instagram.com/sauravgiri_27/" className="text-purple-600 hover:text-purple-800">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

