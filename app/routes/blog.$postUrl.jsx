import { Link, useLoaderData, useRouteError, isRouteErrorResponse } from "@remix-run/react" 
import { getPost } from "../models/post.server";
import { formatearFecha } from "~/utils/helpers"

export function meta({data}){
  if(!data) {
        return [{
                    title:"Blog inexistente",
              },
                {
                    description:`Venta de guitarras, nuestra coleccion, blog no encontrado}`      
                }
            ]
  }
// Una vez que el loader tiene informacion, se pasa automaticamente y data se hace disponible
return(
  [
      {
          title:`GuitarLA - ${data.data[0].attributes.titulo}`
      },
      {
          description:`Venta de guitarras, nuestro blog, blog ${data.data[0].attributes.titulo}`      
      }
  ]
)
}
export async function loader ({params}){
  const {postUrl} = params
  const post = await getPost(postUrl)
  if(post.data.length === 0){
    throw new Response("", {
      status:404, 
      statusText: "Blog inexistente"
    })
  }

  return post 
}
export function ErrorBoundary(){
  const error = useRouteError()
  if (isRouteErrorResponse(error)) {
      return(
          <>  
              <p className="error">{error.status} {error.statusText}</p>
              <Link className='error-enlace' to="/">Tal vez quieras volver a la pagina principal</Link>
          </>
      ) 
  }
}

export default function Post() {
    const post = useLoaderData()
    const {titulo, contenido, imagen, publishedAt} = post?.data[0]?.attributes
    return (
    <article className="post mt-3">
       <img className="imagen" src={imagen?.data?.attributes?.url} alt={`Imagen blog ${titulo}`}  />
        <div className="contenido">
          <h3>{titulo}</h3>
          <p className="fecha">{formatearFecha(publishedAt)}</p>
          <p className="texto">{contenido[0].children[0].text}</p>
        </div>
    </article>
  )
}

