const { BadRequestError } = require("../customErrors");
const { fetchDataFromTMDB } = require("../services/tmdb.service");
const { okResponse } = require("../utils/handlerErrors.util");
const { User } = require("../model/index");

const searchPerson = async (req, res, next) => {
  try {
    const { query } = req.params;
    const response = await fetchDataFromTMDB(
      `https://api.themoviedb.org/3/search/person?query=${query}&include_adult=false&language=en-US&page=1`
    );

    if (response.results.length === 0) {
      throw new BadRequestError("no result found");
    }
    await User.findByIdAndUpdate(
      req.user?.id,
      {
        $push: {
          searchHistory: {
            id: response.results[0].id,
            image: response.results[0].profile_path,
            title: response.results[0].name,
            searchType: "person",
            created: new Date(),
          },
        },
      },

      { new: true }
    );
    okResponse(res, 200, "fetch search Person successfully ", response);
  } catch (error) {
    console.error(`error in search person :; ${error}`);
    next(error);
  }
};
const searchMovie = async (req, res, next) => {
  try {
    const { query } = req.params;
    const response = await fetchDataFromTMDB(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`
    );

    if (response.results.length === 0) {
      throw new BadRequestError("no result found");
    }
    await User.findByIdAndUpdate(
      req.user?.id,
      {
        $push: {
          searchHistory: {
            id: response.results[0].id,
            image: response.results[0].poster_path,
            title: response.results[0].name,
            searchType: "Movie",
            created: new Date(),
          },
        },
      },

      { new: true }
    );
    okResponse(res, 200, "fetch search Movies successfully ", response);
  } catch (error) {
    console.error(`error in search Movie :; ${error}`);
    next(error);
  }
};
const searchTv = async (req, res, next) => {
  try {
    const { query } = req.params;
    const response = await fetchDataFromTMDB(
      `https://api.themoviedb.org/3/search/tv?query=${query}&include_adult=false&language=en-US&page=1`
    );

    if (!response || !response.results || response.results.length === 0) {
      throw new BadRequestError("no result found");
    }

    await User.findByIdAndUpdate(
      req.user?.id,
      {
        $push: {
          searchHistory: {
            id: response.results[0].id,
            image: response.results[0].poster_path,
            title: response.results[0].name,
            searchType: "Tv",
            created: new Date(),
          },
        },
      },

      { new: true }
    );
    okResponse(res, 200, "fetch search Movies successfully ", response);
  } catch (error) {
    console.error(`error in search Movie :; ${error}`);
    next(error);
  }
};

const getSearchHistory = async (req, res, next) => {
  try {
    
    okResponse(res, 200, "fetch get Search History  ", req.user?.searchHistory);
  } catch (error) {
    console.error(`error in get search history :: ${error}`);
    next(error);
  }
};

const deleteSearchHistory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const idNumber = Number(id);
    await User.findByIdAndUpdate(
      req.user?.id,
      {
        $pull: { searchHistory: { id: idNumber } },
      },
      { new: true }
    );
    okResponse(res, 200, "delete successfully !!");
  } catch (error) {
    console.error(`error in delete search history :: ${error}`);
    next(error);
  }
};
module.exports = {
  searchMovie,
  searchPerson,
  searchTv,
  deleteSearchHistory,
  getSearchHistory,
};
