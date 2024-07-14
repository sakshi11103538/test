import styles from './style.module.scss'

const Loader = () => {
    return <div className={styles.container}>
        <div className={styles.loader}></div>
        <p>Loading...</p>
    </div>
}

export default Loader