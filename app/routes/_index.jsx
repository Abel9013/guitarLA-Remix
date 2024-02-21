import { Link, useLoaderData} from "@remix-run/react" 
import { getGuitarras }  from "~/models/guitarras.server"
import { getPosts }  from "~/models/post.server"
import { getCurso }  from "~/models/curso.server"
import ListadoGuitarras from "~/components/listadoGuitarras"
import Curso from "../components/curso"
import ListadoPosts from "../components/listadoPosts";
import stylesGuitarras from "~/styles/guitarras.css"
import stylesBlog from "~/styles/blog.css"
import stylesCursos from "~/styles/cursos.css"
export function meta (){ 

}
export function links () {
  return [
    {
      rel:"stylesheet",
      href:stylesGuitarras
    },
    {
      rel:"stylesheet",
      href:stylesBlog
    },
    {
      rel:"stylesheet",
      href:stylesCursos
    },
  ]
}
export async function loader () {
  const [guitarras, posts, curso] = await Promise.all([
    getGuitarras(),
    getPosts(),
    getCurso()
  ])

  return {
    guitarras: guitarras.data,
    posts: posts.data,
    curso: curso.data
  }
}
function Index() {
  const { guitarras, posts, curso } = useLoaderData()
  
  return (
    <>
      <main className="contenedor">
        <ListadoGuitarras guitarras={guitarras} />
      </main>
      <Curso curso={curso.attributes} />
      <section className="contenedor"> 
           <ListadoPosts posts={posts} />
      </section>
    
    </>
  )
}

export default Index