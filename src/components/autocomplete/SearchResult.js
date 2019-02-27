import React from "react"

function SearchResult(props) {
    return (
        <a id={props.movie.id} onClick={props.handleClick}>
            <h4>{props.movie.original_title}</h4>
            <p>{Number(props.movie.vote_average).toFixed(1)} Rating, {(new Date(props.movie.release_date)).getFullYear()}</p>
        </a>
    )
}

export default SearchResult