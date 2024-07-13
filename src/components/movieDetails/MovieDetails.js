import { useParams} from 'react-router-dom'
import styles from './style.module.scss'

const MovieDetails = ({list}) => {

    const params = useParams()
    const movieIndex = params.movieIndex

    return <div className={styles.container}>
        <div>
            <img src={list[movieIndex].poster_path} alt={`${list[movieIndex].title} Movie Poster`} width={400} loading="lazy"/>
        </div>
        <div>
            <div>{list[movieIndex].title}</div>
            <div>{list[movieIndex].status}</div>
            <div>{list[movieIndex].production_companies}</div>
        </div>
        
    </div>
}

export default MovieDetails