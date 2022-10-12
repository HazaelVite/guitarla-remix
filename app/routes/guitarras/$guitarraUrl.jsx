// Componente para hacer rutas dinamicas
// Siempre iniciar el nombre del archivo con $

export async function loader({params}) {
  const { guitarraUrl } = params
  return {}
}

function Guitarra() {
  return (
    <div>Guitarra</div>
  )
}

export default Guitarra