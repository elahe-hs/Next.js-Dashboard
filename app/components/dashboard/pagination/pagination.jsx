import styles from './styles.module.scss'

const Pagination =()=>{
    return (
        <div className={styles.page_container}>
            <button className={styles.page_button} disabled >Preview</button>
            <button className={styles.page_button}>Next</button>
        </div>
    )
}

export default Pagination