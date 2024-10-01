import Style from './Header.module.css'
import Meio from './Meio.module.css'
function Header(){
    return(

            <>
            <div className={Style.cabecalho}>
               <h1> Header da página </h1>
            </div>
            <div className={Meio.meio}>
                <h1>Meio</h1>
            </div>
            
            </>
    )
}
export default Header