const { fetchDataFromTMDB } = require("../services/tmdb.service");
const { okResponse } = require("../utils/handlerErrors.util");

const getTrendingTV = async (req, res, next) => {
  try {
    const data = await fetchDataFromTMDB(
      "https://api.themoviedb.org/3/trending/tv/day?language=en-US"
    );
    const randomTV =
      data.results[Math.floor(Math.random() * data.results?.length)];
    okResponse(res, 200, "fetch Get Trending Tv successfully",randomTV);
  } catch (error) {
    console.error(`error in get Trending Tv :: ${error}`);
    next(error)
  }
};

const getTvTrailer = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await fetchDataFromTMDB(
      `https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`
    );
    okResponse(res, 200, "fetch Tv trailer successfully ", data);
  } catch (error) {
    console.error(`error in get Tv trailer  :: ${error}`);
    next(error);
  }
};

const getTvDetails = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await fetchDataFromTMDB(
      `https://api.themoviedb.org/3/tv/${id}?language=en-US`
    );
    okResponse(res, 200, "fetch Tv details successfully ", data);
  } catch (error) {
    console.error(`error in get Tv details :: ${error}`);
    next(error);
  }
};

const getSimilarTv = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await fetchDataFromTMDB(
      `https://api.themoviedb.org/3/tv/${id}/similar?language=en-US&page=1`
    );
    okResponse(res, 200, "fetch Tvdetails successfully ", data);
  } catch (error) {
    console.error(`error in get similar Tv :: ${error}`);
    next(error);
  }
};

const getPopularTv = async (req, res, next) => {
  try {
    const { category } = req.params;
    const data = await fetchDataFromTMDB(
      `https://api.themoviedb.org/3/tv/${category}?language=en-US&page=2`
    );
    okResponse(res, 200, "fetch popular Tv successfully ", data);
  } catch (error) {
    console.error(`error in get popular Tv :: ${error}`);
    next(error);
  }
};
module.exports = {
  getPopularTv,
  getSimilarTv,
  getTvDetails,
  getTvTrailer,
  getTrendingTV,
};
