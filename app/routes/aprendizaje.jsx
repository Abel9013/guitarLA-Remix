import React from 'react'

function Aprendizaje() {
  return (
    <>
    <main className='contenedor'>
    <h2 className='heading'>¿Que aprendí en este proyecto?</h2>
    <h3>En este proyecto del curso React- La guía completa(codigo con juan) , aprendi las siguientes cosas:</h3>
    <ul>
        <li>Remix run</li>
        <li>Añadir hojas de estilo, informacion meta</li>
        <li>El modelo basado en rutas de remix, similitudes y diferencias con react-router-dom, rutas anidadas(nested routes)</li>
        <li>Crear API con strapi, y consumirla mediante un loader</li>
        <li>Alojar Imagenes en cloudinary</li>
        <li>Routing dinámico</li>
        <li>Mensajes de error que mejoran la interaccion con el usuario</li>
        <li>Multiples llamados a APIs, para una mejor performance</li>
        <li>Context en Remix, state en Remix</li>
        <li>LS y solucion problema hidratación("remix-utils": "^7.5.0")</li>
    </ul>
    <p>Entre otras cosas, con este hermoso y desafiante proyecto</p>
    </main>
    </>
  )
}

export default Aprendizaje