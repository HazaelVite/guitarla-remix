import { useLoaderData } from "@remix-run/react"
import ListadoPosts from "~/components/listadoPosts"
import { getPosts } from "~/models/posts.server"

export function meta() {
  return (
    {
      title: 'GuitarLA - Nuestro Blog',
      description: 'Blog de música y venta de guitarras'
    }
  )
}

export async function loader() {
  const posts = await getPosts()
  return posts.data
}

function Blog() {
  const posts = useLoaderData()
  return (
    <ListadoPosts posts={posts} />
  )
}

export default Blog