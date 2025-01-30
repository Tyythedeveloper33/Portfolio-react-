import './Footer.css'; // Import the updated CSS file

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="social-media">
          <a href="https://github.com/Tyythedeveloper33" className="social-link github">
            <img src="github.png" alt="GitHub" className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/tyler-webster23/" className="social-link linkedin">
            <img src="linkedin.png" alt="LinkedIn" className="social-icon" />
          </a>
        </div>
        <div className="contact-details">
          <p className="contact-info">Email: webstertyler81@yahoo.com</p>
          <p className="contact-info">Phone: (240) 978-2695</p>
        </div>
      </div>
    </footer>
  );
}
