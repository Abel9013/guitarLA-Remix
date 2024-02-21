import { useLoaderData } from "@remix-run/react";
import {getPosts} from "~/models/post.server"
import ListadoPosts from "../components/listadoPosts";

export function meta (){
  return(
      [
          {
              title:"GuitarLA - Nuestro Blog"
          },
          {
              description:"Venta de guitarras, blog de musica, cursos, como cambiar cuerdas de una guitarra, como elegir una guitarra, aprender guitarra"
          }
      ]
  )
}

export async function loader() {
  const posts = await getPosts()
  
  return posts.data
}
function Blog() {
  const posts = useLoaderData()
  
  return (
    <ListadoPosts posts={posts} />
  )
}

export default Blog