import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const slideDivRef = useRef();
  const [movieGenre, setMovieGenre] = useState({ results: [] });
  const effectRan = useRef(false);

  useEffect(() => {
    if(effectRan.current === true) {
      axios.get(url).then((result) => {
        setMovieGenre(result.data)
      })
    }
    return () => {
      effectRan.current = true
    }
  }, [url])
  return { slideDivRef, movieGenre }
}

export default useFetch;