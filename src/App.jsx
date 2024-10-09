//#region Common import
import { Route, Routes } from 'react-router-dom'
import './App.css'
//#endregion Common import

//#region Pages
import HomePage from './pages/HomePage/HomePage'
import MoviesPage from './pages/MoviesPage/MoviesPage'
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
//#endregion Pages

//#region Components
import Navigation from './components/Navigation/Navigation'
import MovieCast from './components/MovieCast/MovieCast'
import MovieReviews from './components/MovieReviews/MovieReviews'
//#endregion Components

//#region Application
function App() { 

//------------------------------------------------------------------
  return (
    <>
      <Navigation />
      <Routes>        
        <Route path="/" element={<HomePage/>}/>
        <Route path='/movies' element={<MoviesPage/>}/>
        <Route path='movies/:movieId' element={<MovieDetailsPage />}>
          <Route path='cast' element={<MovieCast />} />
          <Route path='reviews' element={<MovieReviews />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  )
}
//#endregion Application

export default App
