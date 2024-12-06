import './Footer.css'; // Import the CSS file

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="social-icons">
          <a href="https://github.com/Tyythedeveloper33" className="github link">
            <img src="github.png" alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/tyler-webster23/" className="linkedin link">
            <img src="linkedin.png" alt="LinkedIn" />
          </a>
        </div>
        <div className="contact-info">
          <p>Email: webstertyler81@yahoo.com</p>
          <p>Phone: (240) 978-2695</p>
        </div>
      </div>
    </footer>
  );
}

