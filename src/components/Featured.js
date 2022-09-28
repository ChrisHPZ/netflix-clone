import { v4 as uuid_v4 } from "uuid";
import { useState, useEffect, useRef } from 'react'
import axios from 'axios';

const Featured = () => {
  const [movieTrailers, setMovieTrailers] = useState([]);
  const trailerEffectRan = useRef(false);
  
  useEffect(() => {
    if(trailerEffectRan.current === true) {
      axios.get("/data/trailers.json").then((res) => {
        // console.log(res.data)
        setMovieTrailers(res.data)
      })
    }
    return () => {
      trailerEffectRan.current = true
    }
  }, [])  
  return (
    <div className="movie-trailers">
      {movieTrailers.map(res => (
        <div key={uuid_v4()}>
          <p>{res.name}</p>
          <p>{res.year}</p>
          <div className="iframe-container"> 
            <iframe frameBorder="0" type="text/html" src={`https://www.dailymotion.com/embed/video/${res.trailer}`} width="100%" height="100%" allowFullScreen>
            </iframe>
          </div>
        </div>
        ))}
    </div>
  )
}
export default Featured;