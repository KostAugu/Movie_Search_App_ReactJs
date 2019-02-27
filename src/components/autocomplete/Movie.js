import React from "react"
import styles from './autocomplete.css';

function Movie(props) {
    return (
        <div className={styles.movie}>
            <h1 className={styles.movieTitle}>{props.data.title}</h1>
            <div className={styles.movieDetails}>
                <div className={styles.movieImage}>
                    <img src={"https://image.tmdb.org/t/p/w500" + props.data.poster_path} alt=""/>   
                </div>                
                <div className={styles.movieInfo}>
                    <div>
                        <h3>Release date</h3>
                        <p>{props.data.release_date}</p>
                        <h3>Vote average</h3>
                        <p>{props.data.vote_average}</p>
                        <h3>Overview</h3>
                        <p>{props.data.overview}</p>
                    </div>
                </div>             
            </div>
        </div>
    )
}

export default Movie