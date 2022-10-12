import imagen from '../../public/img/nosotros.jpg'
import styles from '../styles/nosotros.css'

export function meta() {
  return (
    {
      title: 'GuitarLa - Nosostros',
      description: 'Venta de guitarras, blog de música y más'
    }
  )
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image'
    }
  ]
}

function Nosotros() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
      <div className="contenido">
        <img src={imagen} alt="Sobre Nosotros" />
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores inventore, nam minima fugiat atque,
            repellat quidem suscipit aliquid in necessitatibus deleniti odit, maxime hic ipsa neque.
            Ipsum at minima obcaecati?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores inventore, nam minima fugiat atque,
            repellat quidem suscipit aliquid in necessitatibus deleniti odit, maxime hic ipsa neque.
            Ipsum at minima obcaecati?
          </p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros