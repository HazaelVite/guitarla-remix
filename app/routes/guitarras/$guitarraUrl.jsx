// Componente para hacer rutas dinamicas
// Siempre iniciar el nombre del archivo con $
import { useState } from "react"
import { useLoaderData } from "@remix-run/react"
import { getGuitarra } from "~/models/guitarras.server"

export async function loader({ params }) {
  const { guitarraUrl } = params
  const guitarra = await getGuitarra(guitarraUrl)

  if (guitarra.data.length === 0) {
    throw new Response('', {
      status: 404,
      statusText: 'Guitarra no encontrada'
    })
  }
  return guitarra
}

export function meta({ data }) {
  if (!data) {
    return {
      title: 'GuitarLA - Guitarra no encontrada'
    }
  }
  return {
    title: `GuitarLA - ${data.data[0]?.attributes.nombre}`
  }
}

function Guitarra() {
  const [cantidad, setCantidad] = useState(0);

  const guitarra = useLoaderData()

  const { nombre, descripcion, imagen, precio } = guitarra.data[0]?.attributes

  const handleSubmit = e => {
    e.preventDefault();

    if(cantidad < 1) {
      alert('Debes seleccionar una cantidad');
    }
    // Almacenar todo en un objeto
    const guitarraSeleccionada = {
      id: guitarra.data[0].id,
      img: imagen.data.attributes.url,
      nombre,
      precio,
      cantidad
    }

    console.log(guitarraSeleccionada);
  }

  return (
    <div className="guitarra">
      <img src={imagen.data.attributes.url} alt={nombre} className="imagen" />
      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="text">
          {descripcion}
        </p>
        <p className="precio">$ {precio}</p>
        <form className="formulario" onSubmit={handleSubmit}>
          <label htmlFor="cantidad">Cantidad</label>

          <select
            name="cantidad"
            id="cantidad"
            onChange={e => setCantidad(parseInt(e.target.value))}
          >
            <option value="">-- Seleccione --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <input type="submit" value="Agregar al carrito" />
        </form>
      </div>
    </div>
  )
}

export default Guitarra