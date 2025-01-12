import placeholderImg from '../placeholder.png';
import { Link } from 'react-router-dom';

const Movie = ({movie}) => {
    return(
        <Link to={`/movie/${movie.imdbID}`}>
            <div className="movie">
                <div>
                    <p>{movie.Year}</p>
                </div>
                <div>
                    <img src={movie.Poster !== 'N/A' ? movie.Poster : placeholderImg } alt={movie.Title} />
                </div>
                <div>
                    <span>{movie.Type}</span>
                    <h3>{movie.Title}</h3>
                </div>
            </div>
        </Link>
    );
}

export default Movie;