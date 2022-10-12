import styles from '../styles/curso.module.css';

const Curso = ({ curso }) => {
  const { descripcion, imagen, titulo } = curso;

  const img = imagen.data.attributes.url;

  return (
    <section className={`${styles.curso} curso`}>
      <style jsx="true">
        {`
          .curso{
            background-image: linear-gradient(to right, rgb(0 0 0 /0.65), rgb( 0 0 0 /0.7)), url(${img});
          }
        `}
      </style>
      <div className={`contenedor ${styles.grid}`}>
        <div className={styles.contenido}>
          <h2 className='heading'>{titulo}</h2>
          <p>{descripcion}</p>
        </div>
      </div>
    </section>
  )
}

export default Curso
