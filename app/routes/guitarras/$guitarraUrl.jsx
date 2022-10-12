// Componente para hacer rutas dinamicas
// Siempre iniciar el nombre del archivo con $
import { useLoaderData } from "@remix-run/react"
import { getGuitarra } from "~/models/guitarras.server"
import styles from '~/styles/guitarras.css'

export function meta({data}) {
  return {
    title: `GuitarLA - ${data.data[0]?.attributes.nombre ? data.data[0]?.attributes.nombre : 'No encontrado'}`
  }
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

export async function loader({params}) {
  const { guitarraUrl } = params
  const guitarra = await getGuitarra(guitarraUrl)
  return guitarra
}

function Guitarra() {
  const guitarra = useLoaderData()

  const { nombre, descripcion, imagen, precio } = guitarra.data[0]?.attributes

  return (
    <main className="contenedor guitarra">
      <img src={imagen.data.attributes.url} alt={nombre} className="imagen" />
      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="text">
          {descripcion}
        </p>
        <p className="precio">$ {precio}</p>
      </div>
    </main>
  )
}

export default Guitarra