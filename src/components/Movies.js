import { v4 as uuid_v4 } from "uuid";
import {useState, useEffect} from 'react';
import axios from 'axios';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';


const Movies = () => {
    const [movieGenre, setMovieGenre] = useState({ results: [] });    
    const endpoint = "https://api.themoviedb.org/3/discover/movie?api_key=da2a6281e8d054013075e6e69b3c082c&with_genres=12&append_to_response=images&include_image_language=en,null";

    useEffect(() => {
        async function fetchData() {
            const result = await axios(endpoint);
            console.log(result.data);
            setMovieGenre(result.data)
        }
        fetchData();
    }, [endpoint])

    return ( 
        <div className="movie-grid">
            <Splide options={ {
					rewind : true,
					perPage: 5,
					perMove: 1,
					gap    : '1rem',
					pagination: false,
                    speed: 1500,
                    breakpoints: {
                        1280: {
                            perPage: 4
                        },
                        980: {
                            perPage: 3
                        },
                        768: {
                            perPage: 2
                        },
                        640: {
                            perPage: 1
                        }
                    }
				} }>
				{movieGenre.results.map(result => (
					<SplideSlide key={uuid_v4()}>
						<div className="results-grid-child" key={uuid_v4()}>
							<img src={`https://image.tmdb.org/t/p/w500/${result.backdrop_path}`} alt={result.title} width="368" height="207" />
							<h2>{result.title}</h2>
                            <span>{result.overview}</span>
						</div>
					</SplideSlide>
				))}
			</Splide>
        </div>
     );
}
 
export default Movies;
