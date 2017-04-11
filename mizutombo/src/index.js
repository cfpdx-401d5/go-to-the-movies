import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// for props, key selector matches key from API ... i.e. 'Title' & 'Year' with uppercase first letter
function FavMovie(props) {
  return (
    <p>
      My Favorite Movie: {props.movie.Title}, 
      Year Released: {props.movie.Year} 
    </p>
  );
}

function PreLoader(props) {
  return (
    <div>
      <h1>Movies Collection</h1>
      <h2>Loading ...</h2>
    </div>
  );
}

function App(props) {
  if (props.loading) {
    return <PreLoader/>;
  } else {
    const titles = props.movies.map(movie => (
    <FavMovie
      key={movie.imdbID}
      movie={movie}
    />
  ));
    return (
    <div>
      <h1>Movies Collection</h1>
      {titles}
    </div>
  );
  }
}

ReactDOM.render(
  <App loading={true}/>,
  document.getElementById('root')
);

fetch('http://www.omdbapi.com/?s=Blade%20Runner&plot=short&r=json')
  .then(res => res.json()) // transforms data into json
  .then(json => {
    console.log(json);
    const movies = json.Search; // array of movies
    ReactDOM.render(
      <App movies={movies} loading={false}/>,
      document.getElementById('root')
      );
  });
