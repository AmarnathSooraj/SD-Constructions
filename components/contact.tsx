'use client';

import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, phone, message } = formData;

    const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AMessage: ${message}`;

    const whatsappURL = `https://wa.me/918075595509?text=${whatsappMessage}`;

    window.open(whatsappURL, '_blank');
  };

  return (
    <section className="w-full mx-auto py-10 bg-[#f0f0e3]">
      <h1 className="text-center mb-2 text-4xl font-serif text-gray-900">Contact Us</h1>
      <p className="text-center text-lg text-gray-600 max-w-md mx-auto mb-8">
        We'd love to hear from you! Fill out the form and we’ll get back to you as soon as possible.
      </p>
      <div className="max-w-[1200px] mt-10 mx-auto px-4 flex flex-col lg:flex-row items-start justify-between gap-8">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
          <h2 className="text-5xl font-medium mb-2">Let's Talk</h2>
          <p className="text-base">
            Reach out to us by filling out this form. We'll get back to you as soon as possible!
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full lg:w-1/2 flex flex-col space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border border-gray-400 p-3 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border border-gray-400 p-3 rounded"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone"
            value={formData.phone}
            onChange={handleChange}
            className="border border-gray-400 p-3 rounded"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
            className="border border-gray-400 p-3 rounded"
          />
          <button
            type="submit"
            className="bg-gray-900 text-white py-2 px-6 rounded hover:bg-gray-800 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
