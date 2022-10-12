import styles from '../styles/guitarras.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Guitarra = ({ guitarra }) => {
    const { nombre, descripcion, imagen, url, precio } = guitarra;
    const img = imagen.data.attributes.formats.medium.url

    return (
        <div className={styles.guitarra}>
            <Image priority='true' src={img} alt={`Imagen guitarra ${nombre}`}  width={400}  height={900} />
            <div className={styles.contenido}>
                <h3>{nombre}</h3>
                <p className={styles.descripcion}>{descripcion}</p>
                <p className={styles.precio}>${precio}</p>
                <Link href={`/guitarras/${url}`}>
                    <a className={styles.enlace}>Ver producto</a>
                </Link>
            </div>
        </div>
    )
}

export default Guitarra
