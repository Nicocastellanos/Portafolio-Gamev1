import "../css/Technologies.css"

export default function Tecnologias({titulo, descripcion}: {titulo: string, descripcion: string}) {

  return (
    <div>
        <h1 className='title'>{titulo}</h1>
        <p className='description'>{descripcion}</p>
    </div>
  )
}
