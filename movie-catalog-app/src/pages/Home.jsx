import { useEffect, useState } from 'react';

import SearchIcon from '../search.svg';
import Movie from '../components/Movie';

const API_URL = 'https://www.omdbapi.com/?i=tt3896198&apikey=ed9c074c';

const Home = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [inputValue, setInputValue] = useState('');
  
    const searchMovies = async (title) => {
      const response = await fetch(`${API_URL}&s=${title}&plot=full`);
      const data = await response.json();
  
      setMovies(data.Search);
      console.log(data.Search);
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            searchMovies(searchTerm);
        }
    };
  
    useEffect(() => {
      searchMovies("Spider-Man");
    }, []);

    return <div>
        <h1>Movie Catalog</h1>

        <div className="search">
            <input placeholder="Search for movies" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} onKeyDown={handleKeyDown} />
            <img src={ SearchIcon } alt="Search" onClick={() => searchMovies(searchTerm)}/>
        </div>

        <div className="container">

        {
            movies && movies.length > 0 ? (
            <>
                { movies.map((movie) => (
                <Movie movie={movie}/>
                )) }
            </>
            ) : (
            <div className="empty">
                <h2>No movies found</h2>
            </div>
            )
        }
        
        </div>
    </div>;
};

export default Home;