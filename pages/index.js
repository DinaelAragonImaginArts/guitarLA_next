import Layout from '../components/layout';
import grid from '../styles/grid.module.css';
import Guitarra from '../components/guitarra';
import Post from '../components/post';
import Curso from '../components/curso';

export default function Home({ guitarras, posts, curso }) {

  return (
    <>
      <Layout
        title={"Inicio"}
        description={'Blog de música, venta de guitarras y más'}>
        <main className='contenedor'>
          <h1 className='heading'>Nuestra colección</h1>
          <div className={grid.grid}>
            {guitarras.length &&
              guitarras.map(guitarra => (
                <Guitarra
                  guitarra={guitarra.attributes}
                  key={guitarra.id}
                />
              ))
            }
          </div>
        </main>

        <Curso curso={curso.attributes} />

        <section>
          <h1 className="heading">Blog</h1>
          <div className={grid.grid}>
            {posts?.map(post => (
              <Post
                key={post.id}
                post={post.attributes}
              />
            ))}
          </div>
        </section>
      </Layout>
    </>
  )
}


export async function getServerSideProps() {
  const urlGuitarras = `${process.env.API_URL}/guitarras?populate=imagen`;
  const urlPosts = `${process.env.API_URL}/posts?populate=imagen`;
  const urlCurso = `${process.env.API_URL}/curso?populate=imagen`

  const [resGuitarras, resPost, resCurso] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlPosts),
    fetch(urlCurso),
  ])

  const [{ data: guitarras }, { data: posts }, { data: curso }] = await Promise.all([
    resGuitarras.json(),
    resPost.json(),
    resCurso.json()
  ])
  return {
    props: {
      guitarras,
      posts,
      curso
    }
  }
}