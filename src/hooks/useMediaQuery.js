import { useEffect, useState } from "react";
import {
  throttle, MAX_INNER_WIDTH, MIDDLE_INNER_WIDTH,
  MIN_INNER_WIDTH, MAX_MOVIES, MORE_MAX_MOVIES,
  MIDDLE_MOVIES, MORE_MIDDLE_MOVIES, MIDDLESMALL_MOVIES, MORE_MIDDLESMALL_MOVIES, MIN_MOVIES,
  MORE_MIN_MOVIES
} from '../constants/config';

const useMediaQuery = () => {
  const [displayMovies, setDisplayMovies] = useState(null);
  const [moreDisplayMovies, setMoreDisplayMovies] = useState(null);

  const callback = throttle(() => {
    if (window.innerWidth >= MAX_INNER_WIDTH) {
      setDisplayMovies(MAX_MOVIES);
      setMoreDisplayMovies(MORE_MAX_MOVIES);
    } else if (window.innerWidth >= MIDDLE_INNER_WIDTH) {
      setDisplayMovies(MIDDLE_MOVIES);
      setMoreDisplayMovies(MORE_MIDDLE_MOVIES);
    } else if (window.innerWidth < MIDDLE_INNER_WIDTH) {
      setDisplayMovies(MIDDLESMALL_MOVIES);
      setMoreDisplayMovies(MORE_MIDDLESMALL_MOVIES);
    } else if (window.innerWidth <= MIN_INNER_WIDTH) {
      setDisplayMovies(MIN_MOVIES);
      setMoreDisplayMovies(MORE_MIN_MOVIES);
    }
  }, 1000)

  useEffect(() => {
    window.addEventListener('resize', callback);

    return () =>
      window.removeEventListener('resize', callback);
  }, [callback]);

  return { displayMovies, moreDisplayMovies, setDisplayMovies, callback }
}

export default useMediaQuery;