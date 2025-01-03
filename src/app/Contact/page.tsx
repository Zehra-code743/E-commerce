'use client'; // This directive ensures that the component is treated as a client component

import { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"; // Importing icons from react-icons

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-200 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* Page Header */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-gray-800 mb-6">
          Contact Us
        </h1>
        <p className="text-center text-gray-600 mb-12 text-lg sm:text-xl md:text-2xl">
          We'd love to hear from you! Reach out with any questions, feedback, or support requests.
        </p>

        {/* Contact Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log({ name, email, message });
          }}
          className="bg-white shadow-xl rounded-lg p-8 space-y-6 transform transition-all hover:scale-105 hover:shadow-2xl"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full p-4 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500 shadow-sm transition-all"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full p-4 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500 shadow-sm transition-all"
                placeholder="yourname@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1 block w-full p-4 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500 shadow-sm transition-all"
                rows={6}
                placeholder="Your message here..."
              />
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-pink-600 text-white font-semibold py-3 rounded-md hover:bg-pink-700 transition-all transform hover:scale-105"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Contact Information */}
        <div className="mt-12 text-center bg-white py-8 rounded-lg shadow-md">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-800">Get in Touch</h2>
          <div className="flex flex-col sm:flex-row sm:justify-evenly items-center space-y-4 sm:space-y-0">
            <p className="text-gray-700 mb-4 sm:mb-0">
              <FaEnvelope className="inline-block mr-2 text-pink-600" />
              <strong>Email:</strong>{" "}
              <a href="mailto:support@wintercollection.com" className="text-pink-600 hover:underline">
                support@wintercollection.com
              </a>
            </p>
            <p className="text-gray-700 mb-4 sm:mb-0">
              <FaPhone className="inline-block mr-2 text-pink-600" />
              <strong>Phone:</strong>{" "}
              <a href="tel:+1234567890" className="text-pink-600 hover:underline">
                +1 (234) 567-890
              </a>
            </p>
            <p className="text-gray-700">
              <FaMapMarkerAlt className="inline-block mr-2 text-pink-600" />
              <strong>Address:</strong> 123 Winter Lane, Snowville, USA
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
