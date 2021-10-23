const apiEndpoint = 'https://rancid-tomatillos.herokuapp.com/api/v2'

const checkResponse = (response) => {
  if (response.statusCode === 500) {
    throw new Error("Error 500 - Server Error. Please try refreshing page.")
  }
  return response.json()
}

function loadMovies() {
  return fetch(`${apiEndpoint}/movies`)
    .then(response => checkResponse(response))
}

function loadSingleMovie(id) {
  return fetch(`${apiEndpoint}/movies/${id}`)
    .then(response => checkResponse(response))
}

function loadSingleMovieVideo(props) {
  return fetch(`${apiEndpoint}/movies/${props.id}/videos`)
    .then(response => checkResponse(response))
}

function loginUser(props) {
  return fetch(`${apiEndpoint}/login`)
    .then(response => checkResponse(response))
}

export {
  loadMovies,
  loadSingleMovie,
  loadSingleMovieVideo,
  loginUser,
}
