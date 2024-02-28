import styles from './Footer.module.scss';
// import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import logo from '../../assets/logo.png';

export default function Footer() {
    return (
        <footer className={styles.footer} >
            <img className={styles.logo} src={logo} alt='La Casa Di Carlos' />
        </footer>
    );
}