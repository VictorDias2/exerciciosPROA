import styles from '../css/Footer.module.css'
import whats from '../Imagens/whats.png'
import insta from '../Imagens/insta.png'
import facebook from '../Imagens/whats.png'

function Footer(){
    return(
        <div className={styles.footer}>

            <div>
                <h4>Nossa loja de Instrumentos Musicais</h4>
                <p className={styles.p_f}>Rua Tito ,54 - Lapa</p>
                <p className={styles.p_f}>São Paulo - Brasil</p>
            </div>

            <div className={styles.p_f}>
                <img className={styles.whats} src={whats} alt="whats" />
                <img className={styles.whats} src={insta} alt="insta" />
                <img className={styles.whats} src={facebook} alt="facebook" />
            </div>

        </div>

    )
}
export default Footer