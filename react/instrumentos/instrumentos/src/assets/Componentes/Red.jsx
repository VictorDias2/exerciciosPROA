
import styles from '../css/Red.module.css'
import Loja from '../imagens/loja.jpg'

function Red(){

    return(
        <div className={styles.div}>

            <div className={styles.text}>
                <h1>Nossa loja - Instrumentos Musicais</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque velit autem sunt nobis totam dolor minima nemo, quaerat possimus minus? Não é optio possimus e ad perferendis facilis libero eaque? Mínimos! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus reprehenderit, itaque excepturi incidunt magni quaerat earum consequatur. Quibusdam alias impedit odio nisi, deleniti provident beatae, minus repellendus, consequuntur facere tenetur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eaque quod sint expedita officia, ratione odit pariatur provident maxime natus.
                </p>
            </div>

            <div>
                <img className={styles.loja} src={Loja} alt="Loja" />
            </div>

        </div>

    )
}
export default Red