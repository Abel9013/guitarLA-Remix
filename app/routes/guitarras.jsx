import {  Outlet } from "@remix-run/react"
import styles from "~/styles/guitarras.css"


export function links(){
  return[
    {
      rel:"stylesheet",
      href:styles
    }
  ]
}

function Tienda() {
  
  return (
    <main className="contenido">
      <Outlet />
    </main>
  )
}

export default Tienda