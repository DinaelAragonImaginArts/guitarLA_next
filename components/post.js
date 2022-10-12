import Image from "next/future/image";
import Link from 'next/link';
import styles from '../styles/blog.module.css';
import { formatearFecha } from "../utils/helpers";


const Post = ({ post }) => {
    const { titulo, contenido, url, publishedAt, imagen } = post;
    const img = imagen.data.attributes.formats.medium.url;

    return (
        <article className={styles.post}>
            <Image priority="true" src={img} alt={`Blog imagen de ${titulo}`} width={600} height={400} />
            <div className={styles.contenido}>
                <h3>{titulo}</h3>
                <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
                <p className={styles.resumen}>{contenido}</p>
                <Link href={`/blog/${url}`}>
                    <a className={styles.enlace}>Leer post</a>
                </Link>
            </div>
        </article>
    )
}

export default Post
