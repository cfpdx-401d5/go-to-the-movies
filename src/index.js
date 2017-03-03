import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(
   <App movies={[]} loading={true} />,
   document.getElementById('root')
 );

fetch('http://www.omdbapi.com/?s=Terminator')
.then(res => res.json()) //fetch returns an object with a Search property
.then(movies => {
    ReactDOM.render(
       <App movies={movies.Search} loading={false} />,
       document.getElementById('root')
   );
});

function App(props) {
    console.log('props: ', props);
    if (props.loading) return <p>Loading ....</p>;
    const movieList = props.movies.sort((a, b) => {
        return a.Year > b.Year;
    })
    .map(movie => {
        return <li key={movie.imdbID}>{movie.Title} ({movie.Year})</li>;
    });

    return (
        <ul>{movieList}</ul>
    );
}

App.propTypes = {
    loading: React.PropTypes.string,
    movies: React.PropTypes.array
};
