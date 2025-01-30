import './Portfolio.css';

// Sample project data (replace with your own projects)
const projects = [
  {
    title: 'EduBnB',
    description: "EduBnb is a platform that allows users to book rental places, list new spots, and leave reviews for their stays. It's a convenient way to find and share lodging options while building a community of travelers. The tech stack used for the project includes MongoDB, Express, React, and Redux.",
    image: 'Edubnb.png',
    link: 'https://grounded-project.onrender.com/',
  },
  {
    title: 'UFree',
    description: ' event planning platform that simplifies scheduling by using an algorithm to find the perfect time for everyone based on their availability. Users can send invite codes to others to collect availability, create or delete events, and manage invitations. The tech stack includes MongoDB, Express, React, and Redux.',
    image: 'ufree.png',
    link: 'https://ufree-f24a66c626ea.herokuapp.com/',
  },
];

const futureProjects = [
  {
    title: 'DonorsFlow',
    description: "This project focuses on creating a seamless donation platform that connects donors with impactful causes. Built using Python for the backend, React and Redux for dynamic front-end experiences, and PostgreSQL for efficient data management. (In Development)",
    image: 'DonorsFlow.webp',
    link: 'https://example.com/project2',
  },
  {
    title: 'Amerind Nation',
    description: "Amerind Nation is a project focused on providing Native American communities with the energy infrastructure and knowledge needed for long-term stability. It uses Python for the backend, React and Redux for a dynamic front-end, and PostgreSQL(In Development)",
    image: 'Amerind.webp',
    link: 'https://example.com/project2',
  },
  {
    title: 'SiteMagnet',
    description: 'SiteMagnet is a funnel website designed to help clients build lead-converting sites that scale their business, featuring a built-in dashboard for easy management. Using Python, PostgreSQL, React, and Redux, it offers a seamless and scalable solution for businesses looking to grow.(In Development)',
    image: 'Sitemagnet.webp', // Replace with the actual image for this project
    link: 'https://example.com/project3',
  },
];

export default function Portfolio() {
  return (
    <div className="portfolio-container">
      <h1 className="portfolio-header">My Projects</h1>
      <p className="portfolio-intro">Here are some of the projects I have worked on. Click to learn more!</p>

      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div key={index} className="portfolio-item">
            <img src={project.image} alt={project.title} className="portfolio-image" />
            <div className="portfolio-details">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-view-project">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>

      <h1 className="portfolio-header">Future Projects</h1>
      <p className="portfolio-intro">Here are some of the exciting projects I am working on or planning to start soon!</p>

      <div className="portfolio-grid">
        {futureProjects.map((project, index) => (
          <div key={index} className="portfolio-item">
            <img src={project.image} alt={project.title} className="portfolio-image" />
            <div className="portfolio-details">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-view-project">
                Coming Soon!!
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
