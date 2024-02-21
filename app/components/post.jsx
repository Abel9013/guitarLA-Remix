import { Link } from "@remix-run/react"
import { formatearFecha } from "~/utils/helpers"

function Post({post}) {
    const { contenido, imagen, titulo, url, publishedAt } = post
    // console.log(contenido[0].children[0].text);
    // const descripcionIndividual = descripcion[0].children[0].text
  return (
    <article className="post">
        <img className="imagen" src={imagen.data.attributes.formats.medium.url} alt={`Imagen blog ${titulo}`}  />
        <div className="contenido">
          <h3>{titulo}</h3>
          <p className="fecha">{formatearFecha(publishedAt)}</p>
          <p className="resumen">{contenido[0].children[0].text}</p>
          <Link className="enlace" to={`/blog/${url}`}> Leer Post </Link>
        </div>
    </article>
  )
}

export default Post