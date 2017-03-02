import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';

ReactDOM.render( 
    <p>Loading ... </p>,
    document.getElementById('root')
);

fetch('http://www.omdbapi.com/?s=Terminator')
.then(res => res.json()) //fetch returns an object with a Search property
.then(movies => {
    console.log('movies: ', movies);
    const movieList = movies.Search.map(movie => {
        return <li key={movie.imdbID}>{movie.Title}</li>;
    });
    ReactDOM.render( 
        <ul>{movieList}</ul>,
    document.getElementById('root')
    );
})
.catch(err => console.log('err: ', err));
