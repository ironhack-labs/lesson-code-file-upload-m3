// src/services/file-upload.service.js

import axios from "axios";

const service = axios.create({
  // make sure you use PORT = 5005 (the port where our server is running)
  baseURL: "http://localhost:5005/api",
  // withCredentials: true // => you might need this when having the users in the app
});

const errorHandler = (err) => {
  throw err;
};

const getMovies = () => {
  return service
    .get("/movies")
    .then((res) => res.data)
    .catch(errorHandler);
};

const uploadImage = (file) => {
  return service
    .post("/upload", file)
    .then((res) => res.data)
    .catch(errorHandler);
};

const createMovie = (newMovie) => {
  console.log("new movie in service: ", newMovie);
  return service
    .post("/movies", newMovie)
    .then((res) => res.data)
    .catch(errorHandler);
};

export default {
  service,
  getMovies,
  uploadImage,
  createMovie,
};
