import css from './SearchForm.module.css'


const SearchForm = ({ onSearchHandler }) => {
   return(
       <form onSubmit={onSearchHandler} className={css.SearchBarform}>
            <input
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search movies"
              name='searchInput'
              className={css.SearchBarInput}
            />
            <button type="submit" className={css.SearchBarBtn}>Search</button>
        </form>)
}

export default SearchForm