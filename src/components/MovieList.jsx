import React, { useState } from 'react';
import './MovieList.css';

function MoviesList() {
    const [showMovies, setShowMovies] = useState(false);
    const [movies, setMovies] = useState([
        {
            title: "Holes",
            genre: "Adventure",
            description: "Description: A boy is wrongfully sent to a brutal camp, where the camp warden and her staff force the children in their care to mysteriously dig holes all day long in the desert. Their rehabilitation is questioned, as they think something sinister is involved..",
            showDetails: false,
            image: "https://lumiere-a.akamaihd.net/v1/images/p_holes_19755_8f3e1618.jpeg?region=0%2C0%2C540%2C810?w=1920&h=1080"
        },
        { 
            title: "The Last: Naruto the Movie",
            genre: "Action",
            description: "Description: Two years after the Fourth Shinobi World War, Naruto must stop Toneri Otsutsuki, a descendant of Hamura Otsutsuki, after Toneri causes the moon to descend toward Earth..",
            showDetails: false,
            image: "https://m.media-amazon.com/images/M/MV5BMjk1NzA4Njg4Ml5BMl5BanBnXkFtZTgwMDgxODQ5MzE@._V1_FMjpg_UX1000_.jpg?w=1920&h=1080" 
        },
        { 
            title: "Forest Gump", 
            genre: "Comedy", 
            description: "Description: Slow-witted Forrest Gump (Tom Hanks) has never thought of himself as disadvantaged, and thanks to his supportive mother (Sally Field), he leads anything but a restricted life. Whether dominating on the gridiron as a college football star, fighting in Vietnam or captaining a shrimp boat, Forrest inspires people with his childlike optimism. But one person Forrest cares about most may be the most difficult to save -- his childhood love, the sweet but troubled Jenny (Robin Wright)..",
            showDetails: false, 
            image: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg"
        },
        { 
            title: "The Sixth Sense", 
            genre: "Horror", 
            description: "Description: Young Cole Sear (Haley Joel Osment) is haunted by a dark secret: he is visited by ghosts. Cole is frightened by visitations from those with unresolved problems who appear from the shadows. He is too afraid to tell anyone about his anguish, except child psychologist Dr. Malcolm Crowe (Bruce Willis). As Dr. Crowe tries to uncover the truth about Cole's supernatural abilities, the consequences for client and therapist are a jolt that awakens them both to something unexplainable..",
            showDetails: false, 
            image: "https://m.media-amazon.com/images/I/71+c+IrYfHL._AC_UF894,1000_QL80_.jpg"
        },
        { 
            title: "Smosh: The Movie", 
            genre: "Comedy", 
            description: "Description: Smosh duo Ian and Anthony must remove an embarrassing online video before it ruins Anthony's chances with his high-school crush..",
            showDetails: false,
            image: "https://resizing.flixster.com/gn5hoRwKGjcaEzAXNEJAUhV97QE=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p11398489_v_h10_aa.jpg"
        }
    ]);

    const [selectedMovie, setSelectedMovie] = useState(null);
    const [filter, setFilter] = useState("All");
    
    function toggleFilter() {
        setFilter(prevFilter => (prevFilter === "All" ? "Comedy" : "All"));
    }
    

    
    function handleMovieChange(event) {
        const selectedTitle = event.target.value;
        const movie = movies.find(film => film.title === selectedTitle);
        setSelectedMovie(movie);
    };

  
    function toggleDetails(index) {
        const newMovies = [...movies];
        newMovies[index].showDetails = !newMovies[index].showDetails;
        setMovies(newMovies);
    };



const filteredMovies = filter === "All" ? movies : movies.filter(movie => movie.genre === "Comedy");

function removeMovie(index) {
    const newMovies = movies.filter((element, i) => i !== index);
    setSelectedMovie(null); 
    setMovies(newMovies);
}


return (
    <div>
        <h1 className="menu-title">Pick a Movie:</h1>
        <button onClick={toggleFilter}>
            {filter === "All" ? "Show Only Comedies" : "Show All Movies"}
        </button>
        <select onChange={handleMovieChange}>
            <option value="">Select a Movie</option>
            {filteredMovies.map((movie, index) => (
                <option key={index} value={movie.title}>{movie.title}</option>
            ))}
        </select>

        {selectedMovie && (
            <div className="card" id="show-movie">
                <h2 className="card-title">{selectedMovie.title}</h2>
                <img src={selectedMovie.image} alt={selectedMovie.title} className="card-image"/>
                <p className="card-genre"><strong>Genre:</strong> {selectedMovie.genre}</p>
                <button className="card-button" onClick={() => toggleDetails(movies.indexOf(selectedMovie))}>
                    {selectedMovie.showDetails ? 'Hide Details' : 'Show Details'}
                </button>
                <button className="card-button" onClick={() => removeMovie(movies.indexOf(selectedMovie))}>Remove</button>
                {selectedMovie.showDetails && <p className="card-description">{selectedMovie.description}</p>}
            </div>
        )}
    </div>
);
}

export default MoviesList;
