class MoviesApi {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  getMovies() {
    return fetch(`${this.baseUrl}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then(this._checkResponse.bind(this));
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res);
  }
}

const baseUrl = "https://api.nomoreparties.co/beatfilm-movies";

const moviesApi = new MoviesApi(baseUrl);
export default moviesApi;
