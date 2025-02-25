const { fetchDataFromTMDB } = require("../services/tmdb.service");
const { okResponse } = require("../utils/handlerErrors.util");

const getTrendingMovies = async (req, res, next) => {
  try {
    const data = await fetchDataFromTMDB(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US"
    );
    const randomMovie =
      data.results[Math.floor(Math.random() * data.results?.length)];
    okResponse(res, 200, "fetch Get Trending Movies successfully", {
      content: randomMovie,
    });
  } catch (error) {
    console.error(`error in get Trending Movie :: ${error}`);
  }
};

module.exports = { getTrendingMovies };
