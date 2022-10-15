import React from 'react'

function Curso({ curso }) {

  const { contenido, imagen, titulo } = curso;

  const img = imagen.data[0].attributes.url;
  console.log(img);
  return (
    <section className="curso">
      <style jsx="true">
        {`
        .curso {
          background-image: linear-gradient( to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7)), url(${img})
        }
        `}
      </style>
      <div className="contenedor curso-grid">
        <div className="contenido">
          <h2 className="heading">{titulo}</h2>
          <p className="texto">{contenido}</p>
        </div>
      </div>
    </section>
  )
}

export default Curso