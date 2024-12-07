import './Portfolio.css';

// Sample project data (replace with your own projects)
const projects = [
  {
    title: 'EduBnB',
    description: 'A description of the project, the technologies used, and its functionality.',
    image: 'Edubnb.png',
    link: 'https://grounded-project.onrender.com/',
  },
  {
    title: 'UFree',
    description: 'A full-stack application I built with Node.js, Express, and MongoDB.',
    image: 'ufree.png',
    link: 'https://ufree-f24a66c626ea.herokuapp.com/',
  },
];

const futureProjects = [
  {
    title: 'Space Continuum',
    description: 'A project showcasing my skills in front-end development with React. (In Progress)',
    image: 'Space-continuum.png',
    link: 'https://example.com/project2',
  },
  {
    title: 'Ghost Walker',
    description: 'An upcoming e-commerce store for clothing. (In Development)',
    image: 'GhostWalker.webp', // Replace with the actual image for this project
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
