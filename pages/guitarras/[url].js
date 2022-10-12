import Image from "next/image";
import styles from '../../styles/guitarras.module.css';
import Layout from '../../components/layout';

const Producto = ({ guitarra }) => {
    const { nombre, descripcion, imagen, precio } = guitarra[0].attributes;
    const img = imagen.data.attributes.url
    return (
        <>
            <Layout title={`Guitarra ${nombre}`}>
                <div className={styles.guitarra}>
                    <Image src={img} alt={`Imagen guitarra ${nombre}`} width={400} height={900} />
                    <div className={styles.contenido}>
                        <h3>{nombre}</h3>
                        <p className={styles.descripcion}>{descripcion}</p>
                        <p className={styles.precio}>${precio}</p>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Producto

export async function getServerSideProps({ query: { url } }) {
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
    const { data: guitarra } = await respuesta.json();
    return {
        props: {
            guitarra
        }
    }
}