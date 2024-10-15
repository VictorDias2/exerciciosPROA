import styles from '../css/Header.module.css'
import guitarras from '../imagens/guitarras_header.jpg'

function Header(){

    return(
        <img className={styles.guitarras} src={guitarras} alt="guitarras" />

    )
}
export default Header