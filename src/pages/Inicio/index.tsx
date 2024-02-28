import cardapio from '../../data/cardapio.json';
import styles from './Inicio.module.scss';
import stylesTema from '../../styles/Tema.module.scss';
import nossaCasa from '../../assets/nossa_casa.png';
import { useNavigate } from 'react-router-dom';
import { Prato } from '../../types/Prato';

export default function Inicio() {
    let pratosRecomendados = [...cardapio];
    pratosRecomendados = pratosRecomendados.sort(() => 0.5 -Math.random()).splice(0,3)
    const navigate = useNavigate();

    function redirecionarParaDetalhes (prato: Prato) {
        navigate(`prato/${prato.id}`, { state: { prato } });
    };

    return (
        <section>
            <h3 className={stylesTema.titulo}>
                Recomendações da cozinha
            </h3>
            <div className={styles.recomendados}>
                {pratosRecomendados.map(prato => (
                <div key={prato.id} className={styles.recomendado}>
                    <div className={styles.recomendado__imagem}>
                        <img src={prato.photo} alt={prato.title} />
                    </div>
                    <button 
                    className={styles.recomendado__botao} 
                    onClick={() => redirecionarParaDetalhes(prato)}>
                        Ver mais
                    </button>
                </div>
                ))}
            </div>
            <h3 className={stylesTema.titulo} >Nossa casa</h3>
            <div className={styles.nossaCasa}>
                <img src={nossaCasa} alt="La-Casa-Di-Carlos" />
                <div className={styles.nossaCasa__endereço} >Av. Conselheiro Aguiar nº 1350,<br/>Recife PE</div>
            </div>
        </section>
    );
}