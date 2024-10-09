import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchMovies } from "../../movies-api"
import css from './MovieCast.module.css'


const MovieCast = () => {
    const { movieId } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [cast, setCast] = useState([]);

    useEffect(() => {
        if (!movieId) return;
        async function fetchMoviesData() {            
            try {
                setIsLoading(true)
                const result = await fetchMovies({ fetchType: `movie/${movieId}/credits` });
                setCast(result.cast);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchMoviesData();
    }, [movieId]);

    return (
        <>     
        {isLoading && <p>Loading...</p>}    
            <ul>
                {cast.map((actor) => (
                    <li key={actor.id} className={css.cast}>
                        <img src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt={actor.name} />
                        <p>{actor.name}</p>
                    </li>
                ))}
            </ul>
        </>
    )
        
    
}

export default MovieCast