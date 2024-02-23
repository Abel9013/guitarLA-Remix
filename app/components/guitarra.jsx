import { Link } from "@remix-run/react"
function Guitarra({guitarra}) {
    const { descripcion, imagen,nombre, precio, url} = guitarra
    const descripcionIndividual = descripcion[0].children[0].text
    const imagenFinal = imagen.data.attributes.formats.medium.url
  return (
    <div className="guitarra">
        <img src={imagenFinal} alt={`imagen guitarra ${nombre}`} />
        <div className="contenido">
            <h3>{nombre}</h3>
            <p className="descripcion">{descripcionIndividual}</p>
            <p className="precio">${precio}</p>
            <Link className="enlace" to={`/guitarras/${url}`}>Ver Producto</Link>
           
        </div>
    </div>
  )
}

export default Guitarra