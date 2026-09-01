import "../css/Novatellus.css"
import novaImg from '../assets/nova tellus.png'

const TECHNOLOGIES_LIST = [
  "UNITY",
  "C#",
  "BLENDER",
  "PHOTOSHOP",
  "ILLUSTRATOR",
  "AUDACITY",
  "GITHUB"
]

function Novatellus() {
  return (
    <div className='project-detail-container'>
      
      {/* 1. Imagen Superior Completa */}
      <div className='project-hero-img'>
        <img src={novaImg} alt="Nova Tellus Preview" />
      </div>

      {/* 2. Sección de Tecnologías */}
      <div className='tech-section'>
        <h3 className='tech-title'>TECNOLOGÍAS USADAS</h3>
        <div className='tech-grid'>
          {TECHNOLOGIES_LIST.map((tech, index) => (
            <div key={index} className='tech-card'>
              <span className='tech-name'>{tech}</span>
            </div>
          ))}
        </div>
      </div>

      <hr className='divider' />

      {/* 3. Descripción e Información del Proyecto */}
      <div className='project-description'>
        <h1 className='project-title'>NOVA TELLUS</h1>
        <p className='project-text'>
          Este proyecto fue un videojuego en 3D del cual tuvo un tiempo 
          de desarrollo de 6 meses dejándolo terminado como una demo, donde se incluyó historia,
          jugabilidad, personajes tanto como el principal como los animales que componen el ecosistema del juego.
        </p>

        {/* Botón opcional para el repositorio / demo al estilo Persona */}
        <div className='project-actions'>
          <a href="https://github.com" target="_blank" rel="noreferrer" className='repo-btn'>
            VER REPO
          </a>
        </div>
      </div>

    </div>
  )
}

export default Novatellus;