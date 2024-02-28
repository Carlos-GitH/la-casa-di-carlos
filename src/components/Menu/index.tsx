import logo from '../../assets/logo.png';
import styles from './Menu.module.scss'; 
import {Link, Outlet} from 'react-router-dom';
import stylesTema from '../../styles/Tema.module.scss';

export default function Menu() {
    const rotas = [{
        label: 'Inicio',
        to: '/la-casa-di-carlos/',
    },{
        label: 'Cardapio',
        to: '/la-casa-di-carlos/cardapio',       
    },{
        label: 'Sobre',
        to: '/la-casa-di-carlos/sobre',
    }
    ]
    return (
    <>
        <nav className={styles.menu}>
            <ul className={styles.menu__list}>
            {rotas.map((rota, index) => (
                <li key={index} className={styles.menu__link}>
                    <Link to={rota.to}>{rota.label}</Link>
                </li>
            ))}
            </ul>
        </nav>
        <header className={styles.header}>
            <div className={styles.divLogo}>
                <div className={styles.logoContainer}>
                    <img className={styles.logo} src={logo} alt="logo"/>
                    <h2 className={styles.nome}>la-casa-di-carlos</h2>
                </div>
            </div>
        </header>
        <div className={stylesTema.container}>
            <Outlet />
        </div>
    </>
    );
}