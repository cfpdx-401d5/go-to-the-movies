import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


ReactDOM.render(
  <App movies={[]} loading={true} />,
  document.getElementById('root')
)

fetch('http://www.omdbapi.com/?s=Back+To+The+Future&plot=short&r=json&type=movie')
  .then(res => res.json())
  .then(movies => 
    ReactDOM.render(
      <App movies={movies} loading={false} />,
      document.getElementById('root')
  )
)

function App(props) {
  if (props.loading) return <p>Loading movies!</p>;
  const allMovies=props.movies.Search.map(movie => (
        <List
          movie={movie}
          key={movie.imdbID}
        />
    )
  )

    return (
      <table className='no-spacing'>
        <tbody>
          <tr>
            <th className='poster'>Poster</th>
            <th className='title'>Title</th>
            <th className='year'>Year</th>
          </tr>
          {allMovies}
        </tbody>
      </table>
    )
  }

function List(props) {
  return (
    <tr>
      <td><img alt='moviePoster' src={props.movie.Poster} /></td>
      <td className='titleYo'>{props.movie.Title}</td>
      <td>{props.movie.Year}</td>
    </tr>
  )
}
