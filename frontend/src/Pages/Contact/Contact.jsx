import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    alert("Thank you! We will contact you soon 😊");
  }

  return (
    <div className="contact-page">
      {/* HEADER */}
      <div className="contact-header">
        <h1>Contact <span>Us</span></h1>
        <p>We’d love to hear from you. Let’s build your future together.</p>
      </div>

      {/* CONTENT */}
      <div className="contact-content">

        {/* LEFT INFO */}
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>
            Feel free to reach out for career guidance,  
            project collaboration, or general inquiries.
          </p>

          <div className="info-box">
            <span>📧</span>
            <div>
              <h4>Email</h4>
              <p>tamanna@example.com</p>
            </div>
          </div>

          <div className="info-box">
            <span>📍</span>
            <div>
              <h4>Location</h4>
              <p>Himachal Pradesh, India</p>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send a Message</h2>

          <input
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
            required
          />

          <input
            name="email"
            placeholder="Your Email"
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Write your message..."
            rows="5"
            onChange={handleChange}
            required
          />

          <button type="submit">Send Message 🚀</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
