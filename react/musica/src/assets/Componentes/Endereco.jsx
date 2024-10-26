import styles from '../css/Endereco.module.css'

function Endereco(){
    return(
        <div className={styles.ender}>
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.3490639152096!2d-46.68272912488998!3d-23.591811078778935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5768797c7de1%3A0x42a3240ea81f0386!2sInstituto%20PROA!5e0!3m2!1spt-BR!2sbr!4v1723822315621!5m2!1spt-BR!2sbr" frameborder="0"></iframe>
            </div>

            <div className={styles.div_text}>
                <h1 className={styles.pad}>Nossa loja - Instrumentos Musicais</h1>
                <p className={styles.pad}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque velit autem sunt nobis totam dolor minima nemo, quaerat possimus minus? Não é optio possimus e ad perferendis facilis libero eaque? Mínimos! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus reprehenderit, itaque excepturi incidunt magni quaerat earum consequatur. Quibusdam alias impedit odio nisi, deleniti provident beatae, minus repellendus, consequuntur facere tenetur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eaque quod sint expedita officia, ratione odit pariatur provident maxime natus.</p>
            </div>
        </div>

    )
}
export default Endereco