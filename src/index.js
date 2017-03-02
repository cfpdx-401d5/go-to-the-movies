import React from 'react';
import ReactDOM from 'react-dom';

import './main.css';





function App(props) {
  if (props.loading) {
    return (
  <div id='root'>
    <h1>Loading, loading, please wait while we load...</h1>
    <h1>Go To The Movies</h1></div>
    ) 
} else if (!props.loading){
  return (
    <div>
    <h1>Go To The Movies!</h1>
    <h2>Choose from this list of excellent options</h2>
    </div>
  )
}
}


function MovieShow(props){
  console.log('movies? ', props.movies);
  let html = props.movies.Search.map((movie, idx) => {
      return (<li key={idx}> {movie.Title} {movie.Year}</li>
      )
  })
  return(
    <div>
      <h1>Movies Movies Movies</h1>
    <p>Here's The Movie List</p>

    <ol class='list'>{html}</ol>
    </div>
  )
}

ReactDOM.render(
  <App loading={true} />,
  document.getElementById('root')
);


fetch('http://www.omdbapi.com/?s=Batman&plot=short&r=json')
 .then(res => res.json())
 .then(movies => {
      ReactDOM.render(
       <MovieShow movies={ movies } loading={false}/>,

       document.getElementById('root')
      )
 });