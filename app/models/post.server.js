export async function getPosts() {
    const respuesta = await fetch(`${process.env.API_URL}/posts?populate=imagen`)
    const respuestaFinal = await respuesta.json() 
    return respuestaFinal
}

export async function getPost(url) {
    const respuesta = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`)
    return await respuesta.json()
}