import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchMovies } from "../../movies-api"
import css from './MovieCast.module.css'


const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";
  
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
            <ul className={css.cast}>
                {cast.map((actor) => (
                    <li key={actor.id} className={css.castItem}>
                        <img src={actor.profile_path ? `https://image.tmdb.org/t/p/w500${actor.profile_path}` : defaultImg} alt={actor.name} className={css.castImg} />
                        <p>{actor.name}</p>
                    </li>
                ))}
            </ul>
        </>
    )
        
    
}

export default MovieCast