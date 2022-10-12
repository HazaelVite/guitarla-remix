import { useLoaderData } from '@remix-run/react'
import Guitarra from '~/components/guitarra'
import { getGuitarras } from '~/models/guitarras.server'
import styles from '~/styles/guitarras.css'

export function meta() {
  return {
    title: 'GuitarLA - Tienda de Guitarras',
    description: 'GuitarLA - Nuestra colección de guitarras'
  }
}
//  Hoja de estilos
export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

export async function loader() {
  const guitarras = await getGuitarras()
  return guitarras.data
}

function Tienda() {
  const guitarras = useLoaderData()

  return (
    <main className='contenedor'>
      <h2 className="heading">Nuestra Colección</h2>

      { guitarras?.length && (
        <div className="guitarras-grid">
          { guitarras.map (guitarra => (
            // Componente de guitarra
            <Guitarra 
            guitarra={guitarra?.attributes}
            key={guitarra?.id}
            />
          ))}
        </div>
      )}
    </main>
  )
}

export default Tienda