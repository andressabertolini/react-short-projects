import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MoviePage = () => {
    const { id } = useParams();
    const Movie_API = `https://www.omdbapi.com/?i=${id}&apikey=ed9c074c`;
    const [MovieData, setMovieData] = useState({});

    const getMovieByID = () => {
        fetch(Movie_API)
            .then(res => res.json())
            .then(data => {
                setMovieData(data)
            })
    }

    useEffect(() => {
        getMovieByID();
    },[]);

    return <div className="movie-page">
        <h1>{MovieData.Title}</h1>
        <div className="movie-info">
            <img src={MovieData.Poster} alt={MovieData.Title}/>   
            <div>
                <h4>{MovieData.Plot}</h4>
                <p><strong>Actors: </strong>{MovieData.Actors}</p>
                <p><strong>Awards: </strong>{MovieData.Awards}</p>
                <p><strong>Director: </strong>{MovieData.Director}</p>
                <p><strong>Genre: </strong>{MovieData.Genre}</p>
                <p><strong>Released: </strong>{MovieData.Released}</p>
                <p><strong></strong></p>
            </div>
        </div>
    </div>;
};

export default MoviePage;