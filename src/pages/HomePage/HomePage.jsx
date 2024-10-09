//#region Common import
import { useEffect, useState } from 'react'
import { fetchMovies } from '../../movies-api'
//#endregion Common import


//#region Components
import MovieList from '../../components/MovieList/MovieList'
//#endregion Components


//#region HomePage
const HomePage = () => { 
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchMoviesData() {
    try {
      setIsLoading(true);
      const result = await fetchMovies();     
      setMovies(result.results);
    } catch (error) {
      console.log(error);
    }
    finally {
      setIsLoading(false);
      }
  }
  fetchMoviesData();
  }, []);


  return (
    <>
      <h1>Trending today</h1>
      {isLoading && <p>Loading...</p>}
      <ul>
        {movies.map((movie) => (
            <li key={movie.id}>
                <MovieList movie={movie} />
            </li>           
        ))}
      </ul>
    </>
  )
}
//#endregion HomePage

export default HomePage
