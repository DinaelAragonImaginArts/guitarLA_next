import Layout from "../components/layout";
import styles from '../styles/nosotros.module.css';
import Image from "next/future/image";

export default function Nosotros() {
    return (
        <Layout title="Nosotros" description={'Sobre nosotros, GuitarLA, tienda de música'} >
            <main className="contenedor">
                <h2 className="heading">Nosotros</h2>
                <div className={styles.contenido}>
                <Image alt="Imagen sobre nosotros"  src={'/img/nosotros.jpg'} width={1000} height={400}  priority="true"/>
                    <div> 
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id cursus. Lectus nulla at volutpat diam ut venenatis. Amet massa vitae tortor condimentum lacinia quis vel. Laoreet suspendisse interdum consectetur libero id.
                        </p>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id cursus. Lectus nulla at volutpat diam ut venenatis. Amet massa vitae tortor condimentum lacinia quis vel. Laoreet suspendisse interdum consectetur libero id.
                        </p>
                    </div>
                </div>
            </main>
        </Layout>
    )
}
