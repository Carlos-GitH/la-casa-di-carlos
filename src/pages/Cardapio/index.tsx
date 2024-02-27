import styles from './Cardapio.module.scss'
import logo from '../../assets/logo.png'
import Buscador from './Buscador';
import { useState } from 'react';
import Filtros from './Fitros';
import Ordenador from './Ordenador';
import Itens from './Itens';

export default function Cardapio () {
    const [busca, setBusca] = useState('');
    const [filtro, setFiltro] = useState<number | null>(null);
    const [ordenador, setOrdenador] = useState('');
    return (
        <main>
            <nav className={styles.menu}>
            </nav>
            <header className={styles.header}>
                <div className={styles.divLogo}>
                    <div className={styles.logoContainer}>
                        <img className={styles.logo} src={logo} alt="logo"/>
                        <h2 className={styles.nome}>la-casa-di-carlos</h2>
                    </div>
                </div>
            </header>
            <section className={styles.cardapio}>
                <h3 className={styles.cardapio__titulo}>Cardápio</h3>
                <Buscador  
                    busca={busca} 
                    setBusca={setBusca}
                />
                <div className={styles.cardapio__filtros}>
                    <Filtros filtro={filtro} setFiltro={setFiltro}/>
                    <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
                </div>
                <Itens busca={busca} filtro={filtro} ordenador={ordenador}/>
            </section>
        </main>
    );
}