import { useEffect,useState } from "react"
import { Outlet, Link, useParams } from "react-router-dom"
import { fetchMovies } from "../../movies-api"
import css from './MovieDetailsPage.module.css'

const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [movie, setMovie] = useState({});

    useEffect(() => {
        async function fetchMoviesData() {            
            try {
                setIsLoading(true);
                const result = await fetchMovies({ fetchType: `movie/${movieId}` });
                setMovie(result);               
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchMoviesData();
    }, []);
   

    return (
        <>
            <button>Go back</button>
            {isLoading && <p>Loading...</p>}
            <div className={css.container}>
                <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt=""/>
                <div className={css.wrapper}>
                    <h1 className={css.title}>{movie.title}</h1>
                    <p>{`User Score: ${movie.vote_average}`}</p>
                    <div className={css.overview}>
                        <p className={css.overviewtitle}>Overview</p>
                        <p className={css.overviewtext}>{movie.overview}</p>
                    </div>
                    <div className={css.genres}>
                        <p className={css.genrestitle}>Genres</p>
                        <p>{movie.genres && movie.genres.map(genre => genre.name).join(', ')}</p>
                    </div>       
                </div>
                 
            </div>
            <hr/>
            <div className={css.info}>                 
                <p>Additional information</p>
                <ul>
                    <li><Link to="cast">Cast</Link></li>
                    <li><Link to="reviews">Reviews</Link></li>
                </ul>
            </div>
            <hr/>
                <Outlet/>              
        </>)
    
}

export default MovieDetailsPage
