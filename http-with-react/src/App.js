import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie'
import './App.css';

const firebaseUrl = 'https://react-http-c3d55-default-rtdb.firebaseio.com/movies.json';

function App() {
  const [moviesData, setMovieData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = async () => {
    setIsLoading(true);
    setError(null)
    try {
      const response = await fetch(firebaseUrl);
      if (!response.ok) {
        throw new Error('Something went wrong');
      }
      const data = await response.json();
      console.log(data)
      // const transformedMoviesData = data.results.map(result => {
      //   return {
      //     id: result.episode_id,
      //     title: result.title,
      //     releaseDate: result.release_date,
      //     openingText: result.opening_crawl
      //   }
      // })
      // setMovieData(transformedMoviesData)
      const transformedMoviesData = [];
      Object.keys(data).forEach(key => {
        transformedMoviesData.push({
          id: key,
          title: data[key].title,
          releaseDate: data[key].releaseDate,
          openingText: data[key].openingText
        })
      })
      setMovieData(transformedMoviesData)
    } catch(err) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }    
  }

  const addMovieHandler = async (movie) => {
    try {
      const response = await fetch(firebaseUrl, {
        method: 'POST',
        body: JSON.stringify(movie),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await response.json();
      console.log(data)
    } catch(err) {
      console.log(err.message)
    }
  }

  return (
    <React.Fragment>
      <section>

      <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        
        { !isLoading && moviesData.length > 0 && <MoviesList movies={moviesData}/> }
        { !isLoading && moviesData.length === 0 && <p>Click the button above to load movies!</p> }
        { !isLoading && error && <p>{error}</p>}
        { isLoading && <p>Loading movies data...</p> }
      </section>
    </React.Fragment>
  );
}

export default App;
