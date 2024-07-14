import {useContext} from 'react'
import {Link} from 'react-router-dom'
import { MovieContext } from '../../App';
import InfiniteScroll from "react-infinite-scroll-component";
import ErrorComponent from '../errorComponent/ErrorComponent';
import Loader from '../loader/Loader';
import styles from './style.module.scss'
import SearchBar from '../searchBar/SearchBar';

const MovieList = () => {

    const {list, fetchMovies, hasMore, loadMoreMoviesError} = useContext(MovieContext)

return(
    <InfiniteScroll
        dataLength={list.length}
        next={fetchMovies}
        hasMore={hasMore}
        loader={ loadMoreMoviesError ? <ErrorComponent/> : <Loader/> }>
            <div className={styles.searchContainer}><SearchBar  /></div>
            <div className={styles.movieContainer}>
                {
                    list.map((item, index) => (
                        <Link to={`/movie/${index}`}>
                            <div key={index} className={styles.movieTile}>
                                

                                <div className={styles.movieDetails}><img src={item.category.image} alt={`${item.category.image} Movie Poster`} width={250} height={250}/></div>
                                <div className={styles.movieDetails}>{item.title}</div>
                                
                            </div>
                        </Link>
                    ))
                }
            </div>
    </InfiniteScroll>
)

}

export default MovieList