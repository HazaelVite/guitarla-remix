import { useLoaderData } from '@remix-run/react'
import { getGuitarras } from '~/models/guitarras.server'
import { getPosts } from '~/models/posts.server'
import Guitarra from '~/components/guitarra'
import ListadoGuitarras from '~/components/listadoGuitarras'
import ListadoPosts from '~/components/listadoPosts'
import stylesGuitarras from '~/styles/guitarras.css'
import stylesBlog from '~/styles/blog.css'

export function meta() {

}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: stylesGuitarras
    },
    {
      rel: 'stylesheet',
      href: stylesBlog
    },
  ]
}

export async function loader() {

  const [guitarras, posts] = await Promise.all([
    getGuitarras(),
    getPosts()
  ])

  return {
    guitarras: guitarras.data,
    posts: posts.data
  }
}

function Index() {

  const { guitarras, posts } = useLoaderData();

  return (
    <>
      <main className="contenedor">
        <ListadoGuitarras guitarras={guitarras}/>
      </main>
      <section className="contenedor">
        <ListadoPosts posts={posts} />
      </section>
    </>
  )
}

export default Index