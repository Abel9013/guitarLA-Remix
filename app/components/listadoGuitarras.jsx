import Guitarra from "~/components/guitarra"

function ListadoGuitarras({guitarras}) {
  return (
    <>
     <h2 className="heading">Nuestra Coleccion</h2>
          {guitarras.length && (
            <div className="guitarra-grid">
              {guitarras.map(guitarra => (
                <Guitarra guitarra={guitarra.attributes} key={guitarra.id} />
              ) )}
            </div>
          ) }
    </>
  )
}

export default ListadoGuitarras