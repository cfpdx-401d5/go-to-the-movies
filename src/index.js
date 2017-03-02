import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Loading(props) {
    return <p>Loading ... {props.search}</p>;
}

Loading.propTypes = {
    search: React.PropTypes.string
};

ReactDOM.render( 
   <Loading search='Terminator' />,
    document.getElementById('root')
);

let movieArray = [];

function getMovies() {
    fetch('http://www.omdbapi.com/?s=Terminator')
    .then(res => res.json())
    .then(movies => {
        movieArray = movies.Search;
    });
}

function MovieDisplay(props) {
    console.log(props);
    return props.movies
    .then(data => {
        data.Search.map(movie => {
            return <li key={movie.imdbID}>{movie.Title} ({movie.Year})</li>;
        });
    });
}

getMovies();

console.log('movieArray: ', movieArray);

ReactDOM.render( 
<MovieDisplay movies={movieArray} />,
    document.getElementById('root')
);
