import Teste from './Teste'
import styles from './Frase.module.css'
function Frase(){
    return(
        <div className={styles.fraseContainer} className={styles.fraseContent}>
            <h1 className={styles.fraseContent}>Minha primeira frase no componente.</h1>
            <Teste/>
        </div>
    )
}

export default Frase