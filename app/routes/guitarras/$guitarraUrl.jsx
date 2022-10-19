// Componente para hacer rutas dinamicas
// Siempre iniciar el nombre del archivo con $
import { useLoaderData } from "@remix-run/react"
import { getGuitarra } from "~/models/guitarras.server"

export async function loader({params}) {
  const { guitarraUrl } = params
  const guitarra = await getGuitarra(guitarraUrl)

  if(guitarra.data.length === 0) {
    throw new Response('', {
      status: 404,
      statusText: 'Guitarra no encontrada'
    })
  }
  return guitarra
}

export function meta({data}) {
  if(!data) {
    return {
      title: 'GuitarLA - Guitarra no encontrada'
    }
  }
  return {
    title: `GuitarLA - ${data.data[0]?.attributes.nombre}`
  }
}

function Guitarra() {
  const guitarra = useLoaderData()

  const { nombre, descripcion, imagen, precio } = guitarra.data[0]?.attributes

  return (
    <div className="guitarra">
      <img src={imagen.data.attributes.url} alt={nombre} className="imagen" />
      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="text">
          {descripcion}
        </p>
        <p className="precio">$ {precio}</p>
      </div>
    </div>
  )
}

export default Guitarra