const { fetchDataFromTMDB } = require("../services/tmdb.service");
const { okResponse } = require("../utils/handlerErrors.util");

const getTrendingMovies = async (req, res, next) => {
  try {
    const data = await fetchDataFromTMDB(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US"
    );
    const randomMovie =
      data.results[Math.floor(Math.random() * data.results?.length)];
    okResponse(res, 200, "fetch Get Trending Movies successfully", randomMovie);
  } catch (error) {
    console.error(`error in get Trending Movie :: ${error}`);
    next(error)
  }
};

const getMovieTrailer = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await fetchDataFromTMDB(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`
    );
    okResponse(res, 200, "fetch movie trailer successfully ", data);
  } catch (error) {
    console.error(`error in get movie trailer  :: ${error}`);
    next(error);
  }
};

const getMovieDetails = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await fetchDataFromTMDB(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`
    );
    okResponse(res, 200, "fetch movie details successfully ", data);
  } catch (error) {
    console.error(`error in get movie details :: ${error}`);
    next(error);
  }
};

const getSimilarMovie = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await fetchDataFromTMDB(
      `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`
    );
    okResponse(res, 200, "fetch movie details successfully ", data);
  } catch (error) {
    console.error(`error in get similar movies :: ${error}`);
    next(error);
  }
};

const getPopularMovie = async (req, res, next) => {
  try {
    const { category } = req.params;
    const data = await fetchDataFromTMDB(
      `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=2`
    );
    okResponse(res, 200, "fetch popular movie successfully ", data);
  } catch (error) {
    console.error(`error in get popular movies :: ${error}`);
    next(error);
  }
};
module.exports = {
  getTrendingMovies,
  getMovieTrailer,
  getMovieDetails,
  getSimilarMovie,
  getPopularMovie,
};
