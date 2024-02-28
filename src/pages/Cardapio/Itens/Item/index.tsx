import styles from './Item.module.scss';
import { Prato } from '../../../../types/Prato';
import TagsPrato from '../../../../components/TagsPrato';
import { useNavigate } from 'react-router-dom';

export default function Item(props: Prato) {
    const { ...item } = props;
    const navigate = useNavigate();
    return (
        <div 
            className={styles.item}
            onClick={() => navigate(`/la-casa-di-carlos/prato/${item.id}`)}
        >
            <div className={styles.item__imagem}>
                <img src={item.photo} alt={item.title} />
            </div>
            <div className={styles.item__descricao}>
                <div className={styles.item__titulo}>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                </div>
                <TagsPrato {...props} />
            </div>
        </div>
    )
}