import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/Projects.css'

import novaImg from '../assets/NovaTellus.jpg'
import todoImg from '../assets/TodoTask.jpg' 
import ropaImg from '../assets/Ropa.png'     

const PROJECTS_DATA = [
  { id: 1, title: 'NOVA TELLUS', path: '/project1', img: novaImg, class: 'item-1' },
  { id: 2, title: 'TODO TASK', path: '/project2', img: todoImg, class: 'item-2' },
  { id: 3, title: 'RESERVAS', path: '/project3', img: ropaImg, class: 'item-3' },
  { id: 4, title: 'ITCH.IO', path: '/project4', img: todoImg, class: 'item-4' },
  { id: 5, title: 'LCI BOGOTA', path: '/project5', img: novaImg, class: 'item-5' }
]

function Projects() {
  const [currentImage, setCurrentImage] = useState<string>(PROJECTS_DATA[0].img)

  return (
    <section className="projects">
      <div className="projects-content">
        
        {/* Lado Izquierdo: Menú */}
        <div className="projects-menu">
          <ul className="projects-list">
            {PROJECTS_DATA.map((proj) => (
              <li 
                key={proj.id} 
                className={`project-item ${proj.class}`}
                onMouseEnter={() => setCurrentImage(proj.img)}
              >
                <Link to={proj.path} className="project-link">
                  <span className="link-text">{proj.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="project-preview">
          {currentImage && (
            <img src={currentImage} alt="Preview" className="preview-img" />
          )}
        </div>

      </div>
    </section>
  )
}

export default Projects