const apiEndpoint = 'https://rancid-tomatillos.herokuapp.com/api/v2'

function loadMovies() {
  return fetch(`${apiEndpoint}/movies`)
    .then(response => response.json())
}

function loadSingleMovie(id) {
  return fetch(`${apiEndpoint}/movies/${id}`)
    .then(response => response.json())
    .then(data => data)
}

function loadSingleMovieVideo(props) {
  return fetch(`${apiEndpoint}/movies/${props.id}/videos`)
    .then(response => response.json())
}

function loginUser(props) {
  return fetch(`${apiEndpoint}/login`)
    .then(response => response.json())
}

function loadUserRatings(props) {
  return fetch(`${apiEndpoint}/users/${props.id}/ratings`)
    .then(response => response.json())
}

function submitNewUserRating(props) {
  return fetch(`${apiEndpoint}/users/${props.id}/ratings`, {
    method: 'POST',
    body: JSON.stringify({
      "movieID": props.id,
      "rating": props.average_rating,
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
}

export {
  loadMovies,
  loadSingleMovie,
  loadSingleMovieVideo,
  loginUser,
  loadUserRatings,
  submitNewUserRating
}
