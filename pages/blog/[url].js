import Image from "next/image";
import styles from '../../styles/blog.module.css';
import Layout from '../../components/layout';
import { formatearFecha } from "../../utils/helpers";

const Blog = ({ post }) => {
    const { titulo, contenido, publishedAt, imagen }= post[0].attributes;
    const img = imagen.data.attributes.url
    return (
        <>
            <Layout title={`Blog - ${titulo}`}>
                <article className={`${styles.post} ${styles['mt-3']}`}>
                    <Image priority="true" src={img} alt={`Blog imagen de ${titulo}`} width={1000} height={600} />
                    <div className={styles.contenido}>
                        <h3>{titulo}</h3>
                        <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
                        <p className={styles.texto}>{contenido}</p>
                    </div>
                </article>
            </Layout>
        </>
    )
}
export default Blog;

export async function getServerSideProps({ query: { url } }) {
    const respuesta = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`)
    const { data: post } = await respuesta.json();
    return {
        props: {
            post
        }
    }
}