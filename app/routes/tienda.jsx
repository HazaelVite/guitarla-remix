export async function loader() {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate+imagen`)
  const resultado = await respuesta.json

  console.log(resuultado);


  return {}
}

function Tienda() {
  return (
    <div>T</div>
  )
}

export default Tienda