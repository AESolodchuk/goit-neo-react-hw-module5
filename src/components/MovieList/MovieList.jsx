import { Link } from "react-router-dom"
import css from './MovieList.module.css'

const MovieList = ({ movie, location }) => 
    
        <Link to={`/movies/${movie.id}`} className={css.link} state={location}>{movie.title}</Link>

               
       
export default MovieList