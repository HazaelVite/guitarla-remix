import { Link } from "@remix-run/react"
import { formatearFecha } from "~/utils/helpers"


export default function Post({post}) {

  const { contenido, imagen, titulo, url, createdAt } = post
  return (
    <article className="post">
      <img className="imagen" src={imagen.data.attributes.formats.small.url} alt={titulo} />
      <div className="contenido">
        <h3>{ titulo }</h3>
        <p className="fecha">{ formatearFecha(createdAt) }</p>
        <p className="resumen">{ contenido }</p>
        <Link className="enlace" to={`/blog/${url}`}>Leer Entrada</Link>
        
      </div>
    </article>
  )
}
