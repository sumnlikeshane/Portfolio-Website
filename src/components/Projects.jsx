import { ArrowUpRight } from 'lucide-react';
import '../Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Music Visualized',
      description: 'Volume and Pitch controld through CV',
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop',
      link:''
    },
    {
      title: 'Anime Database',
      description: 'Database of all Animes',
      image: '/animedatabase.png',
      link:'https://sumnlikeshane.github.io/Anime-Database/'
    },
    {
      title: 'Netflix clone',
      description: 'Clone of the popular website',
      image: '/netflixlogo.png',
      link:'https://gleaming-mooncake-00dd94.netlify.app/'
    }
  ];

  return (
    <div className="projects-section">
      <div className="name-section">
            <h1>RECENT</h1>
            <h2>PROJECTS</h2>
      </div>
      <div className="projects-list">
        {projects.map((project, index) => (
          <a className="project-card" key={index} href={project.link} target="_blank" rel="noopener noreferrer">
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
            <ArrowUpRight className="arrow-icon" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;