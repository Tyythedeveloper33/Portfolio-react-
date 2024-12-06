
import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-container">
      <section className="contact-header">
        <h1>Contact Me</h1>
        <p>
          I'd love to hear from you! Whether you have a question, a potential project, or just want to connect, feel free to send me a message.
        </p>
      </section>

      <section className="contact-form">
        <form action="https://formspree.io/f/yourFormID" method="POST">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>
          </div>

          <button type="submit" className="btn-submit">Send Message</button>
        </form>
      </section>

      <section className="contact-footer">
        <p>If you'd prefer, you can also reach out to me via LinkedIn or email directly.</p>
      </section>
    </div>
  );
}
