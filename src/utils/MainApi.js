class MainApi {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  getSavedMovies() {
    return fetch(`${this.baseUrl}/movies`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this._getJwt()}`,
        "Access-Control-Allow-Credentials": "true",
      },
    }).then(this._checkResponse.bind(this));
  }

  register(values) {
    return fetch(`${this.baseUrl}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": "true",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: values.email,
        name: values.name,
        password: values.password,
      }),
    }).then(this._checkResponse.bind(this));
  }

  auth(values) {
    return fetch(`${this.baseUrl}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": "true",
        Accept: "application/json",
      },
      body: JSON.stringify({
        password: values.password,
        email: values.email,
      }),
    }).then(this._checkResponse.bind(this));
  }

  validation(values) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${values}`,
        "Access-Control-Allow-Credentials": "true",
        Accept: "application/json",
      },
    }).then(this._checkResponse.bind(this));
  }

  getUserInfo() {
    return fetch(`${this.baseUrl}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Credentials": "true",
        Authorization: `Bearer ${this._getJwt()}`,
      },
    }).then(this._checkResponse.bind(this));
  }

  setUserInfo(values) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Credentials": "true",
        Authorization: `Bearer ${this._getJwt()}`,
      },
      body: JSON.stringify({
        email: values.email,
        name: values.name,
      }),
    }).then(this._checkResponse.bind(this));
  }

  addSavedMovie(values) {
    return fetch(`${this.baseUrl}/movies`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Credentials": "true",
        Authorization: `Bearer ${this._getJwt()}`,
      },
      body: JSON.stringify({
        country: values.country,
        director: values.director,
        duration: values.duration,
        year: values.year,
        description: values.description,
        image: values.image,
        trailerLink: values.trailerLink,
        nameRU: values.nameRU,
        nameEN: values.nameEN,
        thumbnail: values.thumbnail,
        movieId: values.movieId,
      }),
    }).then(this._checkResponse.bind(this));
  }

  deleteSavedMovie(values) {
    return fetch(`${this.baseUrl}/movies/${values}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Credentials": "true",
        Authorization: `Bearer ${this._getJwt()}`,
      }
    }).then(this._checkResponse.bind(this));
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res);
  }

  _getJwt() {
    return localStorage.jwt;
  }
}

const baseUrl = "http://localhost:3001";
//const baseUrl = "https://api.myfilmsdb.cf";

const mainApi = new MainApi(baseUrl);
export default mainApi;