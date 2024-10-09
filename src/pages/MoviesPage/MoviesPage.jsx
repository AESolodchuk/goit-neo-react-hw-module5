import { useSearchParams } from "react-router-dom"
import { useEffect,useState } from "react"
import { fetchMovies } from "../../movies-api"
import css from './MoviesPage.module.css'
import MovieList from '../../components/MovieList/MovieList'
import SearchForm from '../../components/SearchForm/SearchForm'

const MoviesPage = () => { 
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();   

  useEffect(() => {
    async function fetchMoviesData() {
      try {
        setIsLoading(true);        
        const result = await fetchMovies({fetchType: 'search/movie', params: {query: searchParams.get('query')}});
        setMovies(result.results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMoviesData();
  }, [searchParams]);

  const onSearchHandler = (event) => {
    event.preventDefault()   
    const searchInput = event.target.elements.searchInput.value.trim()    
    if (!searchInput) {
      return   }       
    setSearchParams({query:searchInput})
    event.target.reset()
  }

    return (
      <>
        <button>Go back</button>
         <header className={css.SearchBar}>
           <SearchForm onSearchHandler={onSearchHandler} />
        </header>
        <hr />
        {isLoading && <p>Loading...</p>}
          <ul>
            {movies.map((movie) => (
              <li key={movie.id}>
                <MovieList movie={movie} />
              </li>           
        ))}
          </ul>      
      </>)
            
}

export default MoviesPage