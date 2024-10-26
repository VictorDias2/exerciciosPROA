import styles from '../css/Forms.module.css'
import zap from '../Imagens/zap.png'

function Forms(){
    return(
        <div className={styles.geral}>

            <div className={styles.text}>
                <p>FORMULARIO AQUI</p>
            </div>

            <div className={styles.divisoria2}>
                <img className={styles.zap} src={zap} alt="" />
            </div>

        </div>

    )

}
export default Forms