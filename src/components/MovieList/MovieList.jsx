import { Link } from "react-router-dom"

const MovieList = ({ movie }) =>
    <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
               
       
export default MovieList