import { useLoaderData } from '@remix-run/react'
import Guitarra from '~/components/guitarra'
import { getGuitarras } from '~/models/guitarras.server'

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