import { getGuitarras } from '~/models/guitarras.server'


export async function loader() {
  const guitarras = await getGuitarras()
  return guitarras
}

function Tienda() {
  return (
    <div>T</div>
  )
}

export default Tienda