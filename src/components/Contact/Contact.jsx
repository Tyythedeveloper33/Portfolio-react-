import React, { useState } from "react";
import emailjs from "emailjs-com";
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the form data to EmailJS
    emailjs.sendForm('service_yr1xtcv', 'template_5cyhz9d', e.target, 'FBvtaPn-ufIVu8eiD')
      .then(
        (result) => {
          console.log(result.text);
          setStatusMessage("Thank you for your message! I will get back to you soon.");
        },
        (error) => {
          console.log(error.text);
          setStatusMessage("Oops! Something went wrong. Please try again later.");
        }
      );

    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <div className="contact-container">
      <section className="contact-header">
        <h1>Contact Me</h1>
        <p>
          I'd love to hear from you! Whether you have a question, a potential project, or just want to connect, feel free to send me a message.
        </p>
      </section>

      <section className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="btn-submit">Send Message</button>
        </form>
      </section>

      {/* Status message after submission */}
      {statusMessage && <div className="status-message">{statusMessage}</div>}

      <section className="contact-footer">
        <p>If you'd prefer, you can also reach out to me via LinkedIn or email directly.</p>
      </section>
    </div>
  );
}
