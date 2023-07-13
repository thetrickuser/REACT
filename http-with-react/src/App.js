import React, { useEffect, useState } from "react";

import MoviesList from "./components/MoviesList";
import AddMovie from "./components/AddMovie";
import "./App.css";
import useHttp from "./hooks/use-http";

const firebaseUrl =
  "https://react-http-c3d55-default-rtdb.firebaseio.com/movies.json";

function App() {
  const [moviesData, setMoviesData] = useState([]);
  const httpResponseData = useHttp();

  const { isLoading, error, sendRequest: fetchMoviesData } = httpResponseData;

  const addMovieHandler = async (movie) => {
    fetchMoviesData(
      {
        url: firebaseUrl,
        method: "POST",
        body: movie,
        headers: {
          "Content-Type": "application/json",
        },
      },
      () => {}
    );
  };

  const fetchMovieHandler = () => {
    const transformData = (data) => {
      const transformedMoviesData = [];
      Object.keys(data).forEach((key) => {
        transformedMoviesData.push({
          id: key,
          title: data[key].title,
          releaseDate: data[key].releaseDate,
          openingText: data[key].openingText,
        });
      });
      setMoviesData(transformedMoviesData);
    };

    fetchMoviesData({ url: firebaseUrl }, transformData);
  };

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && moviesData.length > 0 && (
          <MoviesList movies={moviesData} />
        )}
        {!isLoading && moviesData.length === 0 && (
          <p>Click the button above to load movies!</p>
        )}
        {!isLoading && error && <p>{error}</p>}
        {isLoading && <p>Loading movies data...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
