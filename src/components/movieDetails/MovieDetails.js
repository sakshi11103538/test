import { useContext } from 'react'
import { Link, useParams} from 'react-router-dom'
import styles from './style.module.scss'
import { MovieContext } from '../../App'

const MovieDetails = () => {

    const params = useParams()
    const movieIndex = params.movieIndex
    const {index, list} = useContext(MovieContext)
    return <>
        <div className={styles.container}>
            <div>
                <img src={list[movieIndex].category.image} alt={`${list[movieIndex].category.image} Movie Poster`} width={250} height={250}/>   
            </div>
            <div>
                <div><b>{list[movieIndex].title}</b></div>
                <div>{list[movieIndex].description}</div>
                <div>USD {list[movieIndex].price}</div>
            </div>
        </div>
        <Link to={`/`}>
            <div className={styles.buttonContainer}><button className={styles.button}>Home</button></div>
        </Link>
        </>

}

export default MovieDetails