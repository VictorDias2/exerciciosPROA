import styles from '../css/Instrumentos.module.css'
import guitarrinha from '../Imagens/guitarrinha.jpg'

function Instrumentos(){
    return(
        <section>
            <div>
                <img className={styles.guitarrinha} src={guitarrinha} alt="guitarrinha" />
                <p>Teclado Yamaha e373</p>
                <p>Algo suave</p>
                <p>Teclas sensitivas</p>
                <p className={styles.color}>R$ 989,50</p>    
            </div>
            <div>
                <img className={styles.guitarrinha} src={guitarrinha} alt="guitarrinha" />
                <p>Teclado Yamaha e373</p>
                <p>Algo suave</p>
                <p>Teclas sensitivas</p>
                <p className={styles.color}>R$ 989,50</p>    
            </div>
            <div>
                <img className={styles.guitarrinha} src={guitarrinha} alt="guitarrinha" />
                <p>Teclado Yamaha e373</p>
                <p>Algo suave</p>
                <p>Teclas sensitivas</p>
                <p className={styles.color}>R$ 989,50</p>    
            </div>
            <div>
                <img className={styles.guitarrinha} src={guitarrinha} alt="guitarrinha" />
                <p>Teclado Yamaha e373</p>
                <p>Algo suave</p>
                <p>Teclas sensitivas</p>
                <p className={styles.color}>R$ 989,50</p>    
            </div>

        </section>
    )
}
export default Instrumentos