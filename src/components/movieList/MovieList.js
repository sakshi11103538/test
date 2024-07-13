import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import InfiniteScroll from "react-infinite-scroll-component";
import styles from './style.module.scss'
import {movieArray} from '../utility/movieArray'

const MovieList = ({list, fetchMovies, hasMore}) => {


return(
    <InfiniteScroll
        dataLength={list.length}
        next={fetchMovies}
        hasMore={hasMore}
        loader={<h3>Loading</h3>}>
            <div className={styles.movieContainer}>
                {
                    list.map((item, index) => (
                        <Link to={`/movie/${index}`}>
                            <div key={index} className={styles.movieTile}>
                                

                                <div className={styles.movieDetails}><img src={item.images[0]} alt={`${item.images[0]} Movie Poster`} width={250} height={250}/></div>
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