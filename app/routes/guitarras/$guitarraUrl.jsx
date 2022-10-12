// Componente para hacer rutas dinamicas
// Siempre iniciar el nombre del archivo con $
import { useLoaderData } from "@remix-run/react"
import { getGuitarra } from "~/models/guitarras.server"

export async function loader({params}) {
  const { guitarraUrl } = params
  const guitarra = await getGuitarra(guitarraUrl)
  return guitarra
}

function Guitarra() {
  const guitarra = useLoaderData()
  
  return (
    <div>Guitarra</div>
  )
}

export default Guitarra