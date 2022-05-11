
const throttle = (func, delay) => {
  let timeout = null;
  return function(...args) {
    if (!timeout) {
      timeout = setTimeout(() => {
        func.call(this, ...args);
        timeout = null;
      }, delay);
    }
  }
}

const movieDuration = duration =>
  `${Math.trunc(duration / 60) > 0 ? `${Math.trunc(duration / 60)}ч` : ''} ${duration % 60}м`;

const MAX_INNER_WIDTH = 1280;
const MIDDLE_INNER_WIDTH = 768;
const MIN_INNER_WIDTH = 420;

const MAX_MOVIES = 12;
const MORE_MAX_MOVIES = 4;

const MIDDLE_MOVIES = 9;
const MORE_MIDDLE_MOVIES = 3;

const MIDDLESMALL_MOVIES = 8;
const MORE_MIDDLESMALL_MOVIES = 2;

const MIN_MOVIES = 6;
const MORE_MIN_MOVIES = 2;

const SHORT_FILM = 40;

export {
  throttle, movieDuration, MAX_INNER_WIDTH,
  MIDDLE_INNER_WIDTH, MIN_INNER_WIDTH, MAX_MOVIES,
  MORE_MAX_MOVIES, MIDDLE_MOVIES, MORE_MIDDLE_MOVIES, MIDDLESMALL_MOVIES, MORE_MIDDLESMALL_MOVIES,
  MIN_MOVIES, MORE_MIN_MOVIES, SHORT_FILM
};