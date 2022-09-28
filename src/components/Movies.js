import { v4 as uuid_v4 } from "uuid";
import { useState } from 'react';
import useFetch from './useFetch';
import { AiOutlineLike } from "react-icons/ai";

const Movies = () => {
  const mysteryEndpoint = "https://api.themoviedb.org/3/discover/movie?api_key=da2a6281e8d054013075e6e69b3c082c&with_genres=9648&append_to_response=images&include_image_language=en,null";
  const { slideDivRef, movieGenre } = useFetch(mysteryEndpoint);
  const [likeActive, setLikeActive] = useState(null);
  function overViewLimit (str, no_words) {
    return str.split(" ").splice(0,no_words).join(" ")
  }
  return ( 
    <div className="container container-grid" id="movies">
      {movieGenre.results.map(result => (
        <div className="slider" key={uuid_v4()} ref={slideDivRef} aria-label={result.title}>
          <div className="actions">
            <AiOutlineLike 
              onClick={() => setLikeActive(result)}
              className={`like ${likeActive === result && 'active'}`}
            />
          </div>
          <div className="overview">
            <img src={`https://image.tmdb.org/t/p/w500/${result.backdrop_path}`} alt={result.title} />
          </div>
          <div className="content">
            <span>Title: {result.title}</span>
            <span>Released: {result.release_date}</span>
            <span>Plot: {overViewLimit(result.overview, 10)}...</span>
          </div>
        </div>
      ))}
    </div>
  );
}
 
export default Movies;