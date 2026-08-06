import {Link} from 'react-router-dom'
import '../css/Projects.css'

function Projects() {
  return (
    <section className="projects">
      <div className="projects-content">
        <ul className="projects-list">
          <li>
            <Link to="/project1" className="project-link">
              Project 1
            </Link>
          </li>
          <li>
            <Link to="/project2" className="project-link">
              Project 2
            </Link>
          </li>
          <li>
            <Link to="/project3" className="project-link">
              Project 3
            </Link>
          </li>  
        </ul>
      </div>
    </section>
  )
}

export default Projects