import Layout from "../components/layout"
import Guitarra from "../components/guitarra";
import grid from '../styles/grid.module.css';

const Tienda = ({ guitarras }) => {
    return (
        <>
            <Layout title={'Tienda Virtual'} description={'Tienda virtual, venta de guitarras, instrumentos, GuitarLA'}>
                <main className="contenedor">
                    <h2 className="heading">Nuestra colección</h2>
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
            </Layout>
        </>
    )
}
export default Tienda;


export async function getServerSideProps() {
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`);
    const { data: guitarras } = await respuesta.json();
    return {
        props: {
            guitarras
        }
    }
}