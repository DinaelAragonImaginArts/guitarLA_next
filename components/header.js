import Link from "next/link";
import Image from "next/future/image";
import styles from '../styles/header.module.css';
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const url = router.pathname;

  return (
    <header className={styles.header}>
      <div className={`contenedor ${styles.barra}`}>
        <Link href={'/'}>
          <a>
            <Image priority="true" src={'/img/logo.svg'} width={300} height={40} alt="Logotipo GuitarLA" />
          </a>
        </Link>
        <nav className={styles.navegacion}>
          <Link href={'/'}>
            <a className={url === '/' ? styles.active : ''}>Inicio</a>
          </Link>
          <Link href={'/nosotros'}>
            <a className={url === '/nosotros' ? styles.active : ''}>Nosotros</a>
          </Link>
          <Link href={'/tienda'}>
            <a className={url === '/tienda' ? styles.active : ''}>Tienda</a>
          </Link>
          <Link href={'/blog'}>
            <a className={url === '/blog' ? styles.active : ''}>Blog</a>
          </Link>
       
        </nav>
      </div>
    </header>
  )
}

export default Header
