import { useLoaderData } from "@remix-run/react"
import { getGuitarra } from '~/models/guitarras.server'
import styles from "~/styles/guitarras.css"

export function meta({data}){
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

export async function loader({params}){
    const { guitarrasUrl } = params
    const guitarra = await getGuitarra(guitarrasUrl)
    // console.log(info);
    return guitarra
}
export function links(){
  return[
    {
      rel:"stylesheet",
      href:styles
    }
  ]
}
const GuitarraUrl = () => {
    const guitarra = useLoaderData()
    const {nombre, descripcion, imagen, precio} = guitarra.data[0].attributes
    // console.log(guitarra.data[0].attributes); 
    // console.log();
  return (
    <main className="contenedor guitarra">
      <img src={imagen.data.attributes.formats.medium.url} alt={`imagen guitarra ${nombre}`} />
      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="texto">{descripcion[0].children[0].text}</p>
        <p className="precio">${precio}</p>
      </div>
    </main>
  )
}

export default GuitarraUrl