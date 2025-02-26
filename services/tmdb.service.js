const { TMDB_API_KEY } = require("../configs/config");
const axios = require("axios");
const { AppError } = require("../customErrors");

const fetchDataFromTMDB = async (url) => {
  try {
    const options = {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${TMDB_API_KEY}`,
      },
      timeout: 20000,
    };
    const response = await axios.get(url, options);
    console.log("response Status:: ", response.status);
    if (response.status !== 200) {
      throw new AppError("Failed to fetch data from TMDB", response);
    }

    return response.data;
  } catch (error) {
    if (error.code === "ECONNABORTED") {
      console.error(
        "Request timeout occurred. Increase the timeout or check your connection."
      );
    }else{
    console.error(`error in fetch Api ${error.message} `);
    throw error;
    }}
};
module.exports = { fetchDataFromTMDB };
