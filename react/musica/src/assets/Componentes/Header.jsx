import styles from '../css/Header.module.css'
import img from '../Imagens/guitarras_header.jpg'

function Header(){

    return(
        <img className={styles.minhaimg} src={img} alt="img" />

        
        
    )
}
export default Header