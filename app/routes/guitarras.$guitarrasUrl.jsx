import { useState } from "react"
import { useLoaderData , useOutletContext , Link, useRouteError, isRouteErrorResponse} from "@remix-run/react"
import { getGuitarra } from '~/models/guitarras.server'



export async function loader({params}){
  const { guitarrasUrl } = params
  const guitarra = await getGuitarra(guitarrasUrl)
  // console.log(guitarra);
  if (guitarra.data.length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Guitarra No Encontrada",
    });
  }

  return guitarra
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
export function meta({data}){
  if(!data) {
        return [{
                    title:"Guitarra no encontrada",
              },
                {
                    description:`Venta de guitarras, nuestra coleccion, guitarra no encontrada}`      
                }
            ]
  }
// Una vez que el loader tiene informacion, se pasa automaticamente y data se hace disponible
return(
  [
      {
          title:`GuitarLA - ${data.data[0].attributes.nombre}`
      },
      {
          description:`Venta de guitarras, nuestra coleccion, guitarra ${data.data[0].attributes.nombre}`      
      }
  ]
)
}

const GuitarraUrl = () => {
    const {agregarCarrito} = useOutletContext()
    const [cantidad, setCantidad] = useState(0)
    const guitarra = useLoaderData()
    const {nombre, descripcion, imagen, precio} = guitarra.data[0].attributes

    // console.log(useOutletContext);    
    const handleSubmit = e => {
        e.preventDefault()
        if(cantidad < 1) {
          alert("Seleccione una cantidad correcta")
          return
        }
         const guitarraSeleccionada = {
          id: guitarra.data[0].id,
          imagen: imagen.data.attributes.formats.medium.url,
          nombre,
          precio,
          cantidad
        }
        agregarCarrito(guitarraSeleccionada)
    }
  return (
    <div className="guitarra">
      <img src={imagen.data.attributes.formats.medium.url} alt={`imagen guitarra ${nombre}`} />
      <div className="contenido">
          <h3>{nombre}</h3>
          <p className="texto">{descripcion[0].children[0].text}</p>
          <p className="precio">${precio}</p>
          <form onSubmit={handleSubmit} className="formulario">
            <label htmlFor="cantidad">Cantidad</label>
            <select 
              onChange={ e => setCantidad(parseInt(e.target.value))}
              id="cantidad">
              <option value="0">--Seleccione--</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <input type="submit" value="Agregar al carrito" />
          </form>
      </div>
    </div>
  )
}

export default GuitarraUrl


