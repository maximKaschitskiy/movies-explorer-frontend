import { SHORT_FILM } from "../constants/config";

export const handleFilter = (moviesList, value) => {
  let result = [];
  moviesList.forEach(movie => {
    if (movie.nameRU.toLowerCase().includes(value.toLowerCase()))
      result.push(movie);
  });
  return result;
}

export const handleDurationFilter = moviesList => {
  let result = [];
  moviesList.forEach(movie => {
    if (movie.duration <= SHORT_FILM)
      result.push(movie);
  });
  return result;
}

export const handleIdFilter = (moviesList, id) => {
  return moviesList.filter(movie =>
    movie._id !== id
  );
}

export const handleMediaFilter = (moviesList, visibleMovies) => {
  return moviesList.slice(0, visibleMovies);
}