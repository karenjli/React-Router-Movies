import React from 'react';
import {Link} from 'react-router-dom';

const MovieCard = props => {
  
   // const { title, director, metascore, stars } = movie;
  return (
    <Link to={`/movie/${props.movie.id}`}>
      <div className="movie-card">
        <h2>{props.movie.title}</h2>
        <div className="movie-director">
          Director: <em>{props.movie.director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{props.movie.metascore}</strong>
        </div>
        <h3>Actors</h3>

        
          <div className="movie-star">
            {props.movie.stars.map (star => <div key={star}> {star} </div>)}
           </div>
        
      </div>
    </Link>
  
  );
};

export default MovieCard;
